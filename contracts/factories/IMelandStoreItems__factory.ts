/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Signer, utils} from "ethers";
import {Provider} from "@ethersproject/providers";
import type {
  IMelandStoreItems,
  IMelandStoreItemsInterface,
} from "../IMelandStoreItems";

const _abi = [
  {
    inputs: [],
    name: "melandStoreItems",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "symbols",
        type: "bytes32[]",
      },
      {
        internalType: "uint256[]",
        name: "prices",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "symbol",
        type: "bytes32",
      },
    ],
    name: "melandStoreItemsRestrictedPurchase",
    outputs: [
      {
        internalType: "bool",
        name: "restricted",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "restrictLimit",
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
        name: "symbol",
        type: "bytes32",
      },
    ],
    name: "melandStoreItemsRestrictPurchaseNFTIds",
    outputs: [
      {
        internalType: "bool",
        name: "restricted",
        type: "bool",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "symbol",
        type: "bytes32",
      },
    ],
    name: "melandStoreReceipt",
    outputs: [
      {
        internalType: "address",
        name: "receipt",
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
        name: "symbol",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "melandStoreItemsMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "symbol",
        type: "bytes32",
      },
    ],
    name: "melandStoreSellStatus",
    outputs: [
      {
        internalType: "bool",
        name: "isSelling",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IMelandStoreItems__factory {
  static readonly abi = _abi;
  static createInterface(): IMelandStoreItemsInterface {
    return new utils.Interface(_abi) as IMelandStoreItemsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMelandStoreItems {
    return new Contract(address, _abi, signerOrProvider) as IMelandStoreItems;
  }
}
