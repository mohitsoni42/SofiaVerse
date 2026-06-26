import introScene from '../scenes/intro.html?raw';
import journeyScene from '../scenes/journey.html?raw';
import galleryScene from '../scenes/gallery.html?raw';
import storybookScene from '../scenes/storybook.html?raw';
import slideshowScene from '../scenes/slideshow.html?raw';
import letterScene from '../scenes/letter.html?raw';
import wishesScene from '../scenes/wishes.html?raw';
import finaleScene from '../scenes/finale.html?raw';
import { photoStories } from '../data/PriyanshiMemories.js';
import { renderPersonalization } from './personalization.js';
import { SceneManager } from './sceneManager.js';
import { createNightSky } from './sky.js';

const scenes = [
  {
    id: 'intro',
    label: 'Intro',
    html: introScene,
  },
  {
    id: 'journey',
    label: 'Memories',
    html: journeyScene,
  },
  {
    id: 'gallery',
    label: 'Photos',
    html: galleryScene,
  },
  ...photoStories.map((story, index) => ({
    id: `photo-${index + 1}`,
    label: story.navLabel || `Photo ${index + 1}`,
    html: `
      <section class="scene photo-chapter-scene photo-chapter-scene--${story.accent || 'gold'}" id="photo-${index + 1}" data-scene data-photo-story="${index}" aria-label="${story.title}">
        <div class="scene__content photo-chapter-scene__content"></div>
      </section>
    `,
  })),
  {
    id: 'storybook',
    label: 'Friendship',
    html: storybookScene,
  },
  {
    id: 'slideshow',
    label: 'Slideshow',
    html: slideshowScene,
  },
  {
    id: 'letter',
    label: 'For Priyanshi',
    html: letterScene,
  },
  {
    id: 'wishes',
    label: 'Wishes',
    html: wishesScene,
  },
  {
    id: 'finale',
    label: 'Finale',
    html: finaleScene,
  },
];

export function createPriyanshiVerse(root) {
  if (!root) {
    return;
  }

  root.innerHTML = `
    <div class="site-shell">
      <div class="night-sky" data-night-sky aria-hidden="true">
        <canvas class="night-sky__canvas" data-sky-canvas></canvas>
        <div class="aurora aurora--left"></div>
        <div class="aurora aurora--right"></div>
      </div>
      <header class="site-header" aria-label="PriyanshiVerse navigation">
        <a class="brand" href="#intro" aria-label="PriyanshiVerse home">
          <span class="brand__mark"></span>
          <span>PriyanshiVerse</span>
        </a>
        <nav class="scene-nav" data-scene-nav aria-label="Scenes"></nav>
      </header>
      <main class="scene-stack" data-scene-stack></main>
    </div>
  `;

  const sky = createNightSky(root.querySelector('[data-sky-canvas]'));
  const manager = new SceneManager({
    root: root.querySelector('[data-scene-stack]'),
    nav: root.querySelector('[data-scene-nav]'),
    scenes,
  });

  manager.mount();
  renderPersonalization(root);
  sky.start();

  return {
    destroy() {
      sky.destroy();
      manager.destroy();
    },
  };
}
