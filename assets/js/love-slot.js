/* Three sequential reels inspired by https://github.com/johakr/html5-slot-machine
 * and https://github.com/flixrp/HTML-slot-machine-example. Original event implementation.
 * Gift weights and copy live in _data/love_slot_gifts.yml.
 */
(() => {
  'use strict';

  const event = document.querySelector('[data-love-slot]');
  if (!event) return;

  // The blog theme disables zoom; allow pinch-to-zoom for this event page.
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) viewport.content = 'width=device-width, initial-scale=1, viewport-fit=cover';

  const machine = event.querySelector('.love-machine');
  const button = event.querySelector('.love-spin');
  const reels = [...event.querySelectorAll('.love-reel')];
  const title = event.querySelector('.love-status-title');
  const detail = event.querySelector('.love-status-detail');
  const result = event.querySelector('.love-result');
  const confetti = event.querySelector('.love-confetti');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const gifts = [...event.querySelectorAll('[data-gift]')].map(element => ({
    element,
    title: element.dataset.title,
    icon: element.dataset.icon,
    message: element.dataset.message,
    weight: Number(element.dataset.weight)
  }));
  const totalWeight = gifts.reduce((sum, gift) => sum + gift.weight, 0);
  if (!gifts.length || gifts.some(gift => !Number.isFinite(gift.weight) || gift.weight <= 0) || totalWeight !== 100) {
    title.textContent = '선물 목록을 확인하고 있어!';
    detail.textContent = '잠시 후 다시 방문해줘 ♥';
    return;
  }

  const pause = milliseconds => new Promise(resolve => window.setTimeout(resolve, milliseconds));
  let busy = false;

  function chooseGift() {
    // Half-open cumulative intervals: [0,15), [15,25), …, [50,100).
    const random = new Uint32Array(1);
    const fraction = window.crypto && window.crypto.getRandomValues
      ? window.crypto.getRandomValues(random)[0] / 4294967296
      : Math.random();
    const target = fraction * totalWeight;
    let cumulative = 0;
    return gifts.find(gift => {
      cumulative += gift.weight;
      return target < cumulative;
    });
  }

  async function spinReel(reel, index, gentle) {
    const strip = reel.querySelector('.love-reel-strip');
    reel.classList.remove('is-stopped');
    if (gentle || typeof strip.animate !== 'function') {
      await pause(200 + index * 220);
      strip.innerHTML = '<span>7</span>';
    } else {
      const first = strip.lastElementChild.textContent;
      // A shuffled strip slides vertically, ending on a guaranteed seven.
      const digits = [first, ...Array.from({ length: 38 + index * 9 }, () => String(Math.floor(Math.random() * 10))), '7'];
      strip.replaceChildren(...digits.map(digit => {
        const symbol = document.createElement('span');
        symbol.textContent = digit;
        return symbol;
      }));
      reel.classList.add('is-spinning');
      const distance = (digits.length - 1) / digits.length * 100;
      const animation = strip.animate([
        { transform: 'translateY(0)' },
        { transform: `translateY(-${distance}%)` }
      ], { duration: 2200 + index * 650, easing: 'cubic-bezier(.12,.52,.2,1)', fill: 'forwards' });
      try {
        await animation.finished;
      } catch (_) {
        // A cancelled animation still settles on the promised seven.
      }
      strip.innerHTML = '<span>7</span>';
      animation.cancel();
      reel.classList.remove('is-spinning');
    }
    reel.classList.add('is-stopped');
  }

  function celebrate() {
    if (reducedMotion.matches) return;
    const colors = ['#ba2952', '#e77791', '#bf8730', '#9e496c'];
    const particleCount = window.matchMedia('(pointer: coarse)').matches ? 18 : 28;
    confetti.replaceChildren(...Array.from({ length: particleCount }, (_, index) => {
      const heart = document.createElement('span');
      heart.textContent = index % 3 === 0 ? '✦' : '♥';
      heart.style.setProperty('--particle-color', colors[index % colors.length]);
      heart.style.setProperty('--particle-size', `${12 + Math.random() * 12}px`);
      heart.style.setProperty('--particle-delay', `${Math.random() * .18}s`);
      heart.style.setProperty('--particle-x', `${(Math.random() - .5) * machine.clientWidth}px`);
      heart.style.setProperty('--particle-y', `${(Math.random() - .65) * 430}px`);
      heart.style.setProperty('--particle-rotation', `${(Math.random() - .5) * 240}deg`);
      return heart;
    }));
    window.setTimeout(() => confetti.replaceChildren(), 2300);
  }

  button.disabled = false;
  button.addEventListener('click', async () => {
    if (busy) return;
    busy = true;
    button.disabled = true;
    button.textContent = '두근두근, 돌아가는 중…';
    result.hidden = true;
    gifts.forEach(gift => gift.element.classList.remove('is-chosen'));
    machine.dataset.state = 'spinning';
    title.textContent = '우리의 행운이 모이는 중…';
    detail.textContent = '어떤 숫자가 기다리고 있을까?';

    await Promise.all(reels.map((reel, index) => spinReel(reel, index, reducedMotion.matches)));
    machine.dataset.state = 'celebrating';
    title.textContent = '사랑의 777 DAYS!';
    detail.textContent = '7 · 7 · 7, 우리의 777일을 축하해 ♥';
    celebrate();
    await pause(reducedMotion.matches ? 400 : 1400);

    machine.dataset.state = 'drawing';
    button.textContent = '너의 선물을 고르는 중…';
    detail.textContent = '일곱 가지 선물 중, 너에게 찾아갈 하나는…';
    const gift = chooseGift();
    await pause(reducedMotion.matches ? 300 : 1100);

    event.querySelector('.love-result-icon').textContent = gift.icon;
    event.querySelector('.love-result-title').textContent = gift.title;
    event.querySelector('.love-result-message').textContent = gift.message;
    gift.element.classList.add('is-chosen');
    result.hidden = false;
    machine.dataset.state = 'revealed';
    detail.textContent = `당첨! ${gift.title}`;
    result.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'nearest' });
    button.textContent = '♥ 다시 돌려보기';
    button.disabled = false;
    busy = false;
  });
})();
