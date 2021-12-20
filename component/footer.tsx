import React from "react";
import Image from "next/image";
import {
  Text,
  Box,
  HStack,
  VStack,
  Link,
  StackDivider,
  Center,
} from "@chakra-ui/react";

const footerLinks = [
  {
    name: "How to create",
    href: "https://docs.meland.ai/how-to-play/overview",
  },
  {
    name: "How to play",
    href: "https://docs.meland.ai/how-to-play/learn-to-earn",
  },
  {
    name: "Partnership",
    href: "https://partnership.super.site",
  },
];

const footerImage = "/images/footer-title.png";

const links = {
  twitter: "https://twitter.com/meland_ai",
  discord: "https://discord.gg/Jgnx2Wy9GN",
  telegram: "https://t.me/melandaiWorld",
};

export const Footer = () => {
  return (
    <Box bg={"#001C1C"} height={"194px"}>
      <Center
        width={"1200px"}
        m={"auto"}
        height={"100%"}
        justifyContent={"space-between"}
      >
        <VStack spacing={"28px"}>
          <HStack width={"100%"} spacing={"31px"} alignItems={"baseline"}>
            <Text color={"#9A9F9F"} fontFamily={"Furore"} fontSize={"27px"}>
              MELAND.AI
            </Text>
            <Text
              color={"#9A9F9F"}
              fontFamily={"Furore"}
              fontWeight={"League Spartan"}
              fontSize={"13px"}
            >
              © 2021 BCM Innovation Ltd.
            </Text>
          </HStack>

          <HStack
            width={"100%"}
            spacing={4}
            divider={<StackDivider borderColor={"#9A9F9F"} />}
            height={"18px"}
          >
            {footerLinks.map((e, i, arr) => (
              <Link
                style={{
                  borderColor: "rgba(255, 255, 255, .46)",
                }}
                key={e.name}
                href={e.href}
                target="_blank"
                rel="noreferrer"
                color={"#9A9F9F"}
                fontFamily={"League Spartan"}
                fontSize={"13px"}
              >
                {e.name}
              </Link>
            ))}
          </HStack>
        </VStack>

        <VStack spacing={"21px"}>
          <HStack spacing={"26px"}>
            <Link href={links.twitter} target="_blank" rel="noreferrer">
              <Image
                src={"/images/tweiti@2x.png"}
                width={"34px"}
                height={"34px"}
                alt="twitter"
              />
            </Link>
            <Link href={links.telegram} target="_blank" rel="noreferrer">
              <Image
                src={"/images/telegram@2x.png"}
                width={"34px"}
                height={"34px"}
                alt="telegram"
              />
            </Link>
          </HStack>
          <Text
            color={"#9A9F9F"}
            fontSize={"13px"}
            fontFamily={"League Spartan"}
            fontWeight={"bold"}
          >
            https://www.meland.ai/
          </Text>
        </VStack>
      </Center>
    </Box>
  );
};
