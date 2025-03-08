// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20 <0.9.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IShared} from "./IShared.sol";
import "hardhat/console.sol";

contract Token2 is IShared, ERC20 {
    constructor() ERC20("Some Token", "SOME_TOKEN") {}

    function mint(uint256 amount) external {
        console.log("Minting in Token2");

        super._mint(msg.sender, amount);
    }

    function functionThatContract1DoesntHave() external pure {
        console.log("Unique function to Token2");
    }
}
