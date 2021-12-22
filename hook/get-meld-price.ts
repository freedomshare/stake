import { useQuery } from "react-query";
import ky from "ky";

const apiUrl =
    "https://api.coingecko.com/api/v3/simple/price?ids=meland-ai&vs_currencies=usd";

/**
 * Get the price of the meld token in USD
 */
export const useGetMeldPrice = () => {
    const meldPrice = useQuery(
        "meldPrice",
        () =>
            ky.get(apiUrl).json<{
                "meland-ai": {
                    usd: number;
                };
            }>(),
        {
            staleTime: 1000 * 60 * 1,
        }
    );
    return meldPrice;
};
