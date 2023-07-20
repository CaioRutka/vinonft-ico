import { useState, React, useEffect } from "react";
import { Box, Button, Flex, Image, Center } from "@chakra-ui/react";
import { isMobile } from 'react-device-detect';
import { ShoppingCartIcon, NewspaperIcon } from '@heroicons/react/24/solid'
import { useTranslation } from "react-i18next";

import '../../assets/fonts/Config-Regular.otf';
import './index.css';
import Wine from "../../assets/images/Retangulo2.png";

const About = ({ handleClickScroll }) => {
  const [isMobile, setIsBMobile] = useState(true);
  const [bigMonitor, setBigMonitor] = useState(true);

  const { t } = useTranslation();

  useEffect(() => {
    if (window !== undefined){
      if(window.innerWidth >= 575){
        setIsBMobile(false);
      }

      if(window.innerWidth > 575 && window.innerWidth <= 1750){
        setBigMonitor(false);
      }
    } 
  }, [])

    return (
        <div>
          {
            isMobile
            ?
            <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={1200} bg="#1F000A">
            <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'100%'} h = {'100%'}>
              <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'100%'} h = {"100%"} backgroundColor={"#1F000A"} padding={50}>
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={42}>
                  {t('aboutUs')}
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingTop={50}>
                  {t('aboutUs1')}
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingTop={25} paddingBottom={40}>
                  {t('aboutUs2')}
                </Box>
                
                <Box backgroundColor={"#A6013B"} w={"100%"} h={"20%"} paddingTop={25} paddingBottom={25} display={"flex"} flexDirection={"row"}> 
                  <Box backgroundColor={"#A6013B"} w={"100%"} h={"20%"} display={"flex"} flexDirection={"column"}> 
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={15} align={"center"}> 
                    {t('45million')}
                    </Center>    
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={10} align={"center"}> 
                    {t('drinkLikers')}
                    </Center>    
                  </Box> 
                  <Box backgroundColor={"#A6013B"} w={"100%"} h={"20%"} display={"flex"} flexDirection={"column"}> 
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={15} align={"center"}> 
                    {t('80million')}
                    </Center>    
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={10} align={"center"}> 
                    {t('blockchainUsers')}
                    </Center>    
                  </Box>    
                </Box> 

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingTop={25} paddingBottom={40}>
                  {t('aboutUs3')}
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
                  <Box marginTop={20}>
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
                       onClick = {() => { }}
                       zIndex={1}
                    >
                      {t('readWhitepaper')}
                    <NewspaperIcon className="ml-4 h-6 w-6 text-white-500" />
                    </Button>
                  </Box>

                  
                </Box>

              </Box>
            </Box>
            </Flex>
            :
            bigMonitor
            ?
            <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={870}bg="#1F000A">
            <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'100%'} h = {"100%"} backgroundColor={"#000"}>
              <Box zIndex={0} justify = "center" align="start" display={"flex"} flexDirection={"column"} w = {'130%'} h = {"100%"} backgroundColor={"#1F000A"} padding={75} paddingLeft={150}>
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={35}>
                  {t('aboutUs')}
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={17} paddingTop={25}>
                  {t('aboutUs1')}
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={17} paddingTop={50} paddingBottom={50}>
                  {t('aboutUs2')}
                </Box>
                
                <Box backgroundColor={"#A6013B"} w={"100%"} h={"10%"} paddingTop={60} paddingBottom={50} display={"flex"} flexDirection={"row"}> 
                  <Center backgroundColor={"#A6013B"} w={"100%"} h={"20%"} display={"flex"} flexDirection={"column"}> 
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={27} align={"center"}> 
                    {t('45million')}
                    </Center>    
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={15} align={"center"}> 
                     {t('drinkLikers')}
                    </Center>    
                  </Center> 
                  <Center backgroundColor={"#A6013B"} w={"100%"} h={"20%"} display={"flex"} flexDirection={"column"}> 
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={27} align={"center"}> 
                    {t('80million')}
                    </Center>    
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={15} align={"center"}> 
                    {t('blockchainUsers')}
                    </Center>    
                  </Center>    
                </Box> 

                <Box color={"white"} fontFamily = "Montserrat" fontSize={17} paddingTop={50} paddingBottom={50}>
                  {t('aboutUs3')}
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
              <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'100%'} h={"100%"}>
                <Image src = {Wine} objectFit='fit' />
              </Box>
            </Box>
            </Flex>
            :
            <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={870}bg="#1F000A">
            <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'100%'} h = {"100%"} backgroundColor={"#fff"}>
              <Box zIndex={0} justify = "center" align="start" display={"flex"} flexDirection={"column"} w = {'70%'} h = {"100%"} backgroundColor={"#1F000A"} padding={75} paddingLeft={150}>
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={35}>
                  {t('aboutUs')}
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={13} paddingTop={25}>
                  {t('aboutUs1')}
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={13} paddingTop={50} paddingBottom={50}>
                  {t('aboutUs2')}
                </Box>
                
                <Box backgroundColor={"#A6013B"} w={"100%"} h={"10%"} paddingTop={60} paddingBottom={50} display={"flex"} flexDirection={"row"}> 
                  <Center backgroundColor={"#A6013B"} w={"100%"} h={"20%"} display={"flex"} flexDirection={"column"}> 
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={27} align={"center"}> 
                    {t('45million')}
                    </Center>    
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={15} align={"center"}> 
                    {t('drinkLikers')}
                    </Center>    
                  </Center> 
                  <Center backgroundColor={"#A6013B"} w={"100%"} h={"20%"} display={"flex"} flexDirection={"column"}> 
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={27} align={"center"}> 
                    {t('80million')}
                    </Center>    
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={15} align={"center"}> 
                    {t('blockchainUsers')}
                    </Center>    
                  </Center>    
                </Box> 

                <Box color={"white"} fontFamily = "Montserrat" fontSize={13} paddingTop={50} paddingBottom={50}>
                  {t('aboutUs3')}
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
              <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'100%'} h={"100%"}>
                <Image src = {Wine} objectFit='fit' />
              </Box>          
            </Box>
            </Flex>
          }
        </div>
    );
}

export default About;