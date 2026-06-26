export class SceneManager {
  constructor({ root, nav, scenes }) {
    this.root = root;
    this.nav = nav;
    this.scenes = scenes;
    this.sections = [];
    this.navItems = new Map();
    this.activeSceneId = scenes[0]?.id;
    this.observer = null;
    this.handleClick = this.handleClick.bind(this);
  }

  mount() {
    if (!this.root) {
      return;
    }

    this.root.innerHTML = this.scenes.map((scene) => scene.html).join('');
    this.sections = [...this.root.querySelectorAll('[data-scene]')];
    this.renderNav();
    this.bindEvents();
    this.observeScenes();
    this.setActiveScene(this.activeSceneId);
  }

  destroy() {
    this.root?.removeEventListener('click', this.handleClick);
    this.nav?.removeEventListener('click', this.handleClick);
    this.observer?.disconnect();
  }

  renderNav() {
    if (!this.nav) {
      return;
    }

    this.nav.innerHTML = this.scenes
      .map(
        (scene) => `
          <a class="scene-nav__item" href="#${scene.id}" data-scene-link="${scene.id}">
            <span>${scene.label}</span>
          </a>
        `,
      )
      .join('');

    this.navItems = new Map(
      [...this.nav.querySelectorAll('[data-scene-link]')].map((item) => [
        item.dataset.sceneLink,
        item,
      ]),
    );
  }

  bindEvents() {
    this.root.addEventListener('click', this.handleClick);
    this.nav?.addEventListener('click', this.handleClick);
  }

  observeScenes() {
    this.observer = new IntersectionObserver(
      (entries) => {
        const visibleScene = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleScene?.target?.id) {
          this.setActiveScene(visibleScene.target.id);
        }
      },
      {
        threshold: [0.38, 0.55, 0.72],
      },
    );

    this.sections.forEach((section) => this.observer.observe(section));
  }

  handleClick(event) {
    const trigger = event.target.closest('[data-scroll-target], [data-scene-link]');

    if (!trigger) {
      return;
    }

    event.preventDefault();
    const sceneId = trigger.dataset.scrollTarget || trigger.dataset.sceneLink;
    this.scrollToScene(sceneId);
  }

  scrollToScene(sceneId) {
    const target = this.root.querySelector(`#${sceneId}`);

    if (!target) {
      return;
    }

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  setActiveScene(sceneId) {
    this.activeSceneId = sceneId;
    this.sections.forEach((section) => {
      section.classList.toggle('is-active', section.id === sceneId);
    });

    this.navItems.forEach((item, id) => {
      const isActive = id === sceneId;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
  }
}
