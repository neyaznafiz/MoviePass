// home page
// "use client";
// import { useState } from "react";

import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <main>
      {/* movie section */}
     <div className="grid grid-cols-customFluid place-items-center gap-5 sm:m-20 m-10">
     {res.results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
     </div>
    </main>
  );
}
