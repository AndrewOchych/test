import React from "react";

export default function Pagination({
  prevUrl,
  nextUrl,
  goToNextUrl,
  goToPrevUrl,
}) {
  return (
    <div className="buttons">
      {prevUrl != null && <button onClick={() => goToPrevUrl()}>PREV</button>}
      {nextUrl != null && <button onClick={() => goToNextUrl()}>NEXT</button>}
    </div>
  );
}
