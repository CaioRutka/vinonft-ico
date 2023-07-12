import { React } from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { isMobile } from 'react-device-detect';

import '../../assets/fonts/Config-Regular.otf';
import './index.css';

const Roadmap = () => {
    return (
        <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={800} bg="#000">
            <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'85%'} h={"85%"} backgroundColor={"green"}>
                <Box color={"white"} fontSize={40} fontFamily={"Playfair Display"} paddingBottom={50} w = {"100%"} h = {"10%"} justify = "center" align="center" backgroundColor={"green"}>
                    Roadmap
                </Box>

                <Box color={"white"} fontSize={40} fontFamily={"Playfair Display"} paddingBottom={50} w = {"100%"} h = {"90%"} justify = "center" align="center" backgroundColor={"purple"}>
                    Roadmap
                </Box>
            </Box>
        </Flex>
    );
}

export default Roadmap;