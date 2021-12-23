import { atom } from "nanostores";
import { getWeb3Provider, switchToNetwork } from "../lib/web3";

export const userAddressAtom = atom<string>("");

export const setUserAddress = (address: string) => {
    userAddressAtom.set(address);
};

const networkName = process.env.NEXT_PUBLIC_networkName;

export const connectWallet = async () => {
    const provider = await getWeb3Provider();
    if (!provider) {
        window.alert("please install metamask");
        return;
    }
    await switchToNetwork(provider, networkName!);
    const accounts = await provider.listAccounts();
    setUserAddress(accounts[0].toLowerCase());
};
