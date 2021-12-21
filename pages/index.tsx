import type { NextPage } from "next";
import { HStack, VStack } from "@chakra-ui/react";

import React from "react";
import { MyStakingAmountBox } from "../component/my-staking-amount";
import { TotalStakingBox } from "../component/total-staking";
import { MyStakingDetail } from "../component/my-staking-detail";
import { StakingPool } from "../component/staking-pool";
import { NotConnectWalletBox } from "../component/unconnect-wallet-box";

const isConnectWallet = true;

const Home: NextPage = () => {
    return (
        <VStack spacing={"30px"} bg={"#125354"} pt={"43px"} pb={"54px"}>
            <HStack spacing={"33px"} alignItems={"flex-start"}>
                {isConnectWallet ? (
                    <MyStakingAmountBox />
                ) : (
                    <NotConnectWalletBox />
                )}
                <TotalStakingBox />
            </HStack>
            <MyStakingDetail />
            <StakingPool />
        </VStack>
    );
};

export default Home;
