import React, { useContext } from "react";
import Context from '../Context/Context'

function Nav() {
  
  
  
  return (
          <nav>
            <h3>PokemonPage</h3>
            <div className="search-container">
              <input type="text" className="search-input" />
              <button className="btn btn-search">Buscar</button>
            </div>
          </nav>
  );
}

export default Nav;
