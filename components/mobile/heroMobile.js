export function renderHeroMobile() {
  const section = document.createElement('section');
  section.style.cssText = `
    width: 100dvw;
    height: 80dvh;
    background: url('./assets/beach-background.png') no-repeat center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  `;

  const content = document.createElement('div');
  content.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    z-index: 2;
    max-width: 90%;
  `;

  const title = document.createElement('h1');
  title.textContent = 'LIL-BEAN';
  title.style.cssText = `
    font-size: 11dvw;
    font-weight: 900;
    color: white;
    text-shadow: 2px 2px 0 black;
    margin: 0;
  `;

  const desc = document.createElement('p');
  desc.innerHTML = `
    BUILT ON BNB. ENHANCED BY AI.<br/>
    POWERED BY MEMES. GOVERNED BY CHAOS.
  `;
  desc.style.cssText = `
    font-size: 0.65rem;
    margin: 0;
    color: black;
    font-weight: 700;
    text-transform: uppercase;
  `;

  const caBox = document.createElement('div');
  caBox.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #e0c354;
    border-radius: 12px;
    padding: 0.75rem 1rem;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: white;
    max-width: 90%;
    margin: 1rem auto 0;
    box-shadow: 0 0 10px rgba(224, 195, 84, 0.3);
    backdrop-filter: blur(6px);
  `;

  const caText = document.createElement('span');
  const fullAddress = '0x0000dead';
  const shortAddress = `${fullAddress.slice(0, 6)}...${fullAddress.slice(-4)}`;

  caText.textContent = shortAddress;
  caText.dataset.full = fullAddress;
  caText.id = 'contract-address';
  caText.style.cssText = `
    color: #fff;
    word-break: break-all;
    font-family: monospace;
    flex: 1 1 auto;
    text-align: center;
  `;

  const copyBtn = document.createElement('button');
  copyBtn.textContent = '📋 Copy';
  copyBtn.style.cssText = `
    background: #e0c354;
    color: #000;
    border: none;
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 0.85rem;
    transition: all 0.2s ease;
  `;
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(caText.dataset.full);
    caText.textContent = '✅ Copied!';
    caText.style.color = '#e0c354';
    copyBtn.textContent = '⏳';
    setTimeout(() => {
      caText.textContent = shortAddress;
      caText.style.color = 'white';
      copyBtn.textContent = '📋 Copy';
    }, 2000);
  };

  caBox.appendChild(caText);
  caBox.appendChild(copyBtn);
  content.appendChild(title);
  content.appendChild(desc);
  content.appendChild(caBox);
  section.appendChild(content);

  // === MASCOT WRAPPER ===
  // === MASCOT WRAPPER ===
const mascotContainer = document.createElement('div');
mascotContainer.id = 'mascot-float-mobile';
mascotContainer.style.cssText = `
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 60px);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
  opacity: 0;
  pointer-events: none;
  transition: transform 0.6s ease, opacity 0.6s ease;
`;

const mascots = [
  { src: './assets/mascot2.png', size: 240, zIndex: 15, marginLeft: -10 },
  { src: './assets/mascot3.png', size: 280, zIndex: 30, marginLeft: -100 },
  { src: './assets/mascot5.png', size: 240, zIndex: 10, marginLeft: -120 }
];

mascots.forEach(({ src, size, zIndex, marginLeft, alt }, i) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = alt || `Mascot ${i + 2}`;
  img.style.cssText = `
    width: ${size}px;
    height: auto;
    position: relative;
    margin-left: ${marginLeft}px;
    z-index: ${zIndex};
  `;
  mascotContainer.appendChild(img);
});

section.appendChild(mascotContainer);
document.body.appendChild(section);

// === Animasi awal: muncul dari bawah
setTimeout(() => {
  mascotContainer.style.opacity = '1';
  mascotContainer.style.transform = 'translate(-50%, 0)';
}, 200);

// === Scroll behavior
let lastScrollY = window.scrollY;
let isVisible = true;

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
  const isScrollingDown = currentY > lastScrollY;
  lastScrollY = currentY;

  if (isScrollingDown && isVisible) {
    // Sembunyikan maskot saat scroll ke bawah
    mascotContainer.style.transform = 'translate(-50%, 100px)';
    mascotContainer.style.opacity = '0';
    isVisible = false;
  } else if (!isScrollingDown && !isVisible) {
    // Tampilkan kembali saat scroll ke atas
    mascotContainer.style.transform = 'translate(-50%, 0)';
    mascotContainer.style.opacity = '1';
    isVisible = true;
  }
});
}
