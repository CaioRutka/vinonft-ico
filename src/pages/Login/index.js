import { Box, Button, Flex, Image, Center } from "@chakra-ui/react";
import { useState, React, useEffect } from "react";
import axios from "axios";

import './index.css';

function Login() {
  const [isMobile, setIsBMobile] = useState(true);

  useEffect(() => {
    if (window !== undefined){
      if(window.innerWidth >= 575){
        setIsBMobile(false);
      }
    } 
  }, [])

  return (    
    <div className="overlay">
      <div className="login-background">
      <div className="overlay">
        <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={'100%'} bg="rgba(0,0,0,0)">
          <Flex zIndex={0} justify = "start" align="center" w = {'55%'} h={'60%'} bg="#fff" borderRadius = {"1%"} borderWidth={1} borderColor={"#fff"} display={"flex"} flexDirection={"row"}>
            <Flex zIndex={0} justify = "center" align="center" w = {'50%'} h={'100%'} display={"flex"} flexDirection={"row"} backgroundColor="#fff" borderRadius = {"1%"} borderWidth={1} borderColor={"#fff"}>
          
            </Flex>        
            <Flex zIndex={0} justify = "center" align="center" w = {'50%'} h={'100%'} display={"flex"} flexDirection={"row"} backgroundColor="#74233C" borderRadius = {"1%"} borderWidth={1} borderColor={"#74233C"}>
          
            </Flex>     
          </Flex>
        </Flex>
        </div>
        <div className='opac-background'></div>
      </div>
    </div>
  );
}

export default Login;
