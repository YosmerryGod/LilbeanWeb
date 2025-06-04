import { renderSwap } from '../swap.js';

export function renderNavbarMobile() {
  const style = document.createElement('style');
  style.textContent = `
    .nav-logo {
      position: fixed;
      top: 20px;
      left: 20px;
      height: 56px;
      width: 56px;
      border-radius: 50%;
      object-fit: cover;
      z-index: 1001;
      transition: transform 0.3s ease;
    }

    .nav-hamburger {
      position: fixed;
      top: 20px;
      right: 20px;
      font-size: 2.3rem;
      color: white;
      background: orange;
      border: none;
      padding: 5px 10px;
      border-radius: 8px;
      z-index: 1001;
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .mobile-menu {
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
      max-width: 400px;
      background: linear-gradient(135deg, #ff7e5f, #feb47b);
      display: none;
      flex-direction: column;
      align-items: center;
      z-index: 1002;
      border-bottom-left-radius: 40px;
      border-bottom-right-radius: 40px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      padding: 100px 20px 20px;
    }

    .mobile-menu.show {
      animation: slideDown 0.3s ease forwards;
    }

    @keyframes slideDown {
      from { transform: translate(-50%, -20px); opacity: 0; }
      to   { transform: translate(-50%, 0); opacity: 1; }
    }

    .mobile-menu .menu-item {
      font-size: 2rem;
      font-weight: 800;
      color: white;
      text-shadow: 1px 1px black;
      margin: 12px 0;
      cursor: pointer;
    }

    .mobile-menu .menu-item:hover {
      transform: scale(1.05);
    }

    .social-row {
      display: flex;
      justify-content: center;
      margin-top: 25px;
      gap: 20px;
    }

    .social-row img {
      width: 48px;
      height: 48px;
      object-fit: contain;
      border-radius: 12px;
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .social-row img:hover {
      transform: scale(1.1);
    }

    .nav-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.4);
      display: none;
      z-index: 1000;
    }

    .close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 1.5rem;
      color: white;
      background: none;
      border: none;
      cursor: pointer;
    }

    @media (max-width: 480px) {
      .mobile-menu { width: 95%; }
    }

    @media (min-width: 481px) and (max-width: 768px) {
      .mobile-menu { width: 85%; }
    }
  `;
  document.head.appendChild(style);

  const logo = document.createElement('img');
  logo.src = './assets/logo.png';
  logo.alt = 'Logo';
  logo.className = 'nav-logo';

  const menuBtn = document.createElement('button');
  menuBtn.innerHTML = '☰';
  menuBtn.className = 'nav-hamburger';

  const menu = document.createElement('div');
  menu.className = 'mobile-menu';

  const overlay = document.createElement('div');
  overlay.className = 'nav-overlay';
  overlay.onclick = closeMenu;

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-btn';
  closeBtn.innerHTML = '✕';
  closeBtn.onclick = closeMenu;
  menu.appendChild(closeBtn);

  function openSidebar(node) {
    let sidebar = document.getElementById('sidebar');
    if (!sidebar) {
      sidebar = document.createElement('div');
      sidebar.id = 'sidebar';
      sidebar.style.cssText = `
        position: fixed;
        top: 0;
        right: 0;
        width: 80%;
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

    sidebar.innerHTML = '';

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
    close.onclick = () => sidebar.style.transform = 'translateX(100%)';

    sidebar.appendChild(close);
    sidebar.appendChild(node);
    sidebar.style.transform = 'translateX(0)';
  }

  const items = [
    { text: 'ABOUT' },
    { text: 'BORN' },
    {
      text: 'ROADMAP',
      custom: () => {
        import('./roadmapMobile.js').then(mod => {
          const section = mod.renderRoadmapMobile();
          openSidebar(section);
        });
      }
    },
    {
      text: 'TOKENOMICS',
      custom: () => {
        import('./tokenomicsMobile.js').then(mod => {
          const section = mod.renderTokenomicsMobile();
          openSidebar(section);
        });
      }
    },
    { text: 'GALLERY' },
    { text: 'WHITEPAPER' },
    { text: 'BUY $BEAN', action: renderSwap }
  ];

  items.forEach(({ text, action, custom }) => {
    const el = document.createElement('div');
    el.textContent = text;
    el.className = 'menu-item';
    el.onclick = () => {
      closeMenu();
      if (action) action();
      else if (custom) custom();
      else {
        const section = document.getElementById(text.toLowerCase());
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }
    };
    menu.appendChild(el);
  });

  const social = document.createElement('div');
  social.className = 'social-row';

  const socialLinks = [
    { href: 'https://twitter.com/lilbeanBSC', img: './assets/mobile/twitterMobile.png', alt: 'Twitter' },
    { href: 'https://t.me/lilbeanFun', img: './assets/mobile/telegramMobile.png', alt: 'Telegram' },
    { href: 'https://instagram.com/LilbeanFun', img: './assets/mobile/instagramMobile.png', alt: 'Instagram' }
  ];

  socialLinks.forEach(({ href, img, alt }) => {
    const a = document.createElement('a');
    a.href = href;
    a.target = '_blank';
    const icon = document.createElement('img');
    icon.src = img;
    icon.alt = alt;
    a.appendChild(icon);
    social.appendChild(a);
  });

  menu.appendChild(social);

  function closeMenu() {
    menu.style.display = 'none';
    overlay.style.display = 'none';
    menu.classList.remove('show');
  }

  menuBtn.onclick = () => {
    const isVisible = menu.style.display === 'flex';
    if (isVisible) closeMenu();
    else {
      menu.style.display = 'flex';
      overlay.style.display = 'block';
      menu.classList.add('show');
    }
  };

  document.body.appendChild(logo);
  document.body.appendChild(menuBtn);
  document.body.appendChild(menu);
  document.body.appendChild(overlay);

  // 🟡 SCROLL EFFECT: hide on scroll down, show on scroll up
  let lastScrollTop = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
      logo.style.transform = 'translateY(-100px)';
      menuBtn.style.transform = 'translateY(-100px)';
    } else {
      logo.style.transform = 'translateY(0)';
      menuBtn.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
}
