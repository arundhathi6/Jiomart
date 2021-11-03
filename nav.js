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