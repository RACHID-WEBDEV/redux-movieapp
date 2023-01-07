/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import Button from '@/components/form/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getMovie } from 'redux/feature/movieSlice'
import Link from 'next/link'
const MovieDetails = () => {
  const dispatch = useDispatch()

  const router = useRouter();
  const { id } = router.query;

  const { movie } = useSelector((state) => ({ ...state.movie }))

  useEffect(() => {
    if (id) {
      dispatch(getMovie(id))
    }
  }, [dispatch, id])
  return (
    <section>
      <h1 className="text-4xl text-center font-bold my-3">Movie Details</h1>
      <div className="relative max-w-5xl px-4 py-8 mx-auto my-10">
        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img src={movie.Poster} alt={movie.Title} className="object-cover w-full aspect-square rounded-xl" />


          </div>

          <div className="sticky top-0">
            <strong className="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600 capitalize">
              {movie.Type}
            </strong>

            <div className="flex justify-between mt-8">
              <div className="max-w-md ">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                  {movie.Title}
                </h1>
                <h2 className="text-xl font-Poppins font-bold text-gray-700 dark:text-gray-100 py-2"><b>Category:</b> {movie.Genre}</h2>

                <p className="mt-0.5 text-sm">Highest Rated </p>

                <div className="flex mt-2 -ml-0.5">
                  <svg className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg className="w-5 h-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <p className="font-Poppins text-gray-600" >
                  <b className="text-gray-800 ">Director: </b> {movie.Director}
                </p>
                <p className="font-Poppins text-gray-600" >
                  <b className="text-gray-800 ">Year Produce: </b> {movie.Year}
                </p>
              </div>

            </div>


            <details className="relative mt-4 group">
              <summary className="block">
                <legend className="text-lg text-gray-800 font-Raleway dark:text-gray-100 font-bold">Description</legend>
                <p className="font-Poppins text-gray-600 mb-2">
                  {movie.Plot}
                </p>
                <div>
                  <div className="prose max-w-none  group-open:hidden text-gray-600 dark:text-gray-400">
                    {/* <p className="font-Poppins text-gray-600">
                      {movie.Plot}
                    </p> */}
                  </div>

                  <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                    Read More
                  </span>
                </div>
              </summary>

              <div className="pb-6 space-y-2 prose max-w-none font-Poppins  text-gray-600 dark:text-gray-400">
                <p className="font-Poppins text-gray-600" >
                  <b className="text-gray-800 ">Released: </b> {movie.Released}
                </p>

                <p className="font-Poppins text-gray-600">
                  <b className="text-gray-800 ">Actors:</b> {movie.Actors}
                </p>
                <p className="font-Poppins text-gray-600">
                  <b className="text-gray-800 ">Runtime:</b> {movie.Runtime}
                </p>
                <p className="font-Poppins text-gray-600">
                  <b className="text-gray-800 ">Language:</b> {movie.Language}
                </p>
              </div>
            </details>




          </div>
        </div>
        <div className="pt-16 flex items-center justify-center">
          <Link href="/" >
            <a>
              <Button leftIcon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 rotate-180 "><path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" /></svg>}> Back To Movies</Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MovieDetails