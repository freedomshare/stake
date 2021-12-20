import Image from "next/image";
import { Text, Box, Flex, Tooltip, Center, Button } from "@chakra-ui/react";
import { UnitText } from "./info-box";
import { colorSchemeList, MButton } from "./button";

const StakingRewardList = [
  {
    img: "/images/apyhui_icon@2x.png",
    title: "Annual Percentage Yield",
    free: "199%",
    silver: "299%",
    gold: "499%",
    platinum: "799%",
    unit: "",
  },
  {
    img: "/images/occupationhuit_icon@2x.png",
    title: "Occupation limit",
    info: "Occupation limit",
    free: "20",
    silver: "59",
    gold: "99",
    platinum: "199",
    unit: "LANDS",
  },
  {
    img: "/images/day_landhui_icon@2x.png",
    title: "DItamin/day/land",
    info: "DItamin/day/land",
    free: "20",
    silver: "59",
    gold: "99",
    platinum: "199",
    unit: "DITAMIN",
  },
  {
    img: "/images/ditminchallengehui_icon@2x.png",
    title: "Ditamin/Challenge",
    info: "Ditamin/Challenge",
    free: "20",
    silver: "59",
    gold: "99",
    platinum: "199",
    unit: "DITAMIN",
  },
  {
    img: "/images/stakeamount_icon@2x.png",
    title: "Stake amount",
    info: "Stake amount",
    free: "20",
    silver: "59",
    gold: "99",
    platinum: "199",
    unit: "MELD",
  },
  {
    img: "/images/stakeduration_icon@2x.png",
    title: "Stake duration",
    info: "Stake duration",
    free: "20",
    silver: "59",
    gold: "99",
    platinum: "199",
    unit: "DAYS",
  },
  {
    img: "/images/maxapy_icon@2x.png",
    title: "Max APY ",
    info: "Max APY ",
    free: "20%",
    silver: "595",
    gold: "99%",
    platinum: "199%",
  },
];

const StakingRewardLabel = () => {
  return (
    <Box pt={"68px"} pb={"84px"}>
      {StakingRewardList.map((item, index) => (
        <Flex
          alignItems={"center"}
          border="2px solid rgba(255, 255, 255, 0.1)"
          borderLeft={"none"}
          borderRight={"none"}
          borderTop={
            index !== 0 ? "none" : "2px solid rgba(255, 255, 255, 0.1)"
          }
          height={"75px"}
          width={"291px"}
          key={item.title}
        >
          <Image
            src={item.img}
            width={34}
            height={34}
            alt="Annual Percentage Yield"
          />
          <Text
            ml={"6px"}
            color={"white"}
            fontSize={"14px"}
            fontWeight={"bold"}
          >
            {item.title}
          </Text>
          {item.info && (
            <Tooltip
              label={
                <Center minWidth={"323px"} minHeight={"72px"}>
                  {item.info}
                </Center>
              }
              hasArrow
              bg={"#282c2b"}
              color={"white"}
              rounded={"10px"}
            >
              <Box as={"span"} position={"relative"} left={"4px"} top={"1px"}>
                <Image
                  src={"/images/xiangqing2_icon@2x.png"}
                  width={14}
                  height={14}
                  alt={item.info}
                />
              </Box>
            </Tooltip>
          )}
        </Flex>
      ))}
    </Box>
  );
};

type TAccessClass = "free" | "silver" | "gold" | "platinum";
const accessList: {
  key: TAccessClass;
  title: React.ReactNode;
}[] = [
  {
    key: "free",
    title: "Free access",
  },

  {
    key: "silver",
    title: "Silver access",
  },
  {
    key: "gold",
    title: "Gold access",
  },
  {
    key: "platinum",
    title: "Platinum access",
  },
];

interface IAccessListProps {
  title: React.ReactNode;
  field: TAccessClass;
}
const AccessList = (p: IAccessListProps) => {
  const { title, field } = p;
  return (
    <Flex
      flexDirection={"column"}
      width={"208px"}
      rounded={"16px"}
      position={"relative"}
      _before={{
        content: `""`,
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        border: "2px solid rgba(245, 197, 42, .4)",
        borderRadius: "16px",
        pointerEvents: "none",
        visibility: "hidden",
      }}
      _after={{
        content: `""`,
        position: "absolute",
        width: "100%",
        height: "70px",
        top: 0,
        left: 0,
        borderRadius: "16px 16px 0px 0",
        pointerEvents: "none",
        visibility: "hidden",
        backgroundColor: "rgba(245, 197, 42, 1)",
        opacity: 0.4,
      }}
      _hover={{
        _before: {
          visibility: "visible",
        },
        _after: {
          visibility: "visible",
        },
      }}
    >
      <Center height={"68px"}>
        <Text
          textAlign={"center"}
          color={"white"}
          fontSize={"13px"}
          fontWeight={"bold"}
        >
          {title}
        </Text>
      </Center>
      {StakingRewardList.map((item, index) => (
        <Center
          alignItems={"center"}
          border="2px solid rgba(255, 255, 255, 0.1)"
          borderLeft={"none"}
          borderRight={"none"}
          borderTop={
            index !== 0 ? "none" : "2px solid rgba(255, 255, 255, 0.1)"
          }
          height={"75px"}
          width={"208px"}
          key={item.title}
        >
          <UnitText
            text={item[field]}
            unit={item.unit}
            textSize={"18px"}
            unitTextSize={"18px"}
          />
        </Center>
      ))}
      <Center height={"84px"}>
        <MButton
          {...colorSchemeList.yellow._hover}
          _hover={colorSchemeList.yellow._hover}
          mScheme={"yellow"}
        >
          Stake
        </MButton>
      </Center>
    </Flex>
  );
};

export const StakingReward = () => {
  return (
    <Box>
      <Text color={"white"} fontSize={"18px"} fontWeight={"bold"} mb={"14px"}>
        Staking reward
      </Text>
      <Box
        width={1200}
        height={686}
        bg={"#0A4747"}
        rounded={"18px"}
        px={"22px"}
      >
        <Flex height={"100%"}>
          <StakingRewardLabel />
          {accessList.map((item) => (
            <AccessList field={item.key} key={item.key} title={item.title} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
