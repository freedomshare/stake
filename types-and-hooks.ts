/** 
* This file is generated automatically by `codegen.yml`. 
* Please do not modify it manually. 
*/
import { END_POINT } from './store/constant';
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(END_POINT as string, {
    method: "POST",
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  stake?: Maybe<Stake>;
  stakeMeta?: Maybe<_StakeMeta_>;
  stakeMetaS: Array<_StakeMeta_>;
  stakePool?: Maybe<StakePool>;
  stakePools: Array<StakePool>;
  stakes: Array<Stake>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryStakeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStakeMetaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStakeMetaSArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_StakeMeta__OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_StakeMeta__Filter>;
};


export type QueryStakePoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStakePoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakePool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StakePool_Filter>;
};


export type QueryStakesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Stake_Filter>;
};

export type Stake = {
  __typename?: 'Stake';
  /**
   * 是否已经领取
   *
   */
  claimed: Scalars['Boolean'];
  /**
   * 到期时间
   *
   */
  expiredAt: Scalars['BigInt'];
  id: Scalars['ID'];
  /**
   * 最后领取利息时间
   *
   */
  lastRecivedAt: Scalars['BigInt'];
  /**
   * 对应的质押池
   *
   */
  stakePool: StakePool;
  /**
   * 质押时间
   *
   */
  stakedAt: Scalars['BigInt'];
  /**
   * 质押的用户地址
   *
   */
  staker: Scalars['String'];
  txHash: Scalars['Bytes'];
};

export type StakePool = {
  __typename?: 'StakePool';
  /**
   * 答题ditamin收益
   *
   */
  ditaminC: Scalars['BigInt'];
  /**
   * 地块ditamin收益
   *
   */
  ditaminLD: Scalars['BigInt'];
  /**
   * 质押冻结时间
   *
   */
  freezeTimeAtSeconds: Scalars['BigInt'];
  /**
   * 游戏收益率
   *
   */
  gameApyPercent: Scalars['BigInt'];
  id: Scalars['ID'];
  /**
   * 可占领地块上限
   *
   */
  landC: Scalars['BigInt'];
  /**
   * 质押的MELD数量
   *
   */
  numberOfMELD: Scalars['BigInt'];
  /**
   * 已销售数量
   *
   */
  salesCount: Scalars['BigInt'];
  /**
   * 质押收益率
   *
   */
  stakeApyPercent: Scalars['BigInt'];
  /**
   * 总份额数量
   *
   */
  totalVolume: Scalars['BigInt'];
  /**
   * 质押等级显示名称
   *
   */
  vipname: Scalars['String'];
};

export type StakePool_Filter = {
  ditaminC?: InputMaybe<Scalars['BigInt']>;
  ditaminC_gt?: InputMaybe<Scalars['BigInt']>;
  ditaminC_gte?: InputMaybe<Scalars['BigInt']>;
  ditaminC_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ditaminC_lt?: InputMaybe<Scalars['BigInt']>;
  ditaminC_lte?: InputMaybe<Scalars['BigInt']>;
  ditaminC_not?: InputMaybe<Scalars['BigInt']>;
  ditaminC_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ditaminLD?: InputMaybe<Scalars['BigInt']>;
  ditaminLD_gt?: InputMaybe<Scalars['BigInt']>;
  ditaminLD_gte?: InputMaybe<Scalars['BigInt']>;
  ditaminLD_in?: InputMaybe<Array<Scalars['BigInt']>>;
  ditaminLD_lt?: InputMaybe<Scalars['BigInt']>;
  ditaminLD_lte?: InputMaybe<Scalars['BigInt']>;
  ditaminLD_not?: InputMaybe<Scalars['BigInt']>;
  ditaminLD_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  freezeTimeAtSeconds?: InputMaybe<Scalars['BigInt']>;
  freezeTimeAtSeconds_gt?: InputMaybe<Scalars['BigInt']>;
  freezeTimeAtSeconds_gte?: InputMaybe<Scalars['BigInt']>;
  freezeTimeAtSeconds_in?: InputMaybe<Array<Scalars['BigInt']>>;
  freezeTimeAtSeconds_lt?: InputMaybe<Scalars['BigInt']>;
  freezeTimeAtSeconds_lte?: InputMaybe<Scalars['BigInt']>;
  freezeTimeAtSeconds_not?: InputMaybe<Scalars['BigInt']>;
  freezeTimeAtSeconds_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gameApyPercent?: InputMaybe<Scalars['BigInt']>;
  gameApyPercent_gt?: InputMaybe<Scalars['BigInt']>;
  gameApyPercent_gte?: InputMaybe<Scalars['BigInt']>;
  gameApyPercent_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gameApyPercent_lt?: InputMaybe<Scalars['BigInt']>;
  gameApyPercent_lte?: InputMaybe<Scalars['BigInt']>;
  gameApyPercent_not?: InputMaybe<Scalars['BigInt']>;
  gameApyPercent_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  landC?: InputMaybe<Scalars['BigInt']>;
  landC_gt?: InputMaybe<Scalars['BigInt']>;
  landC_gte?: InputMaybe<Scalars['BigInt']>;
  landC_in?: InputMaybe<Array<Scalars['BigInt']>>;
  landC_lt?: InputMaybe<Scalars['BigInt']>;
  landC_lte?: InputMaybe<Scalars['BigInt']>;
  landC_not?: InputMaybe<Scalars['BigInt']>;
  landC_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfMELD?: InputMaybe<Scalars['BigInt']>;
  numberOfMELD_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfMELD_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfMELD_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfMELD_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfMELD_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfMELD_not?: InputMaybe<Scalars['BigInt']>;
  numberOfMELD_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  salesCount?: InputMaybe<Scalars['BigInt']>;
  salesCount_gt?: InputMaybe<Scalars['BigInt']>;
  salesCount_gte?: InputMaybe<Scalars['BigInt']>;
  salesCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  salesCount_lt?: InputMaybe<Scalars['BigInt']>;
  salesCount_lte?: InputMaybe<Scalars['BigInt']>;
  salesCount_not?: InputMaybe<Scalars['BigInt']>;
  salesCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeApyPercent?: InputMaybe<Scalars['BigInt']>;
  stakeApyPercent_gt?: InputMaybe<Scalars['BigInt']>;
  stakeApyPercent_gte?: InputMaybe<Scalars['BigInt']>;
  stakeApyPercent_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeApyPercent_lt?: InputMaybe<Scalars['BigInt']>;
  stakeApyPercent_lte?: InputMaybe<Scalars['BigInt']>;
  stakeApyPercent_not?: InputMaybe<Scalars['BigInt']>;
  stakeApyPercent_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume?: InputMaybe<Scalars['BigInt']>;
  totalVolume_gt?: InputMaybe<Scalars['BigInt']>;
  totalVolume_gte?: InputMaybe<Scalars['BigInt']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigInt']>;
  totalVolume_lte?: InputMaybe<Scalars['BigInt']>;
  totalVolume_not?: InputMaybe<Scalars['BigInt']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vipname?: InputMaybe<Scalars['String']>;
  vipname_contains?: InputMaybe<Scalars['String']>;
  vipname_ends_with?: InputMaybe<Scalars['String']>;
  vipname_gt?: InputMaybe<Scalars['String']>;
  vipname_gte?: InputMaybe<Scalars['String']>;
  vipname_in?: InputMaybe<Array<Scalars['String']>>;
  vipname_lt?: InputMaybe<Scalars['String']>;
  vipname_lte?: InputMaybe<Scalars['String']>;
  vipname_not?: InputMaybe<Scalars['String']>;
  vipname_not_contains?: InputMaybe<Scalars['String']>;
  vipname_not_ends_with?: InputMaybe<Scalars['String']>;
  vipname_not_in?: InputMaybe<Array<Scalars['String']>>;
  vipname_not_starts_with?: InputMaybe<Scalars['String']>;
  vipname_starts_with?: InputMaybe<Scalars['String']>;
};

export enum StakePool_OrderBy {
  DitaminC = 'ditaminC',
  DitaminLd = 'ditaminLD',
  FreezeTimeAtSeconds = 'freezeTimeAtSeconds',
  GameApyPercent = 'gameApyPercent',
  Id = 'id',
  LandC = 'landC',
  NumberOfMeld = 'numberOfMELD',
  SalesCount = 'salesCount',
  StakeApyPercent = 'stakeApyPercent',
  TotalVolume = 'totalVolume',
  Vipname = 'vipname'
}

export type Stake_Filter = {
  claimed?: InputMaybe<Scalars['Boolean']>;
  claimed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  claimed_not?: InputMaybe<Scalars['Boolean']>;
  claimed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  expiredAt?: InputMaybe<Scalars['BigInt']>;
  expiredAt_gt?: InputMaybe<Scalars['BigInt']>;
  expiredAt_gte?: InputMaybe<Scalars['BigInt']>;
  expiredAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  expiredAt_lt?: InputMaybe<Scalars['BigInt']>;
  expiredAt_lte?: InputMaybe<Scalars['BigInt']>;
  expiredAt_not?: InputMaybe<Scalars['BigInt']>;
  expiredAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastRecivedAt?: InputMaybe<Scalars['BigInt']>;
  lastRecivedAt_gt?: InputMaybe<Scalars['BigInt']>;
  lastRecivedAt_gte?: InputMaybe<Scalars['BigInt']>;
  lastRecivedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastRecivedAt_lt?: InputMaybe<Scalars['BigInt']>;
  lastRecivedAt_lte?: InputMaybe<Scalars['BigInt']>;
  lastRecivedAt_not?: InputMaybe<Scalars['BigInt']>;
  lastRecivedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakePool?: InputMaybe<Scalars['String']>;
  stakePool_contains?: InputMaybe<Scalars['String']>;
  stakePool_ends_with?: InputMaybe<Scalars['String']>;
  stakePool_gt?: InputMaybe<Scalars['String']>;
  stakePool_gte?: InputMaybe<Scalars['String']>;
  stakePool_in?: InputMaybe<Array<Scalars['String']>>;
  stakePool_lt?: InputMaybe<Scalars['String']>;
  stakePool_lte?: InputMaybe<Scalars['String']>;
  stakePool_not?: InputMaybe<Scalars['String']>;
  stakePool_not_contains?: InputMaybe<Scalars['String']>;
  stakePool_not_ends_with?: InputMaybe<Scalars['String']>;
  stakePool_not_in?: InputMaybe<Array<Scalars['String']>>;
  stakePool_not_starts_with?: InputMaybe<Scalars['String']>;
  stakePool_starts_with?: InputMaybe<Scalars['String']>;
  stakedAt?: InputMaybe<Scalars['BigInt']>;
  stakedAt_gt?: InputMaybe<Scalars['BigInt']>;
  stakedAt_gte?: InputMaybe<Scalars['BigInt']>;
  stakedAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakedAt_lt?: InputMaybe<Scalars['BigInt']>;
  stakedAt_lte?: InputMaybe<Scalars['BigInt']>;
  stakedAt_not?: InputMaybe<Scalars['BigInt']>;
  stakedAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  staker?: InputMaybe<Scalars['String']>;
  staker_contains?: InputMaybe<Scalars['String']>;
  staker_ends_with?: InputMaybe<Scalars['String']>;
  staker_gt?: InputMaybe<Scalars['String']>;
  staker_gte?: InputMaybe<Scalars['String']>;
  staker_in?: InputMaybe<Array<Scalars['String']>>;
  staker_lt?: InputMaybe<Scalars['String']>;
  staker_lte?: InputMaybe<Scalars['String']>;
  staker_not?: InputMaybe<Scalars['String']>;
  staker_not_contains?: InputMaybe<Scalars['String']>;
  staker_not_ends_with?: InputMaybe<Scalars['String']>;
  staker_not_in?: InputMaybe<Array<Scalars['String']>>;
  staker_not_starts_with?: InputMaybe<Scalars['String']>;
  staker_starts_with?: InputMaybe<Scalars['String']>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Stake_OrderBy {
  Claimed = 'claimed',
  ExpiredAt = 'expiredAt',
  Id = 'id',
  LastRecivedAt = 'lastRecivedAt',
  StakePool = 'stakePool',
  StakedAt = 'stakedAt',
  Staker = 'staker',
  TxHash = 'txHash'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  stake?: Maybe<Stake>;
  stakeMeta?: Maybe<_StakeMeta_>;
  stakeMetaS: Array<_StakeMeta_>;
  stakePool?: Maybe<StakePool>;
  stakePools: Array<StakePool>;
  stakes: Array<Stake>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionStakeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStakeMetaArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStakeMetaSArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_StakeMeta__OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_StakeMeta__Filter>;
};


export type SubscriptionStakePoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStakePoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakePool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<StakePool_Filter>;
};


export type SubscriptionStakesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Stake_Filter>;
};

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _StakeMeta_ = {
  __typename?: '_StakeMeta_';
  id: Scalars['ID'];
  /**
   * total stake amount
   *
   */
  stakeAmount: Scalars['BigInt'];
  /**
   * stake 数量
   *
   */
  stakeCount: Scalars['BigInt'];
  staker: Scalars['String'];
};

export type _StakeMeta__Filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stakeAmount?: InputMaybe<Scalars['BigInt']>;
  stakeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  stakeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  stakeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  stakeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  stakeAmount_not?: InputMaybe<Scalars['BigInt']>;
  stakeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeCount?: InputMaybe<Scalars['BigInt']>;
  stakeCount_gt?: InputMaybe<Scalars['BigInt']>;
  stakeCount_gte?: InputMaybe<Scalars['BigInt']>;
  stakeCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  stakeCount_lt?: InputMaybe<Scalars['BigInt']>;
  stakeCount_lte?: InputMaybe<Scalars['BigInt']>;
  stakeCount_not?: InputMaybe<Scalars['BigInt']>;
  stakeCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  staker?: InputMaybe<Scalars['String']>;
  staker_contains?: InputMaybe<Scalars['String']>;
  staker_ends_with?: InputMaybe<Scalars['String']>;
  staker_gt?: InputMaybe<Scalars['String']>;
  staker_gte?: InputMaybe<Scalars['String']>;
  staker_in?: InputMaybe<Array<Scalars['String']>>;
  staker_lt?: InputMaybe<Scalars['String']>;
  staker_lte?: InputMaybe<Scalars['String']>;
  staker_not?: InputMaybe<Scalars['String']>;
  staker_not_contains?: InputMaybe<Scalars['String']>;
  staker_not_ends_with?: InputMaybe<Scalars['String']>;
  staker_not_in?: InputMaybe<Array<Scalars['String']>>;
  staker_not_starts_with?: InputMaybe<Scalars['String']>;
  staker_starts_with?: InputMaybe<Scalars['String']>;
};

export enum _StakeMeta__OrderBy {
  Id = 'id',
  StakeAmount = 'stakeAmount',
  StakeCount = 'stakeCount',
  Staker = 'staker'
}

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type MetaQueryVariables = Exact<{ [key: string]: never; }>;


export type MetaQuery = { __typename?: 'Query', _meta?: { __typename?: '_Meta_', block: { __typename?: '_Block_', number: number } } | null | undefined };

export type StakePoolQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}>;


export type StakePoolQuery = { __typename?: 'Query', stakePool?: { __typename?: 'StakePool', id: string } | null | undefined };

export type StakePoolsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<StakePool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<StakePool_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}>;


export type StakePoolsQuery = { __typename?: 'Query', stakePools: Array<{ __typename?: 'StakePool', id: string, ditaminLD: any, ditaminC: any, numberOfMELD: any, landC: any, vipname: string, stakeApyPercent: any, gameApyPercent: any, freezeTimeAtSeconds: any, totalVolume: any, salesCount: any }> };

export type StakeMetaQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}>;


export type StakeMetaQuery = { __typename?: 'Query', stakeMeta?: { __typename?: '_StakeMeta_', id: string, staker: string, stakeAmount: any, stakeCount: any } | null | undefined };

export type StakeMetaSQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_StakeMeta__OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<_StakeMeta__Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}>;


export type StakeMetaSQuery = { __typename?: 'Query', stakeMetaS: Array<{ __typename?: '_StakeMeta_', id: string, staker: string, stakeAmount: any, stakeCount: any }> };

export type StakesQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Stake_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Stake_Filter>;
  block?: InputMaybe<Block_Height>;
  subgraphError?: _SubgraphErrorPolicy_;
}>;


export type StakesQuery = { __typename?: 'Query', stakes: Array<{ __typename?: 'Stake', id: string, staker: string, claimed: boolean, stakedAt: any, lastRecivedAt: any, expiredAt: any, stakePool: { __typename?: 'StakePool', id: string, ditaminLD: any, ditaminC: any, numberOfMELD: any, landC: any, vipname: string, stakeApyPercent: any, gameApyPercent: any, freezeTimeAtSeconds: any, totalVolume: any, salesCount: any } }> };


export const MetaDocument = `
    query meta {
  _meta {
    block {
      number
    }
  }
}
    `;
export const useMetaQuery = <
      TData = MetaQuery,
      TError = unknown
    >(
      variables?: MetaQueryVariables,
      options?: UseQueryOptions<MetaQuery, TError, TData>
    ) =>
    useQuery<MetaQuery, TError, TData>(
      variables === undefined ? ['meta'] : ['meta', variables],
      fetcher<MetaQuery, MetaQueryVariables>(MetaDocument, variables),
      options
    );
export const StakePoolDocument = `
    query stakePool($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = deny) {
  stakePool(id: $id, block: $block, subgraphError: $subgraphError) {
    id
  }
}
    `;
export const useStakePoolQuery = <
      TData = StakePoolQuery,
      TError = unknown
    >(
      variables: StakePoolQueryVariables,
      options?: UseQueryOptions<StakePoolQuery, TError, TData>
    ) =>
    useQuery<StakePoolQuery, TError, TData>(
      ['stakePool', variables],
      fetcher<StakePoolQuery, StakePoolQueryVariables>(StakePoolDocument, variables),
      options
    );
export const StakePoolsDocument = `
    query stakePools($skip: Int = 0, $first: Int = 100, $orderBy: StakePool_orderBy, $orderDirection: OrderDirection, $where: StakePool_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = deny) {
  stakePools(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
    subgraphError: $subgraphError
  ) {
    id
    ditaminLD
    ditaminC
    numberOfMELD
    landC
    vipname
    stakeApyPercent
    gameApyPercent
    freezeTimeAtSeconds
    totalVolume
    salesCount
  }
}
    `;
export const useStakePoolsQuery = <
      TData = StakePoolsQuery,
      TError = unknown
    >(
      variables?: StakePoolsQueryVariables,
      options?: UseQueryOptions<StakePoolsQuery, TError, TData>
    ) =>
    useQuery<StakePoolsQuery, TError, TData>(
      variables === undefined ? ['stakePools'] : ['stakePools', variables],
      fetcher<StakePoolsQuery, StakePoolsQueryVariables>(StakePoolsDocument, variables),
      options
    );
export const StakeMetaDocument = `
    query stakeMeta($id: ID!, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = deny) {
  stakeMeta(id: $id, block: $block, subgraphError: $subgraphError) {
    id
    staker
    stakeAmount
    stakeCount
  }
}
    `;
export const useStakeMetaQuery = <
      TData = StakeMetaQuery,
      TError = unknown
    >(
      variables: StakeMetaQueryVariables,
      options?: UseQueryOptions<StakeMetaQuery, TError, TData>
    ) =>
    useQuery<StakeMetaQuery, TError, TData>(
      ['stakeMeta', variables],
      fetcher<StakeMetaQuery, StakeMetaQueryVariables>(StakeMetaDocument, variables),
      options
    );
export const StakeMetaSDocument = `
    query stakeMetaS($skip: Int = 0, $first: Int = 100, $orderBy: _StakeMeta__orderBy, $orderDirection: OrderDirection, $where: _StakeMeta__filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = deny) {
  stakeMetaS(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
    subgraphError: $subgraphError
  ) {
    id
    staker
    stakeAmount
    stakeCount
  }
}
    `;
export const useStakeMetaSQuery = <
      TData = StakeMetaSQuery,
      TError = unknown
    >(
      variables?: StakeMetaSQueryVariables,
      options?: UseQueryOptions<StakeMetaSQuery, TError, TData>
    ) =>
    useQuery<StakeMetaSQuery, TError, TData>(
      variables === undefined ? ['stakeMetaS'] : ['stakeMetaS', variables],
      fetcher<StakeMetaSQuery, StakeMetaSQueryVariables>(StakeMetaSDocument, variables),
      options
    );
export const StakesDocument = `
    query stakes($skip: Int = 0, $first: Int = 100, $orderBy: Stake_orderBy, $orderDirection: OrderDirection, $where: Stake_filter, $block: Block_height, $subgraphError: _SubgraphErrorPolicy_! = deny) {
  stakes(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
    subgraphError: $subgraphError
  ) {
    id
    staker
    claimed
    stakedAt
    lastRecivedAt
    expiredAt
    stakePool {
      id
      ditaminLD
      ditaminC
      numberOfMELD
      landC
      vipname
      stakeApyPercent
      gameApyPercent
      freezeTimeAtSeconds
      totalVolume
      salesCount
    }
  }
}
    `;
export const useStakesQuery = <
      TData = StakesQuery,
      TError = unknown
    >(
      variables?: StakesQueryVariables,
      options?: UseQueryOptions<StakesQuery, TError, TData>
    ) =>
    useQuery<StakesQuery, TError, TData>(
      variables === undefined ? ['stakes'] : ['stakes', variables],
      fetcher<StakesQuery, StakesQueryVariables>(StakesDocument, variables),
      options
    );