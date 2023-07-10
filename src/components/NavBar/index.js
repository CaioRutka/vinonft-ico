import { useState, React, useEffect } from "react";
import { Button, Flex, Image, Box } from "@chakra-ui/react";
import { ethers } from "ethers";
import { isMobile } from 'react-device-detect';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

import logoElVinos from "../../assets/images/logo-elvinos-branco.png";
import '../../assets/fonts/CloserText-Light.otf';
import MyModal from "../Modal";

import { elVinoNFTAddress, abiVinoNFT } from '../../utils/walletAddress'

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

const NavBar = ({ accounts, setAccounts}) => {
  const isConnected = Boolean(accounts[0]);
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState(undefined);
  const [windowWidth, setWindowWidth] = useState(0);

  const [fontSize, setFontSize] = useState(0);
  const [logoW, setLogoW] = useState(0);
  const [logoH, setLogoH] = useState(0);
  const [buttonPadding, setButtonPadding] = useState("");

  useEffect(() => {
    if (window !== undefined){
      setWindowWidth(window.innerWidth);
    } 
  }, [])

  useEffect(() => {
    if(windowWidth <= 500) {
      setFontSize(10);
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
      getCurrentWalletConnected();
      addWalletListener();
      checkNetwork();
      
      if ( walletAddress != "undefined" && walletAddress != ""){
        var wsProvider = new ethers.WebSocketProvider("wss://greatest-white-lake.bsc.discover.quiknode.pro/371be6d22daa0bc1e2d04c2dd9bfa6916fc9b843/");
        const contractEl = new ethers.Contract(elVinoNFTAddress, abiVinoNFT, wsProvider);

        contractEl.on("Transfer", async (from, to, amount, event) => {
          if ( to.toLowerCase() == walletAddress) {
            var getTokenURL = await contractEl.tokenURI(amount);
            var imageURL = await getImageFromNft(getTokenURL);
            
            alertContent("NFT recebida com sucesso !", imageURL.image, imageURL.name);
          }
        })

        return() => {
          contractEl.removeAllListeners();
        }
      }
    }, [walletAddress]);

    const connectMetamaskMobile = (walletID) => {
      if (walletID === 0){
        const META_URL = "https://metamask.app.link/dapp/";
        const dappUrl = window.location.href.split("//")[1].split("/")[0];
        const metamaskAppDeepLink = META_URL + dappUrl + "/nft2";
        window.open(metamaskAppDeepLink, "_self");
      } else if (walletID === 1){
        const TRUST_URL = "https://link.trustwallet.com/open_url?coin_id=20000714&url=https://";
        const dappUrl = window.location.href.split("//")[1].split("/")[0];
        const trustWalletdeepLink = `${TRUST_URL}${encodeURIComponent(dappUrl  + "/nft2")}`;  
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
        <Flex justify = "space-between" align="center" padding="28px" bg="rgba(0,0,0,0.5)" borderBottomWidth={1} height={87} >

            <Link to = "/">
                <Image src = {logoElVinos} width={logoW} height={logoH} objectFit='fit'/>
            </Link>

            <Flex justify = "space-between" align="center">
              <Link to = "/">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize}  padding={3}> Home </Box>
              </Link> 
      
              <Link to = "/">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> Sobre Nos </Box>
              </Link> 

              <Link to = "/">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> Wallet </Box>
              </Link> 

              <Link to = "/">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> E-commerce </Box>
              </Link> 

              <Link to = "/">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> VinoFlix </Box>
              </Link> 

              <Link to = "/">
                <Box margin = "0 15px" color={"white"} fontFamily = "Montserrat" fontSize={fontSize} padding={3}> NFTs </Box>
              </Link> 

              <Link to = "/">
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
                    margin = "0 15px"
                    onClick = {() => {}}
                    maxWidth={windowWidth/3}
                >
                    Login
                </Button>

                <Button
                    backgroundColor = "#A6013B"
                    borderRadius = "10px"
                    borderWidth={ 0 }
                    color = "white"
                    fontFamily = "Montserrat"
                    fontSize={fontSize}
                    padding = {buttonPadding}
                    margin = "0 15px"
                    onClick = {() => {}}
                    maxWidth={windowWidth/3}
                >
                    Connected
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
                    margin = "0 15px"
                    onClick = {() => {}}
                    maxWidth={windowWidth/3}
                >
                    Login
                </Button>
              <MyModal connectWallet = {connectWallet} buttonPadding = {buttonPadding} fontSize = {fontSize}/>   
              </Box>             
            }
        </Flex>
    );
}

export default NavBar;

// {accounts[0].substring(0, 6)}...{accounts[0].substring(38)}