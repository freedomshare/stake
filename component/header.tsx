import React, { useMemo } from "react";
import Image from "next/image";
import {
    Box,
    Center,
    HStack,
    Link,
    Text,
    useClipboard,
} from "@chakra-ui/react";
import { MButton } from "./button";
import { useStore } from "@nanostores/react";
import { connectWallet, userAddressAtom } from "../store/address";
import { useMeld } from "../store/stake";
import { fromWei } from "web3-utils";
import { MNumberFormat } from "./number-format";

// const coinNum = "3k";
// const dCoinNum = "153k";

export const Header = () => {
    const addr = useStore(userAddressAtom);
    const { onCopy } = useClipboard(addr);

    const isConnectWallet = useMemo(() => addr && addr !== "", [addr]);
    const walletAddress = useMemo(
        () => addr.slice(0, 5) + "..." + addr.slice(-4),
        [addr]
    );
    const { data: coinNum } = useMeld();
    return (
        <Box height={"60px"} bg={"#0F494A"} position={"relative"}>
            <Box
                position={"absolute"}
                top={"5px"}
                left={"74px"}
                sx={{
                    "@media (max-width: 1500px)": {
                        left: "0",
                    },
                }}
            >
                <Image
                    src={"/images/logo@2x.png"}
                    width={81}
                    height={51}
                    alt="logo"
                />
            </Box>
            <HStack
                spacing={"45px"}
                width={"1200px"}
                m={"auto"}
                height={"100%"}
                sx={{
                    "@media screen and (max-width: 1400px)": {
                        ml: "90px",
                    },
                }}
            >
                <Link
                    color="white"
                    fontWeight={"extrabold"}
                    fontSize={"13px"}
                    textTransform={"uppercase"}
                    href="https://meland.ai"
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    meland.ai
                </Link>
                <Link
                    color="white"
                    fontWeight={"extrabold"}
                    fontSize={"13px"}
                    textTransform={"uppercase"}
                    href="https://docs.meland.ai/"
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    whitepaper
                </Link>
                <Link
                    color="white"
                    fontWeight={"extrabold"}
                    fontSize={"13px"}
                    textTransform={"uppercase"}
                    href="https://meland.ai/#partnersi"
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    partners
                </Link>
                <Link
                    fontWeight={"extrabold"}
                    fontSize={"13px"}
                    textTransform={"uppercase"}
                    color="white"
                >
                    marketplace
                </Link>
                <Link
                    color="white"
                    fontWeight={"extrabold"}
                    fontSize={"13px"}
                    textTransform={"uppercase"}
                    href="meland.ai"
                    target={"_blank"}
                    rel="noopener noreferrer"
                >
                    community
                </Link>
                <Link
                    fontWeight={"extrabold"}
                    fontSize={"13px"}
                    textTransform={"uppercase"}
                    color="rgba(245, 197, 42, 1)"
                >
                    STAKING
                </Link>
            </HStack>
            {!isConnectWallet ? (
                <MButton
                    width={"151px"}
                    height={"38px"}
                    variant={"outline"}
                    mScheme={"white"}
                    position={"absolute"}
                    right={"73px"}
                    top={"11px"}
                    onClick={connectWallet}
                    // fontWeight={"extrabold"}
                    fontSize={"14px"}
                >
                    Connect wallet
                </MButton>
            ) : (
                <HStack
                    spacing={"12px"}
                    height={"100%"}
                    position={"absolute"}
                    right={"73px"}
                    top={0}
                >
                    <Box
                        rounded={"full"}
                        width={"38px"}
                        height={"38px"}
                        bg={"#011213"}
                    >
                        <Image
                            src={"/images/avatar@2x.png"}
                            width={38}
                            height={38}
                            alt="avatar"
                        />
                    </Box>
                    <Text
                        color={"white"}
                        fontWeight={"bold"}
                        fontSize={"14px"}
                        title={addr}
                        onClick={onCopy}
                    >
                        {walletAddress}
                    </Text>
                    <Center>
                        <Image
                            src={"/images/m币@2x.png"}
                            width={"30px"}
                            height={"30px"}
                            alt="coin"
                        />
                        <Text
                            ml={"6px"}
                            color={"white"}
                            fontWeight={"bold"}
                            fontSize={"14px"}
                        >
                            <MNumberFormat
                                value={fromWei(coinNum?.toString() || "")}
                            />
                        </Text>
                    </Center>
                    {/* <Center>
                        <Image
                            src={"/images/d币@2x.png"}
                            width={"30px"}
                            height={"30px"}
                            alt="coin"
                        />
                        <Text
                            ml={"6px"}
                            color={"white"}
                            fontWeight={"bold"}
                            fontSize={"14px"}
                        >
                            {dCoinNum}
                        </Text>
                    </Center> */}
                </HStack>
            )}
        </Box>
    );
};
