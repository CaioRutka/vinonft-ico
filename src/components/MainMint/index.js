import { useState, React, useEffect } from "react";
import { ethers } from "ethers";
import { Box, Button, Flex } from "@chakra-ui/react";
import { isMobile } from 'react-device-detect';

import '../../assets/fonts/Config-Regular.otf';
import '../MainMint/styles.css';
import ListBox from "../ListBox";
import ImageSlider from "../ImageSlider/ImageSlider"
import WhichNFT from '../../assets/whichnft.jpg';
import nftWines from '../../assets/vinhos-destaque-6.png';

import { mintBNB, mintCurrency, approveUSDT, approveBUSD } from "../../utils/nftController";

const currencies = [
  { name: 'BNB', icon: "bnb", _id: 100},
  { name: 'USDT', icon: "usdt", _id: 0},
  { name: 'BUSD', icon: "usd", _id: 1},
]

const MainMint = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);
    const [mintAmount, setMintAmount] = useState(1);
    const [loading, setLoading] = useState(false);

    const [slides, setSlides] = useState([]);

    const [selected, setSelected] = useState(currencies[0]);
    
    const [boxWidth, setBoxWidth] = useState(0);
    const [boxHeight, setBoxHeight] = useState(0);

    const [walletAddress, setWalletAddress] = useState("");
    const [signer, setSigner] = useState(undefined);

    useEffect(() => {
        if (window !== undefined){
          if(window.innerWidth >= 575){
              setBoxHeight(890);
          } else if (window.innerWidth < 575 && window.innerWidth > 544){
              setBoxHeight(1000);
          }
          else {
              setBoxHeight(1100);
          }
          
          setBoxWidth(window.innerWidth);
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
        <Flex justify = "center" align="center" padding="80px" color={"white" }>
            <Box zIndex={0} justify = "center" align="center" w={700} h={boxHeight} bg='#F7F1F0' border='10px' sx={{ borderRadius: "2%" }}>
                <Box margin = "20px" marginTop={50} color={"black"} fontFamily = "Config" fontSize={40}> COLECAO EL VINOS </Box>
                <Box margin = "20px" color={"black"} fontFamily = "Config" fontSize={22}> Conheca a primeira colecao de vinhos NFT's, com realidade aumentada inspirada nas criptomoedas. </Box>
                <Box margin = "20px" color={"black"} fontFamily = "Config" fontSize={22}> {} </Box>                
                {
                isConnected
                ?
                (
                    <div>
                        <div>
                            {
                            loading
                            ?
                            <Box w={300} h={300} bg='#a5a5a5' border='3px solid black' margin={"60px 20px 40px 20px"} sx={{ borderRadius: "3%" }} >
                                <div className="loader-container"></div>
                            </Box>
                            :
                            slides.length === 0
                            ?
                            <Box w={300} h={300} bg='#a5a5a5' border='3px solid black' margin={"60px 20px 40px 20px"} sx={{ borderRadius: "3%" }} >
                                <img 
                                    src={WhichNFT}
                                    alt="new"
                                    style = {{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                    }}
                                />
                            </Box>
                            :
                            <Box w={300} h={300} bg='#a5a5a5' border='3px solid black' margin={"60px 20px 40px 20px"} sx={{ borderRadius: "3%" }} >
                                <ImageSlider slides={slides} />
                            </Box>
                        }    
                            <ListBox selected = {selected} setSelected = {setSelected} signer = {signer} mintAmount = {mintAmount}/>
                            <Button
                                backgroundColor = "#A6013B"
                                borderRadius = "5px"
                                color = "white"
                                fontFamily = "CloserText"
                                fontSize={20}
                                onClick = {handleDecrement}
                                w = "35px"
                                h = "35px"
                                zIndex={1}
                            >
                                - 
                            </Button>
                                <input 
                                    type="text" 
                                    name="amount"
                                    placeholder="Quantia" 
                                    className="form-control" 
                                    value={mintAmount}
                                    onChange={() => {}}
                                    style = {{
                                        height: "37px",
                                        width: "160px",
                                        fontFamily: "CloserText",
                                        borderRadius: "5px",
                                        margin: 10,
                                        textAlign: "center",
                                        fontSize: 15,
                                        paddingBottom: 5,
                                        color: "#000",
                                        borderColor: "#000",
                                        borderWidth: "2px",
                                        zIndex:'1'
                                    }}
                                />
                            <Button
                                backgroundColor = "#A6013B"
                                borderRadius = "5px"
                                color = "white"
                                fontFamily = "CloserText"
                                fontSize={20}
                                onClick = {handleIncrement}
                                w = "35px"
                                h = "35px"
                                zIndex={1}
                            >
                                +
                            </Button>
                        </div>
                        <Button
                            backgroundColor = "#A6013B"
                            borderRadius = "8px"
                            color = "white"
                            fontFamily = "CloserText"
                            fontSize={20}
                            padding = "10px"
                            margin = "15px"
                            width={250}
                            onClick = {() => {                                
                                if(selected._id === 100) {
                                    handleMintBNB();
                                } else {
                                    getApproval(selected._id);
                                }
                            }}
                            zIndex={1}
                        >
                            Mint
                        </Button>
                    </div>
                )
                :
                (
                    <div>
                         <Box w={boxWidth-130} h={boxWidth-130} bg='#a5a5a5' border='3px solid black' margin={"90px 30px 0px 30px"} sx={{ borderRadius: "3%" }} maxWidth = {550} maxHeight={550}>
                                <img 
                                    src={nftWines}
                                    alt="new"
                                    style = {{
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                    }}
                                />
                            </Box>
                    </div>                
                )
            }
            </Box>
        </Flex>
    );
}

export default MainMint;