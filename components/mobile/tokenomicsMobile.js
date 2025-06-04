export function renderTokenomicsMobile() {
  const section = document.createElement('section');
  section.id = 'tokenomics';
  section.style.cssText = `
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(to bottom, #333, #000);
    padding: 2rem 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
  `;

  // ✅ Tombol Close (menyembunyikan sidebar)
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✖';
  closeBtn.style.cssText = `
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  `;
  closeBtn.onclick = () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.style.transform = 'translateX(100%)';
  };
  section.appendChild(closeBtn);

  // Judul
  const title = document.createElement('h1');
  title.textContent = 'BEANOMIC';
  title.style.cssText = `
    font-size: 12vw;
    color: white;
    font-weight: 900;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 0 black;
  `;
  section.appendChild(title);

  // Isi Tokenomics
  const tokenomics = [
    { text: "1,000,000,000 BEAN", img: './assets/icons/supply.png' },
    { text: "5% for Holder Reward", img: './assets/icons/reward.png' },
    { text: "95% Community", img: './assets/icons/community.png' },
    { text: "Liquidity: 100% Burn", img: './assets/icons/burn.png' },
    { text: "0% Tax", img: './assets/icons/tax.png' },
    { text: "Owner Renounced", img: './assets/icons/renounced.png' },
  ];

  tokenomics.forEach(item => {
    const box = document.createElement('div');
    box.style.cssText = `
      width: 100%;
      max-width: 360px;
      margin-bottom: 1.5rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.4);
      display: flex;
      align-items: center;
      gap: 1rem;
      color: white;
      font-size: 1rem;
      font-weight: bold;
    `;

    const icon = document.createElement('img');
    icon.src = item.img;
    icon.alt = 'icon';
    icon.style.cssText = `
      width: 48px;
      height: 48px;
    `;

    const label = document.createElement('div');
    label.textContent = item.text;

    box.appendChild(icon);
    box.appendChild(label);
    section.appendChild(box);
  });

  return section;
}
