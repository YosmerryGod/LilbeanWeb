export function renderLoading() {
    document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.documentElement.style.margin = '0';
  document.documentElement.style.padding = '0';
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
  `;

  // Logo dengan border-radius bulat & stroke putih
  const logo = document.createElement('img');
  logo.src = './assets/logo.png'; // Ganti dengan path logo kamu
  logo.style.cssText = `
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    margin-bottom: 2rem;
  `;
  loadingScreen.appendChild(logo);

  // Progress bar container
  const progressContainer = document.createElement('div');
  progressContainer.style.cssText = `
    width: 30%;
    height: 20px;
    background: rgba(255,255,255,0.2);
    border-radius: 10px;
    overflow: hidden;
  `;

  // Progress bar fill (gradasi pelangi)
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, #33FF57, #33FFF3, #3357FF, #FF33A1, #FFFF33, #F333FF);
    transition: width 0.5s linear;
  `;
  progressContainer.appendChild(progressBar);
  loadingScreen.appendChild(progressContainer);

  document.body.appendChild(loadingScreen);

  // Simulasi loading (misal 3 detik)
  let progress = 0;
  const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = `${progress}%`;
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 1s ease';
        setTimeout(() => {
          document.body.removeChild(loadingScreen);
        }, 1000);
      }, 500);
    }
  }, 300);
}
