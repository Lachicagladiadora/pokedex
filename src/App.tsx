import { useEffect, useState } from "react";
import {
  Header,
  HeaderLarge,
  HeaderWhitoutShadow,
  BigLight,
  LightLargeSmallGreen,
  LightLargeSmallRed,
  LightLargeSmallYellow,
  Triangle,
  WhitoutShadow,
} from "./components/style/Header";
import {
  BorderDisplay,
  DisplayBaseMayor,
  DisplayBorderBottom,
  DisplayForImage,
  LighSmallRedTop1,
  LighSmallRedTop2,
  LightBigRed,
  ShadowTop,
  ShadowTopRight,
  Speaker1,
  Speaker2,
  Speaker3,
  Speaker4,
  TriangleDisplayBaseMayor,
  TriangleDisplayBorder,
} from "./components/style/FirstDisplay";
import {
  ButtonLarge1,
  ButtonLarge2,
  ButtonSmall1,
  ButtonSmall2,
  DisplaySmall,
  DivForPointsAndLines,
  DivForTwoLines,
  HorizontalButton,
  LineSmall1,
  LineSmall2,
  PointLarge,
  PointSmall,
  Rounded,
  VerticalButton,
} from "./components/style/ButtonsForBottom";
import { PokedexContainer } from "./components/style/PokedexContainer";
import {
  HeaderLargeSecondDisplay,
  HeaderSecondDisplay,
  HeaderWhitoutShadowSecondDisplay,
  SecondDisplayBase,
  ShadowTopRightSecondDisplay,
  ShadowTopSecondDisplay,
  TriangleDisplayBaseMayorSecondDisplay,
  TriangleSecondDisplay,
  WhitoutShadowSecondDisplay,
} from "./components/style/SecondDisplayBase";

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
      <PokedexContainer>
        <div
          style={{
            position: "relative",
            height: "100%",
            width: "47.3%",
            background: "blue",
            zIndex: "-3",
            borderRadius: "50px 0px 0px 50px",
            boxShadow: "inset 0px 0px 20px rgba(101, 13, 13)",
          }}
        >
          <HeaderWhitoutShadow />
          <Header />
          <HeaderLarge />
          <WhitoutShadow />
          <Triangle />
          <BigLight />
          <LightLargeSmallRed />
          <LightLargeSmallYellow />
          <LightLargeSmallGreen />

          <DisplayBaseMayor />
          <TriangleDisplayBaseMayor />
          <ShadowTop />
          <ShadowTopRight />

          <BorderDisplay />
          <DisplayForImage />
          <TriangleDisplayBorder />
          <DisplayBorderBottom />
          <Speaker1 />
          <Speaker2 />
          <Speaker3 />
          <Speaker4 />
          <LighSmallRedTop1 />
          <LighSmallRedTop2 />
          <LightBigRed />

          <Rounded />
          <ButtonLarge1 />
          <ButtonLarge2 />
          <ButtonSmall1 />
          <ButtonSmall2 />
          <DisplaySmall />
          <HorizontalButton />
          <VerticalButton />
          <DivForPointsAndLines>
            <PointLarge />
            <DivForTwoLines>
              <LineSmall1 />
              <PointSmall />
              <LineSmall2 />
            </DivForTwoLines>
          </DivForPointsAndLines>
        </div>
        <div
          style={{
            position: "relative",
            height: "auto",
            width: "4.8%",
            background: "orange",
            zIndex: "-3",
            borderRadius: "0px",
            boxShadow: "inset 0px 0px 20px rgba(101, 13, 13)",
          }}
        ></div>
        <div
          style={{
            position: "relative",
            height: "100%",
            width: "47.3%",
            background: "green",
            zIndex: "-3",
            borderRadius: "0px 50px 50px 0px",
            boxShadow: "inset 0px 0px 20px rgba(101, 13, 13)",
          }}
        >
          <HeaderWhitoutShadowSecondDisplay />
          <HeaderSecondDisplay />
          <HeaderLargeSecondDisplay />
          <WhitoutShadowSecondDisplay />
          <TriangleSecondDisplay />
          {/* <BigLight />
          <LightLargeSmallRed />
          <LightLargeSmallYellow />
          <LightLargeSmallGreen /> */}

          <SecondDisplayBase />
          <TriangleDisplayBaseMayorSecondDisplay />
          <ShadowTopSecondDisplay />
          <ShadowTopRightSecondDisplay />

          {/* <BorderDisplay />
          <DisplayForImage />
          <TriangleDisplayBorder />
          <DisplayBorderBottom />
          <Speaker1 />
          <Speaker2 />
          <Speaker3 />
          <Speaker4 />
          <LighSmallRedTop1 />
          <LighSmallRedTop2 />
          <LightBigRed /> */}

          {/* <Rounded />
          <ButtonLarge1 />
          <ButtonLarge2 />
          <ButtonSmall1 />
          <ButtonSmall2 />
          <DisplaySmall />
          <HorizontalButton />
          <VerticalButton />
          <DivForPointsAndLines>
            <PointLarge />
            <DivForTwoLines>
              <LineSmall1 />
              <PointSmall />
              <LineSmall2 />
            </DivForTwoLines>
          </DivForPointsAndLines> */}
        </div>
      </PokedexContainer>
      {/* 
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
      </main> */}
    </div>
  );
}

export default App;
