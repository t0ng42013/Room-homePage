const bntLeft = document.getElementById('bntLeft');
const btnRight = document.getElementById('btnRight');
const btnMenu = document.getElementById('btnMenu');
const btnClose = document.getElementById('btnClose');
const menuItem = document.getElementById('menuItem');
const sectionImage = document.querySelectorAll('.img');
const sectionDescription = document.querySelectorAll('article');
let i =0;


bntLeft.addEventListener("click", () => {
  // Ocultar la imagen y la descripción actuales
  sectionImage[i].style.display = "none";
  sectionDescription[i].style.display = "none";

  // Decrementar el índice
  i--;
  // Si i es menor que 0, establecerlo al último elemento del array
  if (i < 0) {
    i = sectionImage.length - 1;
  }

  // Mostrar la imagen y la descripción del nuevo índice
  sectionImage[i].style.display = "block";
  sectionDescription[i].style.display = "block";
});

btnRight.addEventListener("click", () => {
  // Ocultar la imagen y la descripción actuales
  sectionImage[i].style.display = "none";
  sectionDescription[i].style.display = "none";

  // Incrementar el índice
  i++;
  // Si i es igual o mayor a la longitud del array, establecerlo a 0
  if (i >= sectionImage.length) {
    i = 0;
  }

  // Mostrar la imagen y la descripción del nuevo índice
  sectionImage[i].style.display = "block";
  sectionDescription[i].style.display = "block";
});

btnMenu.addEventListener("click", () => {
  
    menuItem.classList.toggle("hidden")
});

btnClose.addEventListener("click", () => {
   
    
    menuItem.classList.add("hidden")
   
});