export function renderLoading() {
  // Reset margin dan padding
  document.body.style.cssText = `
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  `;
  document.documentElement.style.cssText = `
    margin: 0;
    padding: 0;
  `;

  // Buat loading screen container
  const loadingScreen = document.createElement('div');
  loadingScreen.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #ff7e5f, #feb47b, #ff7e5f);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 1s ease;
  `;

  // Tambahkan style animasi ke <style> global
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spinAndGrow {
      0% {
        transform: scale(1) rotate(0deg);
      }
      100% {
        transform: scale(1.5) rotate(720deg);
      }
    }
  `;
  document.head.appendChild(style);

  // Logo bundar
  const logo = document.createElement('img');
  logo.src = './assets/logo.png';
  loadingScreen.appendChild(logo);

  // Container progress bar
  const progressContainer = document.createElement('div');
  const progressBar = document.createElement('div');
  progressContainer.appendChild(progressBar);
  loadingScreen.appendChild(progressContainer);

  // Responsif: layout logo & progress bar
  function updateLayout() {
    const isMobile = window.innerWidth <= 768;

    logo.style.cssText = `
      width: ${isMobile ? '30dvw' : '15dvw'};
      height: auto;
      object-fit: cover;
      border-radius: 50%;
      border: 5px solid white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      margin-bottom: 2rem;
      transition: transform 1s ease;
    `;

    progressContainer.style.cssText = `
      width: ${isMobile ? '90%' : '60%'};
      height: ${isMobile ? '5%' : '10%'};
      background: rgba(255,255,255,0.2);
      border-radius: 10px;
      overflow: hidden;
    `;

    progressBar.style.cssText = `
      width: 0%;
      height: 100%;
      background: linear-gradient(90deg, #33FF57, #33FFF3, #3357FF, #FF33A1, #FFFF33, #F333FF);
      transition: width 0.5s ease-in-out;
    `;
  }

  updateLayout();
  window.addEventListener('resize', updateLayout);

  // Tambahkan ke body
  document.body.appendChild(loadingScreen);

  // Simulasi loading progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = `${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);

      // Tambahkan animasi spin dan grow ke logo
      logo.style.animation = 'spinAndGrow 1s ease forwards';

      // Setelah animasi selesai, fade out
      setTimeout(() => {
        loadingScreen.style.opacity = '0';

        setTimeout(() => {
          window.removeEventListener('resize', updateLayout);
          if (loadingScreen.parentNode) {
            loadingScreen.parentNode.removeChild(loadingScreen);
          }
        }, 1000); // tunggu fade out selesai
      }, 1000); // tunggu animasi logo selesai
    }
  }, 300);
}
