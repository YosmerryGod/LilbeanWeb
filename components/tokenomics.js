export function renderTokenomics() {
  const div = document.createElement('div');
  div.style.cssText = `
    position: absolute;
    top: 0;
    right: -63%;
    width: 65%;
    height: 100%;
    background: #333333;
    transition: right 0.3s ease;
    padding: 1rem;
    box-sizing: border-box;
    box-shadow: -4px 0 10px rgba(145, 0, 0, 0.81);
    z-index: 2;
    overflow-y: hidden;
    perspective: 1000px;
  `;

  const title = document.createElement('h2');
  title.textContent = 'BEANOMIC';
  title.style.cssText = `
    text-align: center; 
    font-size: 4.3vw; 
    font-weight: 900; 
    color: white; 
    text-shadow: 3px 3px 0 black; 
    margin: 0;
    margin-left: 75px;
    z-index: 3;
  `;
  div.appendChild(title);

  function createBox(items, boxStyle, textStyle, imgStyle) {
    const box = document.createElement('div');
    box.style.cssText = boxStyle + `
      z-index: 3; 
      position: absolute; 
      transition: transform 0.3s ease; 
      cursor: pointer;
    `;

    // Tambahkan efek membesar saat hover
    box.addEventListener('mouseenter', () => {
      box.style.transform = 'scale(1.1)';
    });
    box.addEventListener('mouseleave', () => {
      box.style.transform = 'scale(1)';
    });

    items.forEach(item => {
      const img = document.createElement('img');
      img.src = item.img;
      img.alt = 'icon';
      img.style.cssText = imgStyle;

      const text = document.createElement('p');
      text.textContent = item.text;
      text.style.cssText = textStyle;

      box.appendChild(img);
      box.appendChild(text);
    });

    return box;
  }

  const totalSupplyItems = [{ text: "1,000,000,000 BEAN", img: './assets/icons/supply.png' }];
  const devRewardItems = [{ text: "10% for Holder Reward (DEV Buy Early)", img: './assets/icons/reward.png' }];
  const communityItems = [{ text: "90% Community", img: './assets/icons/community.png' }];
  const burnItems = [{ text: "Liquidity: 100% Burn", img: './assets/icons/burn.png' }];
  const taxItems = [{ text: "0% Tax", img: './assets/icons/tax.png' }];
  const renouncedItems = [{ text: "Owner Renounced", img: './assets/icons/renounced.png' }];

  // Pie Chart (animasi masuk & berputar)
  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 600;
  canvas.style.cssText = `
    position: absolute;
    bottom: -75px;
    left: 55%;
    transform: translateX(-50%) perspective(800px) rotateX(60deg) rotate(0deg);
    z-index: 1;
    opacity: 0;
    max-width: 60%;
    transition: transform 1s ease, opacity 1s ease;
  `;
  const ctx = canvas.getContext('2d');

  const data = [
    { label: 'Holder Reward', value: 10, color: 'gold' },
    { label: 'Community', value: 90, color: 'green' },
    { label: 'Burn', value: 0, color: 'red' },
    { label: 'Tax', value: 0, color: 'blue' },
  ];
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let startAngle = -Math.PI / 2;

  data.forEach(segment => {
    const angle = (segment.value / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.fillStyle = segment.color;
    ctx.moveTo(300, 300);
    ctx.arc(300, 300, 200, startAngle, startAngle + angle);
    ctx.closePath();
    ctx.fill();
    startAngle += angle;
  });

  // Tambahkan animasi masuk pie chart
  setTimeout(() => {
    canvas.style.transform = 'translateX(-50%) perspective(800px) rotateX(60deg) rotate(360deg)';
    canvas.style.opacity = '0.7';
  }, 100); // Delay agar animasi terlihat

  div.appendChild(canvas);

  // Tambahkan kotak-kotak di atas canvas dengan efek hover membesar
  div.appendChild(createBox(totalSupplyItems, `top: 120px; left: 175px; background: transparent; padding: 1rem; border-radius: 10px; box-shadow: 0 2px 8px rgba(166, 0, 255, 0.99); width: 125px; height: 100px;`, `font-size: 1rem; color: #fff; text-align: center;`, `width: 60px; height: 60px; display: block; margin: 0 auto 0.5rem auto;`));
  div.appendChild(createBox(devRewardItems, `top: 120px; left: 365px; background: transparent; padding: 1rem; border-radius: 10px; box-shadow: 0 2px 8px rgb(255, 217, 0); width: 125px; height: 100px;`, `font-size: 0.7rem; color: #fff; text-align: center;`, `width: 50px; height: 50px; display: block; margin: 0 auto 0.5rem auto;`));
  div.appendChild(createBox(communityItems, `top: 120px; left: 550px; background: transparent; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 8px rgb(0, 255, 0); width: 125px; height: 100px;`, `font-size: 1rem; color: #fff; text-align: center;`, `width: 55px; height: 55px; display: block; margin: 0 auto 0.5rem auto;`));
  div.appendChild(createBox(burnItems, `top: 275px; left: 175px; background: transparent; padding: 1rem; border-radius: 10px; box-shadow: 0 2px 8px rgba(255, 0, 0, 0.99); width: 125px; height: 100px;`, `font-size: 1rem; color: #fff; text-align: center;`, `width: 60px; height: 60px; display: block; margin: 0 auto 0.5rem auto;`));
  div.appendChild(createBox(taxItems, `top: 280px; left: 365px; background: transparent; padding: 1rem; border-radius: 10px; box-shadow: 0 2px 8px rgb(0, 4, 255); width: 125px; height: 100px;`, `font-size: 1.2rem; color: #fff; text-align: center;`, `width: 50px; height: 50px; display: block; margin: 0 auto 0.5rem auto;`));
  div.appendChild(createBox(renouncedItems, `top: 280px; left: 550px; background: transparent; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 8px rgb(0, 229, 255); width: 125px; height: 100px;`, `font-size: 1rem; color: #fff; text-align: center;`, `width: 55px; height: 55px; display: block; margin: 0 auto 0.5rem auto;`));

  return div;
}
