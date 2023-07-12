import { useState, React, useEffect } from "react";
import { Box, Center, Flex, Button, Stack } from "@chakra-ui/react";
import { ShoppingCartIcon, NewspaperIcon } from '@heroicons/react/24/solid'
import { isMobile } from 'react-device-detect';

import '../../assets/fonts/Config-Regular.otf';
import './index.css';

const Tokenomics = ({ handleClickScroll }) => {
    const [isMobile, setIsBMobile] = useState(true);

    useEffect(() => {
      if (window !== undefined){
        console.log(window.innerWidth)
        if(window.innerWidth >= 575){
          setIsBMobile(false);
        }
      } 
    }, [])


    return (
        <div>
        {
        isMobile
        ?
            <Flex zIndex={0} justify = "start" align="center" w = {'100%'} h={1700} bg="#20000B" display={"flex"} flexDirection={"column"} paddingTop={50}>
                <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'85%'} h={"85%"}>
                    <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'50%'} h={"100%"} >
                        <Box color={"white"} fontSize={40} fontFamily={"Playfair Display"} paddingBottom={50} w = {"100%"} justify = "start" align="start">
                            Tokenomics
                        </Box>

                        <Box color={"white"} marginBottom={15} w = {"100%"} justify = "start" align="start" borderLeftWidth={4} borderColor={"#A6013B"}>
                            <Box color={"#A6013B"} fontSize={15} paddingLeft={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                MAX SUPPLY:
                            </Box>

                            <Box color={"#fff"} fontSize={15} paddingLeft={25} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                1 MILHÃO DE TOKENS
                            </Box>
                        </Box>

                        <Box color={"white"} marginBottom={15} w = {"100%"} justify = "start" align="start" borderLeftWidth={4} borderColor={"#A6013B"}>
                            <Box color={"#A6013B"} fontSize={15} paddingLeft={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                NOME:
                            </Box>

                            <Box color={"#fff"} fontSize={15} paddingLeft={25} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                VINOCOIN
                            </Box>
                        </Box>

                        <Box color={"white"} marginBottom={20} w = {"100%"} justify = "start" align="start" borderLeftWidth={4} borderColor={"#A6013B"}>
                            <Box color={"#A6013B"} fontSize={15} paddingLeft={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                REDE:
                            </Box>

                            <Box color={"#fff"} fontSize={15} paddingLeft={25} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                BINANCE SMART CHAIN
                            </Box>
                        </Box>

                        <Box color={"white"} marginBottom={60} w = {"100%"} justify = "start" align="start" borderLeftWidth={4} borderColor={"#A6013B"}>
                            <Box color={"#A6013B"} fontSize={15} paddingLeft={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                CONTRATO:
                            </Box>

                            <Box color={"#fff"} fontSize={15} paddingLeft={25} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                0X7D9053541BC674C5F9B8C9 08BAB68FAD4A900211
                            </Box>
                        </Box>   

                        <Box display={"flex"} flexDirection={"column"}>
                            <Box>
                                <Button
                                   backgroundColor = "#A6013B"
                                   borderRadius = "8px"
                                   color = "white"
                                   fontFamily = "Montserrat"
                                   fontSize={20}
                                   padding = "10px"
                                   width={250}
                                   onClick = {() => { handleClickScroll(); }}
                                   zIndex={1}
                                >
                                  Comprar Vinocoin
                                <ShoppingCartIcon className="ml-4 h-6 w-6 text-white-500" />
                                </Button>
                              </Box>
                              <Box marginTop={20} marginBottom={50}>
                                <Button
                                   backgroundColor = "#1F000A"
                                   borderRadius = "8px"
                                   borderColor={"white"}
                                   borderWidth={1}
                                   color = "white"
                                   fontFamily = "Montserrat"
                                   fontSize={20}
                                   padding = "10px"
                                   width={250}
                                   onClick = {() => { window.open("https://elvinos.gitbook.io/whitepapper-vinocoin/", "_blank") }}
                                   zIndex={1}
                                >
                                  Ler Whitepaper
                                <NewspaperIcon className="ml-4 h-6 w-6 text-white-500" />
                                </Button>
                            </Box>                  
                        </Box>                     
                    </Box> 
                    <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'100%'} h={"100%"}>
                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"40%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    20%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                    Liquidez
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"60%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    20%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                    Reserva listagem exchanges
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"50%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "center" align="center" >
                                    10%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                    Pré-venda fase 1
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"50%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "center" align="center" >
                                    20%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                    Pré-venda fase 2
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"100%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "center" align="center" >
                                    10%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                    Empresa Elvinos para desenvolvimento de produtos futuros (bloqueado por 1 ano)
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"50%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "center" align="center" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                    Staking
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"50%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "center" align="center" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                    Marketing
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"50%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "center" align="center" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                    Equipe (Bloqueado por 6 meses)
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"50%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "center" align="center" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                    Advisors (Bloqueado por 6 meses)
                                </Center>
                            </Center>
                        </Box>
                    </Box> 
                </Box>   
            </Flex>
          :
            <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={1000} bg="#20000B" display={"flex"} flexDirection={"column"}>
                <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'85%'} h={"85%"}>
                    <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'50%'} h={"100%"} >
                        <Box color={"white"} fontSize={40} fontFamily={"Playfair Display"} paddingBottom={50} w = {"100%"} justify = "start" align="start">
                            Tokenomics
                        </Box>

                        <Box color={"white"} marginBottom={20} w = {"100%"} justify = "start" align="start" borderLeftWidth={4} borderColor={"#A6013B"}>
                            <Box color={"#A6013B"} fontSize={20} paddingLeft={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                MAX SUPPLY:
                            </Box>

                            <Box color={"#fff"} fontSize={20} paddingLeft={25} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                1 MILHÃO DE TOKENS
                            </Box>
                        </Box>

                        <Box color={"white"} marginBottom={20} w = {"100%"} justify = "start" align="start" borderLeftWidth={4} borderColor={"#A6013B"}>
                            <Box color={"#A6013B"} fontSize={20} paddingLeft={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                NOME:
                            </Box>

                            <Box color={"#fff"} fontSize={20} paddingLeft={25} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                VINOCOIN
                            </Box>
                        </Box>

                        <Box color={"white"} marginBottom={20} w = {"100%"} justify = "start" align="start" borderLeftWidth={4} borderColor={"#A6013B"}>
                            <Box color={"#A6013B"} fontSize={20} paddingLeft={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                REDE:
                            </Box>

                            <Box color={"#fff"} fontSize={20} paddingLeft={25} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                BINANCE SMART CHAIN
                            </Box>
                        </Box>

                        <Box color={"white"} marginBottom={60} w = {"100%"} justify = "start" align="start" borderLeftWidth={4} borderColor={"#A6013B"}>
                            <Box color={"#A6013B"} fontSize={20} paddingLeft={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                CONTRATO:
                            </Box>

                            <Box color={"#fff"} fontSize={18} paddingLeft={25} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                0X7D9053541BC674C5F9B8C908BAB68FAD4A900211
                            </Box>
                        </Box>   

                        <Box display={"flex"} flexDirection={"row"}>
                            <Box>
                                <Button
                                   backgroundColor = "#A6013B"
                                   borderRadius = "8px"
                                   color = "white"
                                   fontFamily = "Montserrat"
                                   fontSize={20}
                                   padding = "10px"
                                   width={250}
                                   onClick = {() => { handleClickScroll(); }}
                                   zIndex={1}
                                >
                                  Comprar Vinocoin
                                <ShoppingCartIcon className="ml-4 h-6 w-6 text-white-500" />
                                </Button>
                              </Box>
                              <Box marginLeft={20}>
                                <Button
                                   backgroundColor = "#1F000A"
                                   borderRadius = "8px"
                                   borderColor={"white"}
                                   borderWidth={1}
                                   color = "white"
                                   fontFamily = "Montserrat"
                                   fontSize={20}
                                   padding = "10px"
                                   width={250}
                                   onClick = {() => { window.open("https://elvinos.gitbook.io/whitepapper-vinocoin/", "_blank") }}
                                   zIndex={1}
                                >
                                  Ler Whitepaper
                                <NewspaperIcon className="ml-4 h-6 w-6 text-white-500" />
                                </Button>
                            </Box>                  
                        </Box>                     
                    </Box> 
                    <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'50%'} h={"100%"} paddingLeft={20}>
                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"30%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    20%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                    Liquidez
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"70%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    20%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                    Reserva listagem exchanges
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"50%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    10%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                    Pré-venda fase 1
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"50%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    20%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                    Pré-venda fase 2
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"100%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    10%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"80%"} justify = "start" align="start">
                                    Empresa Elvinos para desenvolvimento de produtos futuros (bloqueado por 1 ano).
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"50%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                    Staking
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"50%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                    Marketing
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"50%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                    Equipe (Bloqueado por 6 meses)
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"50%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={50} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={20} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                    Advisors (Bloqueado por 6 meses)
                                </Center>
                            </Center>
                        </Box>
                    </Box> 
                </Box>                
            </Flex>
            }
        </div>
    );
}

export default Tokenomics;