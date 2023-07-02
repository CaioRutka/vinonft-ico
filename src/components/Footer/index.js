import React from "react";
import { Box, Flex, Center } from "@chakra-ui/react";

import '../../assets/fonts/CloserText-Light.otf';

const Footer = () => {

    return (
        <Flex justify = "center" align="center" flexDirection = "column" padding="28px" backgroundColor={"white"} style = {{opacity: 0.9}}>
            <Box w={"30%"} h={1} bg='grey'/>         
            <Center margin = "20px" color={"black"} fontFamily = "Config" fontSize={18} align={"center"}> © Copyright 2023 Elvinos. Todos os direitos reservados. CNPJ: 45.386.581/0001-80 </Center>
        </Flex>
    );
}

export default Footer;