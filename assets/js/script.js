const bntLeft = document.getElementById('bntLeft');
const btnRight = document.getElementById('btnRight');
const btnMenu = document.getElementById('btnMenu');
const btnClose = document.getElementById('btnClose');
const menuItem = document.getElementById('menuItem');
const sectionImage = document.querySelectorAll('.img');
const sectionDescription = document.querySelectorAll('article');
const section = document.getElementById('section');
let i =0;
let newDiv;


const originalBodyOverflow = document.body.style.overflow;
const originalHtmlOverflow = document.documentElement.style.overflow;


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

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

   newDiv = document.createElement("div");
   newDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
   newDiv.style.overflow = "hidden";
   newDiv.style.width = "100vw";
   newDiv.style.height = "100% ";
   newDiv.style.position = "fixed";
   newDiv.style.left = "0px";
   newDiv.style.top = "80px";
   newDiv.style.zIndex = "999";



    // Agregar el nuevo div dentro del section
    section.appendChild(newDiv);
});

btnClose.addEventListener("click", () => {
   
    
    menuItem.classList.add("hidden")
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      newDiv.style.display = "none";
   
});