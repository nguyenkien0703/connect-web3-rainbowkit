import { getDefaultConfig } from '@rainbow-me/rainbowkit';
// import { mainnet, optimism } from 'wagmi/chains';

// import { NEXT_PUBLIC_PROJECT_ID } from '@/src/common/web3/constants/env';
import { arbitrum, base, mainnet, optimism, polygon } from 'wagmi/chains';
export const config = getDefaultConfig({
    appName: 'RainbowKit demo',
    projectId: '3d32cdc56217aac378e096e4c69357a9',
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true
});
