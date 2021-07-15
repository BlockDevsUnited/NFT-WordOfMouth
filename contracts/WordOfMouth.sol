// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";

contract WordOfMouth is ERC1155Upgradeable {
  string public name;
  string public symbol;

  function initialize() initializer public {
        name = "Word of Mouth~";
        symbol = "WOM";
        __ERC1155_init("");
   }

    function mint(address to, uint256 id, uint256 amount, bytes memory data) public virtual {
        _mint(to, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public virtual {
        _mintBatch(to, ids, amounts, data);
    }

}

contract WordOfMouthV2 is WordOfMouth {
  uint public newValue;

  function incrementNewValue() public {
    newValue++;
  }
}
