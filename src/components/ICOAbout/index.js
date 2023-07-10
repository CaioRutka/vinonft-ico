import { useState, React, useEffect } from "react";
import { Box, Center, Flex, Image, Button } from "@chakra-ui/react";
import { isMobile } from 'react-device-detect';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


import Back from "../../assets/images/bg-elvinos-2.png";
import tokens from "../../assets/images/e219c56b83b60ccfdc25ffeda216524a@2x.png";
import '../../assets/fonts/Config-Regular.otf';
import './index.css';

const ICOBox = () => {
  const [isMobile, setIsMobile] = useState(true);

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
                <Box color={"white"} fontFamily = "Playfair Display" fontSize={42} padding={50} paddingTop={100} paddingBottom={20}>
                  Sobre Nós
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingBottom={10}>
                A pré-venda da Elvinos ocorrerá dentro da plataforma da Elvinos e também disponibilizados em corretoras CEX e plataformas de lançamento. 
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingBottom={10}>
                Nosso objetivo é fornecer aos usuários uma compreensão clara do que eles estão comprando. 
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingBottom={10}>
                O aplicativo e a corretora oferecerão diversas opções de depósito, como PIX e boleto. 
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15}  paddingBottom={50}>
                Também aceitaremos cartão de débito e criptomoedas como BNB e USDT. Após o encerramento de uma fase, a fase seguinte terá início.
                </Box>

                <Center zIndex={0} justify = "center" align="center" w = {'100%'} paddingBottom={50}>
                  <Image src = {tokens} objectFit='fit'/>
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
                       onClick = {() => { }}
                       zIndex={1}
                    >
                      Comprar Vinocoin
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
                  Sobre Nós
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingLeft={100} paddingRight={50} paddingBottom={10}>
                A pré-venda da Elvinos ocorrerá dentro da plataforma da Elvinos e também disponibilizados em corretoras CEX e plataformas de lançamento. 
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingLeft={100} paddingRight={50} paddingBottom={10}>
                Nosso objetivo é fornecer aos usuários uma compreensão clara do que eles estão comprando. 
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingLeft={100} paddingRight={50} paddingBottom={10}>
                O aplicativo e a corretora oferecerão diversas opções de depósito, como PIX e boleto. 
                </Box>

                <Box color={"white"} fontFamily = "Montserrat" fontSize={15} paddingLeft={100} paddingRight={50} paddingBottom={50}>
                Também aceitaremos cartão de débito e criptomoedas como BNB e USDT. Após o encerramento de uma fase, a fase seguinte terá início.
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
                       onClick = {() => { }}
                       zIndex={1}
                    >
                      Comprar Vinocoin
                    <ShoppingCartIcon className="ml-4 h-6 w-6 text-white-500" />
                    </Button>
                  </Box>

              </Box>

              <Center zIndex={0} justify = "center" align="center" w = {'40%'}>
                <Image src = {tokens} objectFit='fit'/>
              </Center> 
            
            </Box>            
          </Flex>
        }
      </div>        
    );
}

export default ICOBox;