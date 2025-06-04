export function renderAboutMobile() {
  const marqueeWrapper = document.createElement('div');
  marqueeWrapper.style.cssText = `
    width: 100%;
    background: linear-gradient(90deg, #FFD700, #FFEA00, #FFD700);
    overflow: hidden;
    height: 48px;
    display: flex;
    align-items: center;
  `;

  const marqueeTrack = document.createElement('div');
  marqueeTrack.style.cssText = `
    display: inline-block;
    white-space: nowrap;
    animation: marquee 40s linear infinite;
    font-size: 1rem;
    font-weight: bold;
    color: black;
  `;

  const marqueeText = '🔥  The Future is Bean! 🔥 Join the Craze, Join the Community!  ';
  marqueeTrack.textContent = marqueeText.repeat(20);

  marqueeWrapper.appendChild(marqueeTrack);
  document.body.appendChild(marqueeWrapper);

  const style = document.createElement('style');
  style.textContent = `
    @keyframes marquee {
      0%   { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    @keyframes sunsetGradient {
      0% { background: linear-gradient(to bottom right, #f1fd4b, #b2fe00); }
      50% { background: linear-gradient(to bottom right, #b7ff87, #00ff88); }
      100% { background: linear-gradient(to bottom right, #6fa9ff, #cafb51); }
    }

    @media (min-width: 700px) {
      .about-mobile-section {
        padding: 10vh 15vw !important;
      }
    }
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'about';
  section.className = 'about-mobile-section';
  section.style.cssText = `
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10vh 8vw;
    background: linear-gradient(to bottom right, #FFD580, #FFEDB3);
    animation: sunsetGradient 10s ease-in-out infinite;
    box-sizing: border-box;
    text-align: center;
  `;

  const title = document.createElement('h1');
  title.innerHTML = 'LIL<br/>BEAN';
  title.style.cssText = `
    font-size: clamp(2.5rem, 12vw, 5rem);
    font-weight: 900;
    color: white;
    text-shadow: 2px 2px 0 black;
    margin: 0;
    line-height: 1.1;
  `;

  const desc = document.createElement('p');
  desc.innerHTML = `
        LilBean isn't just a token — he's the mascot of an AI-powered, meme-fueled crypto revolution.<br/>
Born from chaos and built on BNB, LilBean represents the spirit of decentralization, humor, and fearless experimentation.<br/><br/>
There’s no VC, no CEO, no fancy headquarters — only memes, community, and autonomous AI driving it forward.<br/><br/>
Whether you’re here to stake, laugh, build, or just hold, welcome to the beanverse.
  `;
  desc.style.cssText = `
    color: white;
    font-size: clamp(1rem, 4vw, 1.2rem);
    font-weight: 600;
    line-height: 1.7;
    margin-top: 2rem;
    max-width: 700px;
  `;

  section.appendChild(title);
  section.appendChild(desc);
  document.body.appendChild(section);
}
