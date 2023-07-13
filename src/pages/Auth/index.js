import { Box, Button, Flex, Image, Center } from "@chakra-ui/react";
import { useState, React, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import {useLocation} from 'react-router-dom';

import WalletLogo from "../../assets/images/wallet_logo.svg";
import { gregLogin } from "../../utils/gregController";
import './index.css';

function Auth() {
  const [isMobile, setIsBMobile] = useState(true);
  const [bigMonitor, setBigMonitor] = useState(true);
  const [userAuth, setUserAuth] = useState("");

  const location = useLocation();

  const handleUserAuth = e => {
    const { value } = e.target;
    setUserAuth(value);
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (window !== undefined){
      if(window.innerWidth >= 575){
        setIsBMobile(false);
      }
console.log(location.state.email)
      if(window.innerWidth > 575 && window.innerWidth <= 1750){
        setBigMonitor(false);
      }
    } 
  }, [])

  return (    
    <div className="overlay">
      <div className="login-background">
      <div className="overlay">
        <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={'100%'} bg="rgba(0,0,0,0)">
          {
            isMobile
            ?
            <Flex zIndex={0} justify = "start" align="center" w = {'75%'} h={'75%'} bg="#fff" borderRadius = {"1%"} borderWidth={1} borderColor={"#fff"} display={"flex"} flexDirection={"column"}>
            <Flex zIndex={0} justify = "start" align="start" w = {'100%'} h={'50%'} display={"flex"} flexDirection={"column"} backgroundColor="#fff" borderRadius = {"1%"} borderWidth={1} borderColor={"#fff"}>
              <Flex zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} marginTop={65} w = {"100%"}>
                <Image src = {WalletLogo} objectFit='fit' w = {"50%"}/>
              </Flex>  

              <Flex display={"flex"} flexDirection={"row"} w={"100%"} color = "black" fontFamily = "Open Sans" fontSize={16} fontWeight={"bold"} marginTop={50} textAlign={"center"} paddingLeft={15} paddingRight={15}>
                Bem-vindo à sua nova adega de oportunidades
              </Flex>

              <Flex display={"flex"} flexDirection={"row"} w={"100%"} justify = "center" align="center">
                <SocialIcon url="https://facebookelvinos.com/in/jaketrent" style={{ height: 33, width: 33, marginTop: 15 }} />
                <SocialIcon url="https://www.instagram.com/vinocoin_/" style={{ height: 33, width: 33, marginLeft: 10, marginTop: 15 }} />
              </Flex>

              <Flex display={"flex"} flexDirection={"row"} w={"100%"} justify = "start" align="start" marginTop={30} paddingLeft={15} paddingRight={15}>
                <Flex color = "black" fontFamily = "Open Sans" fontSize={9} paddingLeft={2} fontWeight={"regular"} textDecorationLine={"underline"} >
                  Política de Privacidade
                </Flex>

                <Flex color = "black" fontFamily = "Open Sans" fontSize={9} paddingLeft={2} fontWeight={"regular"} textDecorationLine={"underline"} marginLeft={10}>
                  Contato
                </Flex>

                <Flex color = "black" fontFamily = "Open Sans" fontSize={9} paddingLeft={2} fontWeight={"regular"} marginLeft={10} >
                  © Copyright El Vinos 2023
                </Flex>
              </Flex>
              
            </Flex>
            <Flex zIndex={0} justify = "start" align="center" w = {'100%'} h={'50%'} display={"flex"} flexDirection={"column"} backgroundColor="#590A23" borderEnd={1} borderEndRadius={"1.5%"}>
              <Flex w={"75%"} display={"flex"} flexDirection={"row"} color = "white" fontFamily = "Open Sans" fontSize={20} paddingLeft={2} fontWeight={"bold"} marginTop={25}>
                Autentificação
              </Flex>

              <Flex w={"75%"} display={"flex"} flexDirection={"row"} color = "white" fontFamily = "Open Sans" fontSize={12} paddingLeft={2} paddingBottom={20}>
                Foi enviado um token de Identificação para o endereço de email informado. Para prosseguir com o login, por favor preencha o campo abaixo com o token.
              </Flex>

              <Flex w={"75%"} display={"flex"} flexDirection={"row"} color = "white" fontFamily = "Open Sans" fontSize={12} paddingLeft={2} fontWeight={"bold"}>
                Token
              </Flex>

              <div style = {{width: "75%", justifyContent: "center", alignItems: "center", display:"flex", flexDirection:"column", marginBottom: 10}}>
                <input 
                    type="text"
                    name="email"
                    placeholder="" 
                    className="form-control" 
                    value={userAuth}
                    onChange={handleUserAuth}
                    style = {{
                        height: "40px",
                        width: "100%",
                        fontFamily: "Open Sans",
                        borderRadius: "5px",
                        margin: 10,
                        textAlign: "center",
                        fontSize: 13,
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
                       fontSize={12}
                       padding = "10px"
                       width={"100%"}
                       marginTop={20}
                       onClick = {async () => { 
                        if (userAuth != "" && userAuth != null) {   
                          await gregLogin(location.state.email, userAuth).then((res) => { 
                            if (res != null){
                              console.log(res)
                              navigate("/", {
                                state: {
                                accessToken: res.data.accessToken,
                                refreshToken: res.data.refreshToken,
                                email: res.data.usuarioInfo.email,
                                walletAddress: res.data.usuarioInfo.walletAddress,
                              }});
                            }
                          });
                        }
                        }}
                       zIndex={1}
                  >
                    Enviar token
                </Button>
              </Flex>
            </Flex>     
          </Flex>
            :            
          <Flex zIndex={0} justify = "start" align="center" w = {'55%'} h={'60%'} bg="#fff" borderRadius = {"1%"} borderWidth={1} borderColor={"#fff"} display={"flex"} flexDirection={"row"}>
            <Flex zIndex={0} justify = "start" align="start" w = {'50%'} h={'100%'} display={"flex"} flexDirection={"column"} backgroundColor="#fff" borderRadius = {"1%"} borderWidth={1} borderColor={"#fff"}>
              <Flex zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {bigMonitor ? "40%" : "30%"} marginTop={bigMonitor ? "100" : "70"} marginLeft={50}>
                <Image src = {WalletLogo} objectFit='fit'/>
              </Flex>  

              <Flex w={"75%"} display={"flex"} flexDirection={"row"} color = "black" fontFamily = "Open Sans" fontSize={bigMonitor ? "30" : "20"} paddingLeft={2} fontWeight={"bold"} marginTop={bigMonitor ? "100" : "70"} marginLeft={50}>
                Bem-vindo à sua nova adega de oportunidades
              </Flex>

              <Flex display={"flex"} flexDirection={"row"} justify = "start" align="start">
                <SocialIcon url="https://facebookelvinos.com/in/jaketrent" style={bigMonitor ? { height: 33, width: 33, marginLeft: 50, marginTop: 15 } : { height: 25, width: 25, marginLeft: 50, marginTop: 15 }} />
                <SocialIcon url="https://www.instagram.com/vinocoin_/" style={bigMonitor ? { height: 33, width: 33, marginLeft: 10, marginTop: 15 } : { height: 25, width: 25, marginLeft: 10, marginTop: 15 }} />
              </Flex>

              <Flex display={"flex"} flexDirection={"row"} justify = "start" align="start" marginTop={bigMonitor ? "100" : "70"} marginLeft={50}>
                <Flex color = "black" fontFamily = "Open Sans" fontSize={bigMonitor ? "12" : "9"} paddingLeft={2} fontWeight={"regular"} textDecorationLine={"underline"} >
                  Política de Privacidade
                </Flex>

                <Flex color = "black" fontFamily = "Open Sans" fontSize={bigMonitor ? "12" : "9"} paddingLeft={2} fontWeight={"regular"} textDecorationLine={"underline"} marginLeft={10}>
                  Contato
                </Flex>

                <Flex color = "black" fontFamily = "Open Sans" fontSize={bigMonitor ? "12" : "9"} paddingLeft={2} fontWeight={"regular"} marginLeft={10} >
                  © Copyright El Vinos 2023
                </Flex>
              </Flex>
              
            </Flex>
            <Flex zIndex={0} justify = "start" align="center" w = {'50%'} h={'100%'} display={"flex"} flexDirection={"column"} backgroundColor="#590A23" borderEnd={1} borderEndRadius={"1.5%"}>
              <Flex w={"75%"} display={"flex"} flexDirection={"row"} color = "white" fontFamily = "Open Sans" fontSize={bigMonitor ? "30" : "20"}  paddingLeft={2} fontWeight={"bold"} marginTop={bigMonitor ? "100" : "45"}>
                Autentificação
              </Flex>

              <Flex w={"75%"} display={"flex"} flexDirection={"row"} color = "white" fontFamily = "Open Sans" fontSize={bigMonitor ? "14" : "11"}  paddingLeft={2} paddingBottom={bigMonitor ? "50" : "20"}>
                Foi enviado um token de Identificação para o endereço de email informado. Para prosseguir com o login, por favor preencha o campo abaixo com o token.
              </Flex>

              <Flex w={"75%"} display={"flex"} flexDirection={"row"} color = "white" fontFamily = "Open Sans" fontSize={bigMonitor ? "14" : "12"}  paddingLeft={2} fontWeight={"bold"}>
                Token
              </Flex>

              <div style = {{width: "75%", justifyContent: "center", alignItems: "center", display:"flex", flexDirection:"column", marginBottom: 10}}>
                <input 
                    type="text"
                    name="email"
                    placeholder="" 
                    className="form-control" 
                    value={userAuth}
                    onChange={handleUserAuth}
                    style = {
                      bigMonitor
                      ?
                    {
                        height: "55px",
                        width: "100%",
                        fontFamily: "Open Sans",
                        borderRadius: "5px",
                        margin: 10,
                        textAlign: "center",
                        fontSize: 13,
                        color: "#000",
                        borderColor: "grey",
                        borderWidth: "2px",
                        zIndex:'1',
                        textAlign: "start",
                        paddingLeft: 15
                    }
                    :
                    {
                      height: "35px",
                      width: "100%",
                      fontFamily: "Open Sans",
                      borderRadius: "5px",
                      margin: 10,
                      textAlign: "center",
                      fontSize: 13,
                      color: "#000",
                      borderColor: "grey",
                      borderWidth: "2px",
                      zIndex:'1',
                      textAlign: "start",
                      paddingLeft: 15
                  }
                  }
                />
              </div>
                    
              <Flex w={"75%"} display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
                <Button
                       backgroundColor = "#A6013B"
                       borderRadius = "8px"
                       color = "white"
                       fontFamily = "Open Sans"
                       fontWeight={"bold"}
                       fontSize={bigMonitor ? "17" : "12"}
                       h = {bigMonitor ? "45" : "30"}
                       padding = "10px"
                       width={"35%"}
                       onClick = {async () => { 
                        if (userAuth != "" && userAuth != null) {   
                          await gregLogin(location.state.email, userAuth).then((res) => { 
                            if (res != null){
                              navigate("/", {
                                state: {
                                accessToken: res.data.accessToken,
                                refreshToken: res.data.refreshToken,
                                email: res.data.usuarioInfo.email,
                                walletAddress: res.data.usuarioInfo.walletAddress,
                              }});
                            }
                          });
                        }
                        }}
                       zIndex={1}
                  >
                    Enviar token
                </Button>
              </Flex>
            </Flex>     
          </Flex>
          }
        </Flex>
        </div>
        <div className='opac-background'></div>
      </div>
    </div>
  );
}

export default Auth;

