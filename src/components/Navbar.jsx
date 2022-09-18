import LimitFilter from "./LimitFilter";
import Search from "./Search";
import TypePokemonFilter from "./TypePokemonFilter";

export default function Navbar({
  search,
  setSearch,
  setSearchUrl,
  limit,
  setLimit,
  changeLimit,
}) {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <TypePokemonFilter />
          <LimitFilter
            limit={limit}
            setLimit={setLimit}
            changeLimit={changeLimit}
          />
          <Search
            search={search}
            setSearch={setSearch}
            setSearchUrl={setSearchUrl}
          />
        </div>
      </div>
    </header>
  );
}
