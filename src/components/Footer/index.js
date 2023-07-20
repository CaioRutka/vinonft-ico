import { useState, React, useEffect } from "react";
import { Box, Flex, Center, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import '../../assets/fonts/CloserText-Light.otf';
import logoElVinos from "../../assets/images/logo-elvinos-branco.png";

const Footer = () => {
    const [mobile, setMobile] = useState(true);

    const { t } = useTranslation();

    useEffect(() => {
        if (window !== undefined){
          if(window.innerWidth >= 575){
            setMobile(false);
          }
        }
      }, [])

    return (
        <div>
            {
                mobile
                ?
                <Flex justify = "center" align="center" flexDirection = "column" padding="28px" backgroundColor={"#1F000A"} style = {{opacity: 0.9}}>            
                    <Link to = "/">
                        <Image src = {logoElVinos} width={200} objectFit='fit' paddingTop={20}/>
                    </Link>
                    <Center margin = "20px" color={"white"} fontFamily = "Montserrat" fontSize={18} align={"center"} w = {350}> {t('footter')}  </Center> 
                    <Box w={"30%"} h={1} bg='grey'/>
                    <Center margin = "20px" color={"white"} fontFamily = "Montserrat" fontSize={18} align={"center"}> {t('footterCopy')}  </Center>
                </Flex>
                :
                <Flex justify = "center" align="center" flexDirection = "column" padding="28px" backgroundColor={"#1F000A"} style = {{opacity: 0.9}}>            
                    <Link to = "/">
                        <Image src = {logoElVinos} width={200} objectFit='fit' paddingTop={20}/>
                    </Link>
                    <Center margin = "20px" color={"white"} fontFamily = "Montserrat" fontSize={18} align={"center"} w = {600}> {t('footter')} </Center> 
                    <Box w={"30%"} h={1} bg='grey'/>
                    <Center margin = "20px" color={"white"} fontFamily = "Montserrat" fontSize={18} align={"center"}> {t('footterCopy')}  </Center>
                </Flex>
            }
        </div>
    );
}

export default Footer;