export function renderHeroMobile() {
  const section = document.createElement('section');
  section.style.cssText = `
    width: 110vw;
    height: 75vh;
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
    max-width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    align-items: center;
    z-index: 2;
    margin-bottom: 20vh;
    transform: translateY(-30px);
  `;

  const title = document.createElement('h1');
  title.textContent = 'LIL-BEAN';
  title.style.cssText = `
    font-size: 15vw;
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
    font-size: 1.1rem;
    margin: 0;
    color: black;
    font-weight: 700;
    text-transform: uppercase;
  `;

  const caBox = document.createElement('div');
  caBox.style.cssText = `
    display: flex;
    align-items: center;
    background: #fffbe6;
    border: 1px solid #e0c354;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    gap: 0.6rem;
    font-size: 0.85rem;
    color: #333;
    margin-top: 0.8rem;
  `;

  const caText = document.createElement('span');
  caText.textContent = '0x00000dead';
  caText.id = 'contract-address';

  const copyBtn = document.createElement('button');
  copyBtn.textContent = '📋 Copy';
  copyBtn.style.cssText = `
    background: #ffd700;
    border: none;
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.85rem;
  `;
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(caText.textContent);
    copyBtn.textContent = '✅ Copied!';
    setTimeout(() => (copyBtn.textContent = '📋 Copy'), 2000);
  };

  caBox.appendChild(caText);
  caBox.appendChild(copyBtn);
  content.appendChild(title);
  content.appendChild(desc);
  content.appendChild(caBox);
  section.appendChild(content);

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
    animation:
      slideUp 0.7s ease-out forwards,
      floatUpDown 3s ease-in-out infinite;
  `;



  const mascots = [
  {
    src: './assets/mascot2.png',
    size: 210,
    zIndex: 15,
    marginLeft: -5
  },
  {
    src: './assets/mascot3.png',
    size: 250,
    zIndex: 30,
    marginLeft: -120
  },
  {
    src: './assets/mascot5.png',
    size: 210,
    zIndex: 10,
    marginLeft: -130
  }
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

  // === ANIMATION STYLES ===
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideUp {
      to {
        transform: translate(-50%, 0);
        opacity: 1;
      }
    }

    @keyframes floatUpDown {
      0%, 100% {
        transform: translate(-50%, 0);
      }
      50% {
        transform: translate(-50%, 20px);
      }
    }
  `;
  document.head.appendChild(style);
}
