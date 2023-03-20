import React from "react";
import RenderPokemon from "./Pokemon";

function App() {
    return (
        <div>
            <input placeholder="insert your pokemon"></input>
            <button >Submit</button>
            <RenderPokemon name={"pikachu"}/>
        </div>
    )
}

export default App