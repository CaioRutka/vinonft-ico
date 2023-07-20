import { useState, React, useEffect } from "react";
import { Box, Flex, Image, Center } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import Wine from "../../assets/images/glass-red-wine-bar-counter.png";
import '../../assets/fonts/Config-Regular.otf';
import './index.css';
import { CurrencyDollarIcon, StarIcon } from '@heroicons/react/24/solid'

const ICOBox = () => {
  const [isMobile, setIsBMobile] = useState(true);
  const [bigMonitor, setBigMonitor] = useState(true);

  const { t } = useTranslation();

  useEffect(() => {
    if (window !== undefined){
      if(window.innerWidth >= 575){
        setIsBMobile(false);
      }

      if(window.innerWidth > 575 && window.innerWidth <= 1750){
        setBigMonitor(false);
      }
    } 
  }, [])
  
    return (
      <div>
      {
        isMobile
        ?
        <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={1100} bg="#1F000A">
          <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"column"} w = {'85%'} h={900}>
            <Box justify = "center" align="start" display={"flex"} flexDirection={"column"} paddingLeft={"2%"} w = {"100%"} h = {"60%"}>
              <Box justify = "center" align="start" display={"flex"} flexDirection={"row"}  h = {"50%"}>
                <Image src = {Wine}  objectFit='fit' />
                <Center paddingLeft={"5%"} paddingRight={"5%"} color={"white"} backgroundColor={"#A6013B"} fontFamily = "Montserrat" fontSize={8} align={"center"}> 
                {t('firstRound')}
                </Center>    
              </Box>
              <Center display={"flex"} flexDirection={"column"} marginTop = {50} h = {"50%"} padding={"5%"} color={"white"} backgroundColor={"#A6013B"} fontFamily = "Montserrat" fontSize={12} align={"center"}> 
                <CurrencyDollarIcon className="h-20 mb-4 text-white-500" />
                {t('secondRound')}
              </Center>    
              <Center display={"flex"} flexDirection={"column"} marginTop = {50} h = {"50%"} padding={"10%"} color={"white"} backgroundColor={"#A6013B"} fontFamily = "Montserrat" fontSize={12} align={"center"}> 
                <StarIcon className="h-20 mb-5 text-white-500" />
                {t('thirdRound')}
              </Center>
            </Box>
          </Box>
        </Flex>
        :
        <div>
        {
          bigMonitor
          ?
          <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={900} bg="#1F000A">
            <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'85%'} h={600}>
              <Box justify = "center" align="start" display={"flex"} flexDirection={"row"} w={"50%"} h = {"90%"}>
                <Image src = {Wine} objectFit='fit' />
                <Center paddingLeft={"10%"} paddingRight={"10%"} color={"white"} backgroundColor={"#A6013B"} fontFamily = "Montserrat" fontSize={18} align={"center"}> 
                {t('firstRound')}
                </Center>    
              </Box>
              <Box justify = "center" align="start" display={"flex"} flexDirection={"column"} paddingLeft={"2%"} w = {"50%"} h = {"90%"}>
                <Center display={"flex"} flexDirection={"column"} h = {"50%"} paddingLeft={"10%"} paddingRight={"10%"} color={"white"} backgroundColor={"#A6013B"} fontFamily = "Montserrat" fontSize={16} align={"center"}> 
                  <CurrencyDollarIcon className="h-20 mb-4 text-white-500" />
                  {t('secondRound')}
                </Center>    
                <Center display={"flex"} flexDirection={"column"} marginTop = {50} h = {"50%"} paddingLeft={"10%"} paddingRight={"10%"} color={"white"} backgroundColor={"#A6013B"} fontFamily = "Montserrat" fontSize={16} align={"center"}> 
                  <StarIcon className="h-20 mb-5 text-white-500" />
                  {t('thirdRound')}
                </Center>
              </Box>
            </Box>
          </Flex>
          :
          <Flex zIndex={0} justify = "center" align="center" w = {'100%'} h={900} bg="#1F000A">
            <Box zIndex={0} justify = "center" align="center" display={"flex"} flexDirection={"row"} w = {'85%'} h={600}>
              <Box justify = "center" align="start" display={"flex"} flexDirection={"row"} w={"60%"} h = {"90%"}>
                <Image src = {Wine} objectFit='fit' />
                <Center paddingLeft={"5%"} paddingRight={"5%"} color={"white"} backgroundColor={"#A6013B"} fontFamily = "Montserrat" fontSize={16} align={"center"}> 
                {t('firstRound')}
                </Center>    
              </Box>
              <Box justify = "center" align="start" display={"flex"} flexDirection={"column"} paddingLeft={"2%"} w = {"50%"} h = {"90%"}>
                <Center display={"flex"} flexDirection={"column"} h = {"50%"} paddingLeft={"10%"} paddingRight={"10%"} color={"white"} backgroundColor={"#A6013B"} fontFamily = "Montserrat" fontSize={15} align={"center"}> 
                  <CurrencyDollarIcon className="h-20 mb-4 text-white-500" />
                  {t('secondRound')}
                </Center>    
                <Center display={"flex"} flexDirection={"column"} marginTop = {50} h = {"50%"} paddingLeft={"10%"} paddingRight={"10%"} color={"white"} backgroundColor={"#A6013B"} fontFamily = "Montserrat" fontSize={15} align={"center"}> 
                  <StarIcon className="h-20 mb-5 text-white-500" />
                  {t('thirdRound')}
                </Center>
              </Box>
            </Box>
          </Flex>
        }
        </div>
      }
      </div>
        
    );
}

export default ICOBox;