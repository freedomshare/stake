import React from "react";
import Image from "next/image";
import {
  Avatar,
  Box,
  Center,
  Circle,
  Flex,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MButton } from "./button";

const isConnectWallet = false;
const walletAddress = "0xE0C...B613";
const coinNum = "3k";
const dCoinNum = "153k";

export const Header = () => {
  return (
    <Box height={"60px"} bg={"#0F494A"} position={"relative"}>
      <Box position={"absolute"} top={"5px"} left={"74px"}>
        <Image src={"/images/logo@2x.png"} width={81} height={51} alt="logo" />
      </Box>
      <HStack spacing={"45px"} width={"1200px"} m={"auto"} height={"100%"}>
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
          color="rgba(245, 197, 42, 1)"
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
      </HStack>
      {isConnectWallet ? (
        <MButton
          width={"151px"}
          height={"38px"}
          variant={"outline"}
          mScheme={"white"}
          position={"absolute"}
          right={"73px"}
          top={"11px"}
        >
          Connect wallet
        </MButton>
      ) : (
        <HStack
          spacing={"16px"}
          height={"100%"}
          position={"absolute"}
          right={"73px"}
          top={0}
        >
          <Avatar width={"38px"} height={"38px"} />
          <Text color={"white"} fontWeight={"bold"} fontSize={"14px"}>
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
              {coinNum}
            </Text>
          </Center>
          <Center>
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
          </Center>
        </HStack>
      )}
    </Box>
  );
};
