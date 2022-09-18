export default function TypePokemonFilter() {
  return (
    <div>
      Type :
      <select>
        <option value="All">All</option>
      </select>
      <button onClick={() => changeType()}>Show</button>
    </div>
  );
}
