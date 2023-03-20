import React, { useState } from "react";
import RenderPokemon from "./Pokemon";

function App() {
    const [input, setInput] = useState(null);
    function HandleInputChange(event) {
        setInput(event.target.value)
    }
    const [pokemon, setPokemon] = useState(null);
    function HandleSubmit() {
        setPokemon(input)
    }
    return (
        <div>
            <input value={input} placeholder="insert your pokemon" onChange={HandleInputChange}></input>
            <button onClick={HandleSubmit}>Submit</button>
            {pokemon != null && <RenderPokemon name={pokemon}/>}
        </div>
    )
}

export default App