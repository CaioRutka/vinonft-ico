import { useState, React, useEffect } from "react";
import { Box, Center, Flex, Image, Stack } from "@chakra-ui/react";
import { isMobile } from 'react-device-detect';

import Moeda from "../../assets/images/Moeda-1.png";
import '../../assets/fonts/Config-Regular.otf';
import './index.css';

const Ecosystem = () => {
    const [isMobile, setIsBMobile] = useState(true);

    useEffect(() => {
      if (window !== undefined){
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
            <Flex zIndex={0} justify = "start" align="center" w = {'100%'} h={1350} bg="#20000B" display={"flex"} flexDirection={"column"} paddingTop={50}>
                <Center color={"white"} fontSize={40} fontFamily={"Playfair Display"} paddingBottom={20} justify = "center" align="center">
                    Conheça nosso Ecossistema
                </Center>
                <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'100%'} h={500}>
                    <Center display={"flex"} flexDirection={"column"} justify = "center" align="center">
                        <Box justify = "center" align="center" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300} borderBottomWidth={2} borderColor={"#A6013B"}>
                            Vinocoin
                        </Box>
                        <Box justify = "center" align="center" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                            Primeira criptomoeda do mundo voltada aos amantes de vinhos.
                        </Box>
                    </Center>
                    <Center display={"flex"} flexDirection={"column"} justify = "center" align="center">
                        <Box justify = "center" align="center" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300} borderBottomWidth={2} borderColor={"#A6013B"}>
                            Vinowallet
                        </Box>
                        <Box justify = "center" align="center" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                            A vinowallet é uma plataforma de armazenamento e pagamentos exclusiva para criptomoedas.
                        </Box>
                    </Center>
                    <Center display={"flex"} flexDirection={"column"} justify = "center" align="center">
                        <Box justify = "center" align="center" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300} borderBottomWidth={2} borderColor={"#A6013B"}>
                            Confraria
                        </Box>
                        <Box justify = "center" align="center" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                            A Confraria da El Vinos é um grupo exclusivo com eventos mensais composto por entusiastas e apreciadores de vinhos.
                        </Box>
                    </Center>

                    <Center w = {'100%'} h={'100%'} padding={10} >
                        <Image src = {Moeda} objectFit='fit' />
                    </Center>

                    <Center display={"flex"} flexDirection={"column"} justify = "center" align="center">
                        <Box justify = "center" align="center" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300} borderBottomWidth={2} borderColor={"#A6013B"}>
                        Vinoflix
                        </Box>
                        <Box justify = "center" align="center" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                        A Vinfolix é sua netflix sobre vinhos e também uma comunidade exclusiva para amantes da bebida.
                        </Box>
                    </Center>
                    <Center display={"flex"} flexDirection={"column"} justify = "center" align="center">
                        <Box justify = "center" align="center" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300} borderBottomWidth={2} borderColor={"#A6013B"}>
                        Elvino Place
                        </Box>
                        <Box justify = "center" align="center" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                        ElvinosPlace um eccomerce de vinhos da elvinos.
                        </Box>
                    </Center>
                    <Center display={"flex"} flexDirection={"column"} justify = "center" align="center">
                        <Box justify = "center" align="center" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300} borderBottomWidth={2} borderColor={"#A6013B"}>
                        NFTs El vinos
                        </Box>
                        <Box justify = "center" align="center" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                        Ao adquirir um nft de uma coleçao de vinhos, voce se torna socio daquela colelçao e compartilha beneficios exclusivos entre os membros.
                        </Box>
                    </Center>
                </Box>
            </Flex>
          :
            <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={700} bg="#20000B" display={"flex"} flexDirection={"column"}>
                <Center color={"white"} fontSize={40} fontFamily={"Playfair Display"}>
                    Conheça nosso Ecossistema
                </Center>
                <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'75%'} h={500}>
                    <Stack w = {'33%'} h={'100%'} display={"flex"} flexDirection={"column"} justify = "space-between" align="center">
                        <Box display={"flex"} flexDirection={"column"} justify = "center" align="center">
                            <Box justify = "start" align="start" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300} borderBottomWidth={2} borderColor={"#A6013B"}>
                                Vinocoin
                            </Box>
                            <Box justify = "start" align="start" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                                Primeira criptomoeda do mundo voltada aos amantes de vinhos.
                            </Box>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justify = "center" align="center">
                            <Box justify = "start" align="start" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300}  borderBottomWidth={2} borderColor={"#A6013B"}>
                                Vinowallet
                            </Box>
                            <Box justify = "start" align="start" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                                A vinowallet é uma plataforma de armazenamento e pagamentos exclusiva para criptomoedas.
                            </Box>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justify = "center" align="center">
                            <Box justify = "start" align="start" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300}  borderBottomWidth={2} borderColor={"#A6013B"}>
                                Confraria
                            </Box>
                            <Box justify = "start" align="start" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                                A Confraria da El Vinos é um grupo exclusivo com eventos mensais composto por entusiastas e apreciadores de vinhos.
                            </Box>
                        </Box>
                    </Stack>
                    <Center w = {'34%'} h={'100%'}>
                        <Image src = {Moeda} objectFit='fit' />
                    </Center>
                    <Stack w = {'33%'} h={'100%'} display={"flex"} flexDirection={"column"} justify = "space-between" align="center">
                        <Box display={"flex"} flexDirection={"column"} justify = "center" align="center">
                            <Box justify = "end" align="end" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300} borderBottomWidth={2} borderColor={"#A6013B"}>
                                Vinoflix
                            </Box>
                            <Box justify = "start" align="start" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={250}  paddingBottom={10} paddingTop={10}>
                                A Vinfolix é sua netflix sobre vinhos e também uma comunidade exclusiva para amantes da bebida.
                            </Box>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justify = "center" align="center">
                            <Box justify = "end" align="end" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300}  borderBottomWidth={2} borderColor={"#A6013B"}>
                                Elvino Place
                            </Box>
                            <Box justify = "start" align="start" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={250}  paddingBottom={10} paddingTop={10}>
                                ElvinosPlace um eccomerce de vinhos da elvinos.
                            </Box>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justify = "center" align="center">
                            <Box justify = "end" align="end" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300}  borderBottomWidth={2} borderColor={"#A6013B"}>
                                NFTs El vinos
                            </Box>
                            <Box justify = "start" align="start" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={250}  paddingBottom={10} paddingTop={10}>
                                Ao adquirir um nft de uma coleçao de vinhos, voce se torna socio daquela colelçao e compartilha beneficios exclusivos entre os membros.
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </Flex>
            }
        </div>
    );
}

export default Ecosystem;