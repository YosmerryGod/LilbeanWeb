export function renderFooter() {
    const footer = document.createElement('footer');
    footer.style.cssText = `
      width: 100%;
      background: #111;
      color: #fff;
      padding: 3vh 5vw;
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      font-size: 0.9rem;
      text-align: center;
    `;
  
    const brand = document.createElement('div');
    brand.textContent = '© 2025 LIL BEAN';
    brand.style.cssText = `
      font-weight: bold;
      flex: 1 1 100%;
      margin-bottom: 1rem;
    `;
  
    const links = document.createElement('div');
    links.style.cssText = `
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex: 1 1 100%;
    `;
  
    const tg = document.createElement('a');
    tg.href = 'https://t.me/YOUR_CHANNEL'; // Ganti
    tg.textContent = 'Telegram';
    tg.target = '_blank';
    tg.style.cssText = `
      color: white;
      text-decoration: none;
    `;
  
    const tw = document.createElement('a');
    tw.href = 'https://x.com/YOUR_PROFILE'; // Ganti
    tw.textContent = 'X';
    tw.target = '_blank';
    tw.style.cssText = `
      color: white;
      text-decoration: none;
    `;
  
    links.appendChild(tg);
    links.appendChild(tw);
    footer.appendChild(brand);
    footer.appendChild(links);
  
    document.body.appendChild(footer);
  }
  