export function renderAbout() {
  const marqueeWrapper = document.createElement('div');
  marqueeWrapper.style.cssText = `
    width: 100%; background: linear-gradient(90deg, #FFD700, #FFEA00, #FFD700);
    overflow: hidden; position: relative; height: 60px; display: flex; align-items: center;
  `;

  const marqueeTrack = document.createElement('div');
  marqueeTrack.style.cssText = `
    display: inline-block; white-space: nowrap;
    animation: marquee 60s linear infinite;
    font-size: 1.2rem; font-weight: bold; color: black;
  `;

  const marqueeText = '🔥  The Future is Bean! 🔥 Join the Craze, Join the Community!  ';
  marqueeTrack.textContent = marqueeText.repeat(20); // Loop tanpa putus

  marqueeWrapper.appendChild(marqueeTrack);
  document.body.appendChild(marqueeWrapper);
  const style = document.createElement('style');
  style.textContent = `
    @keyframes sunsetGradient {
      0% {
        background: linear-gradient(to bottom right,rgb(241, 253, 75),rgb(178, 254, 0));
      }
      50% {
        background: linear-gradient(to bottom right,rgb(183, 255, 135),rgb(0, 255, 136));
      }
      100% {
        background: linear-gradient(to bottom right,rgb(111, 169, 255),rgb(202, 250, 81));
      }
    }
  `;
  document.head.appendChild(style);

  const section = document.createElement('section');
  section.id = 'about';
  section.style.cssText = `
    width: 102%;
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8vh 6vw;
    background: linear-gradient(to bottom right, #FFD580, #FFEDB3);
    box-sizing: border-box;
    position: relative;
    animation: sunsetGradient 10s ease-in-out infinite;
    background-size: 200% 200%;
  `;

  // === KIRI (Judul Besar)
  const left = document.createElement('div');
  left.style.cssText = `
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const titleLine1 = document.createElement('h1');
  titleLine1.textContent = 'LIL';
  titleLine1.style.cssText = `
    font-size: 10vw;
    font-weight: 900;
    color: white;
    text-shadow: 3px 3px 0 black;
    margin: 0;
  `;

  const titleLine2 = document.createElement('h1');
  titleLine2.textContent = 'BEAN';
  titleLine2.style.cssText = titleLine1.style.cssText;

  left.appendChild(titleLine1);
  left.appendChild(titleLine2);

  // === KANAN (Deskripsi Text)
  const right = document.createElement('div');
  right.style.cssText = `
    flex: 1.2;
    color: white;
    font-size: 1.6vw;
    font-weight: 600;
    line-height: 1.6;
    padding-left: 4vw;
  `;

  right.innerHTML = `
    Lil Bean is not just a coin.<br/>
    He’s a golden bean with a dumb smile, zero roadmap, and too much confidence.<br/>
    Powered by community. Fueled by memes. Backed by absolutely nothing.<br/><br/>
    No promises. No team. Just vibes.<br/>
    If you’re here, you’re early. If you’re holding,<br/> you’re family.
  `;

  // === MASCOT DI POJOK KANAN BAWAH
  const mascot = document.createElement('img');
  mascot.src = './assets/lilbean-about.png';
  mascot.alt = 'Lil Bean';
  mascot.style.cssText = `
    position: absolute;
    bottom: -7vh;
    right: 2vw;
    width: 14vw;
    z-index: 1;
  `;

  section.appendChild(left);
  section.appendChild(right);
  section.appendChild(mascot);
  document.body.appendChild(section);
}
