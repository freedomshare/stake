import type { NextPage } from "next";
import { HStack, VStack } from "@chakra-ui/react";

import React, { useEffect, useLayoutEffect } from "react";
import { MyStakingAmountBox } from "../component/my-staking-amount";
import { TotalStakingBox } from "../component/total-staking";
import { MyStakingDetail } from "../component/my-staking-detail";
import { StakingPool } from "../component/staking-pool";
import { NotConnectWalletBox } from "../component/unconnect-wallet-box";
import { useStore } from "@nanostores/react";
import { connectWallet, userAddressAtom } from "../store/address";

const Home: NextPage<{
    networkName: string;
    addressOfMELD: string;
    addressOfStake: string;
}> = (props) => {
    const addr = useStore(userAddressAtom);

    // useLayoutEffect(() => {
    //     connectWallet();
    // }, []);

    return (
        <VStack spacing={"30px"} bg={"#125354"} pt={"43px"} pb={"54px"}>
            <HStack spacing={"33px"} alignItems={"flex-start"}>
                {addr ? (
                    <MyStakingAmountBox />
                ) : (
                    <NotConnectWalletBox onClickConnect={connectWallet} />
                )}
                <TotalStakingBox />
            </HStack>
            {addr && <MyStakingDetail />}
            <StakingPool />
        </VStack>
    );
};

export async function getStaticProps() {
    const { ...clientWhiteList } = process.env;
    return {
        props: {
            ...clientWhiteList,
        },
    };
}

export default Home;
