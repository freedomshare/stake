// envs used by browser
export const meldAddress = process.env.NEXT_PUBLIC_addressOfMELD!;
export const stakeAddress = process.env.NEXT_PUBLIC_addressOfStake!;
export const networkName = process.env
    .NEXT_PUBLIC_networkName as keyof typeof txUrlMap;

export const txUrlMap = {
    mumbai: "https://mumbai.polygonscan.com/tx",
    bsc: "https://bscscan.com/tx",
};

// query all data by this stake address
export const staker = "0x0000000000000000000000000000000000000000";

export const meldUrl =
    "https://pancakeswap.finance/swap?outputCurrency=0xf8ae4ef55628aacfb9bd6e777b0f5d35c173f624";

//my staking detail table page size
export const PAGE_SIZE = 1;

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
};