import { useToast, UseToastOptions } from "@chakra-ui/react";
import { useStore } from "@nanostores/react";
import { BigNumber } from "ethers";
import { atom } from "nanostores";
import { useEffect, useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
    stakeSuccessFn,
} from "../component/stake-result-modal";
import {
    claim,
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
    useMetaQuery,
    useStakeMetaSQuery,
    useStakesQuery,
} from "../types-and-hooks";
import { userAddressAtom } from "./address";
import { meldAddress, PAGE_SIZE, stakeAddress, staker } from "./constant";

export const isStakedAtom = atom(false);

export const currentPoolsIdAtom = atom<string[]>([]);

export const stakedArrAtom = atom<string[]>([]);

export const setStakedArr = (o: string[]) => {
    stakedArrAtom.set(o);
};

export const setCurrentPoolsId = (o: string[]) => {
    currentPoolsIdAtom.set(o);
};

export const getPoolInfo = async () => {
    const provider = await getWeb3Provider();
    const data = await getHighestLevelStakeInfo(stakeAddress!, provider!);
    return data;
};

export const useLevelInfoQuery = () => {
    const addr = useStore(userAddressAtom);
    const obj = useQuery(["levelInfo", addr], getPoolInfo, { enabled: !!addr });
    return obj;
};

/**
 * 质押对应等级的 func
 * @param poolId
 * @returns
 */
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
/**
 * 获取所有质押的信息
 * @param pageIndex
 * @returns
 */
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

    const o = useStakesQuery(params, { enabled: !!addr });

    useEffect(() => {
        if (o.data?.stakes.length) {
            isStakedAtom.set(true);
        }
    }, [o.data]);

    return o;
};

/**
 * 获取 header 上的 m coin 数量
 * @returns
 */
export const useMeld = () => {
    const result = useQuery("get meld", async () => {
        const provider = await getWeb3Provider();
        const o = await getMELD(meldAddress!, provider!);
        return o;
    });
    return result;
};

/**
 *  获取 MELD Earned 数量
 * @returns
 */
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

const allQueriesKey = [
    "get meld",
    "get all",
    "stakeMeta",
    "stakeMetaS",
    "stakes",
    "levelInfo",
];

let hasCompleted: Record<string, boolean> = {};

/**
 * 执行操作后得到 blockNumber ，根据 blockNumber 查询当前操作是非完成，
 * @param param0
 * @returns
 */

export const useBlockIndexIsSuccess = ({
    blockNumber,
    toastOption,
    onSuccess,
}: {
    blockNumber?: number;
    toastOption?: UseToastOptions;
    stopRefresh?: boolean;
    onSuccess?: () => void;
}) => {
    const toast = useToast();
    const queryClient = useQueryClient();

    //@ts-ignore
    return useMetaQuery(undefined, {
        enabled: !!blockNumber && !hasCompleted[blockNumber + ""],
        refetchInterval: (data) => {
            if (blockNumber && hasCompleted[blockNumber + ""]) {
                return false;
            }
            if (
                blockNumber &&
                data?._meta?.block?.number &&
                data?._meta?.block?.number >= blockNumber
            ) {
                toastOption &&
                    toast({
                        title: "Success!",
                        position: "top",
                        status: "success",
                        isClosable: true,
                        ...toastOption,
                    });
                hasCompleted[blockNumber + ""] = true;
                onSuccess && onSuccess();
                allQueriesKey.forEach((key) =>
                    queryClient.invalidateQueries(key)
                );
                return false;
            }
            return 2000;
        },
    });
};

/**
 *  stake action will be called when user click the stake button
 *
 */
export const useStakePoolAction = () => {
    const mutation = useMutation(stakeByPoolId);

    const query = useBlockIndexIsSuccess({
        blockNumber: mutation?.data?.blockNumber,
        onSuccess: () => {
            stakeSuccessFn(mutation?.data?.transactionHash!);
        },
    });
    return {
        mutation,
        query,
        mutate: mutation.mutate,
        isLoading: mutation.isLoading || query.isLoading,
    };
};

/**
 *  claim action will be called when user click the claim button
 *
 */
export const useClaimAction = () => {
    const mutation = useMutation(async (stakePoolId: BigNumber) => {
        const provider = await getWeb3Provider();
        const o = await claim(stakeAddress!, provider!, stakePoolId);
        return o;
    });

    const query = useBlockIndexIsSuccess({
        blockNumber: mutation?.data?.blockNumber,
    });

    return {
        mutation,
        query,
        mutate: mutation.mutate,
        isLoading: mutation.isLoading || query.isLoading,
    };
};

/**
 *  harvest action will be called when user click the harvest button
 *
 */
export const useHarvestAction = () => {
    const mutation = useMutation(async () => {
        const provider = await getWeb3Provider();
        const o = await harvest(stakeAddress!, provider!);
        return o;
    });
    const query = useBlockIndexIsSuccess({
        blockNumber: mutation?.data?.blockNumber,
    });

    return {
        mutation,
        query,
        mutate: mutation.mutate,
        isLoading: mutation.isLoading || query.isLoading,
    };
};

/**
 * 获取当期质押信息
 */
export const useGetCurrentStakedPoolsQuery = () => {
    const addr = useStore(userAddressAtom);
    const pools = useStore(currentPoolsIdAtom);

    const data = useStakesQuery(
        {
            where: {
                staker: addr,
                stakePool_in: pools,
            },
        },
        {
            enabled: !!addr && pools.length > 0,
        }
    );

    useEffect(() => {
        if (data.data?.stakes) {
            setStakedArr(data.data?.stakes.map((e) => e.stakePool.id) || []);
        }
    }, [data]);
    return data;
};
