export function renderGalleryMobile() {
  const section = document.createElement('section');
  section.id = 'gallery';
  section.style.cssText = `
    width: 100vw;
    height: 60vh;
    padding: 2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: background-color 1.5s ease;
  `;

  // 🎨 Flat background color animation
  const bgColors = ['#fff5e6', '#ffe6f0', '#e6f7ff', '#e6ffe6', '#fff0e6'];
  let bgIndex = 0;
  section.style.backgroundColor = bgColors[bgIndex];

  setInterval(() => {
    bgIndex = (bgIndex + 1) % bgColors.length;
    section.style.backgroundColor = bgColors[bgIndex];
  }, 6000);

  const title = document.createElement('h1');
  title.textContent = 'LIL-BEAN GALLERY';
  title.style.cssText = `
    text-align: center;
    font-size: 9vw;
    font-weight: 900;
    color: #000;
    text-shadow: 2px 2px #ccc;
    margin: 0;
  `;

  const description = document.createElement('p');
  description.textContent = "Explore LilBean world, swipe through fun moments!";
  description.style.cssText = `
    text-align: center;
    font-size: 1rem;
    color: #333;
    margin-bottom: 1rem;
  `;

  const carouselContainer = document.createElement('div');
  carouselContainer.style.cssText = `
    width: 100%;
    max-width: 500px;
    height: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 12px;
  `;

  const carouselTrack = document.createElement('div');
  carouselTrack.style.cssText = `
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.8s ease;
  `;

  const images = [
    './assets/gallery/gallery1.jpg', './assets/gallery/gallery2.jpg', './assets/gallery/gallery3.jpg',
    './assets/gallery/gallery4.jpg', './assets/gallery/gallery5.jpg', './assets/gallery/gallery6.jpg',
    './assets/gallery/gallery7.jpg', './assets/gallery/gallery8.jpg', './assets/gallery/gallery9.jpg'
  ];

  images.forEach((url) => {
    const imgWrapper = document.createElement('div');
    imgWrapper.style.cssText = `
      width: 100%;
      flex-shrink: 0;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    const img = document.createElement('img');
    img.src = url;
    img.style.cssText = `
      width: 100%;
      height: auto;
      max-height: 100%;
      border-radius: 12px;
      transition: transform 0.3s;
      cursor: pointer;
      object-fit: contain;
    `;

    img.onclick = () => window.open(url, '_blank');
    img.onmouseenter = () => img.style.transform = 'scale(1.03)';
    img.onmouseleave = () => img.style.transform = 'scale(1)';

    imgWrapper.appendChild(img);
    carouselTrack.appendChild(imgWrapper);
  });

  carouselContainer.appendChild(carouselTrack);
  section.append(title, description, carouselContainer);
  document.body.appendChild(section);

  // 🔁 Auto slide: 1 image every 5 seconds
  let currentIndex = 0;
  const totalSlides = images.length;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = -carouselContainer.clientWidth * currentIndex;
    carouselTrack.style.transform = `translateX(${offset}px)`;
  }, 5000);
}
