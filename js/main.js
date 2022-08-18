document.querySelectorAll('.popular__save').forEach((btn) => {
  btn.addEventListener('click', function () {
    let heart = this.querySelector('.fa-heart')
    if (heart.classList.contains('fa-regular')) {
      heart.classList.remove('fa-regular')
      heart.classList.add('fa-solid')
    } else {
      heart.classList.remove('fa-solid')
      heart.classList.add('fa-regular')
    }
  })
})

const burger = document.querySelector('.burger-mnu')

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-mnu--active')
  document.querySelector('.navigation').classList.toggle('navigation--active')
})

const popularSlider = new Swiper('.popular-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.popular-pagination',
  },
})

const benefitsSlider = new Swiper('.benefits-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoHeight: true,
  pagination: {
    el: '.benefits-pagination',
  },
})

const teamSlider = new Swiper('.team-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.team-pagination',
  },
})

// function animateMarquee(el, duration) {
//   const innerEl = el.querySelector('.header-top__wrapper')
//   const innerWidth = innerEl.offsetWidth
//   const cloneEl = innerEl.cloneNode(true)
//   el.appendChild(cloneEl)
//
//   let start = performance.now()
//   let progress
//   let translateX
//
//   requestAnimationFrame(function step(now) {
//     progress = (now - start) / duration
//
//     if (progress > 1) {
//       progress %= 1
//       start = now
//     }
//
//     translateX = innerWidth * progress
//
//     innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`
//     cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`
//     requestAnimationFrame(step)
//   })
// }
//
// animateMarquee(document.querySelector('.header-top'), 30000)

function get_browser() {
  var ua = navigator.userAgent, tem,
      M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return {name: 'IE', version: (tem[1] || '')};
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\bOPR|Edge\/(\d+)/)
    if (tem != null) {
      return {name: 'Opera', version: tem[1]};
    }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) {
    M.splice(1, 1, tem[1]);
  }
  return {
    name: M[0],
    version: M[1]
  };
}

(function() {
  scrollTo();
})();

function scrollTo() {
  const links = document.querySelectorAll('.scroll');
  links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top) - 80;
  e.preventDefault();
  var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);
  window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
  const checkIfDone = setInterval(function() {
    const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1';
      targetAnchor.focus();
      window.history.pushState('', '', targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}