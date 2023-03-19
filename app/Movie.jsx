// 'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Movie = ({ movie }) => {
  const imagePath = 'https://image.tmdb.org/t/p/original'

//   if don't want to set domain in next.config.js then you can use it and set the function in loader in Image tag.
//   const externaImageLoader = ({ src }) =>
//     `https://image.tmdb.org/t/p/original${src}`;

  return (
    <div className="shadow-2xl rounded-tl-2xl rounded-br-2xl p-2">
      <Link href={`${movie.id}`}>
        <Image
        //   loader={externaImageLoader}
          src={imagePath + movie.poster_path}
          alt={movie.title}
          width={600}
          height={300}
          className="rounded-tr-2xl rounded-bl-2xl"
        />
      </Link>

      <div className="p-2">
      <h1 className="text-xl font-bold">{movie.title.slice(0, 20)}...</h1>
      <h2 className="text-sm text-gray-400">Relase Date: {movie.release_date}</h2>
      </div>
    </div>
  );
};

export default Movie;
