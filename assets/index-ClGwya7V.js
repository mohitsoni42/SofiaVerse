(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`<section class="scene intro-scene" id="intro" data-scene aria-labelledby="intro-title">
  <div class="intro-scene__moon-wrap" aria-hidden="true">
    <div class="moon">
      <span class="moon__crater moon__crater--one"></span>
      <span class="moon__crater moon__crater--two"></span>
      <span class="moon__crater moon__crater--three"></span>
    </div>
  </div>

  <div class="balloon-field" aria-hidden="true">
    <span class="balloon balloon--rose"></span>
    <span class="balloon balloon--gold"></span>
    <span class="balloon balloon--blue"></span>
    <span class="balloon balloon--pearl"></span>
  </div>

  <div class="firefly-field" aria-hidden="true">
    <span class="firefly firefly--one"></span>
    <span class="firefly firefly--two"></span>
    <span class="firefly firefly--three"></span>
    <span class="firefly firefly--four"></span>
    <span class="firefly firefly--five"></span>
    <span class="firefly firefly--six"></span>
  </div>

  <div class="sparkle-field" aria-hidden="true">
    <span class="sparkle sparkle--one"></span>
    <span class="sparkle sparkle--two"></span>
    <span class="sparkle sparkle--three"></span>
    <span class="sparkle sparkle--four"></span>
    <span class="sparkle sparkle--five"></span>
  </div>

  <div class="scene__content intro-scene__content">
    <p class="scene-kicker">PriyanshiVerse</p>
    <h1 id="intro-title">Happy Birthday Priyanshi</h1>
    <p class="intro-scene__subtitle">
      A journey through memories, friendship and beautiful moments.
    </p>
    <button class="gold-button" type="button" data-scroll-target="journey">
      <span>Begin the Journey</span>
    </button>
  </div>

  <div class="intro-scene__horizon" aria-hidden="true">
    <span></span>
    <span></span>
    <span></span>
  </div>
</section>
`,t=`<section class="scene journey-scene" id="journey" data-scene aria-labelledby="journey-title">
  <div class="scene__content split-scene">
    <div class="split-scene__copy">
      <p class="scene-kicker"></p>
      <h2 id="journey-title">A sky full of tiny bright memories</h2>
      <p>
        Every laugh, every small tradition, every ordinary day made brighter becomes a
        little star in PriyanshiVerse.
      </p>
    </div>
    <div class="memory-orbit" aria-label="Birthday memory constellation">
      <span class="memory-orbit__ring"></span>
      <article class="memory-card memory-card--top">
        <strong>Kindness</strong>
        <span>The kind that makes a room feel softer.</span>
      </article>
      <article class="memory-card memory-card--left">
        <strong>Laughter</strong>
        <span>The kind that arrives before anyone can explain why.</span>
      </article>
      <article class="memory-card memory-card--right">
        <strong>Wonder</strong>
        <span>The kind that turns a simple night into a story.</span>
      </article>
    </div>
  </div>
</section>
`,n=`<section class="scene gallery-scene" id="gallery" data-scene aria-labelledby="gallery-title">
  <div class="scene__content gallery-scene__content">
    <div class="gallery-scene__intro">
      <p class="scene-kicker">Photo Chapters</p>
      <h2 id="gallery-title">A Peek inside the Core</h2>
      <p>
        A softer corner of the universe for favorite memories, golden little details
        and the moments that feel most like you.
      </p>
      <button class="quiet-button" type="button" data-scroll-target="photo-1">
        Open the photo chapters
      </button>
    </div>
    <div class="gallery-preview" aria-hidden="true">
      <span class="gallery-preview__card gallery-preview__card--one"></span>
      <span class="gallery-preview__card gallery-preview__card--two"></span>
      <span class="gallery-preview__card gallery-preview__card--three"></span>
      <span class="gallery-preview__glow"></span>
    </div>
  </div>
</section>
`,r=`<section class="scene storybook-scene" id="storybook" data-scene aria-labelledby="storybook-title">
  <div class="scene__content storybook-layout">
    <div class="storybook">
      <div class="storybook__page storybook__page--left">
        <p>For the chapters already written:</p>
        <strong>glow, courage, jokes, wishes, late-night talks.</strong>
      </div>
      <div class="storybook__spine"></div>
      <div class="storybook__page storybook__page--right">
        <p>For the chapters still waiting:</p>
        <strong>new places, new songs, new reasons to celebrate.</strong>
      </div>
    </div>
    <div class="storybook-layout__copy">
      <p class="scene-kicker"></p>
      <h2 id="storybook-title">Your company feels like a warm light</h2>
      <p>
        Some people become part of the atmosphere: steady, sparkling, unforgettable.
        Today, every page turns toward you.
      </p>
    </div>
  </div>
</section>
`,i=`<section class="scene slideshow-scene" id="slideshow" data-scene aria-labelledby="slideshow-title">
  <div class="scene__content slideshow-scene__content">
    <div class="slideshow-scene__header">
      <div>
        <p class="scene-kicker">Slideshow</p>
        <h2 id="slideshow-title">Moments in motion</h2>
      </div>
      <div class="slideshow-controls" aria-label="Slideshow controls">
        <button type="button" data-slide-prev aria-label="Previous memory">‹</button>
        <button type="button" data-slide-next aria-label="Next memory">›</button>
      </div>
    </div>
    <div class="slideshow-stage" data-slideshow-track></div>
    <div class="slideshow-dots" data-slideshow-dots aria-label="Choose a slideshow memory"></div>
  </div>
</section>
`,a=`<section class="scene letter-scene" id="letter" data-scene aria-labelledby="letter-title">
  <div class="scene__content letter-scene__content">
    <div class="letter-card">
      <p class="scene-kicker"></p>
      <h2 id="letter-title">A toast to you</h2>
      <div class="letter-card__body" data-Priyanshi-letter></div>
      <div class="letter-card__signature">
        <span>With all the birthday light,</span>
        <strong>Happy Birthday, Priyanshi</strong>
      </div>
    </div>
  </div>
</section>
`,o=`<section class="scene wishes-scene" id="wishes" data-scene aria-labelledby="wishes-title">
  <div class="gift-spark-field" aria-hidden="true">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="scene__content wishes-scene__content">
    <div class="wishes-scene__copy">
      <p class="scene-kicker">Birthday Gift</p>
      <h2 id="wishes-title">A tiny present waiting for You.</h2>
      <p>
        Open the box, let the light out, and reveal
        a wish made just for your next chapter.
      </p>
    </div>
    <div class="gift-stage" data-gift-stage>
      <button class="gift-box" type="button" data-open-gift aria-label="Open your birthday gift">
        <span class="gift-box__lid"></span>
        <span class="gift-box__bow gift-box__bow--left"></span>
        <span class="gift-box__bow gift-box__bow--right"></span>
        <span class="gift-box__body"></span>
        <span class="gift-box__ribbon gift-box__ribbon--vertical"></span>
        <span class="gift-box__ribbon gift-box__ribbon--horizontal"></span>
        <span class="gift-box__tag">Open</span>
      </button>
      <div class="gift-burst" data-gift-burst aria-hidden="true"></div>
      <article class="gift-card" data-gift-card aria-live="polite"></article>
      <button class="quiet-button gift-next" type="button" data-next-gift>
        Reveal another wish
      </button>
    </div>
  </div>
</section>
`,s=`<section class="scene finale-scene" id="finale" data-scene aria-labelledby="finale-title">
  <div class="finale-scene__glow" aria-hidden="true"></div>
  <div class="scene__content finale-scene__content">
    <p class="scene-kicker"></p>
    <h2 id="finale-title">May this year feel like magic finding its way home.</h2>
    <p>
      Happy birthday, Priyanshi. May the days ahead be generous with love, peace, laughter,
      softness and wonderfully unexpected joy.
    </p>
    <button class="quiet-button" type="button" data-scroll-target="intro">
      Return to the moon
    </button>
  </div>
</section>
`,c=[{eyebrow:`Memory 01`,navLabel:`Smile`,title:`The smile that changes the whole room`,initials:`S`,accent:`rose`,image:`/SofiaVerse/photos/4.jpg`,alt:`A favorite photo of Priyanshi smiling`,caption:`Smile of a pure heart`,paragraph:`Some people do not simply enter a room; they make it feel warmer. You have that rare kind of presence: bright without trying, gentle without disappearing, unforgettable in the easiest way.`},{eyebrow:`Memory 02`,navLabel:`Golden`,title:`The presence that brings peace and joy`,initials:`SV`,accent:`gold`,image:`/SofiaVerse/photos/6.jpg`,alt:`A birthday memory with Priyanshi`,caption:`Happiness we root for`,paragraph:`The effortless warmth and sense of ease you bring to every room you walk into is something truly rare. You have a beautiful way of making people feel comfortable, seen, and at home.`},{eyebrow:`Memory 03`,navLabel:`Stars`,title:`Friendship with its own constellation`,initials:`★`,accent:`blue`,image:`/SofiaVerse/photos/2.jpg`,alt:`A friendship moment with Priyanshi`,caption:`Friendship Constellation`,paragraph:`There are friendships that feel like a night sky: spacious, steady and full of bright points you can return to. This is for those shining pieces of your world.`}],l=[{title:`Beautiful little you`,image:`/SofiaVerse/photos/3.jpg`,initials:`01`,description:`The unplanned moments, the loud laughter, the photographs everyone keeps.`},{title:`Soft magic`,image:`/SofiaVerse/photos/9.jpg`,initials:`02`,description:`The calm conversations and quiet kindness that make ordinary days feel special.`},{title:`Birthday glow`,image:`/SofiaVerse/photos/8.jpg`,initials:`03`,description:`The part of the night where everything turns gold because you are being celebrated.`},{title:`Next chapter`,image:`/SofiaVerse/photos/7.jpg`,initials:`04`,description:`New memories waiting patiently for their turn to become favorite stories.`}],u=[{label:`First Wish`,title:`A pocket full of joy`,message:`May this year give you the kind of happiness that sneaks up quietly and then fills the whole room.`},{label:`Second Wish`,title:`Beautiful new doors`,message:`May new places, new people and new little adventures find you at exactly the right time.`},{label:`Third Wish`,title:`Soft days, brave heart`,message:`May you get soft days when you need rest and a brave heart when the next dream calls you forward.`},{label:`Final Wish`,title:`Always celebrated`,message:`May you always feel seen, loved, chosen and celebrated, not just today, but in all the ordinary days too.`}],d=[`Priyanshi, this little universe is built around the feeling people get when they are lucky enough to know you.`,`It exists because of your warmth, your sparkle, your humor, your kindness, and the quiet way you make ordinary moments feel important.`,`You have a way of making people feel heard, valued, and understood — and that's a kind of magic that can't really be explained, only experienced.`,`Your intelligence inspires, your humility grounds, your empathy comforts, and your presence has a way of turning memories into something worth holding onto.`,`Whether it's through conversations, laughter, journeys, music, or simply sharing a moment of silence, you've left pieces of yourself in the hearts of the people around you.`,`May this birthday remind you that you are deeply loved, genuinely admired, beautifully seen, and worth celebrating everyday.`,`May you always find new mountains to climb, new songs to fall in love with, new choclates to try, new places to explore, and new reasons to smile.`,`And may the coming year bring you the same warmth, peace, and happiness that you so effortlessly bring to others.`];function f(e,t){return e.image?`
      <img class="${t}__image" src="${e.image}" alt="${e.alt||e.title}" loading="lazy" />
    `:`
    <div class="${t}__keepsake ${t}__keepsake--${e.accent||`gold`}" aria-label="${e.alt||e.title}" role="img">
      <span>${e.initials}</span>
    </div>
  `}function p(e){let t=[...e.querySelectorAll(`[data-photo-story]`)];t.length&&t.forEach(e=>{let t=Number(e.dataset.photoStory),n=c[t];if(!n)return;let r=e.querySelector(`.photo-chapter-scene__content`)||e;r.innerHTML=`
        <article class="photo-story ${t%2==1?`photo-story--reverse`:``}" data-reveal>
          <figure class="photo-story__frame">
            ${f(n,`photo-story`)}
            <figcaption>${n.caption}</figcaption>
          </figure>
          <div class="photo-story__copy">
            <p class="scene-kicker">${n.eyebrow}</p>
            <h3>${n.title}</h3>
            <p>${n.paragraph}</p>
          </div>
        </article>
      `})}function m(e){let t=e.querySelector(`[data-slideshow-track]`),n=e.querySelector(`[data-slideshow-dots]`),r=e.querySelector(`[data-slide-prev]`),i=e.querySelector(`[data-slide-next]`);if(!t||!n||!r||!i)return;let a=0;t.innerHTML=l.map((e,t)=>`
        <article class="slide ${t===0?`is-active`:``}" data-slide="${t}">
          <div class="slide__visual">
            ${f(e,`slide`)}
          </div>
          <div class="slide__copy">
            <span>${String(t+1).padStart(2,`0`)}</span>
            <h3>${e.title}</h3>
            <p>${e.description}</p>
          </div>
        </article>
      `).join(``),n.innerHTML=l.map((e,t)=>`
        <button class="slideshow-dot ${t===0?`is-active`:``}" type="button" data-slide-dot="${t}">
          <span>Show memory ${t+1}</span>
        </button>
      `).join(``);let o=[...t.querySelectorAll(`[data-slide]`)],s=[...n.querySelectorAll(`[data-slide-dot]`)];function c(e){a=(e+o.length)%o.length,o.forEach((e,t)=>{e.classList.toggle(`is-active`,t===a)}),s.forEach((e,t)=>{e.classList.toggle(`is-active`,t===a),e.setAttribute(`aria-current`,t===a?`true`:`false`)})}r.addEventListener(`click`,()=>c(a-1)),i.addEventListener(`click`,()=>c(a+1)),n.addEventListener(`click`,e=>{let t=e.target.closest(`[data-slide-dot]`);t&&c(Number(t.dataset.slideDot))})}function h(e){let t=e.querySelector(`[data-Priyanshi-letter]`);t&&(t.innerHTML=d.map(e=>`<p>${e}</p>`).join(``))}function g(e){let t=e.querySelector(`[data-gift-stage]`),n=e.querySelector(`[data-open-gift]`),r=e.querySelector(`[data-gift-card]`),i=e.querySelector(`[data-next-gift]`),a=e.querySelector(`[data-gift-burst]`);if(!t||!n||!r||!i||!a)return;let o=-1;function s(){a.innerHTML=Array.from({length:22},(e,t)=>`<span style="--angle: ${t/22*360}deg; --distance: ${90+t%5*18}px; --delay: ${t%6*.035}s;"></span>`).join(``)}function c(e){let n=u[e];n&&(o=e,t.classList.add(`is-open`),r.innerHTML=`
      <span>${n.label}</span>
      <h3>${n.title}</h3>
      <p>${n.message}</p>
    `,s(),a.classList.remove(`is-bursting`),window.requestAnimationFrame(()=>a.classList.add(`is-bursting`)))}n.addEventListener(`click`,()=>c(0)),i.addEventListener(`click`,()=>{c((o+1)%u.length)}),r.innerHTML=`
    <span>Wrapped Wish</span>
    <h3>Something sweet is inside.</h3>
    <p>Press the glowing gift to open Priyanshi's surprise.</p>
  `}function _(e){p(e),m(e),h(e),g(e)}var v=class{constructor({root:e,nav:t,scenes:n}){this.root=e,this.nav=t,this.scenes=n,this.sections=[],this.navItems=new Map,this.activeSceneId=n[0]?.id,this.observer=null,this.handleClick=this.handleClick.bind(this)}mount(){this.root&&(this.root.innerHTML=this.scenes.map(e=>e.html).join(``),this.sections=[...this.root.querySelectorAll(`[data-scene]`)],this.renderNav(),this.bindEvents(),this.observeScenes(),this.setActiveScene(this.activeSceneId))}destroy(){this.root?.removeEventListener(`click`,this.handleClick),this.nav?.removeEventListener(`click`,this.handleClick),this.observer?.disconnect()}renderNav(){this.nav&&(this.nav.innerHTML=this.scenes.map(e=>`
          <a class="scene-nav__item" href="#${e.id}" data-scene-link="${e.id}">
            <span>${e.label}</span>
          </a>
        `).join(``),this.navItems=new Map([...this.nav.querySelectorAll(`[data-scene-link]`)].map(e=>[e.dataset.sceneLink,e])))}bindEvents(){this.root.addEventListener(`click`,this.handleClick),this.nav?.addEventListener(`click`,this.handleClick)}observeScenes(){this.observer=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>t.intersectionRatio-e.intersectionRatio)[0];t?.target?.id&&this.setActiveScene(t.target.id)},{threshold:[.38,.55,.72]}),this.sections.forEach(e=>this.observer.observe(e))}handleClick(e){let t=e.target.closest(`[data-scroll-target], [data-scene-link]`);if(!t)return;e.preventDefault();let n=t.dataset.scrollTarget||t.dataset.sceneLink;this.scrollToScene(n)}scrollToScene(e){let t=this.root.querySelector(`#${e}`);t&&t.scrollIntoView({behavior:`smooth`,block:`start`})}setActiveScene(e){this.activeSceneId=e,this.sections.forEach(t=>{t.classList.toggle(`is-active`,t.id===e)}),this.navItems.forEach((t,n)=>{let r=n===e;t.classList.toggle(`is-active`,r),t.setAttribute(`aria-current`,r?`page`:`false`)})}},y=170,b=Math.PI*2;function x(e,t){return e+Math.random()*(t-e)}function S(e,t){return{x:Math.random()*e,y:Math.random()*t,radius:x(.4,1.8),alpha:x(.25,.95),drift:x(.02,.14),twinkle:x(.008,.026),phase:x(0,b)}}function C(e){if(!e)return{start(){},destroy(){}};let t=e.getContext(`2d`),n=window.matchMedia(`(prefers-reduced-motion: reduce)`),r=[],i=0,a=0,o=0,s=1;function c(){s=Math.min(window.devicePixelRatio||1,2),a=window.innerWidth,o=window.innerHeight,e.width=Math.floor(a*s),e.height=Math.floor(o*s),e.style.width=`${a}px`,e.style.height=`${o}px`,t.setTransform(s,0,0,s,0,0),r=Array.from({length:y},()=>S(a,o))}function l(e=0){t.clearRect(0,0,a,o);let s=t.createLinearGradient(0,0,a,o);s.addColorStop(0,`rgba(255, 255, 255, 0.78)`),s.addColorStop(.45,`rgba(255, 241, 180, 0.86)`),s.addColorStop(1,`rgba(151, 205, 255, 0.68)`),r.forEach(r=>{let i=n.matches?r.alpha:r.alpha+Math.sin(e*r.twinkle+r.phase)*.26,o=n.matches?r.x:(r.x+e*r.drift*.015)%a;t.beginPath(),t.fillStyle=s,t.globalAlpha=Math.max(.12,Math.min(1,i)),t.arc(o,r.y,r.radius,0,b),t.fill()}),t.globalAlpha=1,n.matches||(i=window.requestAnimationFrame(l))}function u(){c(),l(),n.matches||(i=window.requestAnimationFrame(l)),window.addEventListener(`resize`,c)}function d(){window.cancelAnimationFrame(i),window.removeEventListener(`resize`,c)}return{start:u,destroy:d}}var w=[{id:`intro`,label:`Intro`,html:e},{id:`journey`,label:`Memories`,html:t},{id:`gallery`,label:`Photos`,html:n},...c.map((e,t)=>({id:`photo-${t+1}`,label:e.navLabel||`Photo ${t+1}`,html:`
      <section class="scene photo-chapter-scene photo-chapter-scene--${e.accent||`gold`}" id="photo-${t+1}" data-scene data-photo-story="${t}" aria-label="${e.title}">
        <div class="scene__content photo-chapter-scene__content"></div>
      </section>
    `})),{id:`storybook`,label:`Friendship`,html:r},{id:`slideshow`,label:`Slideshow`,html:i},{id:`letter`,label:`For Priyanshi`,html:a},{id:`wishes`,label:`Wishes`,html:o},{id:`finale`,label:`Finale`,html:s}];function T(e){if(!e)return;e.innerHTML=`
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
  `;let t=C(e.querySelector(`[data-sky-canvas]`)),n=new v({root:e.querySelector(`[data-scene-stack]`),nav:e.querySelector(`[data-scene-nav]`),scenes:w});return n.mount(),_(e),t.start(),{destroy(){t.destroy(),n.destroy()}}}T(document.querySelector(`#app`));