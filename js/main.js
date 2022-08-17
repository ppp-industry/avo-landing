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
