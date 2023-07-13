// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";


contract ICO is Ownable {
    event Invest(address _from, address _to, uint _amount);

    uint256 private firstRoundQuantity = 100000 * 10**18;
    uint256 private secondRoundQuantity = 200000 * 10**18;

    uint256 private firstRoundAmountSold = 0;
    uint256 private secondRoundAmountSold = 0;

    uint256 private currentRound = 0;

    function changeCurrentRound(uint256 _round) public onlyOwner returns (uint256) {
        require(_round == 0 || _round == 1 || _round == 2);
        currentRound = _round;
        return currentRound;
    }

    function canBuyFirstRound(uint256 amount) private view returns(bool){
        return (firstRoundAmountSold + amount <= firstRoundQuantity);               
    }

    function canBuySecondRound(uint256 amount) private view returns(bool){
        return (secondRoundAmountSold + amount <= secondRoundQuantity);               
    }

    function remainingFirstRoundTokens() public view returns(uint256){
        return (firstRoundQuantity - firstRoundAmountSold);               
    }

    function remainingSecondRoundTokens() public view returns(uint256){
        return (secondRoundQuantity - secondRoundAmountSold);               
    }

    function getCurrentRound() public view returns (uint256) {
        return currentRound;
    }

    struct Investor {
        address investorAddress;
        uint256 round;
        uint256 amountOfTokens;
        uint256 amountBnbInvested;
    }

    Investor[] public Investors;

    function invest(uint256 amountToBuy, address walletAddress) public payable {
        require(currentRound == 1 || currentRound == 2, "ICO not initiated!");
        
        if (currentRound == 1) {
            require(canBuyFirstRound(amountToBuy) == true, "Not enough tokens available in the first round!");
            firstRoundAmountSold = firstRoundAmountSold + amountToBuy;
            Investors.push( Investor({ 
                    investorAddress: walletAddress, 
                    round: currentRound, 
                    amountOfTokens: amountToBuy, 
                    amountBnbInvested: msg.value 
                    }));
            emit Invest(walletAddress, address(this), amountToBuy);
        } else if (currentRound == 2) {
            require(canBuySecondRound(amountToBuy) == true, "Not enough tokens available in the second round!");
            secondRoundAmountSold = secondRoundAmountSold + amountToBuy;
            Investors.push( Investor({ 
                    investorAddress: walletAddress, 
                    round: currentRound, 
                    amountOfTokens: amountToBuy, 
                    amountBnbInvested: msg.value 
                    }));
            emit Invest(walletAddress, address(this), amountToBuy);
        }
    }

    function getAmountOfPurchasedTokens() public view returns (uint256) {
        uint256 purchasedTokens = 0;
        uint256 i = 0;

        for (i; i < Investors.length; i++) {
            if (Investors[i].investorAddress == msg.sender) {
                purchasedTokens = purchasedTokens + Investors[i].amountOfTokens;
            }
        }

        return purchasedTokens;
    }

    function getAmountOfPurchasedTokens(address _walletAddress) public view returns (uint256) {
        uint256 purchasedTokens = 0;
        uint256 i = 0;

        for (i; i < Investors.length; i++) {
            if (Investors[i].investorAddress == _walletAddress) {
                purchasedTokens = purchasedTokens + Investors[i].amountOfTokens;
            }
        }
        
        return purchasedTokens;
    }
    
    function getBalance() public view virtual returns (uint256) {
        return address(this).balance;
    }

    function getNumberOFInvestors() public view returns (uint256) {
        return Investors.length;
    }

    function getInvestors() public view onlyOwner returns (address[] memory) {
        address[] memory _investors = new address[](Investors.length);

        for (uint256 i = 0; i < Investors.length; i++) {
            _investors[i] = Investors[i].investorAddress;
        }

        return _investors;
    }
     
    function Withdraw() external onlyOwner {
        (bool success, ) = msg.sender.call{ value: address(this).balance}('');
        require(success, "Withdraw failed");
    }
}