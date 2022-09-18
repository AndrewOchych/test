export default function Search({ search, setSearch, setSearchUrl }) {
  return (
    <div className="searchBtn">
      <input
        className="search__input"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value.toLowerCase());
        }}
      />
      <button
        className="search__btn"
        onClick={() => {
          setSearchUrl(`https://pokeapi.co/api/v2/pokemon/${search}`);
          setSearch("");
        }}
      >
        Search
      </button>
    </div>
  );
}
