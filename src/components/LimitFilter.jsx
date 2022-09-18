export default function LimitFilter({ limit, setLimit, changeLimit }) {
  return (
    <div>
      Limit :
      <select value={limit} onChange={(e) => setLimit(e.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <button onClick={() => changeLimit()}>Show</button>
    </div>
  );
}
