import {
  giftSurprises,
  photoStories,
  slideshowMoments,
  PriyanshiLetter,
} from '../data/PriyanshiMemories.js';

function mediaMarkup(item, className) {
  if (item.image) {
    return `
      <img class="${className}__image" src="${item.image}" alt="${item.alt || item.title}" loading="lazy" />
    `;
  }

  return `
    <div class="${className}__keepsake ${className}__keepsake--${item.accent || 'gold'}" aria-label="${item.alt || item.title}" role="img">
      <span>${item.initials}</span>
    </div>
  `;
}

function renderPhotoStories(root) {
  const containers = [...root.querySelectorAll('[data-photo-story]')];

  if (!containers.length) {
    return;
  }

  containers.forEach((container) => {
    const index = Number(container.dataset.photoStory);
    const story = photoStories[index];

    if (!story) {
      return;
    }

    const target = container.querySelector('.photo-chapter-scene__content') || container;
    target.innerHTML = `
        <article class="photo-story ${index % 2 === 1 ? 'photo-story--reverse' : ''}" data-reveal>
          <figure class="photo-story__frame">
            ${mediaMarkup(story, 'photo-story')}
            <figcaption>${story.caption}</figcaption>
          </figure>
          <div class="photo-story__copy">
            <p class="scene-kicker">${story.eyebrow}</p>
            <h3>${story.title}</h3>
            <p>${story.paragraph}</p>
          </div>
        </article>
      `;
  });
}

function renderSlideshow(root) {
  const track = root.querySelector('[data-slideshow-track]');
  const dots = root.querySelector('[data-slideshow-dots]');
  const prev = root.querySelector('[data-slide-prev]');
  const next = root.querySelector('[data-slide-next]');

  if (!track || !dots || !prev || !next) {
    return;
  }

  let activeIndex = 0;

  track.innerHTML = slideshowMoments
    .map(
      (moment, index) => `
        <article class="slide ${index === 0 ? 'is-active' : ''}" data-slide="${index}">
          <div class="slide__visual">
            ${mediaMarkup(moment, 'slide')}
          </div>
          <div class="slide__copy">
            <span>${String(index + 1).padStart(2, '0')}</span>
            <h3>${moment.title}</h3>
            <p>${moment.description}</p>
          </div>
        </article>
      `,
    )
    .join('');

  dots.innerHTML = slideshowMoments
    .map(
      (_, index) => `
        <button class="slideshow-dot ${index === 0 ? 'is-active' : ''}" type="button" data-slide-dot="${index}">
          <span>Show memory ${index + 1}</span>
        </button>
      `,
    )
    .join('');

  const slides = [...track.querySelectorAll('[data-slide]')];
  const dotButtons = [...dots.querySelectorAll('[data-slide-dot]')];

  function setSlide(nextIndex) {
    activeIndex = (nextIndex + slides.length) % slides.length;

    slides.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === activeIndex);
    });

    dotButtons.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === activeIndex);
      dot.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
    });
  }

  prev.addEventListener('click', () => setSlide(activeIndex - 1));
  next.addEventListener('click', () => setSlide(activeIndex + 1));
  dots.addEventListener('click', (event) => {
    const dot = event.target.closest('[data-slide-dot]');

    if (dot) {
      setSlide(Number(dot.dataset.slideDot));
    }
  });
}

function renderLetter(root) {
  const container = root.querySelector('[data-Priyanshi-letter]');

  if (!container) {
    return;
  }

  container.innerHTML = PriyanshiLetter.map((paragraph) => `<p>${paragraph}</p>`).join('');
}

function renderGiftSurprise(root) {
  const stage = root.querySelector('[data-gift-stage]');
  const gift = root.querySelector('[data-open-gift]');
  const card = root.querySelector('[data-gift-card]');
  const next = root.querySelector('[data-next-gift]');
  const burst = root.querySelector('[data-gift-burst]');

  if (!stage || !gift || !card || !next || !burst) {
    return;
  }

  let activeIndex = -1;

  function fillBurst() {
    burst.innerHTML = Array.from({ length: 22 }, (_, index) => {
      const angle = (index / 22) * 360;
      const distance = 90 + (index % 5) * 18;
      const delay = (index % 6) * 0.035;

      return `<span style="--angle: ${angle}deg; --distance: ${distance}px; --delay: ${delay}s;"></span>`;
    }).join('');
  }

  function showSurprise(index) {
    const surprise = giftSurprises[index];

    if (!surprise) {
      return;
    }

    activeIndex = index;
    stage.classList.add('is-open');
    card.innerHTML = `
      <span>${surprise.label}</span>
      <h3>${surprise.title}</h3>
      <p>${surprise.message}</p>
    `;

    fillBurst();
    burst.classList.remove('is-bursting');
    window.requestAnimationFrame(() => burst.classList.add('is-bursting'));
  }

  gift.addEventListener('click', () => showSurprise(0));
  next.addEventListener('click', () => {
    showSurprise((activeIndex + 1) % giftSurprises.length);
  });

  card.innerHTML = `
    <span>Wrapped Wish</span>
    <h3>Something sweet is inside.</h3>
    <p>Press the glowing gift to open Priyanshi's surprise.</p>
  `;
}

export function renderPersonalization(root) {
  renderPhotoStories(root);
  renderSlideshow(root);
  renderLetter(root);
  renderGiftSurprise(root);
}
