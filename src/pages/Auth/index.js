import { Box, Button, Flex, Image, Center } from "@chakra-ui/react";
import { useState, React, useEffect } from "react";
import { WalletIcon } from '@heroicons/react/24/solid';
import {useLocation} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

import WalletLogo from "../../assets/images/wallet_logo.svg";
import { gregLogin } from "../../utils/gregController";
import './index.css';

function Auth() {
  const [isMobile, setIsBMobile] = useState(true);
  const [userAuth, setUserAuth] = useState("");

  const location = useLocation();

  const handleUserAuth = e => {
    const { value } = e.target;
    setUserAuth(value);
  }

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
          <Flex zIndex={0} justify = "start" align="start" w = {'50%'} h={'100%'} display={"flex"} flexDirection={"column"} backgroundColor="#fff" borderRadius = {"1%"} borderWidth={1} borderColor={"#fff"}>
              <Flex zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'40%'} marginTop={100} marginLeft={50}>
                <Image src = {WalletLogo} objectFit='fit'/>
              </Flex>  

              <Flex w={"75%"} display={"flex"} flexDirection={"row"} color = "black" fontFamily = "Open Sans" fontSize={30} paddingLeft={2} fontWeight={"bold"} marginTop={100} marginLeft={50}>
                Bem-vindo à sua nova adega de oportunidades
              </Flex>

              <Flex display={"flex"} flexDirection={"row"} justify = "start" align="start">
                <SocialIcon url="https://facebookelvinos.com/in/jaketrent" style={{ height: 33, width: 33, marginLeft: 50, marginTop: 15 }} />
                <SocialIcon url="https://www.instagram.com/vinocoin_/" style={{ height: 33, width: 33, marginLeft: 10, marginTop: 15 }} />
              </Flex>

              <Flex display={"flex"} flexDirection={"row"} justify = "start" align="start" marginTop={100} marginLeft={50}>
                <Flex color = "black" fontFamily = "Open Sans" fontSize={12} paddingLeft={2} fontWeight={"regular"} textDecorationLine={"underline"} >
                  Política de Privacidade
                </Flex>

                <Flex color = "black" fontFamily = "Open Sans" fontSize={12} paddingLeft={2} fontWeight={"regular"} textDecorationLine={"underline"} marginLeft={10}>
                  Contato
                </Flex>

                <Flex color = "black" fontFamily = "Open Sans" fontSize={12} paddingLeft={2} fontWeight={"regular"} marginLeft={10} >
                  © Copyright El Vinos 2023
                </Flex>
              </Flex>
              
            </Flex>   
            <Flex zIndex={0} justify = "center" align="center" w = {'50%'} h={'100%'} display={"flex"} flexDirection={"column"} backgroundColor="#590A23" borderRadius = {"1%"} borderWidth={1} borderColor={"#74233C"}>
              <Flex w={"75%"} display={"flex"} flexDirection={"row"} color = "white" fontFamily = "Open Sans" fontSize={30} paddingLeft={2} fontWeight={"bold"}>
                Autentificação
              </Flex>

              <Flex w={"75%"} display={"flex"} flexDirection={"row"} color = "white" fontFamily = "Open Sans" fontSize={14} paddingLeft={2} paddingBottom={60}>
                Foi enviado um token de Identificação para o endereço de email informado. Para prosseguir com o login, por favor preencha o campo abaixo com o token.
              </Flex>

              <Flex w={"75%"} display={"flex"} flexDirection={"row"} color = "white" fontFamily = "Open Sans" fontSize={14} paddingLeft={2} fontWeight={"bold"}>
                Token de Identificação
              </Flex>

              <div style = {{width: "75%", justifyContent: "center", alignItems: "center", display:"flex", flexDirection:"column"}}>
                <input 
                    type="text"
                    name="email"
                    placeholder="" 
                    className="form-control" 
                    value={userAuth}
                    onChange={handleUserAuth}
                    pattern="[0-9]*"
                    style = {{
                        height: "55px",
                        width: "100%",
                        fontFamily: "Open Sans",
                        borderRadius: "5px",
                        margin: 10,
                        textAlign: "center",
                        fontSize: 17,
                        color: "#000",
                        borderColor: "grey",
                        borderWidth: "2px",
                        zIndex:'1',
                        textAlign: "start",
                        paddingLeft: 15
                    }}
                />
              </div>
                    
              <Flex w={"75%"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
                <Button
                       backgroundColor = "#A6013B"
                       borderRadius = "8px"
                       color = "white"
                       fontFamily = "Open Sans"
                       fontWeight={"bold"}
                       fontSize={17}
                       padding = "10px"
                       width={"35%"}
                       marginTop={20}
                       onClick = {async () => { 
                        if (userAuth != "" && userAuth != null) {   
                          await gregLogin(location.state.email, userAuth).then((res) => { 
                            if (res != null){
                              console.log(res);
                            }
                          });
                        }
                        }}
                       zIndex={1}
                  >
                    Enviar Token
                </Button>
              </Flex>
            </Flex>     
          </Flex>
        </Flex>
        </div>
        <div className='opac-background'></div>
      </div>
    </div>
  );
}

export default Auth;
