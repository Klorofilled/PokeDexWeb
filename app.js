// Images: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// PokeAPI: https://pokeapi.co/api/v2/pokemon/1/

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const container = document.querySelector('#container');
const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

// Function to fetch Pokémon data by ID
async function getPokemonData(id) {
    const apiUrl = `${baseURL}${id}/`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        
        const data = await response.json();
        return data.forms[0].name; // Return the Pokémon name
    } catch (error) {
        console.error("Fetch Error:", error);
    }
}

async function fetchAndDisplayPokemon() {
    for (let i = 1; i <= 151; i++) {
        const pokemon = document.createElement('div');
        pokemon.classList.add('pokemon');
        const num = document.createElement('span')
        num.innerText = `${i}`
        const label = document.createElement('span');

        // Create and add Pokémon images
        const newImg = document.createElement('img');
        newImg.src = `${imgURL}${i}.png`

        // Fetch and set the Pokémon name
        const pokemonName = await getPokemonData(i);
        label.innerText = capitalizeFirstLetter(pokemonName);

        pokemon.appendChild(newImg);
        pokemon.appendChild(label);
        newImg.appendChild(num);
        container.appendChild(pokemon)
    }
}

// Calling the async function to execute code
fetchAndDisplayPokemon();
