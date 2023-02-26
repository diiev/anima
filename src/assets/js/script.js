
var slider = tns({
  container: '.promo__slider',
  items: 1,
  loop: false,
  controls: false,
  speed: "800"
 
}); 

document.querySelector('.prev').addEventListener('click',function () {
  slider.goTo('prev'); 
  const info = slider.getInfo(),
index = info.index;

      if (index == 0)
  document.querySelector('.prev').classList.add('disabled');
  document.querySelector('.next').classList.remove('disabled');
  
});
document.querySelector('.next').addEventListener('click',function () {
  slider.goTo('next'); 
  const info = slider.getInfo(),
  index = info.index;
  lastIndex = info.slideCount;
  if (index == lastIndex - 1)
document.querySelector('.next').classList.add('disabled');
document.querySelector('.prev').classList.remove('disabled');
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

var slider = tns({
  container: '.details__slider',
  items: 1,
  loop: false,
  controls: false,
  nav: false,
  speed: "800"
 
}); 
