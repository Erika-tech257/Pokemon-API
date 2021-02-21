
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
    // img.innerHTML = data.sprites.back_default;
    let img = document.createElement('img')
    img.setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg");
    img.setAttribute("width", "304");
    img.setAttribute("height", "228");
    img.setAttribute("alt", "Pikachua");
    document.body.appendChild(img);

    cardBody.insertBefore(img, goSomewhereBtn);

    let title = document.createElement('h2');
    title.className = 'card-title';
    title.innerText = data.name;
    title.style = 'font-family: Permanent Marker, cursive; text-transform: uppercase; font-weight: bold;'

    cardBody.insertBefore(title, goSomewhereBtn);

    let types = document.createElement('p')
    types.className = 'card-text';
    types.innerText = data.types[0].type.name;
    types.style = 'font-family: Permanent Marker, cursive; font-weight: bold; text-transform: uppercase;'

    cardBody.insertBefore(types, goSomewhereBtn);

    
    let weight = document.createElement('p')
    weight.className='card-body';
    weight.innerText = data.weight;
    types.style = 'font-family: Permanent Marker, cursive; font-weight: bold; text-transform: uppercase;'
    // document.body.appendChild(mweight)
    
    cardBody.insertBefore(weight,goSomewhereBtn);
}
  

    /* Second Card **********/

// const baseUrl = 'https://pokeapi.co/api/v2/pokemon/26';

// const card = document.querySelector('.card1');
// const cardBody = document.querySelector('.card-body1');
// const goSomewhereBtn = document.querySelector('.btn1');

// fetch(baseUrl)
//     .then(response => response.json())
//     .then(json => displayPokemon(json));

// function displayPokemon(data) {
//     console.log(data);

//     // let img = document.createElement('img')
//     // img.className = 'card-img-top';
//     // img.innerHTML = data.sprites.back_default;
//     let img = document.createElement('img')
//     img.setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg");
//     img.setAttribute("width", "304");
//     img.setAttribute("height", "228");
//     img.setAttribute("alt", "Pokemon Image");
//     document.body.appendChild(img);

//     cardBody1.insertBefore(img, goSomewhereBtn);

//     let title = document.createElement('h2');
//     title.className = 'card-title';
//     title.innerText = data.name;
//     title.style = 'font-family: Permanent Marker, cursive; text-transform: uppercase; font-weight: bold;'

//     cardBody1.insertBefore(title, goSomewhereBtn);

//     let types = document.createElement('p')
//     types.className = 'card-text';
//     types.innerText = data.types[0].type.name;
//     types.style = 'font-family: Permanent Marker, cursive; font-weight: bold; text-transform: uppercase;'

//     cardBody1.insertBefore(types, goSomewhereBtn);

    
//     let weight = document.createElement('p')
//     weight.className='card-body';
//     weight.innerText = data.weight;
//     types.style = 'font-family: Permanent Marker, cursive; font-weight: bold; text-transform: uppercase;'
//     // document.body.appendChild(mweight)
    
//     cardBody1.insertBefore(weight,goSomewhereBtn);
// }
//     cardBody()
    
    


let themeSong = document.getElementById('myAudio');

function playAudio() {
    themeSong.play();
}
