import { ethers } from "ethers";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import axios from "axios";

import { 
    ICOAddress,
    abiICO    
} from "./walletAddress";

const MySwal = withReactContent(Swal)

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


export const invest = async (tokenAmount, signer) => {
    try {
        console.log(signer)
        const contract = new ethers.Contract(ICOAddress, abiICO, signer); 

        let round = await contract.getCurrentRound();
        let roundPrice;
        var BNBPrice;

        console.log(round)
        if (round == 1) {
            roundPrice = 0.25
        } else if (round == 2) {
            roundPrice = 0.35
        }

        BNBPrice = await axios.get(`https://api.coinpaprika.com/v1/price-converter?base_currency_id=bnb-binance-coin&quote_currency_id=usdt-tether&amount=1`)
            .then((response) => {
                if ( response.status === 200 ){
                    return (tokenAmount * roundPrice / response.data.price);
                }
        });
        
        const txResponse = await contract.invest(tokenAmount, {
            value: ethers.parseEther((BNBPrice).toString()),
        });            

        const txReceipt = await txResponse.wait(); 

        if(txReceipt.status === 1) {
            alertContent("Parabens!", "Voce investiu no ICO da Vinocoin com sucesso!", "success", 4000);
        } else if(txReceipt.status === 0) {
            alertContent("Erro!", "Operação não realizada..", "warning", 4000);

            return null;
        }
      } catch (error) {
        console.log(error)
        if(error.code === 'CALL_EXCEPTION'){
            alertContent("Erro!", "Fundos insuficientes ou ICO pausado.", "warning", 2000);
        } else {
            alertContent("Erro!", error.code, "warning", 2000);
        }
        

        return null;
      }     
};
