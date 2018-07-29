'use strict';
var radios = document.querySelectorAll('.radio');
var button = document.querySelector('.button-comenzar');
var lista= document.querySelector('.lista');
var valorRadio;

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
        newItem.id='item'+x;
        lista.classList.add('tarjeta');
        // para añadir la imagen
        var imagePokemon1= document.createElement('img');
        imagePokemon1.classList.add('imagen-pokemon')
        imagePokemon1.src = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';
        var imagePokemon2= document.createElement('img');
        imagePokemon2.classList.add('imagen-pokemon-2');
        imagePokemon2.src= pokemon[x].image;
        imagePokemon2.classList.toggle('hidden');

        imagePokemon1.addEventListener('click', cambiar);
        imagePokemon2.addEventListener('click', cambiar);

        newItem.appendChild(imagePokemon1);
        newItem.appendChild(imagePokemon2);
        lista.appendChild(newItem);
      }
    });
}
function cambiar(event) {
  event.currentTarget.parentElement.children[0].classList.toggle('hidden');
  event.currentTarget.parentElement.children[1].classList.toggle('hidden');
}
button.addEventListener('click', llamada);
