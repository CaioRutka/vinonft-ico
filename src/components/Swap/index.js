import { useState, React, useEffect } from "react";
import { ethers } from "ethers";
import { Box, Button, Flex, Image, Center } from "@chakra-ui/react";
import { isMobile } from 'react-device-detect';
import axios from "axios";

import '../../assets/fonts/Config-Regular.otf';
import './index.css';

import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Wines from "../../assets/images/vinhos-moeda@2x.png";
import VinocoinIcon from "../../assets/images/Moeda.png";
import BNBIcon from "../../assets/images/bnb.png";

import { invest } from "../../utils/nftController";

const Swap = ({ accounts, setAccounts, handleClickScroll }) => {
    const isConnected = Boolean(accounts[0]);

    const [tokenAmount, setTokenAmount] = useState(0);
    const [BNBAmount, setBNBAmount] = useState(0);
    const [BNBPrice, setBNBPrice] = useState(0);
    
    const [loading, setLoading] = useState(false);

    const [slides, setSlides] = useState([]);

    const [walletAddress, setWalletAddress] = useState("");
    const [signer, setSigner] = useState(undefined);
    const [mobile, setMobile] = useState(true);
    const [bigMonitor, setBigMonitor] = useState(true);

    const handleTokenAmount = e => {
      const { value } = e.target;
      setTokenAmount(value);
    }

    useEffect(() => {
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
      console.log(tokenAmount);
      setBNBAmount(0.25 * tokenAmount / BNBPrice);
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
            setLoading(true);
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
                          value={BNBAmount}
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
                  <Image src = {Wines} position={"absolute"} top={"25%"} left={"30%"} w={"38%"} h={"auto"} objectFit='fit' zIndex={999} />
                </Box>
                :
                <Box justify = "center" align="start">
                  <Image src = {Wines} position={"absolute"} top={"35%"} left={"30%"} w={"38%"} h={"auto"} objectFit='fit' zIndex={999} />
                </Box>
              }
    
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
                          value={BNBAmount}
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
            </Flex>
            }
        </Flex>
    );
}

export default Swap;