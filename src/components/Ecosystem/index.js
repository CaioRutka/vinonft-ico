import { useState, React, useEffect } from "react";
import { Box, Center, Flex, Image, Stack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import Moeda from "../../assets/images/Moeda-1.png";
import '../../assets/fonts/Config-Regular.otf';
import './index.css';

const Ecosystem = () => {
    const [isMobile, setIsBMobile] = useState(true);

    const { t } = useTranslation();

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
            <Flex zIndex={0} justify = "start" align="center" w = {'100%'} h={1400} bg="#20000B" display={"flex"} flexDirection={"column"} paddingTop={50}>
                <Center color={"white"} fontSize={40} fontFamily={"Playfair Display"} paddingBottom={20} justify = "center" align="center">
                    {t('meetOutEco')}
                </Center>
                <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'100%'} h={500}>
                    <Center display={"flex"} flexDirection={"column"} justify = "center" align="center">
                        <Box justify = "center" align="center" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300} borderBottomWidth={2} borderColor={"#A6013B"}>
                            Vinocoin
                        </Box>
                        <Box justify = "center" align="center" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                            {t('vinocoin')}
                        </Box>
                    </Center>
                    <Center display={"flex"} flexDirection={"column"} justify = "center" align="center">
                        <Box justify = "center" align="center" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300} borderBottomWidth={2} borderColor={"#A6013B"}>
                            Vinowallet
                        </Box>
                        <Box justify = "center" align="center" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                           {t('vinowallet')}
                        </Box>
                    </Center>
                    <Center display={"flex"} flexDirection={"column"} justify = "center" align="center">
                        <Box justify = "center" align="center" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300} borderBottomWidth={2} borderColor={"#A6013B"}>
                            Confraria
                        </Box>
                        <Box justify = "center" align="center" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                            {t('confraria')}
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
                        {t('vinoflix')}
                        </Box>
                    </Center>
                    <Center display={"flex"} flexDirection={"column"} justify = "center" align="center">
                        <Box justify = "center" align="center" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300} borderBottomWidth={2} borderColor={"#A6013B"}>
                        Elvino Place
                        </Box>
                        <Box justify = "center" align="center" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                        {t('elvinosplace')}
                        </Box>
                    </Center>
                    <Center display={"flex"} flexDirection={"column"} justify = "center" align="center">
                        <Box justify = "center" align="center" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300} borderBottomWidth={2} borderColor={"#A6013B"}>
                        NFTs El vinos
                        </Box>
                        <Box justify = "center" align="center" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                        {t('nfts')}
                        </Box>
                    </Center>
                </Box>
            </Flex>
          :
            <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={700} bg="#20000B" display={"flex"} flexDirection={"column"}>
                <Center color={"white"} fontSize={40} fontFamily={"Playfair Display"}>
                    {t('meetOutEco')}
                </Center>
                <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'75%'} h={500}>
                    <Stack w = {'33%'} h={'100%'} display={"flex"} flexDirection={"column"} justify = "space-between" align="center">
                        <Box display={"flex"} flexDirection={"column"} justify = "center" align="center">
                            <Box justify = "start" align="start" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300} borderBottomWidth={2} borderColor={"#A6013B"}>
                                Vinocoin
                            </Box>
                            <Box justify = "start" align="start" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                                {t('vinocoin')}
                            </Box>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justify = "center" align="center">
                            <Box justify = "start" align="start" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300}  borderBottomWidth={2} borderColor={"#A6013B"}>
                                Vinowallet
                            </Box>
                            <Box justify = "start" align="start" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                                {t('vinowallet')}
                            </Box>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justify = "center" align="center">
                            <Box justify = "start" align="start" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300}  borderBottomWidth={2} borderColor={"#A6013B"}>
                                Confraria
                            </Box>
                            <Box justify = "start" align="start" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={300}  paddingBottom={10} paddingTop={10}>
                                {t('confraria')}
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
                                {t('vinoflix')}
                            </Box>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justify = "center" align="center">
                            <Box justify = "end" align="end" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300}  borderBottomWidth={2} borderColor={"#A6013B"}>
                                Elvino Place
                            </Box>
                            <Box justify = "start" align="start" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={250}  paddingBottom={10} paddingTop={10}>
                                {t('elvinosplace')}
                            </Box>
                        </Box>
                        <Box display={"flex"} flexDirection={"column"} justify = "center" align="center">
                            <Box justify = "end" align="end" color={"white"} fontSize={30} fontFamily={"Playfair Display"} w={300}  borderBottomWidth={2} borderColor={"#A6013B"}>
                                NFTs El vinos
                            </Box>
                            <Box justify = "start" align="start" color={"white"} fontSize={15} fontFamily={"Montserrat"} w={250}  paddingBottom={10} paddingTop={10}>
                                {t('nfts')}
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