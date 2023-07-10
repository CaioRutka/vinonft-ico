import { useState, React, useEffect } from "react";
import { ethers } from "ethers";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { isMobile } from 'react-device-detect';

import '../../assets/fonts/Config-Regular.otf';
import './index.css';

import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Wines from "../../assets/images/vinhos-moeda@2x.png";

import { mintBNB, mintCurrency, approveUSDT, approveBUSD } from "../../utils/nftController";

const currencies = [
  { name: 'BNB', icon: "bnb", _id: 100},
  { name: 'USDT', icon: "usdt", _id: 0},
  { name: 'BUSD', icon: "usd", _id: 1},
]

const Swap = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);
    const [mintAmount, setMintAmount] = useState(1);
    const [loading, setLoading] = useState(false);

    const [slides, setSlides] = useState([]);

    const [selected, setSelected] = useState(currencies[0]);

    const [walletAddress, setWalletAddress] = useState("");
    const [signer, setSigner] = useState(undefined);
    const [mobile, setMobile] = useState(true);

    useEffect(() => {
      if (window !== undefined){
        if(window.innerWidth >= 575){
          setMobile(false);
        }
      } 
    }, [])
  
      useEffect(() => {
          getCurrentWalletConnected();
          addWalletListener();
      }, [walletAddress]);
  
       useEffect(() => {
          setLoading(false);
       }, [slides])
       
       useEffect(() => {
       }, [selected]);

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

    async function getApproval(_id) {
        if (window.ethereum || isMobile) {
            if(_id === 0){
                approveUSDT(_id, walletAddress, signer, handleMintCurrency);
            } else if (_id === 1) {
                approveBUSD(_id, walletAddress, signer, handleMintCurrency);
            }
            
        }
    }

    async function handleMintBNB() {
        if (window.ethereum || isMobile) {
            setLoading(true);
            await mintBNB(mintAmount, signer).then((slidesArray) => { 
                if (slidesArray === null) {
                    setLoading(false);
                } else{
                    setSlides(slidesArray);
                }
            });
        } else {
        }
    }

    async function handleMintCurrency(_id) {
        if (window.ethereum || isMobile) {
            setLoading(true);
            await mintCurrency(signer, mintAmount, _id).then((slidesArray) => { 
                if (slidesArray === null) {
                    setLoading(false);
                } else{
                    setSlides(slidesArray);
                }
            });
        } else {
        }
    }

    const handleDecrement = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if (mintAmount >= 10) return;
        setMintAmount(mintAmount + 1);
    }

    return (
        <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={1050}bg="rgba(0,0,0,0.2)">
          {
            mobile
            ?
            <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'85%'} h={1050}>
              <Box justify = "center" align="center">
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={40} w={"100%"} marginBottom={50} marginTop={50} align={"center"}> 
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
                     onClick = {() => { }}
                     zIndex={1}
                >
                  Compre Vinocoin
                  <ShoppingCartIcon className="ml-4 h-6 w-6 text-white-500" />
                </Button>

                <Box justify = "center" align="center" h = {400} borderRadius = {"5%"} borderWidth={10} borderColor={"#fff"} bg = {"white"} marginTop={40} marginLeft={10} marginRight={10}>
                <Box w={400} h = {100} justify = "center" align="center">
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
                    Realizar Swap
                  </Button>
                </Box>
              </Box>
              </Box>
            </Box>
            :
            <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'85%'} h={600}>
              <Box justify = "center" align="start">
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={60} w={"560px"} marginBottom={100}> 
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
                     onClick = {() => { }}
                     zIndex={1}
                >
                  Compre Vinocoin
                  <ShoppingCartIcon className="ml-4 h-6 w-6 text-white-500" />
                </Button>
              </Box>

              <Box justify = "center" align="start">
                <Image src = {Wines} boxSize='560px' objectFit='fit' top={400} />
              </Box>

              <Box justify = "center" align="start" h = {400} marginTop={40} borderRadius = {"5%"} borderWidth={10} borderColor={"#fff"} bg = {"white"} marginLeft={50}>
                <Box w={400} h = {100} justify = "center" align="center">
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
                  Realizar Swap
                </Button>
                </Box>
              </Box>
            </Box>
            }
        </Flex>
    );
}

export default Swap;