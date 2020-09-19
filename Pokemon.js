
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/25';

const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const goSomewhereBtn = document.querySelector('.btn');


fetch(baseUrl)
.then(response => response.json())
.then(json => displayPokemon(json));

function displayPokemon(data) {
    console.log(data);

    // let img = document.createElement('img')
    // img.className = 'card-img-top';

    let title = document.createElement('h2');
    title.className = 'card-title';
    title.innerText = data.name;
    title.style = 'font-family: Permanent Marker, cursive; text-transform: uppercase; font-weight: bold;'

    cardBody.insertBefore(title, goSomewhereBtn);

    let types = document.createElement('p')
    types.className = 'card-text';
    types.innerText = data.types[0].type.name;
    types.style = 'font-family: Permanent Marker, cursive; font-weight: bold; text-transform: uppercase;'

    cardBody.insertBefore(types,goSomewhereBtn);

} 
let themeSong = document.getElementById('myAudio');

function playAudio() {
    themeSong.play();}
