import { useState, React, useEffect } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import axios from "axios";
import copy from "copy-to-clipboard";

import '../../assets/fonts/Config-Regular.otf';
import '../PixMint/styles.css';
import nftWines from '../../assets/vinhos-destaque-6.png';
import WhichNFT from '../../assets/whichnft.jpg';

const MySwal = withReactContent(Swal)

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

const PixMint = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);
    const [mintAmount, setMintAmount] = useState(1);
    const [cpf, setCpf] = useState('');
    const [clientName, setClientName] = useState('');
    const [walletAddress, setWalletAddress] = useState('');

    const [boxWidth, setBoxWidth] = useState(0);
    const [boxHeight, setBoxHeight] = useState(0);

    const [pixCopiaECola, setPixCopiaECola] = useState('');
    const [QrCode, setQrCode] = useState('');

    const [loadingPix, setLoadingPix] = useState(false);

    const copyToClipboard = () => {
        copy(pixCopiaECola);
        alertContent("Sucesso!", "Pix copia e cola copiado com sucesso, \
        agora é só realizar o pagamento atraves do aplicativo do seu banco.", "success", 4000);
     }

    const handleClientName = e => {
        const { value } = e.target;
        setClientName(value);
    }
    
    const handleCpf = e => {
        const { value } = e.target;
        setCpf(value);
    }

    
    const gerarCobrançaPix = async () => {
        if (walletAddress !== null && walletAddress !== "" && cpf !== null && cpf !== "" && clientName !== null && clientName !== ""){
          try {
            setLoadingPix(true);

            axios.get(`https://app.api-elvinos.link/gerarcobranca?cpf=${cpf}&quantity=${(mintAmount)}&name=${clientName}&walletAddress=${walletAddress}`)
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

    useEffect (() => {
        setWalletAddress(accounts[0]);     
    }, [accounts[0]])

    useEffect(() => {
        if (window !== undefined){
          if(window.innerWidth >= 575){
              setBoxHeight(1100);
          } else if (window.innerWidth < 575 && window.innerWidth > 544){
              setBoxHeight(1200);
          }
          else {
              setBoxHeight(1300);
          }
          setBoxWidth(window.innerWidth);
        } 
      }, [])

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
                <Box margin = "0px" color={"black"} fontFamily = "Config" fontSize={22}> COMPRE NO PIX </Box>
                <Box margin = "20px" color={"black"} fontFamily = "Config" fontSize={22}> Conheca a primeira colecao de vinhos NFT's, com realidade aumentada inspirada nas criptomoedas. </Box>
                <Box margin = "20px" color={"black"} fontFamily = "Config" fontSize={22}> {} </Box>   

                {
                isConnected
                ?
                (
                <div>
                <div>
                    {
                        loadingPix === true
                        ?
                        <Box w={300} h={300} bg='#a5a5a5' border='3px solid black' margin={"60px 10px 40px 10px"} sx={{ borderRadius: "3%" }} >
                            <div className="loader-container"></div>
                        </Box>
                        :   
                        QrCode.length === 0
                        ?
                        <Box w={300} h={300} bg='#fff' border='3px solid black' margin={"60px 10px 40px 10px"} sx={{ borderRadius: "3%" }} >
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
                        <div>               
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
                                onClick = {copyToClipboard}
                                zIndex={1}
                            >      
                                Copiar
                            </Button>  
                        </div>
                    }
                </div>
                
                <div>
                    <input 
                        disabled
                        type="text" 
                        name="wallet"
                        placeholder="Endereço carteira BNB" 
                        className="form-control" 
                        value={accounts[0].substring(0,6) + "..."+accounts[0].substring(36,42)}
                        style = {{
                            height: "37px",
                            width: "250px",
                            fontFamily: "CloserText",
                            borderRadius: "5px",
                            margin: 10,
                            textAlign: "center",
                            fontSize: 16,
                            color: "#000",
                            borderColor: "#000",
                            borderWidth: "2px",
                            zIndex:'1'
                        }}
                    />
                </div>

                <div>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Name" 
                        className="form-control" 
                        value={clientName}
                        onChange={handleClientName}
                        style = {{
                            height: "37px",
                            width: "250px",
                            fontFamily: "CloserText",
                            borderRadius: "5px",
                            margin: 10,
                            textAlign: "center",
                            fontSize: 15,
                            color: "#000",
                            borderColor: "#000",
                            borderWidth: "2px",
                            zIndex:'1'
                        }}
                    />
                </div>

                <div>
                    <input 
                        type="number" 
                        name="cpf"
                        placeholder="CPF" 
                        className="form-control" 
                        pattern="[0-9]*"
                        value={cpf}
                        onChange={handleCpf}
                        style = {{
                            height: "37px",
                            width: "250px",
                            fontFamily: "CloserText",
                            borderRadius: "5px",
                            margin: 10,
                            textAlign: "center",
                            fontSize: 15,
                            color: "#000",
                            borderColor: "#000",
                            borderWidth: "2px",
                            zIndex:'1'
                        }}
                    />
                </div>
                <div>
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
                    onClick = {gerarCobrançaPix}
                    zIndex={1}
                >      
                    Mint no Pix
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

export default PixMint;