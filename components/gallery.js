export function renderGallery() {
  const section = document.createElement('section');
  section.id = 'gallery';
  const container = document.createElement('div');
  container.style.cssText = `
    width: 100vw;
    height: 100vh;
    padding: 2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: background 3s linear;
    overflow: hidden;
  `;

  const title = document.createElement('h1');
  title.textContent = 'LIL-BEAN GALLERY';
  title.style.cssText = `
    text-align: center; font-size: 5vw; font-weight: 900; color: black; text-shadow: 3px 3px 0 grey; margin: 0;
  `;
  container.appendChild(title);

  const description = document.createElement('p');
  description.textContent = "Discover a world of creativity and color in the LilBean Gallery. From concept art to exclusive moments, each piece tells a story.";
  description.style.cssText = `
    text-align: center;
    max-width: 1500px;
    margin-bottom: 2rem;
    font-size: 1.8rem;
  `;
  container.appendChild(description);

  const carouselContainer = document.createElement('div');
  carouselContainer.style.cssText = `
    width: 80%;
    max-width: 1200px;
    overflow: hidden;
    position: relative;
  `;

  const carouselTrack = document.createElement('div');
  carouselTrack.style.cssText = `
    display: flex;
    transition: transform 1s ease;
    will-change: transform;
  `;

  const images = [
    './assets/gallery/gallery1.jpg', './assets/gallery/gallery11.jpg', './assets/gallery/gallery3.jpg',
    './assets/gallery/gallery4.jpg', './assets/gallery/gallery5.jpg', './assets/gallery/gallery6.jpg',
    './assets/gallery/gallery7.jpg', './assets/gallery/gallery8.jpg', './assets/gallery/gallery9.jpg',
    './assets/gallery/gallery10.jpg', './assets/gallery/gallery2.jpg', './assets/gallery/gallery12.jpg'
  ];

  images.forEach((url, index) => {
    const img = document.createElement('img');
    img.src = url;
    img.style.cssText = `
      width: calc((100% / 4) - 10px); /* Kurangi sedikit biar ada ruang untuk gap */
      height: auto;
      border-radius: 20px;
      cursor: pointer;
      transition: transform 0.2s;
      margin-right: 12px; /* Tambah jarak antar gambar */
    `;
    // Jika gambar terakhir, hilangkan margin-kanan
    if (index === images.length - 1) {
      img.style.marginRight = '0';
    }

    img.addEventListener('click', () => window.open(url, '_blank'));
    img.addEventListener('mouseover', () => img.style.transform = 'scale(1.05)');
    img.addEventListener('mouseout', () => img.style.transform = 'scale(1)');
    carouselTrack.appendChild(img);
  });

  carouselContainer.appendChild(carouselTrack);
  container.appendChild(carouselContainer);
  document.body.appendChild(container);

  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFFF33', '#33FFF3', '#F333FF'];
  let colorIndex = 0;
  setInterval(() => {
    container.style.background = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }, 3000);

  let currentIndex = 0;
  const totalImages = images.length;
  const visibleCount = 4;
  const totalSets = Math.ceil(totalImages / visibleCount);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSets;
    const offset = -(carouselContainer.clientWidth + 10) * currentIndex; // 10px untuk margin-right
    carouselTrack.style.transform = `translateX(${offset}px)`;
  }, 7000);
}
