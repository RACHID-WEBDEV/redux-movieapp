import React, { useState } from 'react';
import Logo from '@/components/Logo';
import { Button, Select } from '@/components/form';
import Header from '@/components/Header';
import HookForm from '@/components/form/Form';
import Link from 'next/link';
import * as yup from 'yup';
import Search from '@/components/Search';
import MovieList from '@/components/MovieList';

 
export default function Home() {
 
  return (
    <>

      <div className="overflow-y-scroll w-full  max-w-full h-screen bg-primary-100  py-5 px-4">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <Search />
          <MovieList/>
         

          
        </div>
      </div>
    </>
  );
}
