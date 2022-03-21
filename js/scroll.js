window.addEventListener("scroll", function name(params) {
    var nav = document.querySelector("#link1")
    nav.classList.toggle("active",this.window.scrollY>555 && this.window.scrollY<750)
    var nav = document.querySelector("#link2")
    nav.classList.toggle("active",this.window.scrollY>750 && this.window.scrollY<950)
    var nav = document.querySelector("#link3")
    nav.classList.toggle("active",this.window.scrollY>1000)
})


// ******************
// Animaciones 
// ******************
// Scroll Divs
const cargarDiv= (entradas) => {
    entradas.forEach((entrada) => {
      if(entrada.isIntersecting){
        entrada.target.classList.add('div2');
      }else{
        entrada.target.classList.remove('div2');
      }
    });
  };
  
  const observador1 = new IntersectionObserver(cargarDiv, {
    root: null,
    rootMargin : '-15% 0%',
    threshold : 0
  });
  
  observador1.observe(document.getElementById('servicios'))
  
  // Scroll Cards  
  const cargarCard = (entradas) => {
    entradas.forEach((entrada) => {
      if(entrada.isIntersecting){
        entrada.target.classList.add('card2');
      }else{
        entrada.target.classList.remove('card2')
      }
    });
  };
  
  const observador = new IntersectionObserver(cargarCard, {
    root: null,
    rootMargin : '-15% 0%',
    threshold : 0.5
  });
  
  observador.observe(document.getElementById('1'));
  observador.observe(document.getElementById('2'));
  observador.observe(document.getElementById('3'));
  observador.observe(document.getElementById('4'));
  observador.observe(document.getElementById('5'));
  observador.observe(document.getElementById('6'));

  // Scrolls letras  
  const cargarLetras = (entradas) => {
    entradas.forEach((entrada) => {
      if(entrada.isIntersecting){
        entrada.target.classList.add('text2');
      }else{
        entrada.target.classList.remove('text2')
      }
    });
  };
  
  const observador2 = new IntersectionObserver(cargarLetras, {
    root: null,
    rootMargin : '-15% 0%',
    threshold : 1.0
  });
  
  observador2.observe(document.getElementById('l1'));