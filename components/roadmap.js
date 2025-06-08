export function renderRoadmap() {
  const section = document.createElement('section');
  section.id = 'roadmap';
  const div = document.createElement('div');
  div.style.cssText = `
    position: absolute;
    top: 0;
    left: -58%;
    width: 60%;
    height: 100%;
    background: #333333;
    transition: left 0.3s ease;
    padding: 2rem;
    box-shadow: 4px 0 10px rgba(145, 0, 0, 0.81);
    z-index: 2;
    overflow-y: hidden; /* Matikan scroll jika mau */
  `;

  function createQuarterBox(title, items, boxStyle, titleStyle, textStyle) {
    const box = document.createElement('div');
    box.style.cssText = boxStyle + `
      transition: transform 0.3s ease;
      cursor: pointer;
    `;

    // Animasi membesar saat disentuh
    box.addEventListener('mouseenter', () => {
      box.style.transform = 'scale(1.1)';
    });
    box.addEventListener('mouseleave', () => {
      box.style.transform = 'scale(1)';
    });

    const header = document.createElement('h2');
    header.textContent = title;
    header.style.cssText = titleStyle;
    box.appendChild(header);

    const ul = document.createElement('ul');
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      li.style.cssText = textStyle;
      ul.appendChild(li);
    });
    box.appendChild(ul);

    return box;
  }

  // Q1 – Foundation
const q1Items = [
  "✔ Concept and Idea for Bean Coin as a community-based meme coin",
  "✔ Design of Bean mascot (character, colors, and meme-style identity)",
  "✔ Creation of official website and social media (Twitter, Telegram)",
  "✔ Deployment of smart contract (BEAN token) on Four.meme (BSC)",
  "✔ Migration from Four.meme to PancakeSwap V2"
];
const q1Box = createQuarterBox(
  "Q1 – Foundation and Initial Launch",
  q1Items,
  `
    background: transparent;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgb(253, 0, 0);
    width: 350px;
    height: 200px;
    margin-left: -15px;
    margin-top: -10px;
  `,
  `
    font-size: 20px;
    margin-bottom: 0.5rem;
    color: #FFFFFF;
    font-weight: bold;
  `,
  `
    font-size: 10px;
    color: #FFFFFF;
    margin-left: -10px;
  `
);
div.appendChild(q1Box);

// Q2 – Community Expansion
const q2Items = [
  "👥 Airdrop for holders with cloud mining-based rewards",
  "🤝 Collaborations with Influencers & Crypto Communities",
  "📈 Listing on CoinGecko and CoinMarketCap",
  "🎮 Launch of DApps (staking, swap)",
  "🎨 Release of Meme Launchpad similar to Four.meme"
];
const q2Box = createQuarterBox(
  "Q2 – Community Expansion and Product Development",
  q2Items,
  `
    background: transparent;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgb(52, 6, 255);
    width: 350px;
    height: 200px;
    margin-left: 350px;
    margin-top: -200px;
  `,
  `
    font-size: 20px;
    margin-bottom: 0.5rem;
    color: #FFFFFF;
    font-weight: bold;
  `,
  `
    font-size: 11px;
    color: #FFFFFF;
    margin-left: -15px;
  `
);
div.appendChild(q2Box);

// Q3 – Growth
const q3Items = [
  "🌍 Expansion of Community to Global Scale",
  "💎 Staking Rewards & Farming Pool",
  "🎨 Release of NFT Collection and Claim Functionality",
  "🌕 Listing on CEX (Centralized Exchange)",
  "🕹️ Enhanced DApps with new features",
  "💬 Increased Community Engagement (events, contests)"
];
const q3Box = createQuarterBox(
  "Q3 – Growth and Innovation",
  q3Items,
  `
    background: transparent;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgb(38, 255, 0);
    width: 350px;
    height: 200px;
    margin-left: -15px;
    margin-top: 30px;
  `,
  `
    font-size: 20px;
    margin-bottom: 0.5rem;
    color: #FFFFFF;
    font-weight: bold;
  `,
  `
    font-size: 12px;
    color: #FFFFFF;
    margin-left: -10px;
  `
);
div.appendChild(q3Box);

// Q4 – Ecosystem & Branding
const q4Items = [
  "🎭 Meme Festival Events (Online & Offline)",
  "🚀 Release of Open-Source Ecosystem for Developers",
  "🌐 Cross-Chain Integration with other blockchains",
  "🎮 DApps Upgrades (new DeFi features)",
  "📈 Expansion of CEX Listings (Tier-2 Exchanges)"
];
const q4Box = createQuarterBox(
  "Q4 – Ecosystem Strengthening and Branding",
  q4Items,
  `
    background: transparent;
    padding: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgb(255, 0, 200);
    width: 350px;
    height: 200px;
    margin-left: 350px;
    margin-top: -200px;
  `,
  `
    font-size: 20px;
    margin-bottom: 0.5rem;
    color: #FFFFFF;
    font-weight: bold;
  `,
  `
    font-size: 12px;
    color: #FFFFFF;
    margin-left: -15px;
  `
);
div.appendChild(q4Box);


  return div;
}
