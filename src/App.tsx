import { useEffect, useState } from "react";

type PokemonProps = string;

const INITIAL_POKEMON: PokemonProps = "kakuna";

function App() {
  const [pokemon, setPokemon] = useState<PokemonProps>(INITIAL_POKEMON);

  const pokemonData = async (pokemonId: PokemonProps) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => data);
    console.log(data);
    return data;
  };

  useEffect(() => {
    pokemonData(pokemon);
  }, [pokemon]);

  return (
    <div>
      <header>
        <h1>name</h1>
        <p></p>
      </header>
      <main>
        <button>shiny</button>
        <section>
          <label htmlFor="search">Search</label>
          <input
            type="text"
            id="search"
            value={pokemon}
            onChange={(e) => setPokemon(() => e.target.value)}
          />
        </section>
        <section>
          <img src="" alt="pikachu" />
        </section>
        <section>
          description
          <ul>
            <li>type</li>
            <li>heigth</li>
            <li>weigth {pokemonData(pokemon).weigth}</li>
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
