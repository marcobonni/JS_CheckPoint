import React, { useEffect, useState } from "react";

function RenderPokemon({ name }) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    async function get_pokemon(name) {
        try {
            const obj = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const pokemon = await obj.json();
            setData(pokemon);
            console.log(pokemon);
        } catch (err) {
            setError(err);
        }
    }
    useEffect(() => {
        get_pokemon(name)
        console.log(data)
    }, [name])
    // const sprite = {data.sprites.front_default}
    // console.log(sprite)
    return (
        <div>
            {data && <p>{data.name}</p>}
            {data && <p>{data.id}</p>}
            {data && <img src={data.sprites.front_shiny} alt="not working" />}
            {/* <ul>{data.sprites.map((el) => (
                <img src={el.sprites}/>)
            )}</ul> */}
            {data && <li>{data.abilities[0].ability.name}</li>}
            {data && <li>{data.abilities[1].ability.name}</li>}
            {data && <li>{data.abilities[2].ability.name}</li>}
        </div>
    )
}

export default RenderPokemon