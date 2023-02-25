
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

