import { showWalletOptions, getProvider, getUserAddress } from './connectWallet.js';

let isConnected = false;
let userBNBBalance = '0.00';
let userBeanBalance = '0.00';
let isSwapped = false;

export async function renderSwap() {
  if (document.getElementById('swapOverlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'swapOverlay';
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center;
    z-index: 9999;
  `;

  const popup = document.createElement('div');
  popup.style.cssText = `
    background: #FFD700; color: black; border-radius: 20px; padding: 1rem;
    width: 350px; box-shadow: 0 0 20px rgba(0,0,0,0.3); font-family: 'Poppins', sans-serif;
  `;

  const title = document.createElement('h2');
  title.textContent = 'BEANSWAP';
  title.style.cssText = `text-align: center; margin-bottom: 1rem;`;

  const fromSection = createTokenSection('From', isSwapped ? '$BEAN' : 'BNB', isSwapped ? './assets/logo.png' : './assets/bsc.png', isSwapped ? userBeanBalance : userBNBBalance, isConnected);
  const switchButton = createSwitchButton();
  const toSection = createTokenSection('To', isSwapped ? 'BNB' : '$BEAN', isSwapped ? './assets/bsc.png' : './assets/logo.png', isSwapped ? userBNBBalance : userBeanBalance, isConnected);

  const actionButton = document.createElement('button');
  actionButton.id = 'actionButton';
  actionButton.textContent = isConnected ? 'Swap' : 'Connect Wallet';
  actionButton.style.cssText = `
    width: 100%; padding: 0.8rem; background: orange; color: white;
    font-weight: bold; border: none; border-radius: 12px; cursor: pointer;
  `;

  popup.append(title, fromSection, switchButton, toSection, actionButton);
  overlay.appendChild(popup);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) document.body.removeChild(overlay);
  });

  actionButton.addEventListener('click', async () => {
    if (isConnected) {
      alert('Swap executed!');
      document.body.removeChild(overlay);
    } else {
      document.body.removeChild(overlay);
      showWalletOptions(async () => {
        isConnected = true;
        const provider = getProvider();
        const userAddress = getUserAddress();

        // Ambil BNB Balance
        const bnbBalanceWei = await provider.getBalance(userAddress);
        userBNBBalance = ethers.utils.formatEther(bnbBalanceWei);

        // Ambil BEAN Balance
        const beanAddress = '0xYourBeanTokenAddress'; // Ganti dengan alamat BEAN token
        const beanDecimals = 18; // Ganti jika desimal BEAN berbeda
        const beanAbi = ['function balanceOf(address) view returns (uint256)'];
        const beanContract = new ethers.Contract(beanAddress, beanAbi, provider);
        const beanBalance = await beanContract.balanceOf(userAddress);
        userBeanBalance = ethers.utils.formatUnits(beanBalance, beanDecimals);

        renderSwap(); // Refresh dengan data baru
      });
    }
  });

  switchButton.addEventListener('click', () => {
    isSwapped = !isSwapped;
    document.body.removeChild(overlay);
    renderSwap();
  });
}

function createTokenSection(label, token, logo, balance, showBalance) {
  const section = document.createElement('div');
  section.style.cssText = `
    background: white; border-radius: 16px; padding: 1rem; margin-bottom: 1rem;
  `;

  const labelEl = document.createElement('label');
  labelEl.textContent = label;
  labelEl.style.cssText = `font-size: 0.9rem;`;
  section.appendChild(labelEl);

  if (showBalance) {
    const balanceEl = document.createElement('p');
    balanceEl.textContent = `Balance: ${balance} ${token}`;
    balanceEl.style.cssText = `font-size: 0.8rem; color: gray;`;
    section.appendChild(balanceEl);
  }

  const inputWrapper = document.createElement('div');
  inputWrapper.style.cssText = `
    display: flex; align-items: center; background: #f2f2f2; border-radius: 12px;
    padding: 0.5rem 1rem; margin-top: 0.5rem;
  `;

  const img = document.createElement('img');
  img.src = logo;
  img.style.cssText = `width: 24px; height: 24px; margin-right: 0.5rem;`;

  const span = document.createElement('span');
  span.textContent = token;

  const input = document.createElement('input');
  input.type = 'number';
  input.placeholder = '0.00';
  input.style.cssText = `
    margin-left:auto; width: 80px; background: transparent; border: none; text-align: right;
  `;

  inputWrapper.append(img, span, input);
  section.appendChild(inputWrapper);

  return section;
}

function createSwitchButton() {
  const button = document.createElement('button');
  button.id = 'switchBtn';
  button.style.cssText = `
    background: none; border: none; cursor: pointer;
    display: block; margin: 0.5rem auto;
  `;

  const img = document.createElement('img');
  img.src = './assets/swap-icon.png'; // Ganti dengan path gambar icon swap kamu
  img.alt = 'Swap Icon';
  img.style.cssText = `
    width: 32px; height: 32px;
  `;

  button.appendChild(img);
  return button;
}
