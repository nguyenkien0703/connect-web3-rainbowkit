import { getDefaultConfig } from '@rainbow-me/rainbowkit';

// import { mainnet, optimism } from 'wagmi/chains';
import { Chain } from '@rainbow-me/rainbowkit';



import { arbitrum, base, mainnet, optimism, polygon, sepolia } from 'wagmi/chains';

// import {
//   metaMaskWallet,
//   coinbaseWallet,
// } from '@rainbow-me/rainbowkit/wallets';

// const { chains, provider } = configureChains(
//   [mainnet, optimism, polygon, arbitrum, base, ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : [])],
//   [publicProvider()]
// );


export const config = getDefaultConfig({
  
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
  // wallets: {
  //   rainbowWallet: true,
  //   metaMaskWallet: true,
  //   coinbaseWallet: true,
  //   walletConnectWallet: true,
  //   argentWallet: true,
  //   trustWallet: true,
  //   dawnWallet: true,
  //   // Add more wallets as needed
  // },
});





// function configureChains(arg0: any[], arg1: unknown): { chains: any; provider: any; } {
//   throw new Error('Function not implemented.');
// }
const chains: readonly [Chain, ...Chain[]] = [
  {
    ...mainnet,
    // iconBackground: '#000',
    // iconUrl: 'https://example.com/icons/ethereum.png',
  },
  {
    ...optimism,
    // iconBackground: '#ff0000',
    // iconUrl: 'https://example.com/icons/optimism.png',
  },
  {
    ...polygon,
    // iconBackground: '#0000ff',
    // iconUrl: 'https://example.com/icons/polygon.png',
  },
  {
    ...arbitrum,
    // iconBackground: '#00ff00',
    // iconUrl: 'https://example.com/icons/arbitrum.png',
  },
  {
    ...base,
    // iconBackground: '#ff00ff',
    // iconUrl: 'https://example.com/icons/base.png',
  },
  ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
];

// const chains = [mainnet, optimism, polygon, arbitrum, base, ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : [])];
// import { publicProvider } from 'wagmi/providers/public';

// const { chains, provider } = configureChains(
//   [mainnet, optimism, polygon, arbitrum, base, ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : [])],
//   [publicProvider()]
// );

// const connectors = connectorsForWallets(
//   [
//     {
//       groupName: 'Recommended',
//       // wallets: [rainbowWallet, walletConnectWallet, argentWallet, tahoWallet, talismanWallet, tokenPocketWallet, trustWallet, uniswapWallet, zerionWallet,],
//       wallets: [
//         rainbowWallet,
//         metaMaskWallet,
//         coinbaseWallet,
//         walletConnectWallet,
//         dawnWallet,
//         desigWallet,
//         foxWallet
//       ],
//       // wallets: [rainbowWallet, metaMaskWallet, coinbaseWallet, walletConnectWallet],
//     },
//   ],
//   {
//     appName: 'My RainbowKit App',
//     projectId: 'YOUR_PROJECT_ID',
//   }
// );
// export const config = createConfig({
//   // @ts-ignore
//   appName: 'RainbowKit demo',
//   projectId: 'YOUR_PROJECT_ID',
//   chains,
//   connectors,
//   ssr: true,
//   autoConnect: false, 
// });
// export const wallets = getDefaultWallets(connectors);

