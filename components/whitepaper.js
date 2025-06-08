export function renderWhitepaper() {
  document.body.innerHTML = '';
  window.scrollTo(0, 0);

  const wrapper = document.createElement('div');
  wrapper.className = 'min-h-screen bg-white text-gray-900 font-sans leading-relaxed';

  wrapper.innerHTML = `
    <header class="w-full border-b shadow-sm p-6 flex flex-col items-center">
      <a href="https://www.lilbean.fun" class="mb-4">
        <img src="./assets/logo.png" alt="LilBean Logo" class="h-20 w-20 object-cover rounded-full border border-gray-300 shadow" />
      </a>
      <h1 class="text-4xl font-bold uppercase text-yellow-600 tracking-wide">LilBean Whitepaper</h1>
      <p class="text-sm text-gray-500">Built on BNB, Enhanced by AI & Nonsense</p>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-10">

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-yellow-600 uppercase border-b pb-2 mb-4">🧠 Introduction</h2>
        <p class="text-lg">LilBean ($BEAN) is a meme-based cryptocurrency deployed on the BNB Smart Chain (BEP-20). Developed by the community-led Satotchi Clone AI team in Samara, Russia, LilBean blends blockchain with artificial intelligence and chaotic meme culture. The project operates autonomously, using AI to moderate communities, post updates, and engage with users 24/7 — with minimal human intervention.</p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-yellow-600 uppercase border-b pb-2 mb-4">🔗 Token Overview</h2>
        <ul class="list-disc pl-6 text-lg space-y-1">
          <li><strong>Token Name:</strong> LilBean</li>
          <li><strong>Blockchain:</strong> BNB Smart Chain (BEP-20)</li>
          <li><strong>Total Supply:</strong> 1,000,000,000</li>
          <li><strong>Tax:</strong> 0% Buy & Sell</li>
          <li><strong>Liquidity:</strong> Permanently Burned</li>
          <li><strong>Ownership:</strong> Renounced</li>
          <li><strong>Community Allocation:</strong> 95%</li>
          <li><strong>Dev Allocation (Fair Launch):</strong> 5%</li>
        </ul>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-yellow-600 uppercase border-b pb-2 mb-4">🔐 Security & Transparency</h2>
        <p class="text-lg">The LilBean contract will be verified on BscScan upon deployment. Liquidity has been permanently burned, and ownership renounced — ensuring that the contract is fully community-controlled. While there is no formal audit at this stage, the code is open for public review and transparent to the community.</p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-yellow-600 uppercase border-b pb-2 mb-4">🤖 AI Integration</h2>
        <p class="text-lg">LilBean is powered by Satotchi Clone AI, an autonomous Telegram assistant. It performs live moderation, meme responses, and community interaction using advanced models like Gemini AI. Its presence transforms a typical token community into an active, self-sustaining meme ecosystem — powered by AI and chaos.</p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-yellow-600 uppercase border-b pb-2 mb-4">🎁 Rewards & Utility</h2>
        <ul class="list-disc pl-6 text-lg space-y-1">
          <li>☁️ Cloud mining airdrops for early holders</li>
          <li>🔒 Staking rewards via dedicated DApp</li>
          <li>🎨 Meme contests and community engagement events</li>
        </ul>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-yellow-600 uppercase border-b pb-2 mb-4">📌 Roadmap Highlights</h2>
        <ul class="list-disc pl-6 text-lg space-y-1">
          <li><strong>Q1:</strong> Launch core branding, deploy contract, initiate social presence</li>
          <li><strong>Q2:</strong> Begin cloud mining airdrops, list on CoinGecko/CMC, launch staking + swap DApp</li>
          <li><strong>Q3:</strong> Expand community globally, introduce NFTs, secure CEX listing</li>
          <li><strong>Q4:</strong> Host meme festivals, release open-source dev tools, cross-chain integration</li>
        </ul>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-yellow-600 uppercase border-b pb-2 mb-4">👤 Team & Contributors</h2>
        <p class="text-lg">LilBean is maintained by a decentralized community of developers and meme lovers. The core team includes:</p>
        <ul class="list-disc pl-6 text-lg space-y-1 mt-2">
          <li><strong>Satotchi</strong> — Lead Developer, visionary behind the Bean ecosystem</li>
          <li><strong>Yosmerry</strong> — Developer & Bot Strategist</li>
          <li><strong>GregBean</strong> — Community Moderator</li>
          <li><strong>TheLilJack</strong> — Community Moderator</li>
        </ul>
        <p class="text-sm text-gray-500 mt-2">Note: Team is pseudonymous and operates with transparency via smart contract activity and community updates.</p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-yellow-600 uppercase border-b pb-2 mb-4">⚙️ Technical Architecture</h2>
        <p class="text-lg">The LilBean contract is a BEP-20 smart contract deployed on BNB Smart Chain. Key features include:</p>
        <ul class="list-disc pl-6 text-lg space-y-1 mt-2">
          <li>0% buy/sell tax coded immutably</li>
          <li>Renounced ownership at deployment</li>
          <li>Liquidity burn at launch, verifiable on BscScan</li>
          <li>No mint function or hidden backdoors</li>
        </ul>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-yellow-600 uppercase border-b pb-2 mb-4">🚀 Future Vision</h2>
        <p class="text-lg">LilBean aims to become a leading AI-driven meme ecosystem. By combining community participation, intelligent automation, and open-source tooling, the project will grow into a multi-chain ecosystem for meme token developers, holders, and fans worldwide.</p>
        <p class="text-lg mt-2">Our long-term goals include full DAO governance, a meme-focused launchpad, and a cross-chain meme exchange for verified community tokens.</p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-yellow-600 uppercase border-b pb-2 mb-4">📜 Disclaimer</h2>
        <p class="text-lg">LilBean is a decentralized experimental project. It is not a financial product. There are no promises or guarantees — only community-driven experimentation, memes, and AI-powered nonsense.</p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-bold text-yellow-600 uppercase border-b pb-2 mb-4">🌐 Official Links</h2>
        <ul class="list-disc pl-6 text-lg space-y-1">
          <li><a href="https://t.me/lilbeanFun" class="text-blue-600 hover:underline" target="_blank">Telegram</a></li>
          <li><a href="https://x.com/lilbeanBSC" class="text-blue-600 hover:underline" target="_blank">Twitter/X</a></li>
          <li><a href="https://instagram.com/lilbeanfun" class="text-blue-600 hover:underline" target="_blank">Instagram</a></li>
          <li><a href="https://www.lilbean.fun" class="text-blue-600 hover:underline" target="_blank">Website</a></li>
        </ul>
      </section>

    </main>
  `;

  document.body.appendChild(wrapper);
}