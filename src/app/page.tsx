import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';
// Correctly import useConnectModal from the package
import { useConnectModal } from '@rainbow-me/rainbowkit';

function Page() {
  










  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      <ConnectButton 
      
        accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full',
        }}
        // // showBalance={{
        // //   smallScreen: true,
        // //   largeScreen: true,
        // // }}
        showBalance={true}
      
      
      />



     
    </div>
  );
}

export default Page;
