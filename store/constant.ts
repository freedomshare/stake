// envs used by browser
export const meldAddress = process.env.NEXT_PUBLIC_addressOfMELD!;
export const stakeAddress = process.env.NEXT_PUBLIC_addressOfStake!;
export const networkName = process.env
    .NEXT_PUBLIC_networkName as keyof typeof txUrlMap;

export const chainExplorerMap = {
    mumbai: "https://mumbai.polygonscan.com",
    bsc: "https://bscscan.com",
}

export const ViewContractUrl = `${chainExplorerMap[networkName]}/address/${stakeAddress}`;

export const txUrlMap = {
    mumbai: `${chainExplorerMap['mumbai']}/tx`,
    bsc: `${chainExplorerMap['bsc']}/tx`,
};

// query all data by this stake address
export const staker = "0x0000000000000000000000000000000000000000";

export const meldUrl =
    "https://pancakeswap.finance/swap?outputCurrency=0xf8ae4ef55628aacfb9bd6e777b0f5d35c173f624";

//my staking detail table page size
export const PAGE_SIZE = 5;

export const footerLinks = [
    {
        name: "How to create",
        href: "https://docs.meland.ai/how-to-play/overview",
    },
    {
        name: "How to play",
        href: "https://docs.meland.ai/how-to-play/learn-to-earn",
    },
];

export const socialLinks = {
    twitter: "https://twitter.com/meland_ai",
    telegram: "https://t.me/melandaiWorld",
    discord: "https://discord.gg/Jgnx2Wy9GN",
};

export const END_POINT = networkName == 'bsc' ? 'https://api.thegraph.com/subgraphs/name/hongjianghuang/melandstake' : `https://graphql-graph-node-${networkName}.melandworld.com/subgraphs/name/HongjiangHuang/MelandStake`;
