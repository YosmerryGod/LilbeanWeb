export function renderWhitepaper() {
  const part = document.createElement('div');
  part.className = 'part px-6 py-8 bg-[#1a1a1a] text-white font-sans leading-relaxed';

  part.innerHTML = `
    <h1 class="text-3xl md:text-4xl font-bold uppercase text-yellow-400 mb-4">🫘 LilBean Whitepaper</h1>
    <p class="text-lg font-semibold mb-6">Built on BNB, Enhanced by AI & Nonsense</p>

    <div class="part mb-8">
      <h2 class="text-2xl font-bold uppercase text-yellow-300 mb-2">🧠 Introduction</h2>
      <p>LilBean ($BEAN) is a fully AI-managed meme token project that thrives on chaos, creativity, and community involvement. Developed by the Satotchi Clone AI team from Samara, Russia, LilBean is designed to operate with minimal human input while maximizing fun and engagement. It’s not just a token — it’s a movement.</p>
    </div>

    <div class="part mb-8">
      <h2 class="text-2xl font-bold uppercase text-yellow-300 mb-2">🛠 Project Overview</h2>
      <ul class="list-disc ml-6">
        <li><strong>Token Name:</strong> LilBean</li>
        <li><strong>Chain:</strong> BNB Smart Chain (BEP-20)</li>
        <li><strong>Contract Address:</strong> 0xdead <em>(pre-launch placeholder)</em></li>
        <li><strong>Launch Schedule:</strong> 8 June, 15:00 UTC</li>
        <li><strong>Total Supply:</strong> 1 Billion</li>
        <li><strong>Tax Buy/Sell:</strong> 0%</li>
        <li><strong>Liquidity Pool:</strong> Burned</li>
        <li><strong>Owner:</strong> Renounced</li>
        <li><strong>Community Supply:</strong> 95%</li>
        <li><strong>Dev Early Buy:</strong> 5%</li>
      </ul>
    </div>

    <div class="part mb-8">
      <h2 class="text-2xl font-bold uppercase text-yellow-300 mb-2">🔐 Security & Transparency</h2>
      <ul class="list-disc ml-6">
        <li>✅ Verified Contract on BscScan (after launch)</li>
        <li>🔒 Liquidity permanently burned</li>
        <li>❌ Ownership renounced</li>
        <li>🔍 Open-source community reviews (no formal audit)</li>
      </ul>
    </div>

    <div class="part mb-8">
      <h2 class="text-2xl font-bold uppercase text-yellow-300 mb-2">🤖 AI Engine: Satotchi Clone AI</h2>
      <p>Satochi Clone AI is the official Telegram bot and AI-powered assistant of $BEAN.</p>
      <ul class="list-disc ml-6">
        <li>Group moderation</li>
        <li>Meme auto-replies</li>
        <li>Real-time updates</li>
        <li>User interaction with chaotic flair</li>
        <li>24/7 operation (never sleeps)</li>
      </ul>
      <blockquote class="italic mt-2 text-yellow-100">"Powered by AI, driven by memes, and never sleeps."</blockquote>
    </div>
  `;

  document.body.appendChild(part);
}
