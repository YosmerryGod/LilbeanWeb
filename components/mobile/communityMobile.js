export function renderCommunityMobile() {
  // === Marquee ===
  const marqueeWrapper = document.createElement('div');
  marqueeWrapper.style.cssText = `
    width: 100%; background: linear-gradient(90deg, #FFD700, #FFEA00, #FFD700);
    overflow: hidden; position: relative; height: 35px; display: flex; align-items: center;
  `;
  const marqueeTrack = document.createElement('div');
  marqueeTrack.style.cssText = `
    display: inline-block; white-space: nowrap;
    animation: marquee 60s linear infinite;
    font-size: 1rem; font-weight: bold; color: black;
  `;
  marqueeTrack.textContent = '🔥  The Future is Bean! 🔥 Join the Craze, Join the Community!  '.repeat(20);
  marqueeWrapper.appendChild(marqueeTrack);
  document.body.appendChild(marqueeWrapper);

  // === CSS Animasi + Sosial Icon Hover ===
  const style = document.createElement('style');
  style.textContent = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .social-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      transition: transform 0.3s, filter 0.3s, opacity 0.3s;
      cursor: pointer;
    }
    .social-icon:hover {
      transform: scale(1.2);
      filter: brightness(1.2);
      opacity: 0.9;
    }
  `;
  document.head.appendChild(style);

  // === Community Section ===
  const section = document.createElement('section');
  section.id = 'community';
  section.style.cssText = `
    width: 100%; background: #001d3d; color: white; padding: 2rem 1rem;
    box-sizing: border-box; font-family: 'Poppins', sans-serif; display: flex; flex-direction: column; align-items: center; gap: 1.5rem;
  `;

  const mascotImage = document.createElement('img');
  mascotImage.src = './assets/mascot-community.png';
  mascotImage.alt = 'Community Mascot';
  mascotImage.style.cssText = `width: 60%; max-width: 200px; border-radius: 12px;`;

  const textContainer = document.createElement('div');
  textContainer.style.cssText = `text-align: center; max-width: 90%;`;

  const title = document.createElement('h2');
  title.textContent = 'SLIDE INTO OUR COMMUNITY!';
  title.style.cssText = 'font-size: 6vw; margin: 0; color: #9bf6ff;';

  const desc = document.createElement('p');
  desc.innerHTML = `
    Join our Telegram and follow us on X for the latest chaos and alpha drops.<br/>
    We glide toward memes, madness, and millionaires — together.
  `;
  desc.style.cssText = 'font-size: 1rem; color: #ccc; margin: 0.5rem 0 0 0;';
  textContainer.append(title, desc);

  const socialIcons = document.createElement('div');
  socialIcons.style.cssText = `display: flex; justify-content: center; gap: 1rem; margin-top: 1rem;`;
  const socials = [
  { href: 'https://twitter.com/lilbeanBSC', img: './assets/mobile/twitterMobile.png', alt: 'Twitter' },
  { href: 'https://t.me/lilbeanFun', img: './assets/mobile/telegramMobile.png', alt: 'Telegram' },
  { href: 'https://instagram.com/LilbeanFun', img: './assets/mobile/instagramMobile.png', alt: 'Instagram' }
];

socials.forEach(social => {
  const iconLink = document.createElement('a');
  iconLink.href = social.href;            // ✅ Link asli
  iconLink.target = '_blank';             // Buka di tab baru

  const iconImg = document.createElement('img');
  iconImg.src = social.img;
  iconImg.alt = social.alt;
  iconImg.classList.add('social-icon');   // Class untuk efek hover

  iconLink.appendChild(iconImg);
  socialIcons.appendChild(iconLink);
});


  section.append(mascotImage, textContainer, socialIcons);
  document.body.appendChild(section);

  // === Footer ===
  const footer = document.createElement('div');
  footer.style.cssText = `
    width: 100%; background: #001d3d; color: #9bf6ff; text-align: center;
    padding: 1rem; font-size: 0.8rem;
  `;
  const copyright = document.createElement('p');
  copyright.textContent = '© 2025 Lil Bean Project. All rights reserved.';
  copyright.style.margin = '0.5rem 0';

  const links = document.createElement('div');
  links.style.cssText = `display: flex; justify-content: center; flex-wrap: wrap; gap: 0.5rem;`;
  ['PRIVACY POLICY', 'TERMS OF USE', 'IP RIGHTS', 'CAREERS'].forEach(text => {
    const link = document.createElement('a');
    link.textContent = text;
    link.href = '#';
    link.style.cssText = 'color: #9bf6ff; text-decoration: none;';
    links.appendChild(link);
  });

  footer.append(copyright, links);
  document.body.appendChild(footer);
}
