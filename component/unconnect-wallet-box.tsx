import React from "react";
import Image from "next/image";
import { Box, Center, Text, VStack } from "@chakra-ui/react";
import { MButton } from "./button";

export const NotConnectWalletBox = (props: {
    onClickConnect: () => Promise<void>;
}) => {
    return (
        <Box
            width={"730px"}
            height={"394px"}
            // flexDirection={"column"}
            pt={"18px"}
            pl={"15px"}
            pr={"21px"}
            bg={"#0A4747"}
            rounded={"18px"}
            spacing={"20px"}
        >
            <VStack spacing={"118px"}>
                <Center
                    width={"100%"}
                    justifyContent={"flex-start"}
                    backgroundImage={`url(/images/413@2x.png)`}
                    backgroundRepeat={`no-repeat`}
                    backgroundSize={"100%"}
                    height={"71px"}
                >
                    <Box mx={"10px"}>
                        <Image
                            src="/images/connect@2x.png"
                            width={50}
                            height={50}
                            alt="warning"
                        />
                    </Box>

                    <Text color={"white"} fontSize={"12px"}>
                        Please connect to your wallet.
                    </Text>
                </Center>

                <MButton
                    variant={"outline"}
                    onClick={props.onClickConnect}
                    mScheme={"yellow"}
                    fontSize={"14px"}
                    height={"38px"}
                    width={"151px"}
                    // fontWeight={"extrabold"}
                >
                    Connect wallet
                </MButton>
            </VStack>
        </Box>
    );
};
