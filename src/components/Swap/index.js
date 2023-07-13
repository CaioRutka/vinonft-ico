import { useState, React, useEffect } from "react";
import { ethers } from "ethers";
import { Box, Button, Flex, Image, Center } from "@chakra-ui/react";
import { isMobile } from 'react-device-detect';
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import copy from "copy-to-clipboard";

import '../../assets/fonts/Config-Regular.otf';
import './index.css';

import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Wines from "../../assets/images/vinhos-moeda@2x.png";
import VinocoinIcon from "../../assets/images/Moeda.png";
import BNBIcon from "../../assets/images/bnb.png";
import RealIcon from "../../assets/images/real.png";
import { invest } from "../../utils/nftController";

const MySwal = withReactContent(Swal);

const alertContent = (message, QrCode, pixCopiaECola) => {
  MySwal.fire({
      text: message,
      confirmButtonColor: '#A6013B',
      confirmButtonText: 'Ok',
      imageHeight: 300,
      imageAlt: 'Elvinos NFT'
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
    const [logged, setUserLogged] = useState(false);

    const [loadingPix, setLoadingPix] = useState(false);
    const [PixAmount, setPixAmount] = useState(0);
    const [dolarPrice, setDolarPrice] = useState(0);
    const [cpf, setCpf] = useState('');
    const [clientName, setClientName] = useState('');
    const [pixCopiaECola, setPixCopiaECola] = useState('');
    const [QrCode, setQrCode] = useState('');

    const copyToClipboard = () => {
      copy(pixCopiaECola);
      alertContent("Sucesso!", "Pix copia e cola copiado com sucesso, \
      agora é só realizar o pagamento atraves do aplicativo do seu banco.", "success", 4000);
   }

    const gerarCobrançaPix = async () => {
      if (walletAddress !== null && walletAddress !== "" && cpf !== null && cpf !== "" && clientName !== null && clientName !== ""){
        try {
          setLoadingPix(true);

          axios.get(`https://app.api-elvinos.link/gerarcobranca?cpf=${cpf}&quantity=${(PixAmount)}&name=${userInfo.email}&walletAddress=${userInfo.walletAddress}`)
              .then((response) => {
                  if ( response.status === 201 ){
                      setPixCopiaECola(response.data.pixcec);
                      setQrCode(response.data.qrcodeImage);
                  }
                console.log(response.data);
              });
        } catch (err) {
          console.error(err.message);
        }
      } else {
          alertContent("Error!", "Você deve preencher os campos de Nome, CPF e seu endereço de carteira BNB!", "warning", 4000);
      }
  };

  useEffect (() => {
      if(pixCopiaECola  !== '' && pixCopiaECola != null) {
          setLoadingPix(false);
          alertContent("Sucesso!", "Cobrança pix gerada com sucesso, aponte seu celular \
          para esse QRCode, realize o pagamento, e seus NFT's será(ão) enviado(s) para o endereço de carteira \
          cadastrado no site.", "success", 5000);
      }        
  }, [pixCopiaECola])

    const handleClientName = e => {
        const { value } = e.target;
        setClientName(value);
    }
    
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
        setUserLogged(true);
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
              setDolarPrice(response.data.USDBRL.low);
            }
        });
        }         
    }, [])
  
    useEffect(() => {
      getCurrentWalletConnected();
      addWalletListener();
    }, [walletAddress]);

    useEffect(() => {
      setBNBAmount(0.25 * tokenAmount / BNBPrice);
    }, [tokenAmount])     

    useEffect(() => {
      setPixAmount(dolarPrice * 0.25 * tokenAmount / BNBPrice);
    }, [tokenAmount])   

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

    const handleDecrement = () => {
        if (tokenAmount <= 1) return;
        setTokenAmount(tokenAmount - 1);
    }

    const handleIncrement = () => {
        if (tokenAmount >= 10) return;
        setTokenAmount(tokenAmount + 1);
    }

    return (
        <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={1050}bg="rgba(0,0,0,0.2)">
          {
            mobile
            ?
            <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'85%'} h={1050}>
              <Box justify = "center" align="center">
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={40} w={"100%"} align={"center"} marginTop={20}> 
                  O universo do vinho agora inserido na criptoeconomia 
                </Box>     
                <Button
                     backgroundColor = "#A6013B"
                     borderRadius = "8px"
                     color = "white"
                     fontFamily = "Montserrat"
                     fontSize={20}
                     padding = "10px"
                     width={250}
                     marginTop={20}
                     onClick = {() => {
                      handleClickScroll();
                     }}
                     zIndex={1}
                >
                  Compre Vinocoin
                  <ShoppingCartIcon className="ml-4 h-6 w-6 text-white-500" />
                </Button>

                {
                logged
                ?
                <Center justify = "center" align="center" w = {300} h = {550} marginTop={40} display={"flex"} flexDirection={"column"} borderRadius = {"5%"} borderWidth={10} borderColor={"#fff"} bg = {"white"}>
                  <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={25} w={"100%"} align={"center"}> 
                    Vinocoin ICO Pix
                  </Box> 

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={25}> 
                    1 Vinocoin = 0.25 USDT
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
                          value={logged ? PixAmount : BNBAmount}
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
                       onClick = {() => { 
                        alertContent("Pagamento via Pix em manutenção.");
                        }}
                       zIndex={1}
                  >
                    Gerar Pix
                  </Button>
              </Center>
                :
                <Center justify = "center" align="center" w = {300} h = {410} marginTop={40} display={"flex"} flexDirection={"column"} borderRadius = {"5%"} borderWidth={10} borderColor={"#fff"} bg = {"white"}>

                  <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={25} w={"100%"} align={"center"}> 
                    Vinocoin ICO
                  </Box> 

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={25}> 
                    1 Vinocoin = 0.25 USDT
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
                          value={logged ? PixAmount : BNBAmount}
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
                    Realizar Swap
                  </Button>
              </Center>
              }
              </Box>
            </Box>
            :
            <Flex zIndex={0} justify = "space-between" align="space-between" display={"flex"} flexDirection={"row"} w = {'85%'} h={600}>
              <Box justify = "center" align="start">
              {
                bigMonitor
                ?
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={60} w={"560px"} marginBottom={100}> 
                  O universo do vinho agora inserido na criptoeconomia 
                </Box> 
                :
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={40} w={"460px"} marginBottom={100}> 
                  O universo do vinho agora inserido na criptoeconomia 
                </Box> 
              }    
                <Button
                     backgroundColor = "#A6013B"
                     borderRadius = "8px"
                     color = "white"
                     fontFamily = "Montserrat"
                     fontSize={20}
                     padding = "10px"
                     width={250}
                     onClick = {() => { }}
                     zIndex={1}
                >
                  Compre Vinocoin
                  <ShoppingCartIcon className="ml-4 h-6 w-6 text-white-500" />
                </Button>
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

              {
                logged
                ?
                <Center justify = "center" align="center" w = {400} h = {550} display={"flex"} flexDirection={"column"} borderRadius = {"5%"} borderWidth={10} borderColor={"#fff"} bg = {"white"} marginLeft={50}>
                  <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={25} w={"100%"} align={"center"}> 
                    Vinocoin ICO Pix
                  </Box> 

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={25}> 
                    1 Vinocoin = 0.25 USDT
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
                          value={logged ? PixAmount : BNBAmount}
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
                       onClick = {() => { 
                        alertContent("Pagamento via Pix em manutenção.");
                        }}
                       zIndex={1}
                  >
                    Gerar Pix
                  </Button>
              </Center>
                :
                <Center justify = "center" align="center" w = {400} h = {410} display={"flex"} flexDirection={"column"} borderRadius = {"5%"} borderWidth={10} borderColor={"#fff"} bg = {"white"} marginLeft={50}>
                  <Box color={"#A6013B"} fontFamily = "Playfair Display" fontSize={25} w={"100%"} align={"center"}> 
                    Vinocoin ICO
                  </Box> 

                  <Box color={"black"} fontFamily = "Montserrat" fontSize={16} w={"100%"} align={"center"} paddingBottom={25}> 
                    1 Vinocoin = 0.25 USDT
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
                          value={logged ? PixAmount : BNBAmount}
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
                    Realizar Swap
                  </Button>
              </Center>
              }
    
              
            </Flex>
            }
        </Flex>
    );
}

export default Swap;