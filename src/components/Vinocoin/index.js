import { useState, React, useEffect } from "react";
import { Box, Button, Flex, Image, Center } from "@chakra-ui/react";

import Wine from "../../assets/images/fundo-homem-token@2x.png";
import ThreeIcon from "../../assets/images/Untitled-1.png";
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
        <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'100%'} h={"100%"}>
          <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'100%'} h = {"70%"} backgroundColor={"#000"} padding={75}>
            <Box color={"white"} fontFamily = "Playfair Display" fontSize={42}>
              Vinocoin
            </Box>

            <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingTop={50}>
              Adquirir a vinocoin significa obter a primeira criptomoeda do mundo voltada a todos os amantes de vinhos.
            </Box>

            <Box color={"white"} fontFamily = "Playfair Display" fontSize={18} paddingTop={25} paddingBottom={25}>
              “Nosso objetivo é nos tornar a maior e mais inovadora empresa de vinhos do mundo. Faça parte disso!”
            </Box>
            
            <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingTop={25}>
              Elvinos Obtém lucros com ecossistema e recompra tokens no mercado fazendo com que se valorize e se torne mais escasso
            </Box>            
          </Box>   
          <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'100%'} h = {"auto"}>
            <Image src = {ThreeIcon} objectFit='fit'  paddingBottom={50}/>
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
              Adquirir a vinocoin significa obter a primeira criptomoeda do mundo voltada a todos os amantes de vinhos.
            </Box>

            <Box color={"white"} fontFamily = "Playfair Display" fontSize={20} paddingTop={25} paddingBottom={25}>
              “Nosso objetivo é nos tornar a maior e mais inovadora empresa de vinhos do mundo. Faça parte disso!”
            </Box>
            
            <Box color={"white"} fontFamily = "Montserrat" fontSize={18} paddingTop={25} paddingBottom={25}>
              Elvinos Obtém lucros com ecossistema e recompra tokens no mercado fazendo com que se valorize e se torne mais escasso
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