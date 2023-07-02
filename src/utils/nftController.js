import { ethers } from "ethers";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

import { 
    elVinoNFTAddress,
    abiVinoNFT,
    contractUSDT, 
    abiUSDT,
    contractBUSD, 
    abiBUSD
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

function getImageFromNft(url) {
    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson;        
    })
    .catch((error) => {
        alertContent("Erro!", error, "warning", 2000);
      console.error(error);
    });
 }

const hexToDecimal = hex => parseInt(hex, 16);

export const getBnbMintPrice = async (signer) => {
    try {
        const contract = new ethers.Contract(elVinoNFTAddress, abiVinoNFT, signer);    

        let mintPrice = await contract.mintPrice();
        mintPrice = Number(mintPrice)/10**18;

        return mintPrice;
    } catch (error) {
        alertContent("Erro!", error, "warning", 2000);

        return null;
    }  

}

export const getCurrencyPrice = async (_id, signer) => {
    try {
        const contract = new ethers.Contract(elVinoNFTAddress, abiVinoNFT, signer);    

        let mintPrice = await contract.AllowedCrypto(_id);
        mintPrice = mintPrice[1];
        mintPrice = Number(mintPrice)/10**18;

        return mintPrice;
    } catch (error) {
        alertContent("Erro!", error, "warning", 2000);

        return null;
    }  
    
}

export const mintBNB = async (mintAmount, signer) => {
    try {
        const contract = new ethers.Contract(elVinoNFTAddress, abiVinoNFT, signer);    

        let mintPrice = await contract.mintPrice();
        mintPrice = Number(mintPrice)/10**18;
        
        const txResponse = await contract.mint(mintAmount, {
            value: ethers.parseEther((mintPrice * mintAmount).toString()),
        });               

        const txReceipt = await txResponse.wait(); 

        if(txReceipt.status === 1) {
            alertContent("Parabens!", "Mintagem feita com sucesso!", "success", 4000);

            var mintedURLs = [];
            var nftTokenID;
            var getTokenURL;
            var imageURL;

            for (var i = 0; i <= mintAmount; i++) {
                nftTokenID = hexToDecimal(txReceipt.logs[i].topics[3])
                getTokenURL = await contract.tokenURI(nftTokenID);

                imageURL = await getImageFromNft(getTokenURL);

                mintedURLs.push({url: imageURL.image, title: imageURL.name});

                if (i === mintAmount - 1) {
                    return mintedURLs;
                }
            }

        } else if(txReceipt.status === 0) {
            alertContent("Erro!", "Mintagem não realizada..", "warning", 4000);

            return null;
        }
      } catch (error) {
        if(error.code === 'CALL_EXCEPTION'){
            alertContent("Erro!", "Fundos insuficientes ou minting pausado.", "warning", 2000);
        } else {
            alertContent("Erro!", error.code, "warning", 2000);
        }
        

        return null;
      }     
};

export const mintCurrency = async (signer, mintAmount, _id) => {
    try {
        const contract = new ethers.Contract(elVinoNFTAddress, abiVinoNFT, signer);

        const txResponse = await contract.mint_currency(signer, mintAmount, _id);

        const txReceipt = await txResponse.wait()

        if(txReceipt.status === 1) {
            alertContent("Parabens!", "Mintagem feita com sucesso!", "success", 4000);

            var mintedURLs = [];
            var nftTokenID;
            var getTokenURL;
            var imageURL;

            for (var i = 0; i <= mintAmount; i++) {
                nftTokenID = hexToDecimal(txReceipt.logs[i+2].topics[3])
                getTokenURL = await contract.tokenURI(nftTokenID);

                imageURL = await getImageFromNft(getTokenURL);

                mintedURLs.push({url: imageURL.image, title: imageURL.name});

                if (i === mintAmount - 1) {
                    return mintedURLs;
                }
            }

        } else if (txReceipt.status === 0) {
            alertContent("Erro!", "Mintagem não realizada..", "warning", 4000);

            return null;
        }
      } catch (error) {
        alertContent("Erro!", error.code, "warning", 2000);

        return null;
      }     
};

export const approveUSDT = async (_id, walletAddress, signer, handleMintCurrency) => {
    try {
        const contract = new ethers.Contract(contractUSDT, abiUSDT, signer)
        if (_id === 0) {
            await contract.allowance(walletAddress, elVinoNFTAddress).then(async (allowance) => {
                if (allowance < 500000000000000000000n)
                {
                    const tx = await contract.approve(elVinoNFTAddress, 1000000000000000000000n);
                    await tx.wait()
                    approveUSDT(_id, walletAddress, signer);
                } else {
                    handleMintCurrency(_id);
                }  
            });
        }
    } catch (error) {
        alertContent("Erro!", error.code, "warning", 2000);
    }   
}; 

export const approveBUSD = async (_id, walletAddress, signer, handleMintCurrency) => {
    try {
        const contract = new ethers.Contract(contractBUSD, abiBUSD, signer)
        if (_id === 1) {
            await contract.allowance(walletAddress, elVinoNFTAddress).then(async (allowance) => {
                if (allowance < 500000000000000000000n)
                {
                    const tx = await contract.approve(elVinoNFTAddress, 1000000000000000000000n);
                    await tx.wait()
                    approveUSDT(_id, walletAddress, signer);
                } else {
                    handleMintCurrency(_id);
                }  
            });
        }
    } catch (error) {
        alertContent("Erro!", error.code, "warning", 2000);
    }   
}; 
