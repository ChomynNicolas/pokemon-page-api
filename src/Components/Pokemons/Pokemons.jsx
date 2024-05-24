import React, { useContext } from "react";
import Context from '../Context/Context'



export default function Pokemons() {
  
  const [{results}, setPokemons, pokemonsStats, setpokemonStats] = useContext(Context)



  const convertirAmayuscula=(nombre)=>{
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
  }

  const mostrarStats=(event)=>{
    // if (event.currentTarget === event.target) {
    //   const img = event.currentTarget.querySelector(".pokemon-img")
    //   const stats = event.currentTarget.querySelector('.stats-div');
    //   const verStats = event.currentTarget.querySelector('.verStats');
    //   img.classList.toggle("acomodarImg");
    //   stats.classList.toggle("ocult");
    //   verStats.classList.toggle("ocult");
    // }
  
  }

  console.log(pokemonsStats);

  return (
          <div className="container-grid">
          {results !=="" && pokemonsStats !==""?
            results.map((pokemon, index)=>{
            return(
              
            <div className="pokemon-container" key={index} onMouseEnter={(event)=>mostrarStats(event)}  onMouseLeave={(event)=>mostrarStats(event)}>
              <div className="pokemonData-container">
                <spam className="nroPokemon">#{index>10? index>100?index :"0"+index:"00"+index}</spam>
                <h4 className="pokemonNombre">{convertirAmayuscula(pokemon.name)}</h4>
                <p className="peso" >Peso: {pokemonsStats[index].height}</p>
                <p className="altura">Altura: {pokemonsStats[index].weight}</p>
                <span className="verStats">Estadisticas</span>
                
                <div className="stats-div">
                  <p>Hp <spam className="hp">{pokemonsStats[index].stats[0].base_stat}</spam></p>
                  <p>Atk <spam className="atk">{pokemonsStats[index].stats[1].base_stat}</spam></p>
                  <p>Def <spam className="def">{pokemonsStats[index].stats[2].base_stat}</spam></p>
                  <p>AtkE <spam className="atkE">{pokemonsStats[index].stats[3].base_stat}</spam></p>
                  <p>DefE <spam className="defE">{pokemonsStats[index].stats[4].base_stat}</spam></p>
                  <p>Sp <spam className="sp">{pokemonsStats[index].stats[5].base_stat}</spam></p>
                  
                  
                </div>
              </div>
              <div className="pokemonImg-container">
                <img src={pokemonsStats[index].sprites.other.home.front_default} 
                alt="pokemon.name" className="pokemon-img"/>
                
              </div>
            </div>
            );
          }
          )

          :""}
          </div>
            
  
  
  );
}


