import { renderNavbar } from './components/navbar.js';
import { renderHero } from './components/hero.js';
import { renderAbout } from './components/about.js';
import { renderTokenInfo } from './components/tokenInfo.js';
import { renderGallery } from './components/gallery.js';
import { renderCommunity } from './components/community.js';
import { renderFooter } from './components/footer.js';
import { renderLoading } from './components/loading.js';

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderHero();
  renderAbout();
  renderTokenInfo();
  renderGallery();
  renderCommunity();
  renderLoading();
});
