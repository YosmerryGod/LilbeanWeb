export function renderCommunity() {
  // === Marquee cantik ===
  const marqueeWrapper = document.createElement('div');
  marqueeWrapper.style.cssText = `
    width: 100%; background: linear-gradient(90deg, #FFD700, #FFEA00, #FFD700);
    overflow: hidden; position: relative; height: 40px; display: flex; align-items: center;
  `;

  const marqueeTrack = document.createElement('div');
  marqueeTrack.style.cssText = `
    display: inline-block; white-space: nowrap;
    animation: marquee 60s linear infinite;
    font-size: 1.2rem; font-weight: bold; color: black;
  `;

  const marqueeText = '🔥  The Future is Bean! 🔥 Join the Craze, Join the Community!  ';
  marqueeTrack.textContent = marqueeText.repeat(20);
  marqueeWrapper.appendChild(marqueeTrack);
  document.body.appendChild(marqueeWrapper);

  const style = document.createElement('style');
  style.textContent = `
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .social-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
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

  // === Section Community ===
  const section = document.createElement('section');
  section.style.cssText = `
    width: 100%; background: #001d3d; color: white; display: flex; flex-wrap: wrap;
    justify-content: space-around; padding: 4rem 2rem; box-sizing: border-box; font-family: 'Poppins', sans-serif;
  `;

  const leftSection = document.createElement('div');
  leftSection.style.cssText = `
    max-width: 600px; display: flex; align-items: center; gap: 1rem;
    background: #012a4a; padding: 1rem; border-radius: 12px;
  `;

  const image = document.createElement('img');
  image.src = './assets/mascot-community.png'; // Ganti dengan file gambar maskotmu
  image.alt = 'Community Mascot';
  image.style.cssText = `
    width: 150px; height: auto; border-radius: 12px;
  `;

  const textContainer = document.createElement('div');
  textContainer.style.cssText = `display: flex; flex-direction: column; gap: 0.5rem;`;

  const title = document.createElement('h2');
  title.textContent = 'SLIDE INTO OUR COMMUNITY!';
  title.style.cssText = 'font-size: 2vw; margin: 0; color: #9bf6ff;';

  const desc = document.createElement('p');
  desc.innerHTML = `
    Join our Telegram and follow us on X for the latest chaos and alpha drops.<br/>
    We glide toward memes, madness, and millionaires — together.
  `;
  desc.style.cssText = 'font-size: 1.1rem; color: #ccc; margin: 0;';
  textContainer.append(title, desc);
  leftSection.append(image, textContainer);

  const socialSection = document.createElement('div');
  socialSection.style.cssText = `display: flex; flex-direction: column; align-items: center; gap: 1rem; text-align: center;`;

  const followTitle = document.createElement('h3');
  followTitle.textContent = 'FOLLOW US, FELLOW LILBEAN';
  followTitle.style.margin = '0';

  const socialIcons = document.createElement('div');
  socialIcons.style.cssText = `display: flex; gap: 1rem; justify-content: center;`;
  const socials = [
    { img: './assets/telegram1.png', alt: 'Telegram' },
    { img: './assets/twitter1.png', alt: 'Twitter' },
    { img: './assets/instagram1.png', alt: 'Instagram' }
  ];
  socials.forEach(social => {
    const iconLink = document.createElement('a'); iconLink.href = '#'; iconLink.target = '_blank';
    const iconImg = document.createElement('img');
    iconImg.src = social.img; iconImg.alt = social.alt;
    iconImg.classList.add('social-icon'); // Tambahkan class untuk efek hover
    iconLink.appendChild(iconImg);
    socialIcons.appendChild(iconLink);
  });

  socialSection.append(followTitle, socialIcons);
  section.append(leftSection, socialSection);
  document.body.appendChild(section);

  const footer = document.createElement('div');
  footer.style.cssText = `
    width: 100%; background: #001d3d; color: #9bf6ff; text-align: center;
    padding: 1rem; font-size: 0.9rem;
  `;
  const copyright = document.createElement('p');
  copyright.textContent = '© 2025 Lil Bean Project. All rights reserved.';
  copyright.style.margin = '0.5rem 0';
  const links = document.createElement('div');
  links.style.cssText = `display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;`;
  ['PRIVACY POLICY', 'TERMS OF USE', 'IP RIGHTS', 'CAREERS'].forEach(text => {
    const link = document.createElement('a');
    link.textContent = text; link.href = '#';
    link.style.cssText = 'color: #9bf6ff; text-decoration: none;';
    links.appendChild(link);
  });

  footer.append(copyright, links);
  document.body.appendChild(footer);
}
