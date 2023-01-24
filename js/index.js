
console.log('mostrar o document' , document);

//-passo 1 - dar um jeito de pegar o elemento que representa o botao da tela usando o js

console.log(document.querySelector('.butao'));

const botaoTrailer = document.querySelector('.butao');
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
console.log(video.src);
const linkDoVideo = video.src;

//- passo 2 - dar um jeito de identificar quando o usuario clicar no botao

botaoTrailer.addEventListener("click",() =>{console.log("clicou no botão veja o trailer");
//-passo 4 - abrir a modal na tela 
modal.classList.toggle("aberto");
video.setAttribute("src", linkDoVideo);
} );


//-passo 3 - dar um jeito de pegar o elemento da modal js


// OBJETIVO 2 - quando o usuário clicar no botão x devemos fvechar a modal 

// -passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
 
const botaoFecharModal = document.querySelector(".fechar-modal");

// - passo 2 - dar um jeito de identificar quando o usuario clicar no x

botaoFecharModal.addEventListener("click", () => {
//-passo 3 - dar um jeito de pegar o elemento da modal js
modal.classList.toggle('aberto');
video.setAttribute("src", "")
    
});

