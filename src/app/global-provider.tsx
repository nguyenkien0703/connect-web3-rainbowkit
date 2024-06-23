'use client';
import { ConfigProvider } from 'antd';
import { FC, ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import theme from './theme/antdThemeConfig';
import StyledComponentsRegistry from './theme/AntThemeProvider';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import GlobalConnectWalletProvider from './global-connect';
import { useStore } from './store';

interface ProvidersProps {
    children: ReactNode;
    // locale: string;
    // messages: AbstractIntlMessages;
}

const GlobalProvider: FC<ProvidersProps> = ({ children }) => {
    // init state
    const store = useStore(undefined);
    return (
        <GlobalConnectWalletProvider>
            <ReduxProvider store={store}>
                {/* <NextIntlClientProvider
                    locale={locale}
                    messages={messages}
                > */}
                    <ConfigProvider theme={theme}>
                        <StyledComponentsRegistry>
                           
                            <ConnectButton />
                        </StyledComponentsRegistry>
                    </ConfigProvider>
                {/* </NextIntlClientProvider> */}
            </ReduxProvider>
        </GlobalConnectWalletProvider>
    );
};

export default GlobalProvider;
