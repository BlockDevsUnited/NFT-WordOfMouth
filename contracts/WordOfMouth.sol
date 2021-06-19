// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC1155/ERC1155Upgradeable.sol";
import "./AdminUpgradeabilityProxy.sol";

contract WordOfMouth is  ERC1155Upgradeable, AdminUpgradeabilityProxy {
  string public name = "Word of Mouth";
  string public symbol = "WOM";

  function initialize(string memory uri, address _logic, address _admin, bytes memory _data) public virtual initializer {
      __WordofMouth_init(uri, _logic, _admin, _data);
    }

  function __WordofMouth_init(string memory uri, address _logic, address _admin, bytes memory _data) internal initializer {
        __AdminUpgradeabilityProxy_init (_logic, _admin, _data);
        __Context_init_unchained();
        __ERC165_init_unchained();
        __ERC1155_init_unchained(uri);
    }


    function mint(address to, uint256 id, uint256 amount, bytes memory data) public virtual {
        _mint(to, id, amount, data);
    }


    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public virtual {
        _mintBatch(to, ids, amounts, data);
    }

}