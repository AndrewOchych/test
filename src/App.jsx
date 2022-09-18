import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pokemons from "./components/Pokemons";

function App() {
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [url, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState();
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [search, setSearch] = useState("");
  const [searchUrl, setSearchUrl] = useState("");

  useEffect(() => {
    setIsLoaded(false);
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setIsLoaded(true);
        setNextUrl(response.next);
        setPrevUrl(response.previous);
        setPokemons(response.results);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, [url]);

  const goToNextUrl = () => {
    setPokemons([]);
    setUrl(nextUrl);
  };
  const goToPrevUrl = () => {
    setPokemons([]);
    setUrl(prevUrl);
  };
  const changeLimit = () => {
    setPokemons([]);
    setUrl(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <Navbar
          search={search}
          setSearch={setSearch}
          setSearchUrl={setSearchUrl}
          limit={limit}
          setLimit={setLimit}
          changeLimit={changeLimit}
        />

        <Pokemons
          pokemons={pokemons}
          searchUrl={searchUrl}
          setSearchUrl={setSearchUrl}
          prevUrl={prevUrl}
          nextUrl={nextUrl}
          goToNextUrl={goToNextUrl}
          goToPrevUrl={goToPrevUrl}
        />

        <Footer />
      </div>
    );
  }
}
export default App;
