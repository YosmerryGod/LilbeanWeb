
import { renderNavbarMobile } from './mobile/navbarMobile.js';

import { renderHeroMobile } from './mobile/heroMobile.js';

import { renderAboutMobile } from './mobile/aboutMobile.js';

import { renderTokenInfoMobile } from './mobile/tokenInfoMobile.js';

import { renderGalleryMobile } from './mobile/galleryMobile.js';

import { renderCommunityMobile } from './mobile/communityMobile.js';
import { renderRoadmapMobile } from './mobile/roadmapMobile.js';
import { renderTokenomicsMobile } from './mobile/tokenomicsMobile.js';

export function sectionMobile(sectionChange = 'normal') {
  const container = document.createElement('div');

  container.appendChild(renderNavbarMobile());
  container.appendChild(renderHeroMobile());
  container.appendChild(renderAboutMobile());

  if (sectionChange === 'roadmap') {
    container.appendChild(renderRoadmapMobile());
  } else if (sectionChange === 'tokenomics') {
    container.appendChild(renderTokenomicsMobile());
  } else {
    container.appendChild(renderTokenInfoMobile());
  }

  container.appendChild(renderGalleryMobile());
  container.appendChild(renderCommunityMobile());

  return container;
}

