
// function corDeFundo () {
//   let botaoCorFundo = document.querySelectorAll('#background-color button');
//   let content = document.querySelector('.content');
//   let corFundo = '';
//   for (index = 0; index < botaoCorFundo.length; index +=1) {
//     botaoCorFundo[index].addEventListener ('click', function (event) {
//       corFundo = event.target.innerHTML;
//     content.style.backgroundColor = corFundo;
//       console.log(event.target.innerHTML);
//     })
//   }
//   localStorage.setItem("corDeFundo", corFundo);
// }

// corDeFundo();
   
//   function initialize() {
//     let backgroundColor = localStorage.getItem("corDeFundo")
//     if (backgroundColor) corDeFundo(backgroundColor)
//   }

// initialize() 
// NÃO PERSISTIU AS MUDANÇAS COM CÓDIGO ACIMA ============

// muda cor do fundo ==============================
function MudaCorDeFundo (cor) {
  let background = document.querySelector('.content');
  background.style.backgroundColor = cor;
  localStorage.setItem('corDeFundo', cor);
}
  
let botaoCorDeFundo = document.querySelectorAll('#background-color button');
for (let index = 0; index < botaoCorDeFundo.length; index += 1) {
  botaoCorDeFundo[index].addEventListener('click', function (event) {
    MudaCorDeFundo(event.target.innerHTML);
  })
}

// muda cor da fonte ================================
function mudaCorFonte (cor) {
  let fonte = document.querySelectorAll('.paragraph');
  for (index = 0; index < fonte.length; index += 1) {
    fonte[index].style.color = cor;
  }  
  localStorage.setItem('corFonte', cor);
}

let botaoCorFonte = document.querySelectorAll('#font-color button');
for (let index = 0; index < botaoCorFonte.length; index += 1) {
  botaoCorFonte[index].addEventListener ('click', function (event) {
    mudaCorFonte (event.target.innerHTML);
  })
}

let botaoTamanhoFonte = document.querySelectorAll('#font-size button');
for (let index = 0; index < botaoTamanhoFonte.length; index += 1) {
  botaoTamanhoFonte[index].addEventListener ('click', function (event) {
    MudaTamanhoFonte (event.target.innerHTML);
  })
}

function MudaTamanhoFonte (size) {
  let tamanhoFonte = document.querySelectorAll('.paragraph');
  for (let index = 0; index < tamanhoFonte.length; index += 1) {
    tamanhoFonte[index].style.fontSize = size;
  } // precisa desse "for" porque é mais de um elemento
  localStorage.setItem ('tamanhoFonte', size);
}



function initialize() {
  let corDeFundo = localStorage.getItem("corDeFundo")
  if (corDeFundo) MudaCorDeFundo(corDeFundo)

  let corFonte = localStorage.getItem('corFonte')
  if (corFonte) mudaCorFonte (corFonte)

  let tamanhoFonte = localStorage.getItem("tamanhoFonte")
  if (tamanhoFonte) MudaTamanhoFonte (tamanhoFonte)
}

initialize() 



// window.onload = function() {
//   function setBackgroundColor(color) {
//     let content = document.querySelector(".content")
//     content.style.backgroundColor = color
//     localStorage.setItem("backgroundColor", color)
//   }

//   function setFontColor(color) {
//     let paragraphs = document.querySelectorAll(".paragraph")
//     for (let index = 0; index < paragraphs.length; index += 1) {
//       paragraphs[index].style.color = color
//     }
//     localStorage.setItem("fontColor", color)
//   }

//   function setFontSize(size) {
//     let paragraphs = document.querySelectorAll(".paragraph")
//     for (let index = 0; index < paragraphs.length; index += 1) {
//       paragraphs[index].style.fontSize = size
//     }
//     localStorage.setItem("fontSize", size)
//   }

//   function setLineHeight(height) {
//     let paragraphs = document.querySelectorAll(".paragraph")
//     for (let index = 0; index < paragraphs.length; index += 1) {
//       paragraphs[index].style.lineHeight = height
//     }
//     localStorage.setItem("lineHeight", height)
//   }

//   function setFontFamily(family) {
//     let paragraphs = document.querySelectorAll(".paragraph")
//     for (let index = 0; index < paragraphs.length; index += 1) {
//       paragraphs[index].style.fontFamily = family
//     }
//     localStorage.setItem("fontFamily", family)
//   }

//   // background-color
//   let backgroundColorButtons = document.querySelectorAll("#background-color>button")
//   for (let index = 0; index < backgroundColorButtons.length; index += 1) {
//     backgroundColorButtons[index].addEventListener("click", function(event) {
//       setBackgroundColor(event.target.innerHTML)
//     })
//   }

//   // font-color
//   let fontColorButtons = document.querySelectorAll("#font-color>button")
//   for (let index = 0; index < fontColorButtons.length; index += 1) {
//     fontColorButtons[index].addEventListener("click", function(event) {
//       setFontColor(event.target.innerHTML)
//     })
//   }

//   // font-size
//   let fontSizeButtons = document.querySelectorAll("#font-size>button")
//   for (let index = 0; index < fontSizeButtons.length; index += 1) {
//     fontSizeButtons[index].addEventListener("click", function(event) {
//       setFontSize(event.target.innerHTML)
//     })
//   }

//   // line-height
//   let lineHeightButtons = document.querySelectorAll("#line-height>button")
//   for (let index = 0; index < lineHeightButtons.length; index += 1) {
//     lineHeightButtons[index].addEventListener("click", function(event) {
//       setLineHeight(event.target.innerHTML)
//     })
//   }

//   // font-family
//   let fontFamilyButtons = document.querySelectorAll("#font-family>button")
//   for (let index = 0; index < fontFamilyButtons.length; index += 1) {
//     fontFamilyButtons[index].addEventListener("click", function(event) {
//       setFontFamily(event.target.innerHTML)
//     })
//   }

//   function initialize() {
//     let backgroundColor = localStorage.getItem("backgroundColor")
//     if (backgroundColor) setBackgroundColor(backgroundColor)

//     let fontColor = localStorage.getItem("fontColor")
//     if (fontColor) setFontColor(fontColor)

//     let fontSize = localStorage.getItem("fontSize")
//     if (fontSize) setFontSize(fontSize)

//     let lineHeight = localStorage.getItem("lineHeight")
//     if (lineHeight) setLineHeight(lineHeight)

//     let fontFamily = localStorage.getItem("fontFamily")
//     if (fontFamily) setFontSize(fontFamily)
//   }

//   initialize()
// }

