import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from 'web3';
import { provider } from 'web3-core';
import { Network, Web3Provider } from '@ethersproject/providers';

export type NetworkInfo = {
	chainId: string,
	chainName: string,
	nativeCurrency: {
		name: string
		symbol: string
		decimals: 18
	},
	rpcUrls: string[],
	blockExplorerUrls: string[]
}

const networkMap: {
	[key: string]: NetworkInfo
} = {
	"mumbai": {
		chainId: '0x13881',
		chainName: 'mumbai(polygon network)',
		nativeCurrency: {
			name: 'polygron token',
			symbol: 'matic',
			decimals: 18
		},
		rpcUrls: [
			'https://withered-wandering-hill.matic-testnet.quiknode.pro/af53b7562a054293ade8a68b54c44c0a325c018b/'
		],
		blockExplorerUrls: [
			'https://mumbai.polygonscan.com'
		]
	},
	"bsc": {
		chainId: '0x38',
		chainName: 'bsc',
		nativeCurrency: {
			name: 'bsc token',
			symbol: 'BNB',
			decimals: 18
		},
		rpcUrls: [
			"https://summer-black-dew.bsc.quiknode.pro/bd5ebf3ca9fe0c5efc9e5abb5ea387bcbb71393a/"
		],
		blockExplorerUrls: [
			"https://bscscan.com/"
		]
	}
}

function getNetworkInfoByName(networkName: string) {
	if (!networkMap[networkName]) {
		throw new Error(`not found network info ${networkName}`);
	}

	return networkMap[networkName];
}

let web3Provider: Web3Provider;

export const getWeb3Provider = async function (): Promise<Web3Provider | undefined> {
	if (!web3Provider) {
		const provider = (await detectEthereumProvider()) as provider;
		if (!provider) {
			return;
		}
		const web3 = new Web3();
		web3.setProvider(provider);
		await (window as any).ethereum.enable();

		// @ts-ignore
		web3Provider = new Web3Provider(web3.currentProvider, 'any');
	}
	return web3Provider;
};

export const addNetwork = async (web3Provider: Web3Provider, networkInfo: NetworkInfo) => {
	return web3Provider.send('wallet_addEthereumChain', [
		networkInfo
	]);
};

export const switchToNetwork = async (web3Provider: Web3Provider, networkName: string) => {
	const network = await web3Provider.getNetwork();
	const networkInfo = getNetworkInfoByName(networkName);

	if (network.chainId === parseInt(networkInfo.chainId, 16)) {
		return;
	}

	try {
		const tx = await web3Provider.send('wallet_switchEthereumChain', [
			{
				chainId: networkInfo.chainId
			}
		]);
		return tx;
	} catch (error) {
		await addNetwork(web3Provider, networkInfo);
	}
	return web3Provider.send('wallet_switchEthereumChain', [
		{
			chainId: networkInfo.chainId
		}
	]);
};

export const watchAsset = async (MELDAddress: string, web3Provider: Web3Provider) => {
	return web3Provider.send('wallet_watchAsset', {
		// @ts-ignore
		type: 'ERC20',
		options: {
			address: MELDAddress,
			symbol: 'MELD',
			decimals: 18
		}
	});
};
