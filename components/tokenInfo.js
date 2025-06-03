import { renderRoadmap } from './roadmap.js';
import { renderTokenomics } from './tokenomics.js';

export function renderTokenInfo() {
  const container = document.createElement('div');
  container.style.cssText = `
    width: 100%;
    height: 100vh;
    background: linear-gradient(135deg, #FFD700, #FFEA00);
    position: relative;
    overflow: hidden;
    padding: 2rem;
    box-sizing: border-box;
  `;

  // Gambar Maskot Kiri & Kanan (opsional)
  const mascotLeft = document.createElement('img');
  mascotLeft.src = './assets/right.png';
  mascotLeft.style.cssText = `
    position: absolute; bottom: 0; left: 0; width: 20vw; height: auto; z-index: 0;
  `;
  container.appendChild(mascotLeft);

  const mascotRight = document.createElement('img');
  mascotRight.src = './assets/left.png';
  mascotRight.style.cssText = `
    position: absolute; bottom: 0; right: 0; width: 20vw; height: auto; z-index: 0;
  `;
  container.appendChild(mascotRight);

  // Title & Description & Video
  const title = document.createElement('h1');
  title.textContent = 'How LilBean Was Born';
  title.style.cssText = `
    text-align: center; font-size: 4.3vw; font-weight: 900; color: white; text-shadow: 3px 3px 0 black; margin: 0;
  `;
  const description = document.createElement('p');
  description.textContent = "In a secret laboratory, CZ, the legendary figure of the crypto world, was conducting a revolutionary experiment. From a small idea, he created something more than just a token – a tiny character with immense potential. LilBean was born as a symbol of growth, courage, and the spirit of the crypto community. The name 'LilBean' was chosen because it represents something small yet holds incredible potential to grow big, just like a tiny bean that eventually blossoms into a tall tree. This little character is ready to be part of your grand journey in the blockchain world. Witness how LilBean was brought to life by CZ’s experiment in the exclusive video below.";
  description.style.cssText = `
    text-align: center; font-size: 0.85rem; max-width: 650px; margin: 0 auto 1rem auto; line-height: 1.5;
  `;
  const videoSection = document.createElement('div');
  videoSection.style.cssText = `text-align: center; margin-bottom: 2rem;`;
  videoSection.innerHTML = `<video style="width: 45%; height: auto;" controls><source src="./assets/video/bean.mp4" type="video/mp4"></video>`;

  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(videoSection);

  // Overlay
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: none;
    background: rgba(0,0,0,0.3); z-index: 1;
  `;
  container.appendChild(overlay);

  // Sidebar Roadmap & Tokenomics (dipanggil)
  const sidebarRoadmap = renderRoadmap();
  const sidebarTokenomic = renderTokenomics();
  container.appendChild(sidebarRoadmap);
  container.appendChild(sidebarTokenomic);

  // Mouse Detection
  let isDragging = false;
  let startX = null;
  container.addEventListener('mousedown', (e) => {
    isDragging = true; startX = e.clientX;
  });
  container.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    let endX = e.clientX; let xDiff = startX - endX;
    if (xDiff > 50) { // Kiri ke kanan
      sidebarTokenomic.style.right = '0'; sidebarRoadmap.style.left = '-70%'; overlay.style.display = 'block';
    } else if (xDiff < -50) { // Kanan ke kiri
      sidebarRoadmap.style.left = '0'; sidebarTokenomic.style.right = '-70%'; overlay.style.display = 'block';
    }
    isDragging = false; startX = null;
  });
  overlay.addEventListener('click', () => {
    sidebarRoadmap.style.left = '-63%'; sidebarTokenomic.style.right = '-63%'; overlay.style.display = 'none';
  });

  document.body.appendChild(container);
}
