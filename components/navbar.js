import { renderSwap } from './swap.js';

export function renderNavbar() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes bounce {
      0% { transform: scale(1); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
      100% { transform: translateY(0px); }
    }
    .float-icon { animation: float 3s ease-in-out infinite; }
    .bounce-on-click { animation: bounce 0.4s ease; }
    button { position: relative; overflow: hidden; z-index: 0; }
    button::before {
      content: ''; position: absolute; left: 0; bottom: 0;
      width: 100%; height: 0%;
      background: linear-gradient(to top, rgb(15, 16, 16), rgb(94, 93, 90));
      z-index: -1; transition: height 0.4s ease;
    }
    button:hover::before { height: 100%; }
    button:hover { color: white !important; }
  `;
  document.head.appendChild(style);

  const nav = document.createElement('nav');
  nav.style.cssText = `
    width: 100%; height: 150px; position: fixed; top: 0; left: 0; z-index: 1000;
    background: transparent; transition: opacity 0.3s ease; pointer-events: none; opacity: 1;
  `;

  const logo = document.createElement('img');
  logo.src = './assets/logo.png';
  logo.alt = 'Logo';
  logo.style.cssText = `
    position: absolute; top: 25px; left: 50%; transform: translateX(-50%);
    height: 100px; width: 100px; border-radius: 50%; object-fit: cover; pointer-events: auto;
  `;

  const leftButton = document.createElement('button');
  leftButton.textContent = 'MENU';
  leftButton.style.cssText = `
    position: absolute; top: 45px; left: calc(50% - 400px);
    background: rgb(254, 184, 78); color: white; font-weight: bold;
    border: 2px solid black; border-radius: 10px; padding: 10px 20px;
    font-size: 1rem; cursor: pointer; pointer-events: auto;
  `;

  const rightButton = document.createElement('button');
  rightButton.textContent = 'BUY $BEAN';
  rightButton.style.cssText = `
    position: absolute; top: 45px; left: calc(50% + 300px);
    background: rgb(254, 184, 78); color: white; font-weight: bold;
    border: 2px solid black; border-radius: 10px; padding: 10px 20px;
    font-size: 1rem; cursor: pointer; pointer-events: auto;
  `;

  nav.appendChild(logo);
  nav.appendChild(leftButton);
  nav.appendChild(rightButton);
  document.body.prepend(nav);

  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    nav.style.opacity = currentScrollY < lastScrollY ? '1' : '0';
    lastScrollY = currentScrollY;
  });

  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.5); z-index: 1000; display: none;
  `;
  overlay.onclick = () => {
    sidebar.style.top = '-60vh';
    overlay.style.display = 'none';
  };
  document.body.appendChild(overlay);

  const sidebar = document.createElement('div');
  sidebar.style.cssText = `
    position: fixed; top: -60vh; left: 50%; transform: translateX(-50%);
    width: 90vw; height: 50vh;
    background: linear-gradient(135deg, #ff7e5f, #feb47b, #ff7e5f);
    border-radius: 0 0 50px 50px;
    box-shadow: 0 6px 16px rgba(255, 0, 0, 0.69);
    transition: top 0.4s ease; z-index: 1001;
    font-family: 'Poppins', sans-serif; overflow: hidden;
  `;

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✖';
  closeBtn.style.cssText = `
    position: absolute; top: 20px; right: 25px;
    background: white; color: black; font-weight: bold;
    font-size: 1.2rem; border: 2px solid #222; border-radius: 50%;
    width: 35px; height: 35px; cursor: pointer;
  `;
  closeBtn.onclick = () => {
    sidebar.style.top = '-60vh';
    overlay.style.display = 'none';
  };
  sidebar.appendChild(closeBtn);

  const menuItems = [
    { text: 'ABOUT', top: 30, left: 75 },
    { text: 'BORN', top: 100, left: 75 },
    { text: 'ROADMAP', top: 170, left: 75 },
    { text: 'TOKENOMICS', top: 30, left: 400 },
    { text: 'GALLERY', top: 100, left: 400 },
    { text: 'WHITEPAPER', top: 170, left: 400 },
  ];

  menuItems.forEach(item => {
    const el = document.createElement('div');
    el.textContent = item.text;
    el.style.cssText = `
      position: absolute; top: ${item.top}px; left: ${item.left}px;
      font-size: 2.5rem; font-weight: 800; color: white;
      text-shadow: 1px 1px #000; cursor: pointer; transition: transform 0.2s;
    `;
    el.onclick = () => {
      el.classList.add('bounce-on-click');
      setTimeout(() => el.classList.remove('bounce-on-click'), 400);

      const target = item.text.toLowerCase();
      const section = document.getElementById(target);

      if (item.text === 'ROADMAP') {
        import('.roadmap.js').then(mod => {
          openSidebar(mod.renderRoadmapMobile());
        });
      } else if (item.text === 'TOKENOMICS') {
        import('.tokenomics.js').then(mod => {
          openSidebar(mod.renderTokenomicsMobile());
        });
      } else if (section) {
        sidebar.style.top = '-60vh';
        overlay.style.display = 'none';
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
    sidebar.appendChild(el);
  });

  const socialLinks = [
    { href: 'https://twitter.com/lilbeanBSC', img: './assets/twitter.png', alt: 'Twitter', top: 40, left: 750, size: 175 },
    { href: 'https://t.me/lilbeanfun', img: './assets/telegram.png', alt: 'Telegram', top: 120, left: 925, size: 160 },
    { href: 'https://instagram.com/lilbeanFun', img: './assets/instagram.png', alt: 'Instagram', top: -10, left: 900, size: 160 },
  ];

  socialLinks.forEach(link => {
    const a = document.createElement('a');
    a.href = link.href; a.target = '_blank';
    const img = document.createElement('img');
    img.src = link.img; img.alt = link.alt;
    img.classList.add('float-icon');
    img.style.cssText = `
      position: absolute; top: ${link.top}px; left: ${link.left}px;
      width: ${link.size}px; height: ${link.size}px;
      object-fit: cover; border-radius: 14px; cursor: pointer;
      transition: transform 0.3s ease, filter 0.3s ease;
    `;
    img.onmouseover = () => img.style.transform = 'scale(1.1)';
    img.onmouseout = () => img.style.transform = 'scale(1)';
    a.appendChild(img);
    sidebar.appendChild(a);
  });

  document.body.appendChild(sidebar);

  leftButton.onclick = () => {
    sidebar.style.top = '0';
    overlay.style.display = 'block';
  };

  rightButton.onclick = () => { renderSwap(); };

  function openSidebar(node) {
    let side = document.getElementById('popup-sidebar');
    if (!side) {
      side = document.createElement('div');
      side.id = 'popup-sidebar';
      side.style.cssText = `
        position: fixed;
        top: 0;
        right: 0;
        width: 80%;
        height: 100%;
        background: white;
        box-shadow: -2px 0 10px rgba(0,0,0,0.3);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        z-index: 9999;
        overflow-y: auto;
      `;
      document.body.appendChild(side);
    }

    side.innerHTML = '';
    const close = document.createElement('button');
    close.textContent = '✖';
    close.style.cssText = `
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
    `;
    close.onclick = () => side.style.transform = 'translateX(100%)';

    side.appendChild(close);
    side.appendChild(node);
    side.style.transform = 'translateX(0)';
  }
}
