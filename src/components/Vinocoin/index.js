import { useState, React, useEffect } from "react";
import { Box, Flex, Image, Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import i18n from '../../i18n';
import Wine from "../../assets/images/fundo-homem-token@2x.png";
import ThreeIcon from "../../assets/images/threeIcon.png";
import ThreeIconEn from "../../assets/images/threeIconEN.png";
import '../../assets/fonts/Config-Regular.otf';
import './index.css';

const Vinocoin = () => {
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
      <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={800}bg="#1F000A">
      {
        isMobile
        ?
        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'100%'} h={"100%"}>
          <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'100%'} h = {"70%"} backgroundColor={"#000"} padding={75}>
            <Box color={"white"} fontFamily = "Playfair Display" fontSize={42}>
              Vinocoin
            </Box>

            <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingTop={50}>
              {t('acquireVinocoin')}
            </Box>

            <Box color={"white"} fontFamily = "Playfair Display" fontSize={18} paddingTop={25} paddingBottom={25}>
              {t('ourObjective')}
            </Box>
            
            <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingTop={25}>
             {t('elvinosLucros')}
            </Box>            
          </Box>   
          <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'100%'} h = {"auto"}>
            <Image src = {i18n.language === "en" ? ThreeIconEn : ThreeIcon} objectFit='fit'  paddingBottom={50}/>
          </Box>                    
        </Box>
        :
        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'100%'} h={"100%"}>
          <Center zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'50%'} h={"100%"} backgroundColor={"#000"}>
            <Image src = {Wine} h={"70%"} objectFit='fit'/>
          </Center>  
          <Box zIndex={0} justify = "center" align="start" display={"flex"} flexDirection={"column"} w = {'50%'} h = {"100%"} backgroundColor={"#000"} padding={75} paddingLeft={150}>
            <Box color={"white"} fontFamily = "Playfair Display" fontSize={42}>
              Vinocoin
            </Box>

            <Box color={"white"} fontFamily = "Montserrat" fontSize={18} paddingTop={50}>
              {t('acquireVinocoin')}
            </Box>

            <Box color={"white"} fontFamily = "Playfair Display" fontSize={20} paddingTop={25} paddingBottom={25}>
              {t('ourObjective')}
            </Box>
            
            <Box color={"white"} fontFamily = "Montserrat" fontSize={18} paddingTop={25} paddingBottom={25}>
              {t('elvinosLucros')}
            </Box>

            <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'100%'}>
              <Image src = {i18n.language === "en" ? ThreeIconEn : ThreeIcon} objectFit='fit'/>
            </Box> 
          </Box>                      
        </Box>
      }
    </Flex>
    );
}

export default Vinocoin;