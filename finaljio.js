var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}





var navSlide= () => {
  var burger = document.querySelector('burger');
  var nav = document.querySelector('nav-links');
  var navLinks = document.querySelectorAll('nav-links li');

  burger.addEventListener('click', () =>{
      //toggle Nav
          nav.classList.toggle('nav-active');


          //Animation Links

          navLinks.forEach((link, index) =>{
              if(link.style.animation) {
                  link.style.animation ='';
              }
              else{
                  link.style.animation = 
                  'navLinksFade 0.5s ease forward ${index / 7 + 0'
              }
          });
 
});
}

navSlide();