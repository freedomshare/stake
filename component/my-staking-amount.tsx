import React, { useMemo } from "react";
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
    Link,
} from "@chakra-ui/react";
import { colorSchemeList, MButton } from "./button";
import { BoxInfo } from "./info-box";
import {
    getPoolInfo,
    isStakedAtom,
    useAllEarned,
    useHarvest,
    useLevelInfoQuery,
    useTotalStakeMetaData,
    useStakes,
} from "../store/stake";
import { useStore } from "@nanostores/react";
import { scrollToStakingPool } from "./staking-pool";
import { meldUrl } from "../store/constant";
import { MNumberFormat } from "./number-format";
import { fromWei } from "web3-utils";
import { userAddressAtom } from "../store/address";
import { scrollToMyStakingDetail } from "./my-staking-detail";

export const MyStakingAmountBox = () => {
    useStakes();
    const isStaked = useStore(isStakedAtom);

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
            <Divider bg={"white"} opacity={0.1} mt={"16px!important"} />
            {isStaked && <EarnedMELD />}
            <FourBox />
            {isStaked ? <GetMeldRow /> : <StakeButtonGroup />}
        </VStack>
    );
};

const MyStakingAmount = () => {
    const isStaked = useStore(isStakedAtom);
    const userAddr = useStore(userAddressAtom);
    const { data } = useTotalStakeMetaData(userAddr);
    const totalAmount = useMemo(() => {
        const value = data?.stakeMetaS?.[0]?.stakeAmount;
        return value ? fromWei(value) : "";
    }, [data?.stakeMetaS]);
    return (
        <Center width={"100%"} justifyContent={"space-between"}>
            <Center height={"46px"} flexDirection={"column"}>
                <Text color="white" fontSize={"13px"} fontWeight={"bold"}>
                    My staking amount
                </Text>
                {isStaked && (
                    <Text color="white" fontSize={"22px"} fontWeight={"bold"}>
                        <MNumberFormat value={totalAmount} />
                        <Text
                            as="span"
                            fontSize={"12px"}
                            fontWeight={"bold"}
                            textColor={"#4A7A7A"}
                        >
                            /MELD
                        </Text>
                    </Text>
                )}
            </Center>
            {isStaked ? (
                <MButton
                    variant="outline"
                    mScheme="yellow"
                    onClick={scrollToStakingPool}
                >
                    Add staking
                </MButton>
            ) : (
                <Text color={"white"} fontWeight={"fold"} fontSize={"26px"}>
                    0
                    <Text
                        as={"span"}
                        color={"#4A7A7A"}
                        fontWeight={"fold"}
                        fontSize={"12px"}
                    >
                        /MELD
                    </Text>
                </Text>
            )}
        </Center>
    );
};

const EarnedMELD = () => {
    const { isLoading, mutate } = useHarvest();
    const { data: earned } = useAllEarned();

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
                        <MNumberFormat
                            value={
                                (earned && fromWei(earned?.toString())) || ""
                            }
                        />
                        MELD
                    </Text>
                </Box>
            </Flex>
            <MButton
                variant="outline"
                mScheme="yellow"
                isLoading={isLoading}
                onClick={() => mutate()}
            >
                Harvest
            </MButton>
        </Center>
    );
};

const userLevelInfo = ({ apy = "", ol = "", ddl = "", dc = "" }) => [
    {
        title: "Annual Percentage Yield",
        value: apy,
        icon: "/images/apy_icon@2x.png",
        unit: "",
        info: "",
    },
    {
        title: "Occupation limit",
        value: ol,
        icon: "/images/occupation_limit_icon@2x.png",
        unit: "LANDS",
        info: "",
    },
    {
        title: "DItamin/day/land",
        value: ddl,
        icon: "/images/day_land_icon@2x.png",
        unit: "Ditamin",
        info: "",
    },
    {
        title: "Ditamin/Challenge",
        value: dc,
        icon: "/images/ditaminchallenge_icon@2x.png",
        unit: "Ditamin",
        info: "",
    },
];

const FourBox = React.memo(() => {
    const { data } = useLevelInfoQuery();
    console.log("data", data);
    return (
        <Grid templateColumns={"repeat(2,1fr)"} gap={"15px 26px"}>
            {userLevelInfo(
                data?.stakePercent !== undefined
                    ? {
                          apy: data?.stakePercent + "",
                          ol: data?.occupationLimit + "",
                          ddl: data?.ditaminDayLand?.toString(),
                          dc: data?.ditaminChallenge?.toString(),
                      }
                    : {}
            ).map((item) => (
                <BoxInfo {...item} key={item.title} info={item.info} />
            ))}
        </Grid>
    );
});
FourBox.displayName = "FourBox";

const GetMeldRow = () => {
    return (
        <Flex
            width={"100%"}
            align={"center"}
            justifyContent={"space-between"}
            mt="auto!important"
        >
            <Flex
                role="button"
                cursor={"pointer"}
                alignItems={"center"}
                justifyContent={"center"}
                onClick={scrollToMyStakingDetail}
            >
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
            <MButton
                as={Link}
                //@ts-ignore
                href={meldUrl}
                target={"_blank"}
                rel="noreferrer"
                variant={"outline"}
                mScheme="white"
            >
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
            <MButton variant={"outline"} mScheme={"white"}>
                Get MELD
            </MButton>
            <MButton
                {...colorSchemeList.yellow._hover}
                _hover={colorSchemeList.yellow._hover}
                _active={colorSchemeList.yellow._hover}
                mScheme={"yellow"}
                onClick={scrollToStakingPool}
            >
                Stake now
            </MButton>
        </HStack>
    );
};
