const STAR_COUNT = 170;
const TWOPI = Math.PI * 2;

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function createStar(width, height) {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: randomBetween(0.4, 1.8),
    alpha: randomBetween(0.25, 0.95),
    drift: randomBetween(0.02, 0.14),
    twinkle: randomBetween(0.008, 0.026),
    phase: randomBetween(0, TWOPI),
  };
}

export function createNightSky(canvas) {
  if (!canvas) {
    return {
      start() {},
      destroy() {},
    };
  }

  const context = canvas.getContext('2d');
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let stars = [];
  let animationFrame = 0;
  let width = 0;
  let height = 0;
  let pixelRatio = 1;

  function resize() {
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * pixelRatio);
    canvas.height = Math.floor(height * pixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    stars = Array.from({ length: STAR_COUNT }, () => createStar(width, height));
  }

  function paint(time = 0) {
    context.clearRect(0, 0, width, height);

    const gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.78)');
    gradient.addColorStop(0.45, 'rgba(255, 241, 180, 0.86)');
    gradient.addColorStop(1, 'rgba(151, 205, 255, 0.68)');

    stars.forEach((star) => {
      const twinkle = motionQuery.matches
        ? star.alpha
        : star.alpha + Math.sin(time * star.twinkle + star.phase) * 0.26;
      const x = motionQuery.matches ? star.x : (star.x + time * star.drift * 0.015) % width;

      context.beginPath();
      context.fillStyle = gradient;
      context.globalAlpha = Math.max(0.12, Math.min(1, twinkle));
      context.arc(x, star.y, star.radius, 0, TWOPI);
      context.fill();
    });

    context.globalAlpha = 1;

    if (!motionQuery.matches) {
      animationFrame = window.requestAnimationFrame(paint);
    }
  }

  function start() {
    resize();
    paint();

    if (!motionQuery.matches) {
      animationFrame = window.requestAnimationFrame(paint);
    }

    window.addEventListener('resize', resize);
  }

  function destroy() {
    window.cancelAnimationFrame(animationFrame);
    window.removeEventListener('resize', resize);
  }

  return {
    start,
    destroy,
  };
}
