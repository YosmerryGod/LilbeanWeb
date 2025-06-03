export function renderRoadmapMobile() {
  const section = document.createElement('section');
  section.id = 'roadmap';
  section.style.cssText = `
    width: 100%;
    min-height: 100vh;
    background: #1a1a1a;
    padding: 2rem 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    position: relative;
  `;

  // ✅ Tombol Close (untuk sidebar)
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✖';
  closeBtn.style.cssText = `
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  `;
  closeBtn.onclick = () => {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.style.transform = 'translateX(100%)';
  };
  section.appendChild(closeBtn);

  const title = document.createElement('h1');
  title.textContent = 'ROADMAP';
  title.style.cssText = `
    font-size: 11vw;
    color: white;
    font-weight: 900;
    margin-bottom: 2rem;
    text-align: center;
    text-shadow: 2px 2px 0 black;
  `;
  section.appendChild(title);

  const phases = [
    {
      name: 'Q1 – Foundation & Initial Launch',
      color: 'rgb(253, 0, 0)',
      items: [
        "💡 Concept and Idea for Bean Coin",
        "✏️ Design of Bean mascot",
        "🌍 Website & Social Media Launch",
        "🚀 Deployment on Four.meme (BSC)",
        "🌍 Migration to PancakeSwap V2"
      ]
    },
    {
      name: 'Q2 – Community Expansion',
      color: 'rgb(52, 6, 255)',
      items: [
        "👥 Airdrop & Mining Rewards",
        "🤝 Influencer Collaborations",
        "📈 CoinGecko & CMC Listing",
        "🎮 Launch of DApps",
        "🎨 Meme Launchpad"
      ]
    },
    {
      name: 'Q3 – Growth & Innovation',
      color: 'rgb(38, 255, 0)',
      items: [
        "🌍 Global Community Expansion",
        "💎 Staking & Farming",
        "🎨 NFT Collection",
        "🌕 CEX Listings",
        "🕹️ New DApps Features"
      ]
    },
    {
      name: 'Q4 – Ecosystem & Branding',
      color: 'rgb(255, 0, 200)',
      items: [
        "🎭 Meme Festival Events",
        "🚀 Open-Source Tools",
        "🌐 Cross-Chain Integration",
        "🎮 DApps Upgrades",
        "📈 Tier-2 CEX Listings"
      ]
    }
  ];

  phases.forEach(phase => {
    const box = document.createElement('div');
    box.style.cssText = `
      width: 100%;
      max-width: 420px;
      background: rgba(255, 255, 255, 0.05);
      border-left: 5px solid ${phase.color};
      border-radius: 12px;
      padding: 1rem;
      margin-bottom: 2rem;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
    `;

    const header = document.createElement('h3');
    header.textContent = phase.name;
    header.style.cssText = `
      font-size: 1.2rem;
      color: white;
      margin-bottom: 0.8rem;
    `;
    box.appendChild(header);

    const ul = document.createElement('ul');
    ul.style.paddingLeft = '1rem';

    phase.items.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      li.style.cssText = `
        font-size: 0.95rem;
        color: white;
        margin-bottom: 0.4rem;
      `;
      ul.appendChild(li);
    });

    box.appendChild(ul);
    section.appendChild(box);
  });

  return section;
}
