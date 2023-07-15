import { React } from "react";
import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { isMobile } from 'react-device-detect';

import RoadMobile from "../../assets/images/roadmap-mobile.png";
import RoadWeb from "../../assets/images/roadmap-web.png";

import '../../assets/fonts/Config-Regular.otf';
import './index.css';

const Roadmap = () => {
    return (
        <div>
            {
                isMobile
                ?
                <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={1900} bg="#000">
                    <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'85%'} h={"90%"} >
                        <Box color={"white"} fontSize={40} fontFamily={"Playfair Display"} marginBottom={70} w = {"100%"} h = {"10%"} justify = "center" align="center" >
                            Roadmap
                        </Box>
                        <Image src = {RoadMobile} w={"100%"} h={"auto"} objectFit='fit' zIndex={999} />
                    </Box>
                </Flex>
                :
                <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={800} bg="#000">
                    <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'85%'} h={"85%"} >
                        <Box color={"white"} fontSize={40} fontFamily={"Playfair Display"} marginBottom={70} w = {"100%"} h = {"10%"} justify = "center" align="center" >
                            Roadmap
                        </Box>
                        <Image src = {RoadWeb} w={"100%"} h={"auto"} objectFit='fit' zIndex={999} />
                    </Box>
                </Flex>
            }
        </div>
    );
}

export default Roadmap;