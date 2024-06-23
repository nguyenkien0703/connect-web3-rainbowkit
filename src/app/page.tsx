import { ConnectButton } from '@rainbow-me/rainbowkit';
import {
  useAccountModal,
  useChainModal,
} from '@rainbow-me/rainbowkit';
// Correctly import useConnectModal from the package
import { useConnectModal } from '@rainbow-me/rainbowkit';
import Header from './header';

function Page() {
  










  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
        gap: 12,


      }}
    >
      
      
      <Header/>



     
    </div>
  );
}

export default Page;
