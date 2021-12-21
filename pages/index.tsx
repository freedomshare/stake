import type { NextPage } from "next";
import { HStack, VStack } from "@chakra-ui/react";

import React from "react";
import { MyStakingAmountBox } from "../component/my-staking-amount";
import { TotalStakingBox } from "../component/total-staking";
import { MyStakingDetail } from "../component/my-staking-detail";
import { StakingPool } from "../component/staking-pool";
import { NotConnectWalletBox } from "../component/unconnect-wallet-box";
import { getWeb3Provider, switchToNetwork } from '../lib/web3';

const Home: NextPage<{
    networkName: string,
    addressOfMELD: string,
    addressOfStake: string
}>= (props) => {
    const [uAddress, setUAddress] = React.useState<string|null>(null);

    const connectWallet = React.useCallback(async () => {
        const provider = await getWeb3Provider();
        if (!provider) {
            window.alert("please install metamask");
            return;
        }
        await switchToNetwork(provider, props.networkName);
        const accounts = await provider.listAccounts();
        setUAddress(accounts[0]);
    }, [uAddress]);

    return (
        <VStack spacing={"30px"} bg={"#125354"} pt={"43px"} pb={"54px"}>
            <HStack spacing={"33px"} alignItems={"flex-start"}>
                {uAddress ? (
                    <MyStakingAmountBox />
                ) : (
                    <NotConnectWalletBox onClickConnect={connectWallet} />
                )}
                <TotalStakingBox />
            </HStack>
            <MyStakingDetail />
            <StakingPool />
        </VStack>
    );
};

export async function getStaticProps() {
    const { ...clientWhiteList } = process.env;

    return {
        props: {
            ...clientWhiteList
        }
    }
}

export default Home;
