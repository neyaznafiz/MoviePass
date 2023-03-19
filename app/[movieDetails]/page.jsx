import Image from "next/image";
import React from "react";


// export const revalidate = 0

export const generateStaticParams = async()=>{
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  
  return res.results.map((movie)=> {
    movie: toString(movie.id)
  })
}

const MovieDetails = async ({ params }) => {
  const { movieDetails } = params;

  const imagePath = "https://image.tmdb.org/t/p/original";

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieDetails}?api_key=${process.env.API_KEY}`, {next: {revalidate: 0}}
  );
  // const data = await prisma.posts.findMany({next: {revalidate: 0}})
  const res = await data.json();
  console.log(res)

  return (
    <div className="w-max mx-auto my-14 flex gap-x-10">
      <Image
        src={imagePath + res.poster_path}
        alt={res.title}
        width={1000}
        height={1000}
        priority
        className="rounded-tr-2xl rounded-bl-2xl h-[600px] w-[400px]"
      />

      <div>
        <h1 className="text-4xl font-bold">{res.title}</h1>
        <p>{res.tagline}</p>
        <h2 className="text-sm text-gray-400">
          Relase Date: {res.release_date}
        </h2>
        <h2>Runtime {res.runtime} minutes</h2>
        <h2 className="bg-green-600 my-2 px-4 rounded-tr-xl rounded-bl-xl inline-block">
          {res.status}
        </h2>

        <h3>Vote: {res.vote_average}</h3>
        <h3>Revenue: {res.revenue}</h3>

        <p className="w-[500px] my-2">{res.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
