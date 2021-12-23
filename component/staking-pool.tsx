import Image from "next/image";
import {
    Text,
    Box,
    Flex,
    Tooltip,
    Center,
    VStack,
    HStack,
} from "@chakra-ui/react";
import { UnitText } from "./info-box";
import { MButton } from "./button";
import { StakePoolsQuery, useStakePoolsQuery } from "../types-and-hooks";
import { useMutation } from "react-query";
import { stakeByPoolId } from "../store/stake";
import { BigNumber } from "bignumber.js";
import React, { useCallback, useMemo } from "react";
import { MNumberFormat } from "./number-format";
import { fromWei } from "web3-utils";

const totalApy = "totalApy" as const;
const numberOfMELD = "numberOfMELD" as const;
const StakingPoolList: {
    img: string;
    title: string;
    info?: string;
    field: keyof StakePoolsQuery["stakePools"][0] | typeof totalApy;
    unit?: string;
}[] = [
    {
        img: "/images/apyhui_icon@2x.png",
        title: "Max APY",
        field: totalApy,
        unit: "",
    },
    {
        img: "/images/occupationhuit_icon@2x.png",
        title: "Occupied Land Limit",
        info: "",
        field: "landC",
        unit: "LANDS",
    },
    {
        img: "/images/day_landhui_icon@2x.png",
        title: "Ditamin/Land/Day",
        field: "ditaminLD",
        unit: "DITAMIN",
    },
    {
        img: "/images/ditminchallengehui_icon@2x.png",
        title: "Ditamin/Challenge",
        info: "",
        field: "ditaminC",
        unit: "DITAMIN",
    },
    {
        img: "/images/stakeamount_icon@2x.png",
        title: "Stake Amount",
        info: "",
        field: numberOfMELD,
        unit: "MELD",
    },
    {
        img: "/images/stakeduration_icon@2x.png",
        title: "Stake Duration",
        info: "",
        field: "freezeTimeAtSeconds",
        unit: "DAYS",
    },
];

const StakingPoolLabel = () => {
    return (
        <Box pt={"68px"} pb={"84px"}>
            {StakingPoolList.map((item, index) => (
                <VStack
                    alignItems={"flex-start"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    border="2px solid rgba(255, 255, 255, 0.1)"
                    borderLeft={"none"}
                    borderRight={"none"}
                    borderTop={
                        index !== 0
                            ? "none"
                            : "2px solid rgba(255, 255, 255, 0.1)"
                    }
                    height={index === 0 ? "154px" : "75px"}
                    width={"291px"}
                    key={item.title}
                    spacing={"16px"}
                >
                    <Flex alignItems={"center"}>
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
                                    <Center
                                        minWidth={"323px"}
                                        minHeight={"72px"}
                                    >
                                        {item.info}
                                    </Center>
                                }
                                hasArrow
                                bg={"#282c2b"}
                                color={"white"}
                                rounded={"10px"}
                            >
                                <Box
                                    as={"span"}
                                    position={"relative"}
                                    left={"4px"}
                                    top={"1px"}
                                >
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
                    <VStack
                        hidden={index !== 0}
                        alignItems={"flex-start"}
                        pl={"56px"}
                        spacing={"16px"}
                    >
                        <HStack>
                            <Image
                                src={"/images/apyhui_icon2@2x.png"}
                                width={22}
                                height={22}
                                alt="apy"
                            />
                            <Text
                                color={"rgba(255, 255, 255, 0.5)"}
                                fontSize={"12px"}
                                fontWeight={"bold"}
                            >
                                Token APY
                            </Text>
                        </HStack>
                        <HStack>
                            <Image
                                src={"/images/65@2x.png"}
                                width={22}
                                height={22}
                                alt="apy"
                            />
                            <Text
                                color={"rgba(255, 255, 255, 0.5)"}
                                fontSize={"12px"}
                                fontWeight={"bold"}
                            >
                                Gaming Income APY
                            </Text>
                        </HStack>
                    </VStack>
                </VStack>
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
    data?: StakePoolsQuery["stakePools"];
    dataIndex: number;
}
const AccessList = (p: IAccessListProps) => {
    const { title, field, data: originData = [], dataIndex } = p;

    const { isLoading, mutate } = useMutation(stakeByPoolId);

    const isSoldOut = useMemo(
        () =>
            new BigNumber(originData?.[dataIndex]?.totalVolume || 0).lte(
                new BigNumber(originData?.[dataIndex]?.salesCount || 0)
            ),
        [originData, dataIndex]
    );

    const data = originData.map((rv) => {
        const extRv: { totalApy: string } & typeof rv = { totalApy: "", ...rv };
        extRv.numberOfMELD = MNumberFormat({ value: fromWei(rv.numberOfMELD) });
        extRv.totalApy =
            Number(rv.gameApyPercent) + Number(rv.stakeApyPercent) + "%";
        extRv.freezeTimeAtSeconds = rv.freezeTimeAtSeconds / (24 * 60 * 60);
        return extRv;
    });

    const stakeFn = useCallback(() => {
        const stakePoolId = data?.[dataIndex]?.id;
        if (stakePoolId) {
            mutate(stakePoolId);
        }
    }, [data, dataIndex, mutate]);

    return (
        <Flex
            flexDirection={"column"}
            width={"208px"}
            rounded={"16px"}
            position={"relative"}
        >
            <Center height={"68px"}>
                <Image
                    src={`/images/${field}@2x.png`}
                    width={30}
                    height={30}
                    alt={`${field} access`}
                />
                <Text
                    textAlign={"center"}
                    color={"white"}
                    fontSize={"13px"}
                    fontWeight={"bold"}
                    ml={"2px"}
                >
                    {data?.[dataIndex]?.vipname || title}
                </Text>
            </Center>
            {StakingPoolList.map((item, index) => (
                <Center
                    alignItems={"center"}
                    border="2px solid rgba(255, 255, 255, 0.1)"
                    borderLeft={"none"}
                    borderRight={"none"}
                    borderTop={
                        index !== 0
                            ? "none"
                            : "2px solid rgba(255, 255, 255, 0.1)"
                    }
                    height={item.field === totalApy ? "154px" : "75px"}
                    width={"208px"}
                    key={item.title}
                >
                    <VStack
                        height={item.field === totalApy ? "100%" : "auto"}
                        pt={item.field === totalApy ? "24px" : "auto"}
                        spacing={"15px"}
                    >
                        <Box>
                            <UnitText
                                text={data?.[dataIndex]?.[item.field]}
                                unit={item.unit}
                                textSize={"16px"}
                                unitTextSize={"12px"}
                            />
                        </Box>

                        {item.field === totalApy && (
                            <>
                                <UnitText
                                    text={
                                        data?.[dataIndex]?.stakeApyPercent + "%"
                                    }
                                    unit={item.unit}
                                    textColor={"rgba(255, 255, 255, 0.5)"}
                                    textSize={"16px"}
                                    unitTextSize={"12px"}
                                />
                                <UnitText
                                    text={
                                        data?.[dataIndex]?.gameApyPercent + "%"
                                    }
                                    unit={item.unit}
                                    textColor={"rgba(255, 255, 255, 0.5)"}
                                    textSize={"16px"}
                                    unitTextSize={"12px"}
                                />
                            </>
                        )}
                    </VStack>
                </Center>
            ))}
            <Center hidden={field === "free"} height={"84px"}>
                <MButton
                    variant={"outline"}
                    mScheme={isSoldOut ? "white" : "yellow"}
                    onClick={stakeFn}
                    isLoading={isLoading}
                    isDisabled={isSoldOut}
                >
                    {isSoldOut ? "Sold Out" : "Stake"}
                </MButton>
            </Center>
        </Flex>
    );
};

export const StakingPool = () => {
    const { data } = useStakePoolsQuery();
    return (
        <Box className={StakingPoolClassName}>
            <Text
                color={"white"}
                fontSize={"18px"}
                fontWeight={"bold"}
                mb={"14px"}
            >
                Staking pool
            </Text>
            <Box
                width={1200}
                height={686}
                bg={"#0A4747"}
                rounded={"18px"}
                px={"22px"}
            >
                <Flex height={"100%"}>
                    <StakingPoolLabel />
                    {accessList.map((item, i) => (
                        <AccessList
                            field={item.key}
                            key={item.key}
                            title={item.title}
                            data={data?.stakePools}
                            dataIndex={i}
                        />
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};
const StakingPoolClassName = "__StakingPool__";

export const scrollToStakingPool = () => {
    document.querySelector(`.${StakingPoolClassName}`)?.scrollIntoView({
        behavior: "smooth",
    });
};
