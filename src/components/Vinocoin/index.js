import { useState, React, useEffect } from "react";
import { Box, Button, Flex, Image, Center } from "@chakra-ui/react";

import Wine from "../../assets/images/fundo-homem-token@2x.png";
import ThreeIcon from "../../assets/images/3-icones-elvinos@2x.png";
import '../../assets/fonts/Config-Regular.otf';
import './index.css';

const Vinocoin = () => {
  const [isMobile, setIsBMobile] = useState(true);

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
        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'100%'} h={"100%"}>
          <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'100%'} h = {"100%"} backgroundColor={"#000"} padding={75} >
            <Box color={"white"} fontFamily = "Playfair Display" fontSize={42}>
              Vinocoin
            </Box>

            <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingTop={50}>
              Adquirir a Vinocoin significa obter a primeira criptomoeda do mundo voltada a todos os amantes de vinhos.
            </Box>

            <Box color={"white"} fontFamily = "Playfair Display" fontSize={18} paddingTop={25} paddingBottom={25}>
              “Nosso objetivo é nos tornar a maior e mais inovadora empresa de vinhos do mundo. Faça parte disso!”
            </Box>
            
            <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingTop={25} paddingBottom={25}>
              A Vinocoin foi desenvolvida para financiar parte da operação da elvinos e posteriormente devolver aos detentores dos tokens seguindo o processo:
            </Box>

            <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} h = {'100%'}>
              <Image src = {ThreeIcon} objectFit='fit'/>
            </Box> 
          </Box>                      
        </Box>
        :
        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'100%'} h={"100%"}>
          <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'60%'} h={"100%"}>
            <Image src = {Wine} objectFit='fit'/>
          </Box>  
          <Box zIndex={0} justify = "center" align="start" display={"flex"} flexDirection={"column"} w = {'50%'} h = {"100%"} backgroundColor={"#000"} padding={75} paddingLeft={150}>
            <Box color={"white"} fontFamily = "Playfair Display" fontSize={42}>
              Vinocoin
            </Box>

            <Box color={"white"} fontFamily = "Montserrat" fontSize={18} paddingTop={50}>
              Adquirir a Vinocoin significa obter a primeira criptomoeda do mundo voltada a todos os amantes de vinhos.
            </Box>

            <Box color={"white"} fontFamily = "Playfair Display" fontSize={20} paddingTop={25} paddingBottom={25}>
              “Nosso objetivo é nos tornar a maior e mais inovadora empresa de vinhos do mundo. Faça parte disso!”
            </Box>
            
            <Box color={"white"} fontFamily = "Montserrat" fontSize={18} paddingTop={25} paddingBottom={25}>
              A Vinocoin foi desenvolvida para financiar parte da operação da elvinos e posteriormente devolver aos detentores dos tokens seguindo o processo:
            </Box>

            <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'100%'}>
              <Image src = {ThreeIcon} objectFit='fit'/>
            </Box> 
          </Box>                      
        </Box>
      }
    </Flex>
    );
}

export default Vinocoin;