import React, { useEffect, useState } from "react";

function RenderPokemon({ name }) {
    const [data, setData] = useState([])
    async function get_pokemon(name) {
        try {
            const obj = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const pokemon = await obj.json();
            setData(pokemon);
            console.log(pokemon);
        } catch (err) {
            console.log("errore")
        }
    }
    useEffect(() => {
        get_pokemon(name)
        console.log(data)
    }, [name])

    return (
        <div>
            <p>{data.name}</p>
            {/* <ul>{data.abilities.map((el) => {
                return (
                    <li>{el}</li>
                )
            })}</ul> */}
        </div>
    )
}

export default RenderPokemon