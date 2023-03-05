
var promoSlider = tns({
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

 document.querySelector('.header__search').addEventListener('click', function(){
  document.querySelector('.header__form').classList.toggle('header__form-active');
});

const arrow = document.querySelectorAll('.advantages__spoiler-arrow');
const descr = document.querySelectorAll('.advantages__spoiler-descr');
for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener('click', function(){
    if (arrow[i] == this) {
      arrow[i].classList.toggle('advantages__spoiler-arrow_active');
      descr[i].classList.toggle('advantages__spoiler-descr_active');
    }
    else {
      arrow[i].classList.remove('advantages__spoiler-arrow_active');
      descr[i].classList.remove('advantages__spoiler-descr_active');
    }
 
  })
}

var detailsSlider = tns({
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

var stocks__cardslider = tns({
  container: '.stocks__slider',
  items: 1,
  loop: false,
  controls: false,
  nav: true,
  navPosition: "bottom",
  speed: "800"
 
}); 
var ideas__slider = tns({
  container: '.ideas__slider',
  items: 1,
  loop: false,
  controls: false,
  nav: true,
  navPosition: "bottom",
  speed: "800"
 
}); 
document.querySelector('.ideas__slider_prev').addEventListener('click',function () {
  ideas__slider.goTo('prev');
});
document.querySelector('.ideas__slider_next').addEventListener('click',function () {
  ideas__slider.goTo('next');
});