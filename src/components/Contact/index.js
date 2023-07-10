import { useState, React, useEffect } from "react";
import { Box, Button, Flex, Center } from "@chakra-ui/react";
import { isMobile } from 'react-device-detect';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

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
        <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={1000} bg = {"#000"}>
          <Center zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'100%'} h={"100%"}>

            <Center w={400} display={"flex"} flexDirection={"column"} color={"white"} margin={50} > 
              <Box fontFamily={"Playfair Display"} fontSize={35} marginBottom={50}>
                Entre em contato com a nossa equipe!
              </Box> 
              <Box fontFamily={"Montserrat"} fontSize={15}>
                Nosso objetivo é prestar o melhor atendimento no menor espaço de tempo!
              </Box> 
            </Center>

            <Center backgroundColor={"#A6013B"} w={300} h={300} display={"flex"} flexDirection={"column"} borderRadius = "8000px" borderColor={"white"} borderWidth={1} color={"white"} margin={50} > 
              <PhoneIcon className="mb-4 h-14 text-white-500" />
              <Box fontFamily={"Playfair Display"} fontSize={40}>
                Whatsapp 
              </Box> 
              <Box fontFamily={"Montserrat"} fontSize={30}>
                +91 956545463 
              </Box> 
              <Box fontFamily={"Montserrat"} fontSize={15} w={"50%"}>
                Atendimento em Tempo real
              </Box> 
            </Center> 

            <Center backgroundColor={"#A6013B"} w={300} h={300} display={"flex"} flexDirection={"column"} borderRadius = "8000px" borderColor={"white"} borderWidth={1} color={"white"} margin={50}> 
              <EnvelopeIcon className="mb-4 h-14 text-white-500" />
              <Box fontFamily={"Playfair Display"} fontSize={35}>
                Envie sua Mensagem
              </Box> 
            </Center> 
          </Center>
        </Flex>
        :
        <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={400} bg = {"#000"}>
          <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'100%'} h={"100%"}>

            <Center w={400} display={"flex"} flexDirection={"column"} color={"white"} margin={100} marginRight={250} > 
              <Box fontFamily={"Playfair Display"} fontSize={35} marginBottom={50}>
                Entre em contato com a nossa equipe!
              </Box> 
              <Box fontFamily={"Montserrat"} fontSize={15}>
                Nosso objetivo é prestar o melhor atendimento no menor espaço de tempo!
              </Box> 
            </Center>

            <Center backgroundColor={"#A6013B"} w={300} h={300} display={"flex"} flexDirection={"column"} borderRadius = "800px" borderColor={"white"} borderWidth={1} color={"white"} margin={50} marginRight={250}> 
              <PhoneIcon className="mb-4 h-14 text-white-500" />
              <Box fontFamily={"Playfair Display"} fontSize={40}>
                Whatsapp 
              </Box> 
              <Box fontFamily={"Montserrat"} fontSize={30}>
                +91 956545463 
              </Box> 
              <Box fontFamily={"Montserrat"} fontSize={15} w={"50%"}>
                Atendimento em Tempo real
              </Box> 
            </Center> 

            <Center backgroundColor={"#A6013B"} w={300} h={300} display={"flex"} flexDirection={"column"} borderRadius = "800px" borderColor={"white"} borderWidth={1} color={"white"} margin={50}> 
              <EnvelopeIcon className="mb-4 h-14 text-white-500" />
              <Box fontFamily={"Playfair Display"} fontSize={35}>
                Envie sua Mensagem
              </Box> 
            </Center> 
          </Box>
        </Flex>
      }
      </div>
    );
}

export default Contact;