'use strict';
var radios = document.querySelectorAll('.radio');
var button = document.querySelector('.button-comenzar');
var lista= document.querySelector('.lista');
var valorRadio;
var cartaAdalab='https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';


for (var i = 0; i < radios.length; i++){
  radios[i].addEventListener('click', elegirNumero);
}
function elegirNumero(event) {
  valorRadio = event.currentTarget.value;
}
function llamada(){
  lista.innerHTML= '';
  var url ='https://raw.githubusercontent.com/Adalab/cards-data/master/' + valorRadio + '.json';
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(pokemon){
      for (var x = 0; x < pokemon.length; x++){
        var newItem = document.createElement('li');
        lista.classList.add('tarjeta');

        // para añadir la imagen
        var imagePokemon= document.createElement('img');
        imagePokemon.classList.add('imagen-pokemon')
        imagePokemon.src = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';
        imagePokemon.setAttribute('data-url', pokemon[x].image);
        for (var j = 0; j < pokemon.length; j++){
          imagePokemon.addEventListener('click', cambiar);
        }

        lista.appendChild(newItem);
        newItem.appendChild(imagePokemon);
      }

    });
}
function cambiar(event){
  if (event.currentTarget.src === cartaAdalab) {
    event.currentTarget.src = event.currentTarget.getAttribute('data-url');
  }else {
    event.currentTarget.src = cartaAdalab;
  }

}

button.addEventListener('click', llamada);
