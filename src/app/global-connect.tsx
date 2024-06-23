import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { FC, ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from './wagmi';
interface ProvidersProps {
    children: ReactNode;
}
const queryClient = new QueryClient();
// Tạo client từ config
// const wagmiClient = createClient(config);

const GlobalConnectWalletProvider: FC<ProvidersProps> = ({ children }) => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                    theme={darkTheme({
                        accentColor: '#7b3fe4',
                        accentColorForeground: 'white',
                        borderRadius: 'small',
                        fontStack: 'system',
                        overlayBlur: 'small'
                    })}
                    coolMode
                >
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
};

export default GlobalConnectWalletProvider;
