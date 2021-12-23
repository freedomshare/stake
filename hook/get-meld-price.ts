import { useQuery } from "react-query";
import ky from "ky";

const apiUrl =
    "/api/meld-price";

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
