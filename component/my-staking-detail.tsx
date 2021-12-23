import Image from "next/image";
import {
    Text,
    Box,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Flex,
    Button,
    Center,
    ButtonProps,
    Square,
    HStack,
    TextProps,
} from "@chakra-ui/react";
import { Column, useTable, usePagination } from "react-table";
import { MButton } from "./button";
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { StakesQuery, useStakesQuery } from "../types-and-hooks";
import { time } from "console";
import { useStore } from "@nanostores/react";
import { userAddressAtom } from "../store/address";
import { fromWei } from "web3-utils";
import format from "date-fns/format";
import { BigNumber } from "ethers";
import { useStakes, useTotalStakeMetaData } from "../store/stake";
import NumberFormat from "react-number-format";
import { MNumberFormat } from "./number-format";
import { networkName, PAGE_SIZE, txUrlMap } from "../store/constant";

const pageLimit = 5;

const getPaginationGroup = ({
    pageIndex,
    pageCount,
}: Record<string, number>) => {
    let start = Math.floor(pageIndex / pageLimit) * pageLimit;
    return new Array(pageLimit)
        .fill(0)
        .map((_, idx) => start + idx + 1)
        .filter((e) => e <= pageCount);
};

const myStakingDetailClassName = "my-staking-detail";
export const scrollToMyStakingDetail = () => {
    document.querySelector(`.${myStakingDetailClassName}`)?.scrollIntoView({
        behavior: "smooth",
    });
};

export const MyStakingDetail = () => (
    <Box className={myStakingDetailClassName}>
        <Text color={"white"} fontWeight={"bold"} fontSize={"18px"} mb={"14px"}>
            My staking detail
        </Text>

        <Box
            width={1200}
            height={538}
            bg={"#0A4747"}
            rounded={"18px"}
            px={"22px"}
            pb={"20px"}
        >
            <MyStakingDetailTable />
        </Box>
    </Box>
);

/**
 *  (max(now, end-time) - begin time) * (numberOfMELD * stakeApyPercent / 100 / 31536000 )
 * @param startTime
 * @param endTime
 * @param numberOfMELD
 * @param stakeApyPercent
 * @param freezeTimeAtSeconds
 * @returns
 */
const totalRevenue = (
    startTime: string,
    endTime: string,
    numberOfMELD: string,
    stakeApyPercent: number
    // freezeTimeAtSeconds: string
) => {
    let start = BigNumber.from(startTime);
    let min = BigNumber.from((Date.now() / 1000).toFixed(0));
    let max = BigNumber.from(endTime);
    // let freezeTime = BigNumber.from(freezeTimeAtSeconds);
    let numberOfMELDBig = BigNumber.from(numberOfMELD);
    let stakeApyPercentBig = BigNumber.from(stakeApyPercent);
    if (min.lt(max)) {
        max = min;
    }
    const s = max.sub(start);
    // Get math floor hours
    const hs = BigNumber.from(Math.floor(s.div(3600).toNumber()) * 3600);
    return fromWei(
        hs
            .mul(numberOfMELDBig)
            .mul(stakeApyPercentBig)
            // .div(freezeTime)
            .div(100)
            .div(31536000)
            .toString()
    );
};

const THeadTitle = (p: TextProps) => (
    <Text color={"rgba(255,255,255,.3)"} fontSize={12} {...p} />
);
type TColumn = StakesQuery["stakes"][0] & {
    $icon?: string;
    $viewTx?: string;
    $claim?: string;
};
const tHeadList: Column<TColumn>[] = [
    {
        width: 137,
        Header: "",
        Cell: () => (
            <Box sx={{ pl: "34px" }}>
                <Image
                    src={"/images/detaillogo@2x.png"}
                    width={67}
                    height={55}
                    alt="logo"
                />
            </Box>
        ),
        accessor: "$icon",
    },

    {
        width: 117 + 37,
        Header: <THeadTitle pl={"28px"}>Status</THeadTitle>,
        accessor: "id",
        Cell: ({ cell }) => (
            <Status
                status={
                    cell.row.original.claimed
                        ? "claimed"
                        : cell.row.original.expiredAt > Date.now() / 1000
                        ? "staking"
                        : "end"
                }
            />
        ),
    },
    {
        width: 92 + 94,
        Header: <THeadTitle>Staking amount</THeadTitle>,
        accessor: "stakePool",
        Cell: ({ cell }) => {
            return (
                <Text color={"white"} fontSize={"13px"} fontWeight={"bold"}>
                    {fromWei(cell.row.original?.stakePool?.numberOfMELD || 0)}
                    <Text as={"span"}>/MELD</Text>
                </Text>
            );
        },
    },
    {
        width: 74 + 67,

        Header: <THeadTitle>Begin time</THeadTitle>,
        accessor: "stakedAt",
        Cell: ({ cell }) => {
            return (
                <Text color={"white"} fontSize={"13px"} fontWeight={"bold"}>
                    {format(
                        new Date(cell.row.original?.stakedAt * 1000),
                        "dd/MM/yyyy"
                    )}
                </Text>
            );
        },
    },
    {
        width: 86 + 68,

        Header: <THeadTitle>End time</THeadTitle>,
        accessor: "expiredAt",
        Cell: ({ cell }) => {
            return (
                <Text color={"white"} fontSize={"13px"} fontWeight={"bold"}>
                    {format(
                        new Date(cell.row.original?.expiredAt * 1000),
                        "dd/MM/yyyy"
                    )}
                </Text>
            );
        },
    },
    {
        width: 74 + 56,

        Header: <THeadTitle>Total revenue</THeadTitle>,
        accessor: "lastRecivedAt",
        Cell: ({ cell }) => {
            const {
                expiredAt,
                stakedAt,
                stakePool: {
                    stakeApyPercent,

                    freezeTimeAtSeconds,
                    numberOfMELD,
                },
            } = cell.row.original;
            return (
                <Text color={"white"} fontSize={"13px"} fontWeight={"bold"}>
                    {/* {totalRevenue(
                        stakedAt,
                        expiredAt,
                        numberOfMELD,
                        stakeApyPercent,
                        freezeTimeAtSeconds
                    )} */}
                    <MNumberFormat
                        value={totalRevenue(
                            stakedAt,
                            expiredAt,
                            numberOfMELD,
                            stakeApyPercent
                            // freezeTimeAtSeconds
                        )}
                    />
                    <Text as={"span"}>/MELD</Text>
                </Text>
            );
        },
    },
    {
        width: 98,
        Header: <THeadTitle>view TX</THeadTitle>,
        accessor: "$viewTx",
        Cell: ({ cell }) => {
            return (
                <Box
                    as="a"
                    ml={"18px"}
                    opacity={0.8}
                    _hover={{ opacity: 1 }}
                    href={`${txUrlMap[networkName!]}/${
                        //@ts-ignore
                        cell.row.original.txHash
                    }`}
                >
                    <Image
                        src={"/images/zhuandao_icon@2x.png"}
                        width={21}
                        height={21}
                        alt="link"
                    />
                </Box>
            );
        },
    },
    {
        Header: (
            <Box pl={"60px"}>
                <THeadTitle>Claim</THeadTitle>
            </Box>
        ),
        Cell: ({ cell }) => {
            return (
                <MButton
                    variant={"outline"}
                    mScheme="yellow"
                    disabled={
                        cell.row.original.claimed ||
                        cell.row.original.expiredAt < Date.now()
                    }
                    ml={"21px"}
                    // onClick={() => {
                >
                    CLAIM
                </MButton>
            );
        },
        accessor: "$claim",
    },
];

const MyStakingDetailTable = () => {
    const userAddr = useStore(userAddressAtom);
    const { data: metaData } = useTotalStakeMetaData(userAddr);
    const counts = useMemo(
        () => metaData?.stakeMetaS?.[0]?.stakeCount || 0,
        [metaData?.stakeMetaS]
    );
    // const pageIndexRef = useRef(0);
    const [pIndex, setPIndex] = useState(0);
    const { data } = useStakes(pIndex);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        // rows,
        prepareRow,

        page, // Instead of using 'rows', we'll use page,
        pageCount,
        gotoPage,
        nextPage,
        canNextPage,
        canPreviousPage,
        previousPage,
        // setPageSize,
        state: { pageIndex },
    } = useTable(
        {
            columns: tHeadList as Column<StakesQuery["stakes"][0]>[],
            data: data?.stakes || [],
            initialState: { pageSize: PAGE_SIZE },
            defaultColumn: {
                Cell: ({ value }: { value: React.ReactNode }) => (
                    <Text color={"white"} fontSize={"13px"} fontWeight={"bold"}>
                        {value}
                    </Text>
                ),
            },
            manualPagination: true,
            pageCount: Math.ceil(counts / PAGE_SIZE),
        },
        usePagination
    );
    useEffect(() => {
        setPIndex(pageIndex);
    }, [pageIndex]);

    return (
        <Flex
            height={"100%"}
            flexDirection={"column"}
            justifyContent={"space-between"}
        >
            <Table {...getTableProps()}>
                <Thead>
                    {headerGroups.map((headerGroup, i) => (
                        <Tr {...headerGroup.getHeaderGroupProps()} key={i}>
                            {headerGroup.headers.map((column, hIndex) => (
                                <Th
                                    p={"24px 0 20px 0"}
                                    {...column.getHeaderProps()}
                                    // isNumeric={column.isNumeric}
                                    key={hIndex}
                                >
                                    {column.render("Header")}
                                </Th>
                            ))}
                        </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {page.map((row, rIndex) => {
                        prepareRow(row);
                        return (
                            <Tr {...row.getRowProps()} key={row.id}>
                                {row.cells.map((cell) => (
                                    <Td
                                        p={0}
                                        borderColor={"rgba(255, 255, 255, .1)"}
                                        borderWidth={"2px"}
                                        height={"84px"}
                                        borderLeft={"none"}
                                        borderRight={"none"}
                                        borderBottom={
                                            rIndex === page.length - 1
                                                ? "none"
                                                : "2px sold rgba(255, 255, 255, 1)"
                                        }
                                        {...cell.getCellProps()}
                                        key={row.id}
                                    >
                                        {cell.render("Cell")}
                                    </Td>
                                ))}
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
            <Flex
                display={pageCount < 2 ? "none" : "flex"}
                mt={"auto"}
                justifyContent={"flex-end"}
                alignItems={"center"}
            >
                <Box
                    visibility={canPreviousPage ? "visible" : "hidden"}
                    as={"button"}
                    onClick={previousPage}
                    mr={"32px"}
                >
                    <Image
                        src={"/images/more20_icon@2x.png"}
                        width={22}
                        height={22}
                        alt="pre button"
                    />
                </Box>

                {/* show page numbers */}
                <HStack spacing={"8px"}>
                    {getPaginationGroup({
                        pageIndex,
                        pageCount,
                    }).map((item, index) => (
                        <IndexButton
                            key={index}
                            onClick={() => gotoPage(item - 1)}
                            isActive={pageIndex === item - 1}
                        >
                            {item}
                        </IndexButton>
                    ))}
                </HStack>

                <Box
                    visibility={canNextPage ? "visible" : "hidden"}
                    as={"button"}
                    transform={"rotate(180deg)"}
                    onClick={nextPage}
                    ml={"32px"}
                >
                    <Image
                        src={"/images/more20_icon@2x.png"}
                        width={22}
                        height={22}
                        alt="next button"
                    />
                </Box>
            </Flex>
        </Flex>
    );
};

export const IndexButton: React.FC<ButtonProps> = ({ children, ...other }) => {
    return (
        <Button
            minWidth={"31px"}
            width={"31px"}
            height={"31px"}
            p={0}
            bg={"transparent"}
            color={"#fff"}
            border-radius={"9px"}
            _hover={{
                bg: "rgba(68, 115, 115, .4)",
            }}
            _active={{
                bg: "rgba(68, 115, 115, 1)",
            }}
            outline={"none"}
            {...other}
        >
            {children}
        </Button>
    );
};

const statusMapping = {
    claimed: {
        icon: "/images/claimed_icon@2x.png",
        color: "rgba(83, 126, 126, .3)",
        borderColor: "rgba(83, 126, 126, .3)",
    },
    staking: {
        icon: "/images/staking_icon@2x.png",
        color: "rgba(104, 210, 104, 1)",
        borderColor: "rgba(104, 210, 104, .5)",
    },
    end: {
        icon: "/images/end_ion@2x.png",
        color: "rgba(245, 197, 42, 1)",
        borderColor: "rgba(245, 197, 42, 0.5)",
    },
};

interface IStatusProps {
    status: keyof typeof statusMapping;
}
const Status = (p: IStatusProps) => {
    const { status } = p;
    return (
        <Center
            width={"104px"}
            height={"24px"}
            rounded={"4px"}
            borderColor={statusMapping[status].borderColor}
            borderWidth={"1px"}
            borderStyle={"solid"}
        >
            <Image
                src={statusMapping[status].icon}
                width={16}
                height={16}
                alt={status}
            />
            <Text
                color={statusMapping[status].color}
                fontSize={"13px"}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                ml={"2px"}
            >
                {status}
            </Text>
        </Center>
    );
};
