import React from 'react';
import Search from '@/components/Search';
import MovieList from '@/components/MovieList';


export default function Home() {

  return (
    <>
      <div className="overflow-y-scroll w-full  max-w-full h-screen bg-primary-100  py-5 px-4">
        <div className="flex flex-col items-center justify-center">

          <Search />
          <MovieList />
        </div>
      </div>
    </>
  );
}
