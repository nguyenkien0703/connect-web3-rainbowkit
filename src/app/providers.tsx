'use client';

import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider,darkTheme ,  lightTheme,midnightTheme, 
  DisclaimerComponent,} from '@rainbow-me/rainbowkit';

import { config } from '../wagmi';

const queryClient = new QueryClient();
const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
  <Text>
    By connecting your wallet, you agree to the{' '}
    <Link href="https://termsofservice.xyz">Terms of Service</Link> and
    acknowledge you have read and understand the protocol{' '}
    <Link href="https://disclaimer.xyz">Disclaimer</Link>
  </Text>
);
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider 
          theme={darkTheme({
            accentColor: '#7b3fe4',
            accentColorForeground: 'white',
            borderRadius: 'small',
            fontStack: 'system',
            overlayBlur: 'small',
          })}
          // theme={darkTheme({
          //   accentColor: '#7b3fe4',
          //   accentColorForeground: 'white',
          //   borderRadius: 'medium',
          // })}
          // theme={darkTheme({
          //   ...darkTheme.accentColors.pink,
          // })}
          // theme={midnightTheme()}
          // theme={darkTheme({
          //   accentColor: '#7b3fe4',
          //   accentColorForeground: 'white',
          // })}
          // theme={darkTheme({
          //   ...darkTheme.accentColors.green,
          // })}
          // theme={darkTheme({
          //   borderRadius: 'medium',
          // })}
          // theme={darkTheme({
          //   borderRadius: 'none',
          // })}
          // theme={darkTheme({
          //   fontStack: 'system',
          // })}
          // theme={darkTheme({
          //   overlayBlur: 'small',
          // })}
          // theme={{
          //   lightMode: lightTheme(),
          //   darkMode: darkTheme(),
          // }}
          // initialChain={1155111}
          // appInfo={{
          //   appName: 'Rainbowkit Demo',
          //   learnMoreUrl: 'https://learnaboutcryptowallets.example',
          // }}
          // appInfo={{
          //   appName: 'RainbowKit Demo',
          //   disclaimer: Disclaimer,
          // }}
          coolMode
          // showRecentTransactions={true}
      >{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
