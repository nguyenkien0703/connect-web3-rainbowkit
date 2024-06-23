import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {

    const chainId = 80084;
    return (
        <div
        style={{
            position: 'fixed',
            zIndex: 10,
            display: 'flex',
            width: '100%', // Lưu ý: '!w-full' được chuyển thành '100%' nhưng không hỗ trợ override bằng '!'
            justifyContent: 'space-between',
            borderBottom: '4px solid', // Giả sử border màu mặc định, cần chỉ định màu nếu khác
            backgroundColor: 'var(--bg-header)', // Giả sử bg-header là một biến CSS, cần được định nghĩa trong CSS
            padding: '20px 32px', // px-8 py-5 được chuyển đổi sang pixel
          }}
        >
            <div 
            
            style={{
                margin: 'auto',
                display: 'flex',
                maxWidth: '1200px',
                justifyContent: 'space-between',
                paddingTop: '3px',
                paddingBottom: '3px',
                gap: '10px',
              }}
            
            >
                <div>nguyen vankien</div>
            <ConnectButton
            />

            </div>
        </div>
    );
};

export default Header;
