import Image from "next/image";
import { Text, Flex, Box, Spinner } from "@chakra-ui/react";
import { useGetMeldPrice } from "../hook/get-meld-price";
import { useMemo } from "react";
import { fromWei } from "web3-utils";
import { BigNumber } from "bignumber.js";
import { MNumberFormat } from "./number-format";
import { useTotalStakeMetaData } from "../store/stake";
import { ViewContractUrl } from "../store/constant";


export const TotalStakingBox = () => {
    const { isLoading: prizeLoading, data } = useGetMeldPrice();
    const { data: metaData, isLoading: metaIsLoading } =
        useTotalStakeMetaData();

    const totalStaking: string = useMemo(
        () =>
            (metaData?.stakeMetaS?.[0]?.stakeAmount &&
                fromWei(metaData?.stakeMetaS?.[0]?.stakeAmount)) ||
            "",
        [metaData?.stakeMetaS]
    );

    const totalStakingValue = useMemo(() => {
        const prize = data?.["meland-ai"]?.usd;

        if (prize && metaData?.stakeMetaS?.[0]?.stakeAmount) {
            return new BigNumber(totalStaking).multipliedBy(prize).toString();
        }
        return "";
    }, [data, metaData?.stakeMetaS, totalStaking]);

    const isLoading = prizeLoading || metaIsLoading;

    return (
        <Flex
            width={"450px"}
            height={"394px"}
            flexDirection={"column"}
            padding={"40px 0 28px 30px"}
            bg={"#0A4747"}
            rounded={"18px"}
            backgroundImage={"url(/images/total_staking_BG@2x.png)"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"100%"}
            backgroundPosition={"bottom"}
        >
            <Text color="#537E7E" fontSize={14} fontWeight={"bold"}>
                Total Staked
            </Text>
            {isLoading ? (
                <Spinner color="#F5C52A" />
            ) : (
                <Text color="#F5C52A" fontSize={34} fontWeight={"bold"}>
                    <MNumberFormat value={totalStaking} />
                    <Text
                        as="span"
                        mt={"10px"}
                        fontSize={12}
                        fontWeight={"bold"}
                    >
                        /MELD
                    </Text>
                </Text>
            )}

            <Text color="#537E7E" mt={"23px"} fontSize={12} fontWeight={"bold"}>
                TVL
            </Text>
            {isLoading ? (
                <Spinner color={"white"} />
            ) : (
                <Text
                    color={"white"}
                    mt={"6px"}
                    fontSize={24}
                    fontWeight={"bold"}
                >
                    <MNumberFormat value={totalStakingValue} />
                    <Text
                        as="span"
                        mt={"10px"}
                        fontSize={12}
                        fontWeight={"bold"}
                    >
                        /USD
                    </Text>
                </Text>
            )}
            <Flex
                alignItems={"center"}
                mt={"auto"}
                as="a"
                href={ViewContractUrl}
                target={"_blank"}
                rel="noopener noreferrer"
            >
                <Text
                    color="white"
                    fontSize={12}
                    fontWeight={"bold"}
                    mr={"6px"}
                >
                    View Stake Contract
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
