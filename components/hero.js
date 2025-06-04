export function renderHero() {
  const section = document.createElement('section');
  section.style.cssText = `
    width: 100vw;
    height: 100vh;
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
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    text-align: center;
    align-items: center;
    z-index: 2;
    margin-bottom: 15vh;
    transform: translateY(-50px);
  `;

  const title = document.createElement('h1');
  title.textContent = 'LIL-BEAN';
  title.style.cssText = `
    text-align: center; font-size: 7.5vw; font-weight: 900; color: white; text-shadow: 3px 3px 0 black; margin: 0;
  `;

  const desc = document.createElement('p');
  desc.innerHTML = `
    BUILT ON BNB. ENHANCED BY AI.<br/>
POWERED BY MEMES. GOVERNED BY CHAOS.
  `;
  desc.style.cssText = `
    font-size: 1.3rem;
    margin: 0;
    color: black;
    font-weight: 10;
    text-transform: uppercase;
    font: bold;
    
  `;

  const caBox = document.createElement('div');
  caBox.style.cssText = `
    display: flex;
    align-items: center;
    background: #fffbe6;
    border: 1px solid #e0c354;
    border-radius: 8px;
    padding: 0.6rem 1rem;
    gap: 0.8rem;
    font-size: 0.95rem;
    color: #333;
    margin-top: 1rem;
  `;

  const caText = document.createElement('span');
  caText.textContent = '0xABCDEF123456789...';
  caText.id = 'contract-address';

  const copyBtn = document.createElement('button');
  copyBtn.textContent = '📋 Copy';
  copyBtn.style.cssText = `
    background: #ffd700;
    border: none;
    padding: 0.3rem 0.8rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
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
  section.appendChild(content);

  // === MASCOT WRAPPER ===
  const mascotContainer = document.createElement('div');
  mascotContainer.id = 'mascot-float';
  mascotContainer.style.cssText = `
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50px);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    z-index: 1;
    opacity: 0;
    animation:
      slideUp 0.7s ease-out forwards,
      floatUpDown 3s ease-in-out infinite;
  `;

  const sizes = [300, 325, 370, 325, 300];
  const zIndexes = [10, 20, 30, 20, 10];

  for (let i = 0; i < 5; i++) {
    const img = document.createElement('img');
    img.src = `./assets/mascot${i + 1}.png`;
    img.alt = `Mascot ${i + 1}`;
    img.style.cssText = `
      width: ${sizes[i]}px;
      height: auto;
      position: relative;
      margin-left: ${i === 0 ? '0' : '-175px'};
      z-index: ${zIndexes[i]};
    `;
    mascotContainer.appendChild(img);
  }

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
