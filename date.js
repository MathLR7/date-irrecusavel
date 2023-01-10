const nao = document.getElementById('botao-nao');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const bsimzao = document.getElementById('botao-sim-maior');

const sadcat = document.getElementById('sadcat');
const sadman = document.getElementById('sadman');
const sad = document.getElementById('sad');
const seta = document.getElementById('seta');
const deitado = document.getElementById('deitado');
const frog = document.getElementById('frog');

nao.addEventListener("click",function (){
    nao.style.opacity = "0";
    b1.style.opacity = "1";
});

b1.addEventListener("click",function(){
    b1.style.opacity = "0";
    b2.style.opacity = "1";
    seta.style.opacity = "1";
});

b2.addEventListener("click",function(){
    b2.style.opacity = "0";
    b3.style.opacity = "1";
    sad.style.opacity = "1";
});

b3.addEventListener("click",function(){
    b3.style.opacity = "0";
    b4.style.opacity = "1";
    sadcat.style.opacity = "1";
    bsimzao.style.opacity = "1";
});

b4.addEventListener("click",function(){
    b4.style.opacity = "0";
    b5.style.opacity = "1";
    sadman.style.opacity = "1";
});

b5.addEventListener("click",function(){
    b5.style.opacity = "0";
    deitado.style.opacity = "1";
    frog.style.opacity = "1";
});