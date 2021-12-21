/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import {BytesLike} from "@ethersproject/bytes";
import {Listener, Provider} from "@ethersproject/providers";
import {FunctionFragment, EventFragment, Result} from "@ethersproject/abi";
import type {TypedEventFilter, TypedEvent, TypedListener} from "./common";

interface VestPoolV3Interface extends ethers.utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "GM_ROLE()": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
    "vcmap(address)": FunctionFragment;
    "vestings(uint256)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "fixedTokensToVest(uint256)": FunctionFragment;
    "viewTokenToVest()": FunctionFragment;
    "addMultipleVC(tuple[])": FunctionFragment;
    "reviceTGE()": FunctionFragment;
    "removeVC(address)": FunctionFragment;
    "release(uint256)": FunctionFragment;
    "retrieveExcessTokens(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "GM_ROLE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "vcmap", values: [string]): string;
  encodeFunctionData(
    functionFragment: "vestings",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "fixedTokensToVest",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "viewTokenToVest",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addMultipleVC",
    values: [
      {
        timeOfTGE: BigNumberish;
        amount: BigNumberish;
        cliffMonth: BigNumberish;
        vestingMonth: BigNumberish;
        unlockTGE: BigNumberish;
        beneficiary: string;
        recived: boolean;
      }[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "reviceTGE", values?: undefined): string;
  encodeFunctionData(functionFragment: "removeVC", values: [string]): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveExcessTokens",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "GM_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vcmap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vestings", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fixedTokensToVest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewTokenToVest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addMultipleVC",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "reviceTGE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeVC", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "retrieveExcessTokens",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "TokenVestingAdded(uint256,address,uint256)": EventFragment;
    "TokenVestingReleased(uint256,address,uint256)": EventFragment;
    "TokenVestingRemoved(uint256,address,uint256)": EventFragment;
    "Upgraded(address)": EventFragment;
    "VCAdd(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenVestingAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenVestingReleased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenVestingRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VCAdd"): EventFragment;
}

export type AdminChangedEvent = TypedEvent<
  [string, string] & {previousAdmin: string; newAdmin: string}
>;

export type BeaconUpgradedEvent = TypedEvent<[string] & {beacon: string}>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string] & {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string] & {role: string; account: string; sender: string}
>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string] & {role: string; account: string; sender: string}
>;

export type TokenVestingAddedEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    vestingId: BigNumber;
    beneficiary: string;
    amount: BigNumber;
  }
>;

export type TokenVestingReleasedEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    vestingId: BigNumber;
    beneficiary: string;
    amount: BigNumber;
  }
>;

export type TokenVestingRemovedEvent = TypedEvent<
  [BigNumber, string, BigNumber] & {
    vestingId: BigNumber;
    beneficiary: string;
    amount: BigNumber;
  }
>;

export type UpgradedEvent = TypedEvent<[string] & {implementation: string}>;

export type VCAddEvent = TypedEvent<[string] & {vcAddress: string}>;

export class VestPoolV3 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: VestPoolV3Interface;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    GM_ROLE(overrides?: CallOverrides): Promise<[string]>;

    /**
     * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
     */
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    /**
     * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.
     */
    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    /**
     * Returns `true` if `account` has been granted `role`.
     */
    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.
     */
    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    /**
     * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.
     */
    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    /**
     * Upgrade the implementation of the proxy to `newImplementation`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.
     */
    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    /**
     * Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call encoded in `data`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.
     */
    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    vcmap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        boolean
      ] & {
        timeOfTGE: BigNumber;
        amount: BigNumber;
        cliffMonth: BigNumber;
        vestingMonth: BigNumber;
        unlockTGE: BigNumber;
        beneficiary: string;
        recived: boolean;
      }
    >;

    vestings(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, boolean] & {
        releaseTime: BigNumber;
        amount: BigNumber;
        beneficiary: string;
        released: boolean;
      }
    >;

    initialize(
      _token: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    fixedTokensToVest(
      _tokensToVest: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    viewTokenToVest(overrides?: CallOverrides): Promise<[BigNumber]>;

    addMultipleVC(
      _vcs: {
        timeOfTGE: BigNumberish;
        amount: BigNumberish;
        cliffMonth: BigNumberish;
        vestingMonth: BigNumberish;
        unlockTGE: BigNumberish;
        beneficiary: string;
        recived: boolean;
      }[],
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    reviceTGE(
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    removeVC(
      _vcAddress: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    release(
      _vestingId: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;

    retrieveExcessTokens(
      _amount: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<ContractTransaction>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  GM_ROLE(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
   */
  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  /**
   * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.
   */
  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  /**
   * Returns `true` if `account` has been granted `role`.
   */
  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.
   */
  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  /**
   * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.
   */
  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  /**
   * See {IERC165-supportsInterface}.
   */
  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Upgrade the implementation of the proxy to `newImplementation`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.
   */
  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  /**
   * Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call encoded in `data`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.
   */
  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  vcmap(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string, boolean] & {
      timeOfTGE: BigNumber;
      amount: BigNumber;
      cliffMonth: BigNumber;
      vestingMonth: BigNumber;
      unlockTGE: BigNumber;
      beneficiary: string;
      recived: boolean;
    }
  >;

  vestings(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, string, boolean] & {
      releaseTime: BigNumber;
      amount: BigNumber;
      beneficiary: string;
      released: boolean;
    }
  >;

  initialize(
    _token: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  fixedTokensToVest(
    _tokensToVest: BigNumberish,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  viewTokenToVest(overrides?: CallOverrides): Promise<BigNumber>;

  addMultipleVC(
    _vcs: {
      timeOfTGE: BigNumberish;
      amount: BigNumberish;
      cliffMonth: BigNumberish;
      vestingMonth: BigNumberish;
      unlockTGE: BigNumberish;
      beneficiary: string;
      recived: boolean;
    }[],
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  reviceTGE(
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  removeVC(
    _vcAddress: string,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  release(
    _vestingId: BigNumberish,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  retrieveExcessTokens(
    _amount: BigNumberish,
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<ContractTransaction>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    GM_ROLE(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
     */
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    /**
     * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.
     */
    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Returns `true` if `account` has been granted `role`.
     */
    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.
     */
    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.
     */
    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Upgrade the implementation of the proxy to `newImplementation`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.
     */
    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call encoded in `data`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.
     */
    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    vcmap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        boolean
      ] & {
        timeOfTGE: BigNumber;
        amount: BigNumber;
        cliffMonth: BigNumber;
        vestingMonth: BigNumber;
        unlockTGE: BigNumber;
        beneficiary: string;
        recived: boolean;
      }
    >;

    vestings(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, string, boolean] & {
        releaseTime: BigNumber;
        amount: BigNumber;
        beneficiary: string;
        released: boolean;
      }
    >;

    initialize(_token: string, overrides?: CallOverrides): Promise<void>;

    fixedTokensToVest(
      _tokensToVest: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    viewTokenToVest(overrides?: CallOverrides): Promise<BigNumber>;

    addMultipleVC(
      _vcs: {
        timeOfTGE: BigNumberish;
        amount: BigNumberish;
        cliffMonth: BigNumberish;
        vestingMonth: BigNumberish;
        unlockTGE: BigNumberish;
        beneficiary: string;
        recived: boolean;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    reviceTGE(overrides?: CallOverrides): Promise<void>;

    removeVC(_vcAddress: string, overrides?: CallOverrides): Promise<void>;

    release(_vestingId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    retrieveExcessTokens(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): TypedEventFilter<
      [string, string],
      {previousAdmin: string; newAdmin: string}
    >;

    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): TypedEventFilter<
      [string, string],
      {previousAdmin: string; newAdmin: string}
    >;

    "BeaconUpgraded(address)"(
      beacon?: string | null
    ): TypedEventFilter<[string], {beacon: string}>;

    BeaconUpgraded(
      beacon?: string | null
    ): TypedEventFilter<[string], {beacon: string}>;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      {role: string; previousAdminRole: string; newAdminRole: string}
    >;

    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      {role: string; previousAdminRole: string; newAdminRole: string}
    >;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      {role: string; account: string; sender: string}
    >;

    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      {role: string; account: string; sender: string}
    >;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      {role: string; account: string; sender: string}
    >;

    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      {role: string; account: string; sender: string}
    >;

    "TokenVestingAdded(uint256,address,uint256)"(
      vestingId?: BigNumberish | null,
      beneficiary?: string | null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      {vestingId: BigNumber; beneficiary: string; amount: BigNumber}
    >;

    TokenVestingAdded(
      vestingId?: BigNumberish | null,
      beneficiary?: string | null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      {vestingId: BigNumber; beneficiary: string; amount: BigNumber}
    >;

    "TokenVestingReleased(uint256,address,uint256)"(
      vestingId?: BigNumberish | null,
      beneficiary?: string | null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      {vestingId: BigNumber; beneficiary: string; amount: BigNumber}
    >;

    TokenVestingReleased(
      vestingId?: BigNumberish | null,
      beneficiary?: string | null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      {vestingId: BigNumber; beneficiary: string; amount: BigNumber}
    >;

    "TokenVestingRemoved(uint256,address,uint256)"(
      vestingId?: BigNumberish | null,
      beneficiary?: string | null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      {vestingId: BigNumber; beneficiary: string; amount: BigNumber}
    >;

    TokenVestingRemoved(
      vestingId?: BigNumberish | null,
      beneficiary?: string | null,
      amount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      {vestingId: BigNumber; beneficiary: string; amount: BigNumber}
    >;

    "Upgraded(address)"(
      implementation?: string | null
    ): TypedEventFilter<[string], {implementation: string}>;

    Upgraded(
      implementation?: string | null
    ): TypedEventFilter<[string], {implementation: string}>;

    "VCAdd(address)"(
      vcAddress?: string | null
    ): TypedEventFilter<[string], {vcAddress: string}>;

    VCAdd(
      vcAddress?: string | null
    ): TypedEventFilter<[string], {vcAddress: string}>;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    GM_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
     */
    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.
     */
    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    /**
     * Returns `true` if `account` has been granted `role`.
     */
    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.
     */
    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    /**
     * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.
     */
    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Upgrade the implementation of the proxy to `newImplementation`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.
     */
    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    /**
     * Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call encoded in `data`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.
     */
    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    vcmap(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    vestings(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _token: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    fixedTokensToVest(
      _tokensToVest: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    viewTokenToVest(overrides?: CallOverrides): Promise<BigNumber>;

    addMultipleVC(
      _vcs: {
        timeOfTGE: BigNumberish;
        amount: BigNumberish;
        cliffMonth: BigNumberish;
        vestingMonth: BigNumberish;
        unlockTGE: BigNumberish;
        beneficiary: string;
        recived: boolean;
      }[],
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    reviceTGE(
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    removeVC(
      _vcAddress: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    release(
      _vestingId: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;

    retrieveExcessTokens(
      _amount: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GM_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.
     */
    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.
     */
    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    /**
     * Returns `true` if `account` has been granted `role`.
     */
    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.
     */
    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    /**
     * Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.
     */
    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC165-supportsInterface}.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Upgrade the implementation of the proxy to `newImplementation`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.
     */
    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    /**
     * Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call encoded in `data`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.
     */
    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    vcmap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vestings(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _token: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    fixedTokensToVest(
      _tokensToVest: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    viewTokenToVest(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addMultipleVC(
      _vcs: {
        timeOfTGE: BigNumberish;
        amount: BigNumberish;
        cliffMonth: BigNumberish;
        vestingMonth: BigNumberish;
        unlockTGE: BigNumberish;
        beneficiary: string;
        recived: boolean;
      }[],
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    reviceTGE(
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    removeVC(
      _vcAddress: string,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    release(
      _vestingId: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;

    retrieveExcessTokens(
      _amount: BigNumberish,
      overrides?: Overrides & {from?: string | Promise<string>}
    ): Promise<PopulatedTransaction>;
  };
}