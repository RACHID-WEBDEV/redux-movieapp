/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux'

const MovieList = () => {
  const { moviesList } = useSelector((state) => ({ ...state.movie }))

  return (
    <>
      <div className="grid grid-cols-1 gap-6 px-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {
          moviesList?.Search?.map((item, index) => (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
             <Link href={`/movie/${item.imdbID}`}>
                <a >
                  <img className="rounded-t-lg" src={item.Poster} alt={item.Title} />
                </a>
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.Title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.Year}</p>
                <Link href={`/movie/${item.imdbID}`}>
                  <a  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </a>
                </Link>
              </div>
            </div>
          ))
        }
      </div>

    </>
  );
};

export default MovieList;