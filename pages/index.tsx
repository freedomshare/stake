import type { NextPage } from "next";
import { HStack, VStack } from "@chakra-ui/react";

import React, { useEffect } from "react";
import { MyStakingAmountBox } from "../component/my-staking-amount";
import { TotalStakingBox } from "../component/total-staking";
import { MyStakingDetail } from "../component/my-staking-detail";
import { StakingPool } from "../component/staking-pool";
import { NotConnectWalletBox } from "../component/unconnect-wallet-box";
import { useStore } from "@nanostores/react";
import { connectWallet, userAddressAtom } from "../store/address";
import { isStakedAtom } from "../store/stake";
import { StakeModal } from "../component/stake-result-modal";

const Home: NextPage<{
    networkName: string;
    addressOfMELD: string;
    addressOfStake: string;
}> = (props) => {
    const addr = useStore(userAddressAtom);
    const isStaked = useStore(isStakedAtom);

    // useLayoutEffect(() => {
    //     connectWallet();
    // }, []);
    useEffect(() => {
        if (window.ethereum) {
            // @ts-ignore
            window.ethereum.on("accountsChanged", (accounts) => {
                connectWallet();
            });
            // @ts-ignore
            window.ethereum.on("chainChanged", (accounts) => {
                //
            });
        }
    }, []);

    return (
        <VStack
            minWidth={"1200px"}
            spacing={"30px"}
            bg={"#125354"}
            pt={"43px"}
            pb={"54px"}
        >
            <StakeModal />
            <HStack spacing={"20px"} alignItems={"flex-start"}>
                {addr ? (
                    <MyStakingAmountBox />
                ) : (
                    <NotConnectWalletBox onClickConnect={connectWallet} />
                )}
                <TotalStakingBox />
            </HStack>
            {addr && isStaked && <MyStakingDetail />}
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
