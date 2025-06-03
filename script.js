import { renderNavbar } from './components/navbar.js';
import { renderNavbarMobile } from './components/mobile/navbarMobile.js';
import { renderHero } from './components/hero.js';
import { renderHeroMobile } from './components/mobile/heroMobile.js';
import { renderAbout } from './components/about.js';
import { renderAboutMobile } from './components/mobile/aboutMobile.js';
import { renderTokenInfo } from './components/tokenInfo.js';
import { renderTokenInfoMobile } from './components/mobile/tokenInfoMobile.js';
import { renderGallery } from './components/gallery.js';
import { renderGalleryMobile } from './components/mobile/galleryMobile.js';
import { renderCommunity } from './components/community.js';
import { renderCommunityMobile } from './components/mobile/communityMobile.js';
import { renderFooter } from './components/footer.js';
import { renderLoading } from './components/loading.js';


document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    renderNavbarMobile();
    renderHeroMobile();
    renderAboutMobile();
    renderTokenInfoMobile();
    renderGalleryMobile();
    renderCommunityMobile();

  } else {
    renderNavbar();
    renderHero();
    renderAbout();
     renderTokenInfo();
  renderGallery();
  renderCommunity();
  }

  
 
  // renderLoading();
});
