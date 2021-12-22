import { MelandStakes__factory, MELD__factory } from '../contracts';
import { Network, Web3Provider } from '@ethersproject/providers';
import { BigNumber } from 'ethers';

// 添加质押
export async function stake(
    stakeAddress: string,
    provider: Web3Provider,
    meldAddress: string,
    stakePoolId: BigNumber
) {
    const melandStakes = MelandStakes__factory.connect(stakeAddress, provider.getSigner());
    const meld = MELD__factory.connect(meldAddress, provider.getSigner());
    const stakePoolInfo = await melandStakes.stakePoolById(stakePoolId);
    const accounts = await provider.listAccounts();
    const allowedAmount = await meld.allowance(accounts[0], stakeAddress);

    if (allowedAmount.lt(stakePoolInfo.numberOfMELD)) {
        const approveTx = await meld.approve(stakeAddress, BigNumber.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'))
        await approveTx.wait();
    }

    const stakeTx = await melandStakes.stake(stakePoolId);
    return stakeTx.wait();
}

// 添加质押
export async function claim(
    stakeAddress: string,
    provider: Web3Provider,
    stakePoolId: BigNumber
) {
    const melandStakes = MelandStakes__factory.connect(stakeAddress, provider.getSigner());
    const claimTx = await melandStakes.claim(stakePoolId);
    return claimTx.wait();
}

// 获取当前最高质押等级.
export async function getHighestLevelStakeInfo(
    stakeAddress: string,
    provider: Web3Provider,
) {
    const melandStakes = MelandStakes__factory.connect(stakeAddress, provider.getSigner());
    const accounts = await provider.listAccounts();
    const info = await melandStakes.getUserCurrentHighLevelStake(accounts[0]);
    return {
        stakePercent: info[0],
        ditaminDayLand: info[1],
        ditaminChallenge: info[2],
        occupationLimit: info[3]
    }
}

// 获取所有待获取的利息
export async function getAllEarned(
    stakeAddress: string,
    provider: Web3Provider
) {
    const melandStakes = MelandStakes__factory.connect(stakeAddress, provider.getSigner());
    return melandStakes.getStakerAllEarned();
}

// 收取利息
export async function harvest(
    stakeAddress: string,
    provider: Web3Provider
) {
    const melandStakes = MelandStakes__factory.connect(stakeAddress, provider.getSigner());
    const tx = await melandStakes.harvest();
    return tx.wait();
}

export async function getMELD(
    meldAddress: string,
    provider: Web3Provider
) {
    const meld = MELD__factory.connect(meldAddress, provider.getSigner());
    const accounts = await provider.listAccounts();
    return meld.balanceOf(accounts[0]);
}