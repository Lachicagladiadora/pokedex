import { useEffect, useState } from "react";
import {
  Header,
  HeaderLarge,
  HeaderWhitoutShadow,
  LightLarge,
  Triangle,
  WhitoutShadow,
} from "./components/style/Header";

type PokemonProps = string;

const INITIAL_POKEMON: PokemonProps = "kakuna";

function App() {
  const [pokemon, setPokemon] = useState<PokemonProps>(INITIAL_POKEMON);
  const [name, setName] = useState<string>("");

  const pokemonData = async (pokemonId: PokemonProps) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => data);
    console.log(data);
    setName(data.name);
    return data;
  };

  useEffect(() => {
    pokemonData(pokemon);
  }, [pokemon]);

  return (
    <div>
      <header>
        <h1>{name}</h1>
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
            <li>weigth {}</li>
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
      <div
        style={{
          position: "relative",
          height: "800px",
          width: "500px",
          background: "red",
          zIndex: "-3",
          borderRadius: "50px 0px 0px 0px",
        }}
      >
        <HeaderWhitoutShadow />
        <Header />
        <HeaderLarge />
        <WhitoutShadow />
        <Triangle />
        <LightLarge />
      </div>
    </div>
  );
}

export default App;
