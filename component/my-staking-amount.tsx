import Image from "next/image";
import {
  Text,
  Center,
  Box,
  Flex,
  Grid,
  VStack,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { colorSchemeList, MButton } from "./button";
import { BoxInfo } from "./info-box";

const myStakingAmountNumber = 3150.15;

const isStaking = false;

export const MyStakingAmountBox = () => {
  return (
    <VStack
      as={Flex}
      width={662}
      height={426}
      // flexDirection={"column"}
      padding={"32px 30px 28px 34px"}
      bg={"#0A4747"}
      rounded={"18px"}
      spacing={"20px"}
    >
      <MyStakingAmount />
      <Divider bg={"white"} opacity={0.1} />
      {isStaking && <EarnedMELD />}
      <FourBox />
      {isStaking ? <GetMeldRow /> : <StakeButtonGroup />}
    </VStack>
  );
};

const MyStakingAmount = () => {
  return (
    <Center width={"100%"} justifyContent={"space-between"}>
      <Box height={46}>
        <Text color="white" fontSize={"13px"} fontWeight={"bold"}>
          My staking amount
        </Text>
        <Text color="white" fontSize={"22px"} fontWeight={"bold"}>
          {myStakingAmountNumber}
          <Text
            as="span"
            fontSize={"12px"}
            fontWeight={"bold"}
            textColor={"#4A7A7A"}
          >
            /MELD
          </Text>
        </Text>
      </Box>
      <MButton variant="outline" mScheme="yellow">
        Add staking
      </MButton>
    </Center>
  );
};

const EarnedMELD = () => {
  return (
    <Center
      maxHeight={34}
      width={"100%"}
      flex={1}
      justifyContent={"space-between"}
    >
      <Flex align={"center"}>
        <Image
          src={"/images/meld_earned_icon@2x.png"}
          width={34}
          height={34}
          alt="meld earned"
        />
        <Box>
          <Text color="white" fontSize={"13px"} fontWeight={"bold"}>
            MELD earned
          </Text>
          <Text color="white" fontSize={"15px"} fontWeight={"bold"}>
            {myStakingAmountNumber} MELD
          </Text>
        </Box>
      </Flex>
      <MButton variant="outline" mScheme="yellow">
        Harvest
      </MButton>
    </Center>
  );
};

const earnData = ({ apy = 0, ol = 20, ddl = 20, dc = 20 }) => [
  {
    title: "Annual Percentage Yield",
    value: apy,
    icon: "/images/apy_icon@2x.png",
    unit: "",
  },
  {
    title: "Occupation limit",
    value: ol,
    icon: "/images/occupation_limit_icon@2x.png",
    unit: "LANDS",
  },
  {
    title: "DItamin/day/land",
    value: ddl,
    icon: "/images/day_land_icon@2x.png",
    unit: "Ditamin",
  },
  {
    title: "Ditamin/Challenge",
    value: dc,
    icon: "/images/ditaminchallenge_icon@2x.png",
    unit: "Ditamin",
  },
];

const FourBox = () => {
  return (
    <Grid templateColumns={"repeat(2,1fr)"} gap={"15px 26px"}>
      {earnData({}).map((item, index) => (
        <BoxInfo {...item} key={item.title} info={"12312312"} />
      ))}
    </Grid>
  );
};

const GetMeldRow = () => {
  return (
    <Flex
      width={"100%"}
      align={"center"}
      justifyContent={"space-between"}
      mt="auto!important"
    >
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Text color="white" mr={"4px"}>
          view more
        </Text>
        <Box position={"relative"} top={"2px"}>
          <Image
            src="/images/more12_icon@2x.png"
            width={14}
            height={14}
            alt="view more"
          />
        </Box>
      </Flex>
      <MButton variant={"outline"} mScheme="white">
        Get MELD
      </MButton>
    </Flex>
  );
};

const StakeButtonGroup = () => {
  return (
    <HStack
      spacing={"20px"}
      width={"100%"}
      justifyContent={"flex-end"}
      pt={"80px"}
    >
      <MButton variant={"outline"} mScheme={"yellow"}>
        Get MELD
      </MButton>
      <MButton
        {...colorSchemeList.yellow._hover}
        _hover={colorSchemeList.yellow._hover}
        _active={colorSchemeList.yellow._hover}
        mScheme={"yellow"}
      >
        Stake now
      </MButton>
    </HStack>
  );
};
