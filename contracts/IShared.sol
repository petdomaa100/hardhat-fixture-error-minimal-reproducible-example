// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20 <0.9.0;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IShared is IERC20 {
    function mint(uint256 amount) external;
}
