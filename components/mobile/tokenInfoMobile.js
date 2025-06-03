import { renderRoadmapMobile } from './roadmapMobile.js';
import { renderTokenomicsMobile } from './tokenomicsMobile.js';

export function renderTokenInfoMobile() {
  // SECTION UTAMA
  const section = document.createElement('section');
  section.id = 'born';

  const container = document.createElement('div');
  container.style.cssText = `
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, #FFD700, #FFEA00);
    padding: 2rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    text-align: center;
  `;

  const title = document.createElement('h1');
  title.textContent = 'How LilBean Was Born';
  title.style.cssText = `
    font-size: 8vw;
    font-weight: 900;
    color: white;
    text-shadow: 2px 2px 0 black;
    margin-bottom: 1.2rem;
  `;

  const video = document.createElement('video');
  video.controls = true;
  video.src = './assets/video/bean.mp4';
  video.style.cssText = `
    width: 90%;
    max-width: 450px;
    height: auto;
    border-radius: 12px;
    margin-bottom: 1.5rem;
  `;

  const desc = document.createElement('p');
  desc.innerHTML = `
    In a secret laboratory, CZ, the legendary figure of the crypto world, was conducting a revolutionary experiment.<br/><br/>
    From a small idea, he created something more than just a token – a tiny character with immense potential.<br/><br/>
    LilBean was born as a symbol of growth, courage, and the spirit of the crypto community.<br/><br/>
    No promises. No team. Just vibes. If you’re here, you’re early. If you’re holding, you’re family.
  `;
  desc.style.cssText = `
    font-size: 1rem;
    line-height: 1.7;
    color: #222;
    max-width: 600px;
  `;

  container.append(title, video, desc);
  section.appendChild(container);
  document.body.appendChild(section);

  // SIDEBAR
  let sidebar = document.getElementById('sidebar');
  if (!sidebar) {
    sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    sidebar.style.cssText = `
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: white;
      box-shadow: -2px 0 10px rgba(0,0,0,0.3);
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: 999;
      overflow-y: auto;
    `;
    document.body.appendChild(sidebar);
  }

  function openSidebar(contentNode) {
    sidebar.innerHTML = '';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✖️';
    closeBtn.style.cssText = `
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
    `;
    closeBtn.onclick = () => {
      sidebar.style.transform = 'translateX(100%)';
    };

    sidebar.appendChild(closeBtn);
    sidebar.appendChild(contentNode);
    sidebar.style.transform = 'translateX(0)';
  }

  // === Swipe Gesture Kiri-Kanan ===
  let startX = null;
  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const deltaX = startX - endX;

    if (deltaX > 50) {
      // Swipe ke kiri → buka Tokenomics
      openSidebar(renderTokenomicsMobile());
    } else if (deltaX < -50) {
      // Swipe ke kanan → buka Roadmap
      openSidebar(renderRoadmapMobile());
    }

    startX = null;
  });
}
