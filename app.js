let nav=document.querySelector('nav ul');
let button=document.querySelector('.lines');


button.addEventListener('click',function(){
      nav.classList.toggle('fade')   
      nav.addEventListener('transitionend',function(){
         nav.classList.toggle('in')   
      })

})