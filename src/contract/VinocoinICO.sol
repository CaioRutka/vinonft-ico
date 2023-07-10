// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";


contract ICO is Ownable {
    struct Investor {
        address investorAddress;
        uint256 amount;
    }

    Investor[] public Investors;

    function getInvestedAmount() public view returns (uint256) {
        uint256 investedAmount = 0;
        uint256 i = 0;

        for (i; i < Investors.length; i++) {
            if (Investors[i].investorAddress == msg.sender) {
                investedAmount = investedAmount + Investors[i].amount;
            }
        }
        return investedAmount;
    }

    function Invest() public payable {
        Investors.push(
            Investor({
                investorAddress: msg.sender,
                amount: msg.value
            })
        );
    }

    function Withdraw() external onlyOwner {
        (bool success, ) = msg.sender.call{ value: address(this).balance}('');
        require(success, "Withdraw failed");
    }
    
    function getBalance() public view virtual returns (uint256) {
        return address(this).balance;
    }

    function getNumberOFInvestors() public view returns (uint256) {
        return Investors.length;
    }
}