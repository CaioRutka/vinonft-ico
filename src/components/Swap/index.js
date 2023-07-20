import { useState, React, useEffect } from "react";
import { ethers } from "ethers";
import { Box, Button, Flex, Image, Center } from "@chakra-ui/react";
import { isMobile } from 'react-device-detect';
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import copy from "copy-to-clipboard";
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import '../../assets/fonts/Config-Regular.otf';
import './index.css';

import MyModal from "../Modal";
import Wines from "../../assets/images/vinhos-moeda@2x.png";
import VinocoinIcon from "../../assets/images/Moeda.png";
import BNBIcon from "../../assets/images/bnb.png";
import RealIcon from "../../assets/images/real.png";
import { invest, getInvestedAmount, gregGetInvestedAmount } from "../../utils/nftController";
import { ICOAddress, abiICO } from '../../utils/walletAddress';

const MySwal = withReactContent(Swal);

const alertContent = (failOrNot, message, selected_icon, time) => {
  MySwal.fire({
      title: failOrNot,
      text: message,
      icon: selected_icon,
      timer: time,
      timerProgressBar: true,
      showConfirmButton: false,
  })
}

const alertContentPix = (QrCode, pixCopiaECola, copyToClipboard) => {
  MySwal.fire({
    html: (
      <Flex justify = "center" align="center" display={"flex"} flexDirection={"column"}>
          <Box w={"100%"} textAlign={"center"} color={"#black"} fontFamily = "Montserrat" fontSize={25}>
            Sucesso!
          </Box>
          <Box w={"100%"} textAlign={"center"} color={"#black"} fontFamily = "Montserrat" fontSize={20}>
            Cobrança pix gerada com sucesso, aponte seu celular 
            para esse QRCode, realize o pagamento, e seus Vinocoins estarão garantidos!
          </Box>
          <Box w={300} h={300} bg='#a5a5a5' border='3px solid black' margin={"60px 10px 40px 10px"} sx={{ borderRadius: "3%" }} >
              <img 
                  src={QrCode}
                  alt="new"
                  style = {{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      minWidth: "100%",
                      minHeight: "100%",
                      borderRadius: "3%"
                  }}
              />
          </Box>
          <Button
              backgroundColor = "#A6013B"
              borderRadius = "8px"
              color = "white"
              fontFamily = "CloserText"
              fontSize={20}
              padding = "10px"
              margin = "15px"
              width={250}
              onClick = {copyToClipboard(pixCopiaECola)}
              zIndex={1}
          >      
              Copiar
          </Button>  

          <Button
              backgroundColor = "#A6013B"
              borderRadius = "8px"
              color = "white"
              fontFamily = "CloserText"
              fontSize={20}
              padding = "10px"
              margin = "15px"
              width={250}
              onClick={() => Swal.close()}
              zIndex={1}
          >      
              Close
          </Button>  
      </Flex>
    ),
    showConfirmButton: false
  })
}

const Swap = ({ accounts, setAccounts, handleClickScroll }) => {
    const isConnected = Boolean(accounts[0]);

    const [tokenAmount, setTokenAmount] = useState(0);
    const [BNBAmount, setBNBAmount] = useState(0);
    const [BNBPrice, setBNBPrice] = useState(0);
    
    const [walletAddress, setWalletAddress] = useState("");
    const [signer, setSigner] = useState(undefined);
    const [mobile, setMobile] = useState(true);
    const [bigMonitor, setBigMonitor] = useState(true);

    const [userInfo, setUserInfo] = useState([]);
    const [buyWithPix, setBuyWithPix] = useState(false);
    const [logged, setLogged] = useState(false);

    const [loadingPix, setLoadingPix] = useState(false);
    const [PixAmount, setPixAmount] = useState(0);
    const [dolarPrice, setDolarPrice] = useState(0);
    const [cpf, setCpf] = useState('');
    const [pixCopiaECola, setPixCopiaECola] = useState('');
    const [QrCode, setQrCode] = useState('');

    const [userInvestedAmount, setUserInvestedAmount] = useState(0);

    const { t } = useTranslation();
    const navigate = useNavigate();

    const copyToClipboard = (pixCopy) => {
      copy(pixCopy);
      alertContent(t('success'), t('successPixMessage'), "success", 4000);
   }

    const gerarCobrançaPix = async () => {
      if (userInfo.walletAddress !== null && userInfo.walletAddress !== "" && userInfo.walletAddress !== undefined && cpf !== null && cpf !== "" && userInfo.email !== null && userInfo.email !== ""){
        try {
          setLoadingPix(true);

          axios.get(`https://app.api-elvinos.link/gerarcobrancaico?cpf=${cpf}&tokenQuantity=${tokenAmount}&value=${PixAmount}&name=${userInfo.email}&walletAddress=${userInfo.walletAddress}`)
              .then((response) => {
                  if ( response.status === 201 ){
                      setPixCopiaECola(response.data.pixcec);
                      setQrCode(response.data.qrcodeImage);
                  }
              });
        } catch (err) {
          console.error(err.message);
        }
      } else if (walletAddress !== null && walletAddress !== "" && walletAddress !== undefined && cpf !== null && cpf !== ""){
        try {
          setLoadingPix(true);

          axios.get(`https://app.api-elvinos.link/gerarcobrancaico?cpf=${cpf}&tokenQuantity=${tokenAmount}&value=${PixAmount}&name=BlockchainUser&walletAddress=${walletAddress}`)
              .then((response) => {
                  if ( response.status === 201 ){
                      setPixCopiaECola(response.data.pixcec);
                      setQrCode(response.data.qrcodeImage);
                  }
              });
        } catch (err) {
          console.error(err.message);
        }
      } 
      else {
          alertContent(t('error'), t("pixErrorWarning"), "warning", 4000);
      }
  };
  
  useEffect (() => {
    if(pixCopiaECola  !== '' && pixCopiaECola != null) {
        setLoadingPix(false);
        alertContentPix(QrCode, pixCopiaECola, copyToClipboard)
    }        
}, [pixCopiaECola])

    const handleCpf = e => {
        const { value } = e.target;
        setCpf(value);
    }

    const handleTokenAmount = e => {
      const { value } = e.target;
      setTokenAmount(value);
    }

    useEffect(() => {
      var localUserInfo = JSON.parse(localStorage.getItem("userInfo"));

      if (localUserInfo != null && localUserInfo != undefined) {
        setUserInfo(localUserInfo);
        setLogged(true);
      }

      if (window !== undefined){
        if(window.innerWidth >= 575){
          setMobile(false);
        }

        if(window.innerWidth > 575 && window.innerWidth <= 1750){
          setBigMonitor(false);
        }

        axios.get(`https://api.coinpaprika.com/v1/price-converter?base_currency_id=bnb-binance-coin&quote_currency_id=usdt-tether&amount=1`)
        .then((response) => {
            if ( response.status === 200 ){
              setBNBPrice(response.data.price);
            }
        });
        
        axios.get(`https://economia.awesomeapi.com.br/last/USD-BRL`)
        .then((response) => {
            if ( response.status === 200 ){
              setDolarPrice(response.data.USDBRL.low * 1.05);
            }
        });
        }         
    }, [])

    const getUserInvestedAmount = async e => {
      try {
        if(signer !== null && signer !== undefined && signer !== NaN && signer !== ""){
          const amount = await getInvestedAmount(walletAddress, signer);
          setUserInvestedAmount(amount);
        }
      } catch (error) {
          console.log(error)
      }
    };

    const gregGetUserInvestedAmount = async e => {
      try {
        if(userInfo.length != 0 && userInfo.walletAddres != undefined) {
          const amount = await gregGetInvestedAmount(userInfo.walletAddress);
          setUserInvestedAmount(amount);
        }
      } catch (error) {
          console.log(error)
      }
    };    

    useEffect(() => {
      gregGetUserInvestedAmount();      
    }, [userInfo]);

    useEffect(() => {
      console.log(userInvestedAmount)  
    }, [userInvestedAmount]);

    useEffect(() => {
      getUserInvestedAmount();
    }, [signer]);
  
    useEffect(() => {
      getCurrentWalletConnected();
      addWalletListener();
      
      if ( walletAddress != "undefined" && walletAddress != "" && walletAddress !== null){ 
        var wsProvider = new ethers.WebSocketProvider("wss://greatest-white-lake.bsc.discover.quiknode.pro/371be6d22daa0bc1e2d04c2dd9bfa6916fc9b843/");
        const contractEl = new ethers.Contract(ICOAddress, abiICO, wsProvider);

        contractEl.on("Invest", async (from, to, amount, event) => {
          if ( to.toLowerCase() == walletAddress) {
            alertContent("Sucesso!", `Pagamento via crypto, seus ${amount} Vinocoins já estão garantidos!`, "success", 4000);
          }
        })

        return() => {
          contractEl.removeAllListeners();
        }
      } else if ( userInfo.walletAddress != "undefined" &&  userInfo.walletAddress != "" &&  userInfo.walletAddress !== null){
        var wsProvider = new ethers.WebSocketProvider("wss://greatest-white-lake.bsc.discover.quiknode.pro/371be6d22daa0bc1e2d04c2dd9bfa6916fc9b843/");
        const contractEl = new ethers.Contract(ICOAddress, abiICO, wsProvider);

        contractEl.on("Invest", async (from, to, amount, event) => {
          if ( to.toLowerCase() == userInfo.walletAddress) {            
            alertContent("Sucesso!", `Pagamento via pix recebido, seus ${amount} Vinocoins já estão garantidos!`, "success", 4000);
            window.location.reload();
          }
        })

        return() => {
          contractEl.removeAllListeners();
        }
      }
    }, [walletAddress]);

    useEffect(() => {
      setBNBAmount(0.25 * tokenAmount / BNBPrice);
      setPixAmount((dolarPrice * 0.25 * tokenAmount).toFixed(2));
    }, [tokenAmount])     
    
    useEffect(() => {
      console.log(PixAmount)
    }, [PixAmount])

    const connectMetamaskMobile = (walletID) => {
      if (walletID === 0){
        const META_URL = "https://metamask.app.link/dapp/";
        const dappUrl = window.location.href.split("//")[1].split("/")[0];
        const metamaskAppDeepLink = META_URL + dappUrl;
        window.open(metamaskAppDeepLink, "_self");
      } else if (walletID === 1){
        const TRUST_URL = "https://link.trustwallet.com/open_url?coin_id=20000714&url=https://";
        const dappUrl = window.location.href.split("//")[1].split("/")[0];
        const trustWalletdeepLink = `${TRUST_URL}${encodeURIComponent(dappUrl)}`;  
        window.open(trustWalletdeepLink, "_self"); 
      }
    };

    const connectWallet = async (walletID) => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setWalletAddress(accounts[0]);
          setAccounts(accounts);
          const provider = new ethers.BrowserProvider(window.ethereum);
          await provider.getSigner().then((s) => {setSigner(s);});
          
        } catch (err) {
          console.error(err.message);
        }
      } else if (!window.ethereum && isMobile) {
        connectMetamaskMobile(walletID);
      } else {
        /* MetaMask is not installed */
        console.log("Please install MetaMask");
      }
    };

    const getCurrentWalletConnected = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
          try {
            const accounts = await window.ethereum.request({
              method: "eth_accounts",
            });
            if (accounts.length > 0) {
                setWalletAddress(accounts[0]);
                const provider = new ethers.BrowserProvider(window.ethereum);
                await provider.getSigner().then((s) => {setSigner(s);});
            } else {
              console.log("Connect to MetaMask using the Connect button");
            }
          } catch (err) {
            console.error(err.message);
          }
        } else {
          /* MetaMask is not installed */
          console.log("Please install MetaMask");
        }
      };
    
      const addWalletListener = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
          window.ethereum.on("accountsChanged", async (accounts) => {
            setWalletAddress(accounts[0]);
            const provider = new ethers.BrowserProvider(window.ethereum);
            await provider.getSigner().then((s) => {setSigner(s);});
          });
        } else {
          /* MetaMask is not installed */
          setWalletAddress("");
          console.log("Please install MetaMask");
        }
      };

    async function Invest() {
        if (window.ethereum || isMobile) {
            await invest(tokenAmount, signer);
        } else {
        }
    }

    return (
        <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={1050}bg="rgba(0,0,0,0.2)">
          {
            mobile
            ?
            <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'85%'} h={1050}>
              <Box justify = "center" align="center">
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={40} w={"100%"} align={"center"} marginTop={20}> 
                  {t('wineUniverse')}
                </Box>     
                <Center display={"flex"} flexDirection={"column"} alignContent={"center"} justifyContent={"center"}>
                <Button
                     backgroundColor = "#A6013B"
                     borderRadius = "8px"
                     color = "white"
                     fontFamily = "Montserrat"
                     fontSize={20}
                     padding = "10px"
                     width={buyWithPix ? 280 : 250}
                     justifyContent={"space-between"}
                     marginTop={20}
                     marginBottom={40}
                     onClick = {() => { 
                      if (buyWithPix == true) {
                        setBuyWithPix(false);
                      } else {
                        setBuyWithPix(true);
                      }
                     }}
                     zIndex={1}
                >
                  {buyWithPix ? t('buyWithCrypto') : t('buyWithPix')}
                  <CurrencyDollarIcon className="ml-4 h-6 w-6 text-white-500" />
                </Button>
                </Center>

                <div>
                {
                  (logged === true || isConnected == true)
                  ?
                  <div> 
                    {
                buyWithPix
                ?
                <Center justify = "center" align="center" w = {300} h = {600} display={"flex"} flexDirection={"column"} borderRadius = {"5%"} borderWidth={10} borderColor={"#fff"} bg = {"white"}>
                  <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={25} w={"100%"} align={"center"} paddingBottom={5}> 
                    Vinocoin ICO Pix
                  </Box> 

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={5}> 
                    1 Vinocoin = 0.25 USDT
                  </Box> 

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={5}> 
                    Wallet: {logged ? `${userInfo.walletAddress.substring( 0, 6 )}...${userInfo.walletAddress.substring(38)}` : `${walletAddress.substring( 0, 6 )}...${walletAddress.substring(38)}`}
                  </Box>

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={25}> 
                    {t('boughtTokens')} {userInvestedAmount}
                  </Box>
                  
                  <Box display={"flex"} flexDirection={"row"} align={"start"} w = {250}> 
                    <Image src = {VinocoinIcon} boxSize='30px' objectFit='fit' marginRight={10}/>
                    <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={20}  w = {"100%"}> 
                      Vinocoin
                    </Box> 
                  </Box> 

                  <div style = {{paddingBottom: 15}}>
                      <input 
                          type="number"
                          name="amount"
                          placeholder="Amount" 
                          className="form-control" 
                          value={tokenAmount}
                          pattern="[0-9]*"
                          onChange={handleTokenAmount}
                          style = {{
                              height: "45px",
                              width: "250px",
                              fontFamily: "Montserrat",
                              borderRadius: "5px",
                              margin: 10,
                              textAlign: "center",
                              fontSize: 15,
                              color: "#A6013B",
                              borderColor: "#A6013B",
                              borderWidth: "2px",
                              zIndex:'1'
                          }}
                      />
                  </div>

                  <Center display={"flex"} flexDirection={"row"} align={"start"} w = {250}> 
                    <Image src = {RealIcon} boxSize='20px' objectFit='fit' marginRight={20}/>
                    <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={20}  w = {"100%"}> 
                      Reais
                    </Box> 
                  </Center> 

                  <div style = {{paddingBottom: 20}}>
                      <input 
                          type="number"
                          name="amount"
                          placeholder="Amount" 
                          className="form-control" 
                          value={buyWithPix ? PixAmount : BNBAmount}
                          readOnly
                          pattern="[0-9]*"
                          style = {{
                              height: "45px",
                              width: "250px",
                              fontFamily: "Montserrat",
                              borderRadius: "5px",
                              margin: 10,
                              textAlign: "center",
                              fontSize: 15,
                              color: "#A6013B",
                              borderColor: "#A6013B",
                              borderWidth: "2px",
                              zIndex:'1'
                          }}
                      />
                  </div>

                  <Center display={"flex"} flexDirection={"row"} align={"start"} w = {250}> 
                    <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={20}  w = {"100%"}> 
                      CPF
                    </Box> 
                  </Center> 

                  <div style = {{paddingBottom: 15}}>
                    <input 
                        type="number" 
                        name="cpf"
                        placeholder="CPF" 
                        className="form-control" 
                        pattern="[0-9]*"
                        value={cpf}
                        onChange={handleCpf}
                        style = {{
                          height: "45px",
                          width: "250px",
                          fontFamily: "Montserrat",
                          borderRadius: "5px",
                          margin: 10,
                          textAlign: "center",
                          fontSize: 15,
                          color: "#A6013B",
                          borderColor: "#A6013B",
                          borderWidth: "2px",
                          zIndex:'1'
                        }}
                    />
                </div>

                  <Button
                       backgroundColor = "#A6013B"
                       borderRadius = "8px"
                       color = "white"
                       fontFamily = "Montserrat"
                       fontSize={20}
                       padding = "10px"
                       width={250}
                       onClick = {
                          gerarCobrançaPix
                       }
                       zIndex={1}
                  >
                    {t('generatePix')}
                  </Button>
                </Center>
                :
                <Center justify = "center" align="center" w = {300} h = {550} display={"flex"} flexDirection={"column"} borderRadius = {"5%"} borderWidth={10} borderColor={"#fff"} bg = {"white"}>
                  <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={25} w={"100%"} align={"center"} paddingBottom={5}> 
                    Vinocoin ICO
                  </Box> 

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={5}> 
                    1 Vinocoin = 0.25 USDT
                  </Box> 

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={5}> 
                    Wallet: {logged ? `${userInfo.walletAddress.substring( 0, 6 )}...${userInfo.walletAddress.substring(38)}` : `${walletAddress.substring( 0, 6 )}...${walletAddress.substring(38)}`}
                  </Box>

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={25}> 
                    {t('boughtTokens')} {userInvestedAmount}
                  </Box>
                  
                  <Box display={"flex"} flexDirection={"row"} align={"start"} w = {250}> 
                    <Image src = {VinocoinIcon} boxSize='30px' objectFit='fit' marginRight={10}/>
                    <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={20}  w = {"100%"}> 
                      Vinocoin
                    </Box> 
                  </Box> 

                  <div style = {{paddingBottom: 15}}>
                      <input 
                          type="number"
                          name="amount"
                          placeholder="Amount" 
                          className="form-control" 
                          value={tokenAmount}
                          pattern="[0-9]*"
                          onChange={handleTokenAmount}
                          style = {{
                              height: "45px",
                              width: "250px",
                              fontFamily: "Montserrat",
                              borderRadius: "5px",
                              margin: 10,
                              textAlign: "center",
                              fontSize: 15,
                              color: "#A6013B",
                              borderColor: "#A6013B",
                              borderWidth: "2px",
                              zIndex:'1'
                          }}
                      />
                  </div>

                  <Center display={"flex"} flexDirection={"row"} align={"start"} w = {250}> 
                    <Image src = {BNBIcon} boxSize='20px' objectFit='fit' marginRight={20}/>
                    <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={20}  w = {"100%"}> 
                      BNB
                    </Box> 
                  </Center> 

                  <div style = {{paddingBottom: 20}}>
                      <input 
                          type="number"
                          name="amount"
                          placeholder="Amount" 
                          className="form-control" 
                          value={buyWithPix ? PixAmount : BNBAmount}
                          readOnly
                          pattern="[0-9]*"
                          style = {{
                              height: "45px",
                              width: "250px",
                              fontFamily: "Montserrat",
                              borderRadius: "5px",
                              margin: 10,
                              textAlign: "center",
                              fontSize: 15,
                              color: "#A6013B",
                              borderColor: "#A6013B",
                              borderWidth: "2px",
                              zIndex:'1'
                          }}
                      />
                  </div>

                  <Button
                       backgroundColor = "#A6013B"
                       borderRadius = "8px"
                       color = "white"
                       fontFamily = "Montserrat"
                       fontSize={20}
                       padding = "10px"
                       width={250}
                       onClick = {() => { 
                        Invest();
                        }}
                       zIndex={1}
                  >
                    Swap
                  </Button>
                </Center>
                }
                  </div>
                  :
                  <div>
                    <Flex justify = "space-evenly" align="space-evenly" w = {300} h = {500} display={"flex"} flexDirection={"column"} borderRadius = {"5%"} borderWidth={10} borderColor={"#fff"} bg = {"white"}>
                  <Box color={"#A6013B"} fontFamily = "Montserrat" fontSize={25} w={"100%"} align={"center"} paddingBottom={5} paddingLeft={20} paddingRight={20}> 
                    {t('swapNotConnected')}
                  </Box> 

                  <Box align={"center"} paddingBottom={10}> 
                    <Button
                         backgroundColor = "#A6013B"
                         borderRadius = "8px"
                         color = "white"
                         fontFamily = "Montserrat"
                         fontSize={20}
                         padding = "10px"
                         width={250}
                         marginBottom={20}
                         onClick = {() => { 
                            navigate("login"); 
                          }}
                         zIndex={1}
                    >
                      {t('emaillogin')}
                    </Button>

                    <MyModal connectWallet = {connectWallet} buttonPadding = {"15px 40px 15px 40px"} fontSize = {17}/> 
                  </Box>
                </Flex>
                  </div>                  
                }
              </div>
              </Box>
            </Box>
            :
            <Flex zIndex={0} justify = "space-between" align="space-between" display={"flex"} flexDirection={"row"} w = {'85%'} h={600}>
              <Box justify = "center" align="start">
              {
                bigMonitor
                ?
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={60} w={"560px"} marginBottom={100}> 
                  {t('wineUniverse')}
                </Box> 
                :
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={40} w={"460px"} marginBottom={100}> 
                  {t('wineUniverse')}
                </Box> 
              }    
                <Flex display={"flex"} flexDirection={"column"} alignContent={"center"} justifyContent={"center"}>
                <Button
                     backgroundColor = "#A6013B"
                     borderRadius = "8px"
                     color = "white"
                     fontFamily = "Montserrat"
                     fontSize={20}
                     padding = "10px"
                     width={buyWithPix ? 280 : 250}
                     justifyContent={"space-between"}
                     onClick = {() => { 
                      if (buyWithPix == true) {
                        setBuyWithPix(false);
                      } else {
                        setBuyWithPix(true);
                      }
                     }}
                     zIndex={1}
                >
                  {buyWithPix ? t('buyWithCrypto') : t('buyWithPix')}
                  <CurrencyDollarIcon className="ml-4 h-6 w-6 text-white-500" />
                </Button>
                </Flex>
              </Box>
              
              {
                bigMonitor
                ?
                <Box justify = "center" align="start">
                  <Image src = {Wines} position={"absolute"} top={"25%"} left={"33%"} w={"38%"} h={"auto"} objectFit='fit' zIndex={999} />
                </Box>
                :
                <Box justify = "center" align="start">
                  <Image src = {Wines} position={"absolute"} top={"47%"} left={"35%"} w={"30%"} h={"auto"} objectFit='fit' zIndex={999} />
                </Box>
              }
              <div>
                {
                  (logged === true || isConnected == true)
                  ?
                  <div> 
                    {
                buyWithPix
                ?
                <Center justify = "center" align="center" w = {400} h = {600} display={"flex"} flexDirection={"column"} borderRadius = {"5%"} borderWidth={10} borderColor={"#fff"} bg = {"white"}>
                  <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={25} w={"100%"} align={"center"} paddingBottom={5}> 
                    Vinocoin ICO Pix
                  </Box> 

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={5}> 
                    1 Vinocoin = 0.25 USDT
                  </Box> 

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={5}> 
                    Wallet: {logged ? `${userInfo.walletAddress.substring( 0, 6 )}...${userInfo.walletAddress.substring(38)}` : `${walletAddress.substring( 0, 6 )}...${walletAddress.substring(38)}`}
                  </Box>

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={25}> 
                    {t('boughtTokens')} {userInvestedAmount}
                  </Box>
                  
                  <Box display={"flex"} flexDirection={"row"} align={"start"} w = {250}> 
                    <Image src = {VinocoinIcon} boxSize='30px' objectFit='fit' marginRight={10}/>
                    <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={20}  w = {"100%"}> 
                      Vinocoin
                    </Box> 
                  </Box> 

                  <div style = {{paddingBottom: 15}}>
                      <input 
                          type="number"
                          name="amount"
                          placeholder="Amount" 
                          className="form-control" 
                          value={tokenAmount}
                          pattern="[0-9]*"
                          onChange={handleTokenAmount}
                          style = {{
                              height: "45px",
                              width: "250px",
                              fontFamily: "Montserrat",
                              borderRadius: "5px",
                              margin: 10,
                              textAlign: "center",
                              fontSize: 15,
                              color: "#A6013B",
                              borderColor: "#A6013B",
                              borderWidth: "2px",
                              zIndex:'1'
                          }}
                      />
                  </div>

                  <Center display={"flex"} flexDirection={"row"} align={"start"} w = {250}> 
                    <Image src = {RealIcon} boxSize='20px' objectFit='fit' marginRight={20}/>
                    <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={20}  w = {"100%"}> 
                      Reais
                    </Box> 
                  </Center> 

                  <div style = {{paddingBottom: 20}}>
                      <input 
                          type="number"
                          name="amount"
                          placeholder="Amount" 
                          className="form-control" 
                          value={buyWithPix ? PixAmount : BNBAmount}
                          readOnly
                          pattern="[0-9]*"
                          style = {{
                              height: "45px",
                              width: "250px",
                              fontFamily: "Montserrat",
                              borderRadius: "5px",
                              margin: 10,
                              textAlign: "center",
                              fontSize: 15,
                              color: "#A6013B",
                              borderColor: "#A6013B",
                              borderWidth: "2px",
                              zIndex:'1'
                          }}
                      />
                  </div>

                  <Center display={"flex"} flexDirection={"row"} align={"start"} w = {250}> 
                    <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={20}  w = {"100%"}> 
                      CPF
                    </Box> 
                  </Center> 

                  <div style = {{paddingBottom: 15}}>
                    <input 
                        type="number" 
                        name="cpf"
                        placeholder="CPF" 
                        className="form-control" 
                        pattern="[0-9]*"
                        value={cpf}
                        onChange={handleCpf}
                        style = {{
                          height: "45px",
                          width: "250px",
                          fontFamily: "Montserrat",
                          borderRadius: "5px",
                          margin: 10,
                          textAlign: "center",
                          fontSize: 15,
                          color: "#A6013B",
                          borderColor: "#A6013B",
                          borderWidth: "2px",
                          zIndex:'1'
                        }}
                    />
                </div>

                  <Button
                       backgroundColor = "#A6013B"
                       borderRadius = "8px"
                       color = "white"
                       fontFamily = "Montserrat"
                       fontSize={20}
                       padding = "10px"
                       width={250}
                       onClick = {
                          gerarCobrançaPix
                       }
                       zIndex={1}
                  >
                    {t('generatePix')}
                  </Button>
                </Center>
                :
                <Center justify = "center" align="center" w = {400} h = {500} display={"flex"} flexDirection={"column"} borderRadius = {"5%"} borderWidth={10} borderColor={"#fff"} bg = {"white"} marginLeft={50}>
                  <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={25} w={"100%"} align={"center"} paddingBottom={5}> 
                    Vinocoin ICO
                  </Box> 

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={5}> 
                    1 Vinocoin = 0.25 USDT
                  </Box> 

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={5}> 
                    Wallet: {logged ? `${userInfo.walletAddress.substring( 0, 6 )}...${userInfo.walletAddress.substring(38)}` : `${walletAddress.substring( 0, 6 )}...${walletAddress.substring(38)}`}
                  </Box>

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={25}> 
                    {t('boughtTokens')} {userInvestedAmount}
                  </Box>
                  
                  <Box display={"flex"} flexDirection={"row"} align={"start"} w = {250}> 
                    <Image src = {VinocoinIcon} boxSize='30px' objectFit='fit' marginRight={10}/>
                    <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={20}  w = {"100%"}> 
                      Vinocoin
                    </Box> 
                  </Box> 

                  <div style = {{paddingBottom: 15}}>
                      <input 
                          type="number"
                          name="amount"
                          placeholder="Amount" 
                          className="form-control" 
                          value={tokenAmount}
                          pattern="[0-9]*"
                          onChange={handleTokenAmount}
                          style = {{
                              height: "45px",
                              width: "250px",
                              fontFamily: "Montserrat",
                              borderRadius: "5px",
                              margin: 10,
                              textAlign: "center",
                              fontSize: 15,
                              color: "#A6013B",
                              borderColor: "#A6013B",
                              borderWidth: "2px",
                              zIndex:'1'
                          }}
                      />
                  </div>

                  <Center display={"flex"} flexDirection={"row"} align={"start"} w = {250}> 
                    <Image src = {BNBIcon} boxSize='20px' objectFit='fit' marginRight={20}/>
                    <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={20}  w = {"100%"}> 
                      BNB
                    </Box> 
                  </Center> 

                  <div style = {{paddingBottom: 20}}>
                      <input 
                          type="number"
                          name="amount"
                          placeholder="Amount" 
                          className="form-control" 
                          value={buyWithPix ? PixAmount : BNBAmount}
                          readOnly
                          pattern="[0-9]*"
                          style = {{
                              height: "45px",
                              width: "250px",
                              fontFamily: "Montserrat",
                              borderRadius: "5px",
                              margin: 10,
                              textAlign: "center",
                              fontSize: 15,
                              color: "#A6013B",
                              borderColor: "#A6013B",
                              borderWidth: "2px",
                              zIndex:'1'
                          }}
                      />
                  </div>

                  <Button
                       backgroundColor = "#A6013B"
                       borderRadius = "8px"
                       color = "white"
                       fontFamily = "Montserrat"
                       fontSize={20}
                       padding = "10px"
                       width={250}
                       onClick = {() => { 
                        Invest();
                        }}
                       zIndex={1}
                  >
                    Swap
                  </Button>
                </Center>
                }
                  </div>
                  :
                  <div>
                    <Flex justify = "space-evenly" align="space-evenly" w = {400} h = {500} display={"flex"} flexDirection={"column"} borderRadius = {"5%"} borderWidth={10} borderColor={"#fff"} bg = {"white"} marginLeft={50}>
                  <Box color={"#A6013B"} fontFamily = "Montserrat" fontSize={25} w={"100%"} align={"center"} paddingBottom={5} paddingLeft={20} paddingRight={20}> 
                    {t('swapNotConnected')}
                  </Box> 

                  <Box align={"center"} paddingBottom={10}> 
                    <Button
                         backgroundColor = "#A6013B"
                         borderRadius = "8px"
                         color = "white"
                         fontFamily = "Montserrat"
                         fontSize={20}
                         padding = "10px"
                         width={250}
                         marginBottom={20}
                         onClick = {() => { 
                            navigate("login"); 
                          }}
                         zIndex={1}
                    >
                      {t('emaillogin')}
                    </Button>

                    <MyModal connectWallet = {connectWallet} buttonPadding = {"12px 40px 12px 40px"} fontSize = {17}/> 
                  </Box>
                </Flex>
                  </div>                  
                }
              </div>
    
              
            </Flex>
            }
        </Flex>
    );
}

export default Swap;