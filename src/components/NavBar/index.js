import { useState, React, useEffect } from "react";
import { Button, Flex, Image, Box, useColorMode, Center, IconButton } from "@chakra-ui/react";
import { ethers } from "ethers";
import { isMobile, mobileModel } from 'react-device-detect';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { HamburgerIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';

import logoElVinos from "../../assets/images/logo-elvinos-branco.png";
import '../../assets/fonts/CloserText-Light.otf';
import MyModal from "../Modal";

const MySwal = withReactContent(Swal)

const alertContent = (message, link, nftName) => {
    MySwal.fire({
        title: nftName,
        text: message,
        confirmButtonColor: '#A6013B',
        confirmButtonText: 'Ok',
        imageUrl: link,
        imageHeight: 300,
        imageAlt: 'Elvinos NFT'
    })
}

const networks = {
    bnb: {
      chainId: `0x${Number(56).toString(16)}`,
      chainName: "BNB Smartchain",
      nativeCurrency: {
        name: "BNB Token",
        symbol: "BNB",
        decimals: 18
      },
      rpcUrls: [
        "https://bsc-dataseed.binance.org/"
      ],
      blockExplorerUrls: ["https://bscscan.com"]
    },
    bnbTeste: {
      chainId: `0x${Number(97).toString(16)}`,
      chainName: "BNB Smartchain Testnet",
      nativeCurrency: {
        name: "BNB Token",
        symbol: "tBNB",
        decimals: 18
      },
      rpcUrls: [
        "https://data-seed-prebsc-1-s1.binance.org:8545/"
      ],
      blockExplorerUrls: ["https://testnet.bscscan.com"]
    }
};

function getImageFromNft(url) {
  return fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
      return responseJson;        
  })
  .catch((error) => {
      alertContent("Erro!", error, "warning", 2000);
    console.error(error);
  });
}

const NavBar = ({ accounts, setAccounts, handleClickScrollRoad, handleClickScrollAbout}) => {
  const isConnected = Boolean(accounts[0]);
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState(undefined);
  const [windowWidth, setWindowWidth] = useState(0);

  const [fontSize, setFontSize] = useState(0);
  const [logoW, setLogoW] = useState(0);
  const [logoH, setLogoH] = useState(0);
  const [buttonPadding, setButtonPadding] = useState("");

  const [mobile, setMobile] = useState(true);
  const [menuState, setMenuState] = useState(false);

  const [userInfo, setUserInfo] = useState([]);
  const [logged, setUserLogged] = useState(false);

  const navigate = useNavigate();

  const [disconnectedWallet, setDisconnectedWallet] = useState(false);

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
      }
    }, [])

    useEffect(() => {
      if (window !== undefined){
        setWindowWidth(window.innerWidth);
      } 
    }, [])

    useEffect(() => {
      if(windowWidth <= 500) {
        setFontSize(12);
        setLogoW(102);
        setLogoH(37.638);
        setButtonPadding("5px 10px 5px 10px");
      } else {
        setFontSize(17);
        setLogoW(170);
        setLogoH(62.73);
        setButtonPadding("10px 20px 10px 20px");
      }
    }, [windowWidth])

    useEffect(() => {
        if (disconnectedWallet == false) {
          getCurrentWalletConnected();
        }
        addWalletListener();
        checkNetwork();
    }, [walletAddress]);

    const changeMenuState = () => {
      if (menuState == true) {
        setMenuState(false);
      } else if (menuState == false) {
        setMenuState(true);
      }
    };

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
          setDisconnectedWallet(false);
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

    const disconnectWallet = async () => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        try {
          setDisconnectedWallet(true);
          setWalletAddress("");
          setAccounts([]);
          setSigner(undefined);
          
        } catch (err) {
          console.error(err.message);
        }
      } else {
        /* MetaMask is not installed */
        console.log("Please install MetaMask");
      }
    };
  
    const getCurrentWalletConnected = async () => {
      if (window.ethereum || isMobile) {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length > 0) {
              setWalletAddress(accounts[0]);
              setAccounts(accounts);
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
      if (window.ethereum || isMobile) {
        window.ethereum.on("accountsChanged", async (accounts) => {
          setWalletAddress(accounts[0]);
          setAccounts(accounts);
          const provider = new ethers.BrowserProvider(window.ethereum);
          await provider.getSigner().then((s) => {setSigner(s);});
        });
      } else {
        /* MetaMask is not installed */
        setWalletAddress("");
        console.log("Please install MetaMask");
      }
    };
  
    const checkNetwork = async () => {
        if (window.ethereum || isMobile) {
          const currentChainId = await window.ethereum.request({
            method: 'eth_chainId',
          });           
          if (currentChainId === `0x${Number(56).toString(16)}`) {
          } else if (currentChainId !== `0x${Number(56).toString(16)}`) {
            switchNetwork(currentChainId);
          }
        }    
      };
    
      const switchNetwork = async () => {
          try{
            await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: `0x${Number(56).toString(16)}`}],
            });
            window.location.reload();
          } catch (err) {
            if (isMobile) {
              const errorCode = err.data?.originalError?.code
              if (errorCode && errorCode === 4902) {
                await window.ethereum.request({
                  method: "wallet_addEthereumChain",
                  params: [
                    {
                      ...networks["bnb"]
                    }
                  ]
                });
              window.location.reload();
              }
            } else {
              if (err.code === 4902) {
                await window.ethereum.request({
                  method: "wallet_addEthereumChain",
                  params: [
                    {
                      ...networks["bnb"]
                    }
                  ]
                });
              window.location.reload();
              }
            }
            
            // handle other "switch" errors
            console.error(err);
            }
          }   

    return (
      <div>
        {
          mobile
          ?
          <div>
          {
            menuState
            ?
            <Flex justify = "space-between" align="start" display={"flex"} flexDirection={"column"} padding="28px" bg="rgba(0,0,0,0.5)" borderBottomWidth={1} height={300} >
              <Flex justify = "space-between" align="center" display={"flex"} flexDirection={"row"} w = {"100%"} >
                <Link to = "/">
                  <Image src = {logoElVinos} width={logoW} height={logoH} objectFit='fit'/>
              </Link>

              <IconButton
                colorScheme='white'
                aria-label='Open Menu'
                onClick={() => changeMenuState()}
                icon = {<HamburgerIcon color = {"white"} boxSize={25}/>}
              />
              </Flex>
            
            <Flex justify = "space-between" align="start" display={"flex"} flexDirection={"row"} w = {"100%"}>
            <Flex justify = "start" align="start" display={"flex"} flexDirection={"column"}>
              <Link to = "/">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize}  padding={3}> Home </Box>
              </Link> 
      
              <Link onClick = {() => { handleClickScrollAbout(); }}>
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> Sobre Nos </Box>
              </Link> 

              <Link to = "https://elvinos.gitbook.io/whitepapper-vinocoin/" target="_blank">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> Whitepaper </Box>
              </Link> 

              <Link to = "https://elvinos.com.br/" target="_blank">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> E-commerce </Box>
              </Link> 

              <Link to = "https://vino.themembers.com.br/login" target="_blank">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> VinoFlix </Box>
              </Link> 

              <Link to = "https://elvinos.com.br/nfts/" target="_blank">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> NFTs </Box>
              </Link> 

              <Link onClick = {() => { handleClickScrollRoad(); }}>
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> Roadmap </Box>
              </Link> 
            </Flex>

            {
              isConnected
              ?
              <Box justify = "center" align="center" display={"flex"} flexDirection={"column"}>
                <Button
                    backgroundColor = "#A6013B"
                    borderRadius = "10px"
                    borderWidth={ 0 }
                    color = "white"
                    fontFamily = "Montserrat"
                    fontSize={fontSize}
                    padding = {buttonPadding}
                    onClick = {disconnectWallet}
                    maxWidth={windowWidth/3}
                >
                    Disconnect Wallet
                </Button>
              </Box>
              :              
              <Flex>
                {
                  logged
                  ?
                  <Box justify = "center" align="center" display={"flex"} flexDirection={"column"}>
                    <Button
                        backgroundColor = "#A6013B"
                        borderRadius = "10px"
                        borderWidth={ 0 }
                        color = "white"
                        fontFamily = "Montserrat"
                        fontSize={fontSize}
                        padding = {buttonPadding}
                        onClick = {() => { 
                          if (logged == true) {
                            localStorage.removeItem("userInfo");
                            window.history.replaceState({}, document.title);
                            window.location.reload(true);
                          } else {
                            navigate("login");
                          }                      
                        }}
                        maxWidth={windowWidth/3}
                    >
                    Sair
                    </Button> 
                  </Box>
                  :
                  <Center justify = "center" align="center" display={"flex"} flexDirection={"column"}>
                    <Button
                        backgroundColor = "#A6013B"
                        borderRadius = "10px"
                        borderWidth={ 0 }
                        color = "white"
                        fontFamily = "Montserrat"
                        fontSize={fontSize}
                        padding = {buttonPadding}
                        marginBottom={20}
                        onClick = {() => { 
                          if (logged == true) {
                            localStorage.removeItem("userInfo");
                            window.history.replaceState({}, document.title);
                            window.location.reload(true);
                          } else {
                            navigate("login");
                          }                      
                        }}
                        maxWidth={windowWidth/3}
                    >
                    Login com Email
                    </Button>
                    <MyModal connectWallet = {connectWallet} buttonPadding = {buttonPadding} fontSize = {fontSize}/>   
                  </Center>
                } 
              </Flex>             
            }
            </Flex>
              
            </Flex>
            :
            <Flex justify = "space-between" align="center" padding="28px" bg="rgba(0,0,0,0.5)" borderBottomWidth={1} height={87} >
              <Link to = "/">
                  <Image src = {logoElVinos} width={logoW} height={logoH} objectFit='fit'/>
              </Link>

              <IconButton
                colorScheme='white'
                aria-label='Open Menu'
                onClick={() => changeMenuState()}
                icon = {<HamburgerIcon color = {"white"} boxSize={25}/>}
              />
            </Flex>
          }
          </div>
          :
          <Flex justify = "space-between" align="center" padding="28px" bg="rgba(0,0,0,0.5)" borderBottomWidth={1} height={87} >

            <Link to = "/">
                <Image src = {logoElVinos} width={logoW} height={logoH} objectFit='fit'/>
            </Link>

            <Flex justify = "space-between" align="center">
              <Link to = "/">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize}  padding={3}> Home </Box>
              </Link> 
      
              <Link onClick = {() => { handleClickScrollAbout(); }}>
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> Sobre Nos </Box>
              </Link> 

              <Link to = "https://elvinos.gitbook.io/whitepapper-vinocoin/" target="_blank">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> Whitepaper </Box>
              </Link> 

              <Link to = "https://elvinos.com.br/" target="_blank">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> E-commerce </Box>
              </Link> 

              <Link to = "https://vino.themembers.com.br/login" target="_blank">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> VinoFlix </Box>
              </Link> 

              <Link to = "https://elvinos.com.br/nfts/" target="_blank">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> NFTs </Box>
              </Link> 

              <Link onClick = {() => { handleClickScrollRoad(); }}>
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> Roadmap </Box>
              </Link> 
            </Flex>
            {
              isConnected
              ?
              <Box justify = "center" align="center" display={"flex"} flexDirection={"row"}>
                <Button
                    backgroundColor = "#A6013B"
                    borderRadius = "10px"
                    borderWidth={ 0 }
                    color = "white"
                    fontFamily = "Montserrat"
                    fontSize={fontSize}
                    padding = {buttonPadding}
                    onClick = {disconnectWallet}
                    maxWidth={windowWidth/3}
                >
                    Disconnect Wallet
                </Button>
              </Box>
              :              
              <Flex>
                {
                  logged
                  ?
                  <Box justify = "center" align="center" display={"flex"} flexDirection={"row"}>
                    <Button
                        backgroundColor = "#A6013B"
                        borderRadius = "10px"
                        borderWidth={ 0 }
                        color = "white"
                        fontFamily = "Montserrat"
                        fontSize={fontSize}
                        padding = {buttonPadding}
                        onClick = {() => { 
                          if (logged == true) {
                            localStorage.removeItem("userInfo");
                            window.history.replaceState({}, document.title);
                            window.location.reload(true);
                          } else {
                            navigate("login");
                          }                      
                        }}
                        maxWidth={windowWidth/3}
                    >
                    Sair
                    </Button> 
                  </Box>
                  :
                  <Box justify = "center" align="center" display={"flex"} flexDirection={"row"}>
                    <Button
                        backgroundColor = "#A6013B"
                        borderRadius = "10px"
                        borderWidth={ 0 }
                        color = "white"
                        fontFamily = "Montserrat"
                        fontSize={fontSize}
                        padding = {buttonPadding}
                        onClick = {() => { 
                          if (logged == true) {
                            localStorage.removeItem("userInfo");
                            window.history.replaceState({}, document.title);
                            window.location.reload(true);
                          } else {
                            navigate("login");
                          }                      
                        }}
                        maxWidth={windowWidth/3}
                    >
                    Login com Email
                    </Button>
                    <MyModal connectWallet = {connectWallet} buttonPadding = {buttonPadding} fontSize = {fontSize}/>   
                  </Box>
                } 
              </Flex>             
            }
        </Flex>
        }
      </div>        
    );
}

export default NavBar;

// {accounts[0].substring(0, 6)}...{accounts[0].substring(38)}