import { useEffect, useState } from "react";
import { typeColor } from "../helpers/typeColor";

export default function Pokemon({ url }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    setIsLoaded(false);
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setIsLoaded(true);
        setPokemon(response);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, [url]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div
        className="pokemon_item"
        style={{ backgroundColor: typeColor(pokemon.types[0].type.name) }}
      >
        <h1 className="pokemon-title">{pokemon.name}</h1>
        <div>Order: {pokemon.id}</div>
        <img src={pokemon.sprites.front_default} alt="" />
        <div className="types">
          {pokemon.types.map((result, key) => (
            <p
              className="type"
              key={key}
              style={{ backgroundColor: typeColor(result.type.name) }}
            >
              {result.type.name}
            </p>
          ))}
        </div>
        <div>
          Stats:
          <ul>
            {pokemon.stats.map((stat, key) => (
              <li key={key}>
                {stat.stat.name} : {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
