// Get HTML elements for displaying Pokémon data
const pokemonID = document.getElementById("pokemon-id"); // Element to show Pokémon ID
const pokemonName = document.getElementById("pokemon-name"); // Element to display Pokémon name
const spriteContainer = document.getElementById("sprite-container"); // Container for Pokémon sprite image
const types = document.getElementById("types"); // Element to display Pokémon types
const height = document.getElementById("height"); // Element to show Pokémon height
const weight = document.getElementById("weight"); // Element to show Pokémon weight
const hp = document.getElementById("hp"); // Element for Pokémon HP stat
const attack = document.getElementById("attack"); // Element for Pokémon attack stat
const defense = document.getElementById("defense"); // Element for Pokémon defense stat
const specialAttack = document.getElementById("special-attack"); // Element for Pokémon special attack stat
const specialDefense = document.getElementById("special-defense"); // Element for Pokémon special defense stat
const speed = document.getElementById("speed"); // Element for Pokémon speed stat
const searchForm = document.getElementById("search-form"); // Form for Pokémon search
const searchInput = document.getElementById("search-input"); // Input field for Pokémon search (name or ID)

// Function to fetch and display Pokémon data based on user input
const getPokemon = async () => {};

// Event listener for the search form submission
searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form from submitting in the traditional way
  getPokemon(); // Fetch and display Pokémon data
});
