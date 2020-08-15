const header = document.querySelector('header');

document.addEventListener('scroll', () => {
  if (window.pageYOffset >= 1) {
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.backgroundColor = 'rgba(0,0,0,0.5)';
    header.style.backdropFilter = 'blur(40px)'; 
  } 
  
  if (window.pageYOffset <= 1 ) {
    header.style.position = 'relative';
    header.style.filter = 'blur(0px)'
    header.style.backgroundColor = '#131313'
  }

})

//faz um js para quando descer um pouco a barra se tornar fixed