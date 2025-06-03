let provider = null;
let userAddress = null;
let metamaskRejected = false;

export function showWalletOptions(onConnected) {
  if (document.getElementById('walletOverlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'walletOverlay';
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center;
    z-index: 9999;
  `;

  const popup = document.createElement('div');
  popup.style.cssText = `
    background: #FFD700; color: black; border-radius: 20px; padding: 1rem;
    width: 300px; box-shadow: 0 0 20px rgba(0,0,0,0.3); font-family: 'Poppins', sans-serif;
    text-align: center;
  `;

  const title = document.createElement('h2');
  title.textContent = '🔐 Select Wallet';
  title.style.marginBottom = '1rem';
  popup.appendChild(title);

  const wallets = [
    { id: 'metamaskBtn', text: 'Metamask', img: './assets/metamask.png', handler: connectMetamask },
    { id: 'trustBtn', text: 'TrustWallet', img: './assets/trustwallet.png', handler: connectEVMWallet },
    { id: 'bitgetBtn', text: 'Bitget Wallet', img: './assets/bitgetWallet.png', handler: connectEVMWallet },
    { id: 'safepalBtn', text: 'SafePal', img: './assets/safepal.png', handler: connectEVMWallet },
  ];

  wallets.forEach(wallet => {
    const btn = createWalletButton(wallet.text, wallet.img);
    btn.id = wallet.id;
    btn.addEventListener('click', () => wallet.handler(wallet.text, overlay, onConnected));
    popup.appendChild(btn);
  });

  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) document.body.removeChild(overlay);
  });
}

function createWalletButton(label, imgSrc) {
  const btn = document.createElement('button');
  btn.style.cssText = `
    width: 100%; padding: 0.8rem; margin-bottom: 0.5rem; border-radius: 10px;
    border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
  `;

  const img = document.createElement('img');
  img.src = imgSrc;
  img.style.cssText = `width: 20px; height: 20px; margin-right: 8px;`;

  const span = document.createElement('span');
  span.textContent = label;

  btn.appendChild(img);
  btn.appendChild(span);

  return btn;
}

async function connectMetamask(label, overlay, onConnected) {
  const { ethers } = window; // Gunakan ethers global
  if (window.ethereum) {
    try {
      if (metamaskRejected) {
        console.log('Resetting connection after rejection...');
        metamaskRejected = false;
      }

      await window.ethereum.request({ method: 'eth_requestAccounts' });
      provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      userAddress = await signer.getAddress();

      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const bscChainId = '0x38';
      if (chainId !== bscChainId) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: bscChainId }]
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: bscChainId,
                chainName: 'Binance Smart Chain',
                rpcUrls: ['https://bsc-dataseed.binance.org/'],
                nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
                blockExplorerUrls: ['https://bscscan.com'],
              }]
            });
          }
        }
      }

      alert(`${label} connected to BSC!`);
      document.body.removeChild(overlay);
      onConnected();
    } catch (err) {
      console.error('Connection error:', err);
      if (err.code === 4001) {
        alert('Connection rejected by user. Please try again.');
        metamaskRejected = true;
      } else {
        alert('Connection failed: ' + err.message);
      }
    }
  } else {
    alert('Metamask not installed.');
  }
}

async function connectEVMWallet(label, overlay, onConnected) {
  const { ethers } = window; // Gunakan ethers global
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      userAddress = await signer.getAddress();

      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const bscChainId = '0x38';
      if (chainId !== bscChainId) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: bscChainId }]
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: bscChainId,
                chainName: 'Binance Smart Chain',
                rpcUrls: ['https://bsc-dataseed2.ninicoin.io'],
                nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
                blockExplorerUrls: ['https://bscscan.com'],
              }]
            });
          }
        }
      }

      alert(`${label} connected to BSC!`);
      document.body.removeChild(overlay);
      onConnected();
    } catch (err) {
      console.error(`Connection error (${label}):`, err);
      if (err.code === 4001) {
        alert(`Connection rejected by user for ${label}. Please try again.`);
      } else {
        alert(`Connection failed: ${err.message}`);
      }
    }
  } else {
    alert(`${label} not detected. Please install the wallet.`);
  }
}

// Ekspor data
export function getProvider() {
  return provider;
}

export function getUserAddress() {
  return userAddress;
}
