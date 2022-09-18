import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

export default function Pokemons({
  pokemons,
  searchUrl,
  setSearchUrl,
  prevUrl,
  nextUrl,
  goToNextUrl,
  goToPrevUrl,
}) {
  return (
    <div className="container">
      <div className="pokemons">
        <div className="one_pokemon">
          {searchUrl !== "" && (
            <>
              <Pokemon url={searchUrl} />
              <button className="link" onClick={() => setSearchUrl("")}>
                Go to Pokemons List
              </button>
            </>
          )}
        </div>

        <div className="pokemon_list">
          {searchUrl === "" &&
            pokemons.map((result, key) => (
              <Pokemon key={key} url={result.url} />
            ))}
          {searchUrl === "" && (
            <Pagination
              prevUrl={prevUrl}
              nextUrl={nextUrl}
              goToNextUrl={goToNextUrl}
              goToPrevUrl={goToPrevUrl}
            />
          )}
        </div>
      </div>
    </div>
  );
}
