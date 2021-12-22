import { useStore } from "@nanostores/react";
import { BigNumber } from "ethers";
import { atom } from "nanostores";
import { useEffect, useMemo } from "react";
import { useMutation, useQuery } from "react-query";
import {
    getAllEarned,
    getHighestLevelStakeInfo,
    getMELD,
    harvest,
    stake,
} from "../lib/stake";
import { getWeb3Provider } from "../lib/web3";
import {
    OrderDirection,
    Stake_OrderBy,
    useStakeMetaSQuery,
    useStakePoolQuery,
    useStakesQuery,
} from "../types-and-hooks";
import { userAddressAtom } from "./address";
import { meldAddress, PAGE_SIZE, stakeAddress, staker } from "./constant";

export const isStakedAtom = atom(false);

export const getPoolInfo = async () => {
    const provider = await getWeb3Provider();
    const data = await getHighestLevelStakeInfo(stakeAddress!, provider!);
    return data;
};

export const useLevelInfoQuery = () => {
    const addr = useStore(userAddressAtom);
    const obj = useQuery(["levelInfo", addr], getPoolInfo);
    return obj;
};

export const stakeByPoolId = async (poolId: string) => {
    const userAddr = userAddressAtom.get();
    if (!userAddr) {
        window.alert("Pleas connect wallet");
    }
    const provider = await getWeb3Provider();
    const data = await stake(
        stakeAddress!,
        provider!,
        meldAddress!,
        BigNumber.from(poolId)
    );
    return data;
};

export const useStakes = (pageIndex = 0) => {
    const addr = useStore(userAddressAtom);
    const params = useMemo(
        () => ({
            skip: pageIndex * PAGE_SIZE,
            first: PAGE_SIZE,
            orderDirection: OrderDirection.Desc,
            orderBy: Stake_OrderBy.StakedAt,
            where: {
                staker: addr,
            },
        }),
        [addr, pageIndex]
    );

    const o = useStakesQuery(params);

    useEffect(() => {
        if (o.data?.stakes.length) {
            isStakedAtom.set(true);
        }
    }, [o.data]);

    return o;
};

export const useMeld = () => {
    const result = useQuery("get meld", async () => {
        const provider = await getWeb3Provider();
        const o = await getMELD(meldAddress!, provider!);
        return o;
    });
    return result;
};

export const useHarvest = () => {
    const result = useMutation(async () => {
        const provider = await getWeb3Provider();
        const o = await harvest(stakeAddress!, provider!);
        return o;
    });
    return result;
};

export const useAllEarned = () => {
    const result = useQuery("get all ", async () => {
        const provider = await getWeb3Provider();
        const o = await getAllEarned(stakeAddress!, provider!);
        return o;
    });
    return result;
};

export const useTotalStakeMetaData = (address = staker) => {
    return useStakeMetaSQuery({
        first: 1,
        where: { staker: address },
    });
};
