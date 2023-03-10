

  document.querySelector('.good__specification-arrow').addEventListener('click', function(e){ 
    document.querySelector('.good__specification-arrow').classList.toggle('good__specification-arrow_active');
    document.querySelector('.good__specification-arrow').nextElementSibling.classList.toggle('active');
  })

  document.querySelector('.good__descr-arrow').addEventListener('click', function(e){ 
    document.querySelector('.good__descr-arrow').classList.toggle('good__descr-arrow_active');
    document.querySelector('.good__descr-text').classList.toggle('good__descr-text_active');
  })


 
 
 // search
  document.querySelector('.header__search').addEventListener('click', function(){
  document.querySelector('.header__form').classList.toggle('header__form-active');
});

// Кнопка навверх
const btnUp = {
  el: document.querySelector('.scrollTop'),
  show() {
    // удалим у кнопки класс scrollTop_hide
    this.el.classList.remove('scrollTop_hide');
  },
  hide() {
    // добавим к кнопке класс scrollTop_hide
    this.el.classList.add('scrollTop_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 900px, то делаем кнопку видимой, иначе скрываем
      scrollY > 900 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.scrollTop').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
};

btnUp.addEventListener();

// spoiler
const arrow = document.querySelectorAll('.advantages__spoiler-arrow');
const descr = document.querySelectorAll('.advantages__spoiler-descr');
for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener('click', function(){
      if(document.querySelector('.advantages__spoiler-arrow_active') !== null && document.querySelector('.advantages__spoiler-arrow_active') !== arrow[i]){
        document.querySelector('.advantages__spoiler-arrow_active').classList.remove('advantages__spoiler-arrow_active');
        document.querySelector('.advantages__spoiler-descr_active').classList.remove('advantages__spoiler-descr_active');
      }
      arrow[i].classList.toggle('advantages__spoiler-arrow_active');
      descr[i].classList.toggle('advantages__spoiler-descr_active');
  })
 
} 
// aside menu
 function asideMenu (element, className) {
  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener('click', function(e){ 
      if(element[i].nextElementSibling != null) 
      e.preventDefault();  
      element[i].nextElementSibling.classList.toggle(className);
      element[i].lastElementChild.classList.toggle('catalog__arrow_active');
    })
  }
}
const catalogAsideLinks = document.querySelectorAll('.catalog__aside-link');
const catalogAsideSubLinks = document.querySelectorAll('.catalog__aside-sublink');;
asideMenu(catalogAsideLinks, 'catalog__aside-sublists_active');
asideMenu(catalogAsideSubLinks, 'catalog__aside-subsublists_active');
 


// sliders 
const IsrecomendSlider = document.querySelector('.recomend__slider');
if (IsrecomendSlider != null) {
  const recomendSlider = tns({
    container: '.recomend__slider',
    items: 1,
    loop: false,
    controls: false,
    nav: true,
    navPosition: "bottom",
    speed: "800"
   
  }); 
  document.querySelector('.recomend__slider_prev').addEventListener('click',function () {
    recomendSlider.goTo('prev');
  });
  document.querySelector('.recomend__slider_next').addEventListener('click',function () {
    recomendSlider.goTo('next');
  });
}
const IsgoodSlider = document.querySelector('.good__slider');
if (IsgoodSlider != null) {
  const goodSlider = tns({
    container: '.good__slider',
    items: 1,
    loop: false,
    controls: false,
    nav: true,
    navContainer: ".good__slider_dots",
    navPosition: "bottom",
    speed: "800"
   
  }); 
  document.querySelector('.good__slider_prev').addEventListener('click',function () {
    goodSlider.goTo('prev');
  });
  document.querySelector('.good__slider_next').addEventListener('click',function () {
    goodSlider.goTo('next');
  });
} 
const IspromoSlider = document.querySelector('.promo__slider');
if (IspromoSlider != null) {
const promoSlider = tns({
  container: '.promo__slider',
  items: 1,
  loop: false,
  controls: false,
  speed: "800"
 
}); 

document.querySelector('.promo__slider_prev').addEventListener('click',function () {
  promoSlider.goTo('prev'); 
  const info = promoSlider.getInfo(),
index = info.index;
      if (index == 0)
  document.querySelector('.promo__slider_prev').classList.add('disabled');
  document.querySelector('.promo__slider_next').classList.remove('disabled');
  
});
document.querySelector('.promo__slider_next').addEventListener('click',function () {
  promoSlider.goTo('next'); 
  const info = promoSlider.getInfo(),
  index = info.index;
  lastIndex = info.slideCount;
  if (index == lastIndex - 1)
document.querySelector('.promo__slider_next').classList.add('disabled');
document.querySelector('.promo__slider_prev').classList.remove('disabled');
}); 
}

const IsdetailsSlider = document.querySelector('.details__slider');
if (IsdetailsSlider != null) {
const detailsSlider = tns({
  container: '.details__slider',
  items: 1,
  loop: false,
  controls: false,
  nav: false,
  speed: "800"
 
}); 
document.querySelector('.details__slider_prev').addEventListener('click',function () {
  detailsSlider.goTo('prev');
});
document.querySelector('.details__slider_next').addEventListener('click',function () {
  detailsSlider.goTo('next');
});
}
const IsstocksSlider = document.querySelector('.stocks__slider');
if (IsstocksSlider != null) {
const stocksSlider = tns({
  container: '.stocks__slider',
  items: 1,
  loop: false,
  controls: false,
  nav: true,
  mouseDrag: true,
  navPosition: "bottom",
  speed: "800"
 
});  
}
const IsideasSlider = document.querySelector('.ideas__slider');
if (IsideasSlider != null) {
const ideasSlider = tns({
  container: '.ideas__slider',
  items: 1,
  loop: false,
  controls: false,
  nav: true,
  navPosition: "bottom",
  speed: "800"
 
});  
document.querySelector('.ideas__slider_prev').addEventListener('click',function () {
  ideasSlider.goTo('prev');
});
document.querySelector('.ideas__slider_next').addEventListener('click',function () {
  ideasSlider.goTo('next');
}); 
}