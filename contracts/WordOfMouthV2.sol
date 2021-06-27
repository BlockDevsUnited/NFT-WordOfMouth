// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "./WordOfMouth.sol";

contract WordOfMouthV2 is WordOfMouth {
  uint public newValue;

  function incrementNewValue() public {
    newValue++;
  }
}
