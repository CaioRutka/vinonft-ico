import { useState, React, useEffect } from "react";
import { Box, Button, Flex, Image, Center } from "@chakra-ui/react";
import { isMobile } from 'react-device-detect';
import { ShoppingCartIcon, NewspaperIcon } from '@heroicons/react/24/solid'

import '../../assets/fonts/Config-Regular.otf';
import './index.css';
import Wine from "../../assets/images/Retangulo2.png";

const About = ({ handleClickScroll }) => {
  const [isMobile, setIsBMobile] = useState(true);

  useEffect(() => {
    if (window !== undefined){
      if(window.innerWidth >= 575){
        setIsBMobile(false);
      }
    } 
  }, [])

    return (
        <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={1200}bg="#1F000A">
          {
            isMobile
            ?
            <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'100%'} h = {'100%'}>
              <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'100%'} h = {"100%"} backgroundColor={"#1F000A"} padding={50}>
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={42}>
                  Sobre Nós
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingTop={50}>
                  A El Vinos foi criada com objetivo de, a longo prazo, criar uma cultura de consumo do vinho, principalmente no Brasil, acreditamos que o vinho é muito mais que apenas uma bebida ele é uma experiencia gastronomica que deve ser marcante para todos os nossos clientes . 
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingTop={25} paddingBottom={40}>
                  Uma empresa que oferece plataforma de integração via blockchain e estratégias totalmente voltadas para o crescimento e desenvolvimento do setor de vinhos no Brasil, utilizando o que existe de mais moderno na tecnologia para proporcionar ao nosso cliente uma experiência única e marcante ao consumir uma garrafa de vinhos. Além disso, proporciona acessibilidade a investimentos rentáveis no segmento de vinhos e muitos outros projetos no ramo
                </Box>
                
                <Box backgroundColor={"#A6013B"} w={"100%"} h={"20%"} paddingTop={25} paddingBottom={25} display={"flex"} flexDirection={"row"}> 
                  <Box backgroundColor={"#A6013B"} w={"100%"} h={"20%"} display={"flex"} flexDirection={"column"}> 
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={15} align={"center"}> 
                     +45 milhões
                    </Center>    
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={10} align={"center"}> 
                     Apreciadores de Bebida
                    </Center>    
                  </Box> 
                  <Box backgroundColor={"#A6013B"} w={"100%"} h={"20%"} display={"flex"} flexDirection={"column"}> 
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={15} align={"center"}> 
                    +80 milhões
                    </Center>    
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={10} align={"center"}> 
                    Usúarios Blockchain
                    </Center>    
                  </Box>    
                </Box> 

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingTop={25} paddingBottom={40}>
                  A El Vinos é um ecossistema totalmente setorizado que visa atender todas as vertentes do universo do vinho. O ecossistema oferece múltiplos serviços, acessos a produtos e a investimentos dos mais variáveis modelos, sempre com o foco em levar a melhor experiência e lucratividade para o consumidor do vinho.
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
                      Ler Whitepaper
                    <NewspaperIcon className="ml-4 h-6 w-6 text-white-500" />
                    </Button>
                  </Box>

                  
                </Box>

              </Box>
            </Box>
            :
            <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'100%'} h = {"100%"} backgroundColor={"#fff"}>
              <Box zIndex={0} justify = "center" align="start" display={"flex"} flexDirection={"column"} w = {'50%'} h = {"100%"} backgroundColor={"#1F000A"} padding={75} paddingLeft={150}>
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={42}>
                  Sobre Nós
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={18} paddingTop={75}>
                  A El Vinos foi criada com objetivo de, a longo prazo, criar uma cultura de consumo do vinho, principalmente no Brasil, acreditamos que o vinho é muito mais que apenas uma bebida ele é uma experiencia gastronomica que deve ser marcante para todos os nossos clientes . 
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={18} paddingTop={50} paddingBottom={50}>
                  Uma empresa que oferece plataforma de integração via blockchain e estratégias totalmente voltadas para o crescimento e desenvolvimento do setor de vinhos no Brasil, utilizando o que existe de mais moderno na tecnologia para proporcionar ao nosso cliente uma experiência única e marcante ao consumir uma garrafa de vinhos. Além disso, proporciona acessibilidade a investimentos rentáveis no segmento de vinhos e muitos outros projetos no ramo
                </Box>
                
                <Box backgroundColor={"#A6013B"} w={"100%"} h={"20%"} paddingTop={50} paddingBottom={50} display={"flex"} flexDirection={"row"}> 
                  <Box backgroundColor={"#A6013B"} w={"100%"} h={"20%"} display={"flex"} flexDirection={"column"}> 
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={30} align={"center"}> 
                     +45 milhões
                    </Center>    
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={15} align={"center"}> 
                     Apreciadores de Bebida
                    </Center>    
                  </Box> 
                  <Box backgroundColor={"#A6013B"} w={"100%"} h={"20%"} display={"flex"} flexDirection={"column"}> 
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={30} align={"center"}> 
                    +80 milhões
                    </Center>    
                    <Center color={"white"} backgroundColor={"#A6013B"} fontFamily = "Playfair Display" fontSize={15} align={"center"}> 
                    Usúarios Blockchain
                    </Center>    
                  </Box>    
                </Box> 

                <Box color={"white"} fontFamily = "Montserrat" fontSize={18} paddingTop={50} paddingBottom={50}>
                  A El Vinos é um ecossistema totalmente setorizado que visa atender todas as vertentes do universo do vinho. O ecossistema oferece múltiplos serviços, acessos a produtos e a investimentos dos mais variáveis modelos, sempre com o foco em levar a melhor experiência e lucratividade para o consumidor do vinho.
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
              <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'50%'} h={"100%"}>
                <Image src = {Wine} objectFit='fit'/>
              </Box>          
            </Box>
          }
        </Flex>
    );
}

export default About;