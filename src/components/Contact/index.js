import { useState, React, useEffect } from "react";
import { Box, Image, Flex, Center } from "@chakra-ui/react";

import Imagem from "../../assets/images/fundo-homem-token.png";

import Alexandre from "../../assets/images/alexandre.jpg";
import Gabriely from "../../assets/images/gabriely.jpg";
import Caio from "../../assets/images/caio.jpg";
import Puppe from "../../assets/images/puppe.jpg";
import Thiago from "../../assets/images/thiago.jpg";
import Patrick from "../../assets/images/patrick.jpg";

import '../../assets/fonts/Config-Regular.otf';
import './index.css';

const Contact = () => {
  const [isMobile, setIsBMobile] = useState(true);

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
        <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={2100}>
          <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'85%'} h={"85%"} >
                <Box color={"white"} fontSize={40} fontFamily={"Playfair Display"} paddingBottom={25} w = {"100%"} h = {"5%"} justify = "center" align="center">
                    Team
                </Box>

                <Flex w = {"100%"} h = {"90%"} justify = "space-between" align="space-between" display={"flex"} flexDirection={"column"}>
                  <Center h = {"100%"} w = {"100%"} display={"flex"} flexDirection={"column"} marginBottom = {15}>
                    <Flex h = {200} w = {200} borderRadius={200} backgroundColor={"white"} borderColor={"#A6013B"} borderWidth={5}>
                      <Image src = {Alexandre} borderRadius={200} objectFit='fit' filter={"grayscale(100%)"}/>
                    </Flex>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"} paddingTop={20}>
                      Alexandre Benites
                    </Box>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"}>
                      CEO
                    </Box>
                  </Center>

                  <Center h = {"100%"} w = {"100%"}  display={"flex"} flexDirection={"column"} marginBottom = {15}>
                    <Flex h = {200} w = {200} borderRadius={200} backgroundColor={"white"} borderColor={"#A6013B"} borderWidth={5}>
                      <Image src = {Gabriely} borderRadius={200} objectFit='fit' filter={"grayscale(100%)"}/>
                    </Flex>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"} paddingTop={20}>
                      Gabriely Eleotério
                    </Box>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"}>
                      COCEO
                    </Box>
                  </Center>

                  <Center h = {"100%"} w = {"100%"}  display={"flex"} flexDirection={"column"} marginBottom = {15}>
                    <Flex h = {200} w = {200} borderRadius={200} backgroundColor={"white"} borderColor={"#A6013B"} borderWidth={5}>
                      <Image src = {Caio} borderRadius={200} objectFit='fit' filter={"grayscale(100%)"}/>
                    </Flex>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"} paddingTop={20}>
                      Caio Rutka
                    </Box>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"}>
                      CTO
                    </Box>
                  </Center>

                  <Center h = {"100%"} w = {"100%"}  display={"flex"} flexDirection={"column"} marginBottom = {15}>
                    <Flex h = {200} w = {200} borderRadius={200} backgroundColor={"white"} borderColor={"#A6013B"} borderWidth={5} >
                      <Image src = {Puppe} borderRadius={200} objectFit='fit' filter={"grayscale(100%)"}/>
                    </Flex>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"} paddingTop={20}>
                      Matheus Puppe
                    </Box>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"}>
                      Diretor jurídico
                    </Box>
                  </Center>

                  <Center h = {"100%"} w = {"100%"}  display={"flex"} flexDirection={"column"} marginBottom = {15}>
                    <Flex h = {200} w = {200} borderRadius={200} backgroundColor={"white"} borderColor={"#A6013B"} borderWidth={5}>
                      <Image src = {Thiago} borderRadius={200} objectFit='fit' filter={"grayscale(100%)"}/>
                    </Flex>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"} paddingTop={20}>
                      Thiago Monteiro
                    </Box>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"}>
                      Advisor
                    </Box>
                  </Center>

                  <Center h = {"100%"} w = {"100%"}  display={"flex"} flexDirection={"column"} marginBottom = {15}>
                    <Flex h = {200} w = {200} borderRadius={200} backgroundColor={"white"} borderColor={"#A6013B"} borderWidth={5}>
                      <Image src = {Patrick} borderRadius={200} objectFit='fit' filter={"grayscale(100%)"}/>
                    </Flex>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"} paddingTop={20}>
                      Patrick Fernandes
                    </Box>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"}>
                      CFO
                    </Box>
                  </Center>
                </Flex>
            </Box>
        </Flex>
        :
        <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={500} >
          <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'85%'} h={"85%"} >
                <Box color={"white"} fontSize={40} fontFamily={"Playfair Display"} paddingBottom={100} w = {"100%"} h = {"10%"} justify = "center" align="center">
                    Team
                </Box>

                <Flex w = {"100%"} h = {"90%"} justify = "space-between" align="space-between" display={"flex"} flexDirection={"row"}>
                  <Box h = {"100%"} w = {250} display={"flex"} flexDirection={"column"}>
                    <Flex h = {180} w = {180} borderRadius={180} backgroundColor={"white"} borderColor={"#A6013B"} borderWidth={5}>
                      <Image src = {Alexandre} borderRadius={200} objectFit='fit' filter={"grayscale(100%)"}/>
                    </Flex>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"} paddingTop={20}>
                      Alexandre Benites
                    </Box>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"}>
                      CEO
                    </Box>
                  </Box>

                  <Box h = {"100%"} w = {250} display={"flex"} flexDirection={"column"}>
                    <Flex h = {180} w = {180} borderRadius={180} backgroundColor={"white"} borderColor={"#A6013B"} borderWidth={5}>
                      <Image src = {Gabriely} borderRadius={200} objectFit='fit' filter={"grayscale(100%)"}/>
                    </Flex>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"} paddingTop={20}>
                      Gabriely Eleotério
                    </Box>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"}>
                      COCEO
                    </Box>
                  </Box>

                  <Box h = {"100%"} w = {250} display={"flex"} flexDirection={"column"}>
                    <Flex h = {180} w = {180} borderRadius={180} backgroundColor={"white"} borderColor={"#A6013B"} borderWidth={5}>
                      <Image src = {Caio} borderRadius={200} objectFit='fit' filter={"grayscale(100%)"}/>
                    </Flex>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"} paddingTop={20}>
                      Caio Rutka
                    </Box>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"}>
                      CTO
                    </Box>
                  </Box>

                  <Box h = {"100%"} w = {250} display={"flex"} flexDirection={"column"}>
                    <Flex h = {180} w = {180} borderRadius={180} backgroundColor={"white"} borderColor={"#A6013B"} borderWidth={5} >
                      <Image src = {Puppe} borderRadius={200} objectFit='fit' filter={"grayscale(100%)"}/>
                    </Flex>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"} paddingTop={20}>
                      Matheus Puppe
                    </Box>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"}>
                      Diretor jurídico
                    </Box>
                  </Box>

                  <Box h = {"100%"} w = {250} display={"flex"} flexDirection={"column"}>
                    <Flex h = {180} w = {180} borderRadius={180} backgroundColor={"white"} borderColor={"#A6013B"} borderWidth={5}>
                      <Image src = {Thiago} borderRadius={200} objectFit='fit' filter={"grayscale(100%)"}/>
                    </Flex>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"} paddingTop={20}>
                      Thiago Monteiro
                    </Box>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"}>
                      Advisor
                    </Box>
                  </Box>

                  <Box h = {"100%"} w = {250} display={"flex"} flexDirection={"column"}>
                    <Flex h = {180} w = {180} borderRadius={180} backgroundColor={"white"} borderColor={"#A6013B"} borderWidth={5}>
                      <Image src = {Patrick} borderRadius={200} objectFit='fit' filter={"grayscale(100%)"}/>
                    </Flex>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"} paddingTop={20}>
                      Patrick Fernandes
                    </Box>

                    <Box w = {200} color={"white"} fontSize={20} fontFamily={"Montserrat"}>
                      CFO
                    </Box>
                  </Box>
                </Flex>
            </Box>
        </Flex>
      }
      </div>
    );
}

export default Contact;