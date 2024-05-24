import React,{ useEffect, useState } from "react";
import Context from "../Context/Context";
import Nav from "../Nav/Nav";
import axios from "axios";
import Pokemons from "../Pokemons/Pokemons";
import './App.css';


function App() {
  const [pokemons, setPokemons] = useState("");
  const [pokemonsStats, setpokemonStats] = useState("");

  useEffect(() => {
    cargarpokemons();
  }, []);

  const cargarpokemons = async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0"
    );
    setPokemons(data);

    cargarStats(data);
  };



  const cargarStats = async (data) => {
    const stats = await Promise.all(
      data.results.map(async (pokemon) => {
        const { data } = await axios.get(pokemon.url);
        return data;
      })
    );
    setpokemonStats(stats);
  };

  
  
  return (
    <Context.Provider
      value={[pokemons, setPokemons, pokemonsStats, setpokemonStats]}
    >
      <div className="container">
        <Nav />
        <Pokemons/>
      </div>
    </Context.Provider>
  );
}

export default App;
