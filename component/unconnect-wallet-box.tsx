import React from "react";
import Image from "next/image";
import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { MButton } from "./button";

export const NotConnectWalletBox = (props: {
  onClickConnect: () => Promise<void>
}) => {
  return (
    <Box
      width={662}
      height={426}
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
          bg={"rgba(211, 27, 88, 1)"}
          rounded={"18px"}
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

        <MButton variant={"outline"} onClick={props.onClickConnect} mScheme={"yellow"} fontSize={"14px"}>
          Connect wallet
        </MButton>
      </VStack>
    </Box>
  );
};
