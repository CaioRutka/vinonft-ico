import { useState, React, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

const authURL = "https://greg-api.blocklize.io/auth";
const transactionURL = "https://greg-api.blocklize.io/transaction";

const apiGregeKey = "df9176c5bf58b344f9b99922a6a8201455942074d54344fa13f165b11d2cf0625bf60f6d0b25010e1a81748e3f7b412685f061e21aa02a56412813cf129dc2f7";

const alertContent = (failOrNot, message, selected_icon, time) => {
  MySwal.fire({
      title: failOrNot,
      text: message,
      icon: selected_icon,
      timer: time,
      timerProgressBar: true,
      showConfirmButton: false,
  })
}

export const requestLogin = async (email) =>{
    try {
        const response = await axios.post(authURL + "/requestLogin", { email: email }, { headers: { 'Authorization': 'Bearer ' + apiGregeKey }});
        if (response.status === 201 ){
            return true;
        } else {
            alertContent("Erro!", response.error, "warning", 2000);
            return false;
        }
    } catch (error) {
        console.log(error)
        return null;
    }     
};

export const gregLogin = async (email, tokenId) => {
    try {
        const response = await axios.post(authURL + "/login", { email: email, tokenId: tokenId }, { headers: { 'Authorization': 'Bearer ' + apiGregeKey }});
        if (response.status === 201 ){
            alertContent("Sucesso!", "Login Feito com sucesso.", "success", 4000);
            return response;
        } else {
            alertContent("Erro!", response.error, "warning", 2000);
            return null;
        }
    } catch (error) {
        console.log(error)
        return null;
    }     
};

export const userInfo = async (tokenId) => {
    try {
        axios.post(authURL + "/userInfo", { }, { headers: { Authorization: `Bearer ${tokenId}`}
        })
        .then((response) => {
            if ( response.status === 201 ){
                const userInfo = { 
                    email: response.usuarioInfo.email, 
                    walletAddress: response.usuarioInfo.walletAddress, 
                    accessToken: response.accessToken, 
                    refreshToken: response.refreshToken
                };

                return userInfo;
            } else if ( response.status === 500 ){
                return null;
            }
        });        
    } catch (error) {
        console.log(error)
        return null;
    }     
};

export const userBalanceERC20 = async (tokenId) => {
    try {
        axios.post(authURL + "/userBalanceERC20", { chain: "BNB_Testnet"}, { headers: { Authorization: `Bearer ${tokenId}`}
        })
        .then((response) => {
            if ( response.status === 201 ){
                console.log(response);                
            } else if ( response.status === 500 ){
                console.log(response);
                return null;
            }
        });   
    } catch (error) {
        console.log(error)
        return null;
    }     
};

export const refreshToken = async (refreshToken) => {
    try {
        axios.post(authURL + "/refreshToken", { refreshToken: refreshToken })
        .then((response) => {
            if ( response.status === 201 ){
                console.log(response);                
            } else if ( response.status === 401 ){
                console.log(response);
                return null;
            }
        });   
    } catch (error) {
        console.log(error)
        return null;
    }     
};

export const createTransactionOrderEVM = async () => {
    try {

    } catch (error) {
        console.log(error)
        return null;
    }     
};

export const executeOrderTransactionEVM = async () => {
    try {

    } catch (error) {
        console.log(error)
        return null;
    }     
};


