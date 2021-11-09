const navslide=()=>{
  const burger=document.querySelector('.burger');
  const nav=document.querySelector('.nav-links');
  const navlinks=document.querySelectorAll('.nav-links li');

  burger.addEventListener('click',()=>{
    //Toggle nav
    nav.classList.toggle('nav-active');
    //animate-navlinks
    navlinks.forEach((link , index)=>{
      if (link.style.animation){
        link.style.animation='';
      }else{
        link.style.animation=`navLinkFade 0.5s ease forwards ${index/5 + 1}s`;
      }
    });

//burger-animation
    burger.classList.toggle('toggle')

  });

}

navslide()
