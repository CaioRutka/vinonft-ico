import { useState, React, useEffect } from "react";
import { Box, Center, Flex, Image, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import i18n from '../../i18n';
import tokens from "../../assets/images/tokens.png";
import tokensEN from "../../assets/images/tokensEN.png";
import '../../assets/fonts/Config-Regular.otf';
import './index.css';

const ICOBox = ({handleClickScroll}) => {
  const [isMobile, setIsMobile] = useState(true);

  const { t } = useTranslation();

  useEffect(() => {
    if (window !== undefined){
      if(window.innerWidth >= 575){
        setIsMobile(false);
      }
    } 
  }, [])

    return (
      <div>
        {
          isMobile
          ?
          <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={1200} >
            <Box w = {'70%'} h = {'70%'} display={"flex"} flexDirection={"column"}>

              <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'100%'} h = {"100%"}>
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={42} padding={50} paddingTop={0} paddingBottom={20} justify = "center" align="center">
                {t('preSale')}
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingBottom={10}>
                {t('preSaleOne')}
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingBottom={10}>
                {t('preSaleTwo')}
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingBottom={10}>
                {t('preSaleThree')}
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15}  paddingBottom={50}>
                {t('preSaleFour')}
                </Box>

                <Center zIndex={0} justify = "center" align="center" w = {'100%'} paddingBottom={50}>
                  <Image src = {i18n.language === "en" ? tokensEN : tokens} objectFit='fit'/>
                </Center> 

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15}>
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

              </Box>             
            
            </Box>            
          </Flex>
          :
          <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={900} >
            <Box w = {'70%'} h = {'70%'} display={"flex"} flexDirection={"row"}>

              <Box zIndex={0} justify = "center" align="start" display={"flex"} flexDirection={"column"} w = {'50%'} h = {"100%"}>
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={42} padding={100} paddingBottom={20}>
                {t('preSale')}
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingLeft={100} paddingRight={50} paddingBottom={10}>
                {t('preSaleOne')}
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingLeft={100} paddingRight={50} paddingBottom={10}>
                {t('preSaleTwo')}
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingLeft={100} paddingRight={50} paddingBottom={10}>
                {t('preSaleThree')}
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingLeft={100} paddingRight={50} paddingBottom={50}>
                {t('preSaleFour')}
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingLeft={100} paddingRight={50}>
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

              </Box>

              <Center zIndex={0} justify = "center" align="center" w = {'40%'}>
                <Image src = {i18n.language === "en" ? tokensEN : tokens} objectFit='fit'/>
              </Center> 
            
            </Box>            
          </Flex>
        }
      </div>        
    );
}

export default ICOBox;