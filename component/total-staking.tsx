import Image from "next/image";
import { Text, Flex, Box } from "@chakra-ui/react";
import { BoxInfo } from "./info-box";

const totalStaking = 3150.15;

const totalStakingValue = "15,251,513.28/USD";

const totalSupply = "15,251,513.28";

const totalSupplyInfo = "Max Supply - Burned amount";

const circulatingSupply = "15,251,513.28";

const circulatingSupplyInfo = "Circulating SupplyInfo";

const ViewContractUrl = "/";

export const TotalStakingBox = () => {
  return (
    <Flex
      width={506}
      height={382}
      flexDirection={"column"}
      padding={"35px 0 37px 30px"}
      bg={"#0A4747"}
      rounded={"18px"}
      backgroundImage={"url(/images/total_staking_BG@2x.png)"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"100%"}
    >
      <Text color="#537E7E" fontSize={14} fontWeight={"bold"}>
        Total staking
      </Text>

      <Text color="white" fontSize={24} fontWeight={"bold"}>
        {totalStaking}
        <Text as="span" mt={"10px"} fontSize={12} fontWeight={"bold"}>
          /MELD
        </Text>
      </Text>

      <Text color="#537E7E" mt={"23px"} fontSize={12} fontWeight={"bold"}>
        Total staking value
      </Text>

      <Text color={"white"} mt={"6px"} fontSize={12} fontWeight={"bold"}>
        {totalStakingValue}
      </Text>
      <Flex mt={"62px"}>
        <BoxInfo
          placement={"right"}
          title="Total Supply"
          value={totalSupply}
          unit="MELD"
          info={totalSupplyInfo}
          flexDirection={"column"}
          p={"16px"}
          rounded={"10px"}
          bg="#205858"
          width={"192px"}
          height={"72px"}
          mr={25}
        />
        <BoxInfo
          placement={"right"}
          title="Circulating Supply"
          value={circulatingSupply}
          unit="MELD"
          info={circulatingSupplyInfo}
          flexDirection={"column"}
          p={"16px"}
          rounded={"10px"}
          bg="#205858"
          width={"192px"}
          height={"72px"}
        />
      </Flex>
      <Flex
        alignItems={"center"}
        mt={"auto"}
        as="a"
        href={ViewContractUrl}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <Text color="white" fontSize={12} fontWeight={"bold"} mr={"6px"}>
          View contract
        </Text>
        <Box as={"span"} transform={"rotate(-90deg)"}>
          <Image
            src={"/images/more12_icon@2x.png"}
            width={12}
            height={12}
            alt="View contract"
          />
        </Box>
      </Flex>
    </Flex>
  );
};
