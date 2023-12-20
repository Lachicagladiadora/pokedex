import { useState } from "react";

type PokemonProps = string | number;

const INITIAL_POKEMON: PokemonProps = 25;

function App() {
  const [pokemon, setPokemon] = useState<PokemonProps>(INITIAL_POKEMON);
  const pokemonData = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then((data) => ({
      name: data.name,
    }));
  // console.log(pokemonData);
  console.log(pokemonData);
  return (
    <div>
      <header>
        <h1>{pokemonData}</h1>
        <p>25</p>
      </header>
      <main>
        <button>shiny</button>
        <section>
          <img src="" alt="pikachu" />
        </section>
        <section>
          description
          <ul>
            <li>type</li>
            <li>heigth</li>
            <li>weigth</li>
          </ul>
        </section>
        <section>
          ataques/moves
          <ul>
            <li>electrico</li>
          </ul>
        </section>
        <section>location area encounter</section>
      </main>
    </div>
  );
}

export default App;
