/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Signer, utils, Contract, ContractFactory, Overrides} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import type {NFTStore, NFTStoreInterface} from "../NFTStore";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "ownerCutPerMillion",
        type: "uint256",
      },
    ],
    name: "ChangedOwnerCutPerMillion",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IMelandStoreItems",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "priceInWei",
        type: "uint256",
      },
    ],
    name: "NFTBuyed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IMelandStoreItems",
        name: "nftAddress",
        type: "address",
      },
    ],
    name: "NFTCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IMelandStoreItems",
        name: "nftAddress",
        type: "address",
      },
    ],
    name: "NFTDelete",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IMelandStoreItems",
        name: "nftAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "checked",
        type: "bool",
      },
    ],
    name: "NFTItemUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GM_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPGRADER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptedToken",
    outputs: [
      {
        internalType: "contract IERC20MELD",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "foundationWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMelandStoreItems",
        name: "",
        type: "address",
      },
    ],
    name: "itemUploadedMap",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "officialWallet",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownerCutPerMillion",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20MELD",
        name: "_acceptedToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_officialWallet",
        type: "address",
      },
      {
        internalType: "address",
        name: "_foundationWallet",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_ownerCutPerMillion",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMelandStoreItems",
        name: "nft",
        type: "address",
      },
    ],
    name: "createNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMelandStoreItems",
        name: "nft",
        type: "address",
      },
    ],
    name: "removedNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMelandStoreItems",
        name: "nft",
        type: "address",
      },
    ],
    name: "updateNFTItemInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_ownerCutPerMillion",
        type: "uint256",
      },
    ],
    name: "setOwnerCutPerMillion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IMelandStoreItems",
        name: "nft",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "symbol",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "priceInWei",
        type: "uint256",
      },
    ],
    name: "buyNFT",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b5060805161260b610045600039600081816107bf015281816107ff0152818161088801526108c8015261260b6000f3fe6080604052600436106101405760003560e01c80634f1ef286116100b6578063cf756fdf1161006f578063cf756fdf14610392578063d5391393146103b2578063d547741f146103e6578063eaf3717014610406578063f72c0d8b14610437578063fa21a11d1461046b57600080fd5b80634f1ef286146102f45780636b7ae8dc1461030757806391d1485414610327578063a01f79d414610347578063a217fddf1461035d578063a58974de1461037257600080fd5b80632f2ff15d116101085780632f2ff15d1461023257806330c7be2c14610252578063355568db1461027457806336568abe146102945780633659cfe6146102b4578063451c3d80146102d457600080fd5b806301ffc9a714610145578063088025d31461017a57806317e5883c146101b257806319dad16d146101d4578063248a9ca3146101f4575b600080fd5b34801561015157600080fd5b50610165610160366004611ec4565b61048b565b60405190151581526020015b60405180910390f35b34801561018657600080fd5b5060fd5461019a906001600160a01b031681565b6040516001600160a01b039091168152602001610171565b3480156101be57600080fd5b506101d26101cd366004611f03565b6104c2565b005b3480156101e057600080fd5b506101d26101ef366004611f20565b610586565b34801561020057600080fd5b5061022461020f366004611f20565b60009081526065602052604090206001015490565b604051908152602001610171565b34801561023e57600080fd5b506101d261024d366004611f39565b610644565b34801561025e57600080fd5b506102246000805160206125b683398151915281565b34801561028057600080fd5b506101d261028f366004611f03565b61066f565b3480156102a057600080fd5b506101d26102af366004611f39565b610736565b3480156102c057600080fd5b506101d26102cf366004611f03565b6107b4565b3480156102e057600080fd5b5060fb5461019a906001600160a01b031681565b6101d2610302366004611fb0565b61087d565b34801561031357600080fd5b5060fc5461019a906001600160a01b031681565b34801561033357600080fd5b50610165610342366004611f39565b610933565b34801561035357600080fd5b5061022460fe5481565b34801561036957600080fd5b50610224600081565b34801561037e57600080fd5b506101d261038d366004612058565b61095e565b34801561039e57600080fd5b506101d26103ad36600461208d565b611381565b3480156103be57600080fd5b506102247f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b3480156103f257600080fd5b506101d2610401366004611f39565b611443565b34801561041257600080fd5b50610165610421366004611f03565b60ff602081905260009182526040909120541681565b34801561044357600080fd5b506102247f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e381565b34801561047757600080fd5b506101d2610486366004611f03565b611469565b60006001600160e01b03198216637965db0b60e01b14806104bc57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6104cb816114b3565b6001600160a01b038116600090815260ff6020819052604090912054161561052b5760405162461bcd60e51b815260206004820152600e60248201526d416c72656164792065786973747360901b60448201526064015b60405180910390fd5b6001600160a01b038116600081815260ff6020908152604091829020805460ff1916600117905590519182527f3754da1a98214dd62255f52efe5c8d68ba410e5c19339cc7883a5fba3df0adf291015b60405180910390a150565b6000805160206125b683398151915261059f8133611508565b620f424082106106075760405162461bcd60e51b815260206004820152602d60248201527f546865206f776e6572206375742073686f756c64206265206265747765656e2060448201526c3020616e64203939392c39393960981b6064820152608401610522565b60fe8290556040518281527ffa406a120a9e7f2b332bfb7a43d3bf1c3f079262202907a6b69c94b2821a02c6906020015b60405180910390a15050565b6000828152606560205260409020600101546106608133611508565b61066a838361156c565b505050565b6000805160206125b68339815191526106888133611508565b6001600160a01b038216600090815260ff602081905260409091205416156106e55760405162461bcd60e51b815260206004820152601060248201526f139195081b9bdd081d5c1b185bd9195960821b6044820152606401610522565b6001600160a01b038216600081815260ff6020908152604091829020805460ff1916905590519182527f06f409384c0d94d2cd9598077ce98c1d0ce08bdc8c53667ca6d2c1878f8bd3849101610638565b6001600160a01b03811633146107a65760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b6064820152608401610522565b6107b082826115f2565b5050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156107fd5760405162461bcd60e51b8152600401610522906120de565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661082f611659565b6001600160a01b0316146108555760405162461bcd60e51b81526004016105229061212a565b61085e81611687565b6040805160008082526020820190925261087a918391906116b2565b50565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156108c65760405162461bcd60e51b8152600401610522906120de565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166108f8611659565b6001600160a01b03161461091e5760405162461bcd60e51b81526004016105229061212a565b61092782611687565b6107b0828260016116b2565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6001600160a01b038316600090815260ff60208190526040909120543391166109bc5760405162461bcd60e51b815260206004820152601060248201526f139195081b9bdd081d5c1b1bd859195960821b6044820152606401610522565b6109c5846114b3565b60008080866001600160a01b0316638b31e62d6040518163ffffffff1660e01b815260040160006040518083038186803b158015610a0257600080fd5b505afa158015610a16573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a3e9190810190612205565b9150915060005b8251811015610a895786838281518110610a6157610a616122c1565b60200260200101511415610a7757809350610a89565b80610a81816122ed565b915050610a45565b50604051633e9b278d60e01b8152600481018790526001600160a01b03881690633e9b278d90602401602060405180830381600087803b158015610acc57600080fd5b505af1158015610ae0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b04919061231d565b610b615760405162461bcd60e51b815260206004820152602860248201527f4d65726368616e6469736520686173206265656e2073757370656e6465642066604482015267726f6d2073616c6560c01b6064820152608401610522565b6000831180610b8957508582600081518110610b7f57610b7f6122c1565b6020026020010151145b610bca5760405162461bcd60e51b815260206004820152601260248201527173796d626f6c206973206e6f742073616c6560701b6044820152606401610522565b84818481518110610bdd57610bdd6122c1565b602002602001015114610c325760405162461bcd60e51b815260206004820152601860248201527f546865207072696365206973206e6f7420636f727265637400000000000000006044820152606401610522565b505060405163e4ba5ba960e01b81526004810185905260009081906001600160a01b0388169063e4ba5ba990602401604080518083038186803b158015610c7857600080fd5b505afa158015610c8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb09190612338565b915091508115610d635780610cc68888876117f6565b1081604051602001610d2a91907f457863656564656420746865206d6178696d756d206c696d697420746861742081527f6561636820706572736f6e2063616e20707572636861736520280000000000006020820152603a810191909152605a0190565b60405160208183030381529060405290610d575760405162461bcd60e51b81526004016105229190612394565b50610d6387878661181f565b505060405163d2f0ffc560e01b8152600481018590526000906001600160a01b0387169063d2f0ffc59060240160206040518083038186803b158015610da857600080fd5b505afa158015610dbc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610de091906123c7565b905060008080886001600160a01b031663aa24e4bf896040518263ffffffff1660e01b8152600401610e1491815260200190565b60006040518083038186803b158015610e2c57600080fd5b505afa158015610e40573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610e6891908101906123e4565b915091508115610ef5576000815111610ed75760405162461bcd60e51b815260206004820152602b60248201527f496e73756666696369656e74207175616e74697479206f662073616c6561626c60448201526a6520696e76656e746f727960a81b6064820152608401610522565b80600081518110610eea57610eea6122c1565b602002602001015192505b60fe54600090156111bb57610f22620f4240610f1c60fe548b61185e90919063ffffffff16565b9061186a565b90506000610f366064610f1c84602861185e565b90506000610f4a6064610f1c85602861185e565b90506000610f5e6064610f1c86601461185e565b60fb5460405163079cc67960e41b81526001600160a01b038d81166004830152602482018790529293509116906379cc679090604401600060405180830381600087803b158015610fae57600080fd5b505af1158015610fc2573d6000803e3d6000fd5b505060fb5460fc546040516323b872dd60e01b81526001600160a01b038f81166004830152918216602482015260448101879052911692506323b872dd9150606401602060405180830381600087803b15801561101e57600080fd5b505af1158015611032573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611056919061231d565b6110bc5760405162461bcd60e51b815260206004820152603160248201527f48616e646c696e6720666565207472616e7366657220746f20666f756e646174604482015270696f6e57616c6c6574206661696c75726560781b6064820152608401610522565b60fb5460fd546040516323b872dd60e01b81526001600160a01b038d811660048301529182166024820152604481018490529116906323b872dd90606401602060405180830381600087803b15801561111457600080fd5b505af1158015611128573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061114c919061231d565b6111b75760405162461bcd60e51b815260206004820152603660248201527f48616e646c696e6720666565207472616e7366657220746f206f6666696369616044820152756c57616c6c657420746f206f6666206661696c75726560501b6064820152608401610522565b5050505b60fb546001600160a01b03166323b872dd88876111d88c86611876565b6040516001600160e01b031960e086901b1681526001600160a01b0393841660048201529290911660248301526044820152606401602060405180830381600087803b15801561122757600080fd5b505af115801561123b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061125f919061231d565b6112c45760405162461bcd60e51b815260206004820152603060248201527f5472616e73666572696e67207468652073616c6520616d6f756e7420746f207460448201526f1a19481cd95b1b195c8819985a5b195960821b6064820152608401610522565b6040516310591be760e11b8152600481018a9052602481018590526001600160a01b0388811660448301528b16906320b237ce90606401600060405180830381600087803b15801561131557600080fd5b505af1158015611329573d6000803e3d6000fd5b505060408051878152602081018c90526001600160a01b03808f1694508b1692507f9eb6a78e94ba77e6fc35eeea646a0b206b20117e224946bc3c5435ea787685a3910160405180910390a350505050505050505050565b600054610100900460ff168061139a575060005460ff16155b6113b65760405162461bcd60e51b815260040161052290612428565b600054610100900460ff161580156113d8576000805461ffff19166101011790555b6113e0611882565b6113e86118fd565b60fb80546001600160a01b038088166001600160a01b03199283161790925560fd805487841690831617905560fc80549286169290911691909117905560fe829055801561143c576000805461ff00191690555b5050505050565b60008281526065602052604090206001015461145f8133611508565b61066a83836115f2565b7fc792cdc7e2492613f3b1272b47afdfc0db66ee85b9fde5d34790f4f02b21f183816114948361197e565b604080516001600160a01b03909316835290151560208301520161057b565b6114bc8161197e565b61087a5760405162461bcd60e51b815260206004820152601960248201527f50726f647563742063616c6962726174696f6e206572726f72000000000000006044820152606401610522565b6115128282610933565b6107b05761152a816001600160a01b03166014611a04565b611535836020611a04565b604051602001611546929190612476565b60408051601f198184030181529082905262461bcd60e51b825261052291600401612394565b6115768282610933565b6107b05760008281526065602090815260408083206001600160a01b03851684529091529020805460ff191660011790556115ae3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6115fc8282610933565b156107b05760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b7f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e36107b08133611508565b60006116bc611659565b90506116c784611ba0565b6000835111806116d45750815b156116e5576116e38484611c45565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff1661143c57805460ff191660011781556040516001600160a01b038316602482015261176490869060440160408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b179052611c45565b50805460ff19168155611775611659565b6001600160a01b0316826001600160a01b0316146117ed5760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608401610522565b61143c85611d30565b600080611804858585611d70565b600090815261010060205260409020549150505b9392505050565b600061182c848484611d70565b905060016101006000838152602001908152602001600020600082825461185391906124eb565b909155505050505050565b60006118188284612503565b60006118188284612522565b60006118188284612544565b600054610100900460ff168061189b575060005460ff16155b6118b75760405162461bcd60e51b815260040161052290612428565b600054610100900460ff161580156118d9576000805461ffff19166101011790555b6118e1611dc2565b6118e9611dc2565b801561087a576000805461ff001916905550565b611905611e2c565b61191060003361156c565b6119286000805160206125b68339815191523361156c565b6119527f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a63361156c565b61197c7f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e33361156c565b565b6000806000836001600160a01b0316638b31e62d6040518163ffffffff1660e01b815260040160006040518083038186803b1580156119bc57600080fd5b505afa1580156119d0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526119f89190810190612205565b51905114949350505050565b60606000611a13836002612503565b611a1e9060026124eb565b67ffffffffffffffff811115611a3657611a36611f69565b6040519080825280601f01601f191660200182016040528015611a60576020820181803683370190505b509050600360fc1b81600081518110611a7b57611a7b6122c1565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611aaa57611aaa6122c1565b60200101906001600160f81b031916908160001a9053506000611ace846002612503565b611ad99060016124eb565b90505b6001811115611b51576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611b0d57611b0d6122c1565b1a60f81b828281518110611b2357611b236122c1565b60200101906001600160f81b031916908160001a90535060049490941c93611b4a8161255b565b9050611adc565b5083156118185760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610522565b803b611c045760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610522565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b611ca45760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610522565b600080846001600160a01b031684604051611cbf9190612572565b600060405180830381855af49150503d8060008114611cfa576040519150601f19603f3d011682016040523d82523d6000602084013e611cff565b606091505b5091509150611d27828260405180606001604052806027815260200161258f60279139611e8b565b95945050505050565b611d3981611ba0565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6040516bffffffffffffffffffffffff19606085811b821660208401526034830185905283901b1660548201526000906068016040516020818303038152906040528051906020012090509392505050565b600054610100900460ff1680611ddb575060005460ff16155b611df75760405162461bcd60e51b815260040161052290612428565b600054610100900460ff161580156118e9576000805461ffff1916610101179055801561087a576000805461ff001916905550565b600054610100900460ff1680611e45575060005460ff16155b611e615760405162461bcd60e51b815260040161052290612428565b600054610100900460ff16158015611e83576000805461ffff19166101011790555b6118d9611dc2565b60608315611e9a575081611818565b825115611eaa5782518084602001fd5b8160405162461bcd60e51b81526004016105229190612394565b600060208284031215611ed657600080fd5b81356001600160e01b03198116811461181857600080fd5b6001600160a01b038116811461087a57600080fd5b600060208284031215611f1557600080fd5b813561181881611eee565b600060208284031215611f3257600080fd5b5035919050565b60008060408385031215611f4c57600080fd5b823591506020830135611f5e81611eee565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611fa857611fa8611f69565b604052919050565b60008060408385031215611fc357600080fd5b8235611fce81611eee565b915060208381013567ffffffffffffffff80821115611fec57600080fd5b818601915086601f83011261200057600080fd5b81358181111561201257612012611f69565b612024601f8201601f19168501611f7f565b9150808252878482850101111561203a57600080fd5b80848401858401376000848284010152508093505050509250929050565b60008060006060848603121561206d57600080fd5b833561207881611eee565b95602085013595506040909401359392505050565b600080600080608085870312156120a357600080fd5b84356120ae81611eee565b935060208501356120be81611eee565b925060408501356120ce81611eee565b9396929550929360600135925050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b600067ffffffffffffffff82111561219057612190611f69565b5060051b60200190565b600082601f8301126121ab57600080fd5b815160206121c06121bb83612176565b611f7f565b82815260059290921b840181019181810190868411156121df57600080fd5b8286015b848110156121fa57805183529183019183016121e3565b509695505050505050565b6000806040838503121561221857600080fd5b825167ffffffffffffffff8082111561223057600080fd5b818501915085601f83011261224457600080fd5b815160206122546121bb83612176565b82815260059290921b8401810191818101908984111561227357600080fd5b948201945b8386101561229157855182529482019490820190612278565b918801519196509093505050808211156122aa57600080fd5b506122b78582860161219a565b9150509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415612301576123016122d7565b5060010190565b8051801515811461231857600080fd5b919050565b60006020828403121561232f57600080fd5b61181882612308565b6000806040838503121561234b57600080fd5b61235483612308565b9150602083015190509250929050565b60005b8381101561237f578181015183820152602001612367565b8381111561238e576000848401525b50505050565b60208152600082518060208401526123b3816040850160208701612364565b601f01601f19169190910160400192915050565b6000602082840312156123d957600080fd5b815161181881611eee565b600080604083850312156123f757600080fd5b61240083612308565b9150602083015167ffffffffffffffff81111561241c57600080fd5b6122b78582860161219a565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516124ae816017850160208801612364565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516124df816028840160208801612364565b01602801949350505050565b600082198211156124fe576124fe6122d7565b500190565b600081600019048311821515161561251d5761251d6122d7565b500290565b60008261253f57634e487b7160e01b600052601260045260246000fd5b500490565b600082821015612556576125566122d7565b500390565b60008161256a5761256a6122d7565b506000190190565b60008251612584818460208701612364565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564f5eb84615c2a00ecaf817d13794ebd6299c9e01c395bf4018453f13f577f5449a26469706673582212203986efb8258012f5c64aa78d87198cdf4fe7e393fadbdb87413ff9b00e39a2d564736f6c63430008090033";

export class NFTStore__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<NFTStore> {
    return super.deploy(overrides || {}) as Promise<NFTStore>;
  }
  getDeployTransaction(
    overrides?: Overrides & {from?: string | Promise<string>}
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NFTStore {
    return super.attach(address) as NFTStore;
  }
  connect(signer: Signer): NFTStore__factory {
    return super.connect(signer) as NFTStore__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTStoreInterface {
    return new utils.Interface(_abi) as NFTStoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTStore {
    return new Contract(address, _abi, signerOrProvider) as NFTStore;
  }
}
