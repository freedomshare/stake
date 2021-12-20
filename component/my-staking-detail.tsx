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
} from "@chakra-ui/react";
import { Column, useTable, usePagination } from "react-table";
import { MButton } from "./button";
import React, { useCallback } from "react";

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

export const MyStakingDetail = () => (
    <Box>
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

const THeadTitle: React.FC<{}> = ({ children }) => (
    <Text color={"rgba(255,255,255,.3)"} fontSize={12}>
        {children}
    </Text>
);

const tHeadList: Column<typeof data[0]>[] = [
    {
        width: 137,
        Header: "",
        Cell: () => (
            <Box sx={{ pl: "37px" }}>
                <Box
                    width={"73px"}
                    height={"73px"}
                    bg={"#6a704a"}
                    rounded={"9999px"}
                >
                    <Image
                        src={"/images/logo@2x.png"}
                        width={65}
                        height={38}
                        alt="logo"
                    />
                </Box>
            </Box>
        ),
        accessor: "id",
    },

    {
        width: 117 + 37,
        Header: <THeadTitle>Status</THeadTitle>,
        accessor: "status",
        Cell: ({ cell: { value } }) => <Status status="end"/>,
    },
    {
        width: 92 + 94,

        Header: <THeadTitle>Staking amount</THeadTitle>,
        accessor: "stakingAmount",
    },
    {
        width: 74 + 67,

        Header: <THeadTitle>Begin time</THeadTitle>,
        accessor: "beginTime",
    },
    {
        width: 86 + 68,

        Header: <THeadTitle>End time</THeadTitle>,
        accessor: "endTime",
    },
    {
        width: 74 + 56,

        Header: <THeadTitle>Total revenue</THeadTitle>,
        accessor: "totalRevenue",
    },
    {
        width: 98,
        Header: <THeadTitle>Trading platform</THeadTitle>,
        accessor: "tradingPlatform",
        Cell: () => {
            return (
                <Box as="button" ml={"46px"}>
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
        Cell: () => {
            return (
                <MButton
                    variant={"outline"}
                    mScheme="yellow"
                    disabled
                    ml={"21px"}
                >
                    CLAIM
                </MButton>
            );
        },
        accessor: "Claim",
    },
];

const data = [
    {
        id: 1,
        status: "STAKING0",
        stakingAmount: "1,000,000",
        beginTime: "2020-01-01",
        endTime: "2020-01-01",
        totalRevenue: "1,000,000",
        tradingPlatform: "Binance",
        Claim: "Claim",
    },
    {
        id: 1,

        status: "STAKING1",
        stakingAmount: "1,000,000",
        beginTime: "2020-01-01",
        endTime: "2020-01-01",
        totalRevenue: "1,000,000",
        tradingPlatform: "Binance",
        Claim: "Claim",
    },
    {
        id: 1,

        status: "STAKING2",
        stakingAmount: "1,000,000",
        beginTime: "2020-01-01",
        endTime: "2020-01-01",
        totalRevenue: "1,000,000",
        tradingPlatform: "Binance",
        Claim: "Claim",
    },
    {
        id: 1,

        status: "STAKING3",
        stakingAmount: "1,000,000",
        beginTime: "2020-01-01",
        endTime: "2020-01-01",
        totalRevenue: "1,000,000",
        tradingPlatform: "Binance",
        Claim: "Claim",
    },
    {
        id: 1,

        status: "STAKING4",
        stakingAmount: "1,000,000",
        beginTime: "2020-01-01",
        endTime: "2020-01-01",
        totalRevenue: "1,000,000",
        tradingPlatform: "Binance",
        Claim: "Claim",
    },
    {
        id: 1,

        status: "STAKING5",
        stakingAmount: "1,000,000",
        beginTime: "2020-01-01",
        endTime: "2020-01-01",
        totalRevenue: "1,000,000",
        tradingPlatform: "Binance",
        Claim: "Claim",
    },
    {
        id: 1,

        status: "STAKING6",
        stakingAmount: "1,000,000",
        beginTime: "2020-01-01",
        endTime: "2020-01-01",
        totalRevenue: "1,000,000",
        tradingPlatform: "Binance",
        Claim: "Claim",
    },
    {
        id: 1,

        status: "STAKING7",
        stakingAmount: "1,000,000",
        beginTime: "2020-01-01",
        endTime: "2020-01-01",
        totalRevenue: "1,000,000",
        tradingPlatform: "Binance",
        Claim: "Claim",
    },
    {
        id: 1,

        status: "STAKING8",
        stakingAmount: "1,000,000",
        beginTime: "2020-01-01",
        endTime: "2020-01-01",
        totalRevenue: "1,000,000",
        tradingPlatform: "Binance",
        Claim: "Claim",
    },
    {
        id: 1,

        status: "STAKING9",
        stakingAmount: "1,000,000",
        beginTime: "2020-01-01",
        endTime: "2020-01-01",
        totalRevenue: "1,000,000",
        tradingPlatform: "Binance",
        Claim: "Claim",
    },
    {
        id: 1,

        status: "STAKING10",
        stakingAmount: "1,000,000",
        beginTime: "2020-01-01",
        endTime: "2020-01-01",
        totalRevenue: "1,000,000",
        tradingPlatform: "Binance",
        Claim: "Claim",
    },
];

const MyStakingDetailTable = () => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        // rows,
        prepareRow,

        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        // setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns: tHeadList,
            data: data,
            initialState: { pageIndex: 0, pageSize: 5 },
            defaultColumn: {
                Cell: ({ value }: { value: React.ReactNode }) => (
                    <Text color={"white"} fontSize={"13px"} fontWeight={"bold"}>
                        {value}
                    </Text>
                ),
            },
        },
        usePagination
    );

    return (
        <Flex
            height={"100%"}
            flexDirection={"column"}
            justifyContent={"space-between"}
        >
            <Table {...getTableProps()}>
                <Thead>
                    {headerGroups.map((headerGroup) => (
                        <Tr
                            {...headerGroup.getHeaderGroupProps()}
                            key={headerGroup.id}
                        >
                            {headerGroup.headers.map((column) => (
                                <Th
                                    p={"24px 0 20px 0"}
                                    {...column.getHeaderProps()}
                                    // isNumeric={column.isNumeric}
                                    key={column.id}
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
                                {row.cells.map((cell, index) => (
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
            <Flex mt={"auto"} justifyContent={"flex-end"} alignItems={"center"}>
                <Box as={"button"} onClick={previousPage} mr={"32px"}>
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
                textTransform={'uppercase'}
                ml={'2px'}
            >
                {status}
            </Text>
        </Center>
    );
};
