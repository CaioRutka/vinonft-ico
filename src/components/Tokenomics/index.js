import { useState, React, useEffect } from "react";
import { Box, Center, Flex, Button, Stack } from "@chakra-ui/react";
import { ShoppingCartIcon, NewspaperIcon } from '@heroicons/react/24/solid'
import { useTranslation } from "react-i18next";

import '../../assets/fonts/Config-Regular.otf';
import './index.css';

const Tokenomics = ({ handleClickScroll }) => {
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
            <Flex zIndex={0} justify = "start" align="center" w = {'100%'} h={1300} bg="#20000B" display={"flex"} flexDirection={"column"} paddingTop={50}>
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
                                {t('oneMillionTokens')}
                            </Box>
                        </Box>

                        <Box color={"white"} marginBottom={15} w = {"100%"} justify = "start" align="start" borderLeftWidth={4} borderColor={"#A6013B"}>
                            <Box color={"#A6013B"} fontSize={15} paddingLeft={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                            {t('nameTokenomics')}
                            </Box>

                            <Box color={"#fff"} fontSize={15} paddingLeft={25} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                VINOCOIN
                            </Box>
                        </Box>

                        <Box color={"white"} marginBottom={20} w = {"100%"} justify = "start" align="start" borderLeftWidth={4} borderColor={"#A6013B"}>
                            <Box color={"#A6013B"} fontSize={15} paddingLeft={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                            {t('chainTokenomics')}
                            </Box>

                            <Box color={"#fff"} fontSize={15} paddingLeft={25} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                BINANCE SMART CHAIN
                            </Box>
                        </Box>

                        <Box color={"white"} marginBottom={60} w = {"100%"} justify = "start" align="start" borderLeftWidth={4} borderColor={"#A6013B"}>
                            <Box color={"#A6013B"} fontSize={15} paddingLeft={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                            {t('contractTokenomics')}
                            </Box>

                            <Box color={"#fff"} fontSize={12.5} paddingLeft={25} w = {"100%"} fontFamily={"Montserrat"} justify = "start" align="start">
                                0x8e6754b60f04c38c908f40d545a32cde7e11239c
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
                                  {t('buyVinocoin')}
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
                                {t('readWhitepaper')}
                                <NewspaperIcon className="ml-4 h-6 w-6 text-white-500" />
                                </Button>
                            </Box>                  
                        </Box>                     
                    </Box> 
                    <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'100%'} h={"100%"}>
                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"40%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    30%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                    DEX/CEX
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"60%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                    Staking
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"50%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "center" align="center" >
                                    10%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                {t('privateSale')}
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"50%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "center" align="center" >
                                    20%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                {t('presalesTokenomics')}
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"100%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "center" align="center" >
                                    10%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                {t('futureProjectsTokenomics')}
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"50%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "center" align="center" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                {t('teamTokenomics')}
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"50%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "center" align="center" >
                                    10%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                    Marketing
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"50%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "center" align="center" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                    Airdrop
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"50%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "center" align="center" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "center" align="center">
                                    Advisors
                                </Center>
                            </Center>
                        </Box>
                    </Box> 
                </Box>   
            </Flex>
          :
            <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={650} bg="#20000B" display={"flex"} flexDirection={"column"}>
                <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'85%'} h={"85%"}>
                    <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'80%'} h={"100%"}>
                        <Box color={"white"} fontSize={40} fontFamily={"Playfair Display"} paddingBottom={50} w = {"100%"} justify = "start" align="start">
                            Tokenomics
                        </Box>

                        <Box color={"white"} marginBottom={20} w = {"100%"} justify = "start" align="start" borderLeftWidth={4} borderColor={"#A6013B"}>
                            <Box color={"#A6013B"} fontSize={20} paddingLeft={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                MAX SUPPLY:
                            </Box>

                            <Box color={"#fff"} fontSize={20} paddingLeft={25} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                            {t('oneMillionTokens')}
                            </Box>
                        </Box>

                        <Box color={"white"} marginBottom={20} w = {"100%"} justify = "start" align="start" borderLeftWidth={4} borderColor={"#A6013B"}>
                            <Box color={"#A6013B"} fontSize={20} paddingLeft={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                            {t('nameTokenomics')}
                            </Box>

                            <Box color={"#fff"} fontSize={20} paddingLeft={25} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                VINOCOIN
                            </Box>
                        </Box>

                        <Box color={"white"} marginBottom={20} w = {"100%"} justify = "start" align="start" borderLeftWidth={4} borderColor={"#A6013B"}>
                            <Box color={"#A6013B"} fontSize={20} paddingLeft={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                            {t('chainTokenomics')}
                            </Box>

                            <Box color={"#fff"} fontSize={20} paddingLeft={25} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                BINANCE SMART CHAIN
                            </Box>
                        </Box>

                        <Box color={"white"} marginBottom={60} w = {"100%"} justify = "start" align="start" borderLeftWidth={4} borderColor={"#A6013B"}>
                            <Box color={"#A6013B"} fontSize={20} paddingLeft={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                            {t('contractTokenomics')}
                            </Box>

                            <Box color={"#fff"} fontSize={18} paddingLeft={25} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                0x8e6754b60f04c38c908f40d545a32cde7e11239c
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
                                    {t('buyVinocoin')}
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
                                 {t('readWhitepaper')}
                                <NewspaperIcon className="ml-4 h-6 w-6 text-white-500" />
                                </Button>
                            </Box>                  
                        </Box>                     
                    </Box> 
                    <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'50%'} h={"100%"} paddingLeft={20}>
                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"30%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    30%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                    DEX/CEX
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"70%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                    Staking
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"50%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    10%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                {t('privateSale')}
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"50%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    20%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                {t('presalesTokenomics')}
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"100%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    10%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"80%"} justify = "start" align="start" textAlign={"center"}>
                                {t('futureProjectsTokenomics')}
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"50%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                {t('teamTokenomics')}
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"50%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    10%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                    Marketing
                                </Center>
                            </Center>
                        </Box>

                        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"}  marginBottom={20}>
                            <Center display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#A6013B"} h = {"100%"} w = {"50%"} backgroundColor={"#A6013B"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                    Airdrop
                                </Center>
                            </Center>

                            <Center marginLeft={20} display={"flex"} flexDirection={"column"} color={"white"} marginBottom={20} justify = "start" align="start" borderWidth={4} borderRadius={"3%"} borderColor={"#7C012C"} h = {"100%"} w = {"50%"} backgroundColor={"#7C012C"}>
                                <Center color={"white"} fontSize={25} fontFamily={"Playfair Display"} w = {"100%"} justify = "start" align="start" >
                                    5%
                                </Center>

                                <Center color={"white"} fontSize={14} fontFamily={"Montserrat"} w = {"100%"} justify = "start" align="start">
                                    Advisors
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