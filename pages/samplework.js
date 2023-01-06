import React, { useState } from 'react';
import Logo from '@/components/Logo';
import { Button, Select } from '@/components/form';
import Header from '@/components/Header';
import HookForm from '@/components/form/Form';
import Link from 'next/link';
import * as yup from 'yup';

export default function Home() {
  const [activeMovie, setActiveMovie] = useState({});
  const [activeXters, setActiveXters] = useState([]);
  const FormSchema = yup
    .object({
      select: yup.string().required('A select option is required!')
    })
    .required();
  // const [show1, setShow1] = useState(false);
  // const [show2, setShow2] = useState(false);
  // const [show3, setShow3] = useState(false);
  // const [show4, setShow4] = useState(false);
  // const [show5, setShow5] = useState(false);
  const [films, setFilms] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getFilms() {
    setLoading(true);
    const url = `https://swapi.dev/api/films/?format=json`;
    const response = await fetch(url);
    const currentFilms = await response.json();

    // console.log('getResult', getResult);
    console.log('currentFilms', currentFilms?.results);

    if (currentFilms) {
      const allMovies = [];
      currentFilms.results.map((movie) =>
        allMovies.push({
          date: movie.release_date,
          title: movie.title,
          characters: movie.characters,
          opening_crawl: movie.opening_crawl
        })
      );
      setFilms(allMovies);
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getFilms();
  }, []);

  React.useEffect(() => {
    const getXters = (films, activeMovie) => {
      const xters = films.filter((movie) => {
        console.log('arr mov title ', movie.title);
        console.log('filter mov title ', activeMovie);
        return movie.title === activeMovie;
      });
      console.log('All xters ', xters);
    };
    getXters();
  }, [activeMovie]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setActiveMovie(event.target.value);
  };

  const sampleData = [
    { title: 'Privacy Policy', value: 'Policy' },
    { title: ' Sign amcovad', value: 'Signamcovad' },
    { title: ' Sign in Today', value: 'SigninToday' }
  ];
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  {
    console.log('All films = ', films);
  }
  return (
    <>
      {/* <Header>
        <div className="mb-32">
          <label htmlFor="countries" className="block mb-2 text-2xl font-medium text-white dark:text-gray-400">
            Select an option
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a Movie</option>
            {films?.results.map((data, index) => {
              return (
                <option key={index} value="US">
                  {data.title}
                </option>
              );
            })}
          </select>
        </div>
      </Header> */}
      <div className="overflow-y-scroll w-full  max-w-full h-screen bg-primary-100  py-5 px-4">
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <div className="my-10 w-[960px]">
            <div>
              <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Select an option
              </label>
              <select
                value={activeMovie}
                onChange={handleChange}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a Movie</option>
                {films
                  ? films.map((data, index) => {
                      return (
                        <option key={index} value={data.title}>
                          {data.title}
                        </option>
                      );
                    })
                  : ''}
              </select>
            </div>
          </div>

          <div className=" mb-5 lg:mb-12 w-full">
            <HookForm onSubmit={onSubmit} schema={FormSchema}>
              <Select
                defaultOption="Select your State of Origin"
                label="State of Origin"
                name="select"
                options={sampleData}
              />
              <div className="my-6">
                <Button color="secondary">Register</Button>
              </div>
            </HookForm>

            {films
              ? films.map((data, index) => {
                  return (
                    <>
                      <div key={index} className="max-w-4xl mx-20 flex flex-col items-center justify-center flex-wrap">
                        <p>{data.title}</p>
                        {/* <ul className="flex flex-col items-center flex-wrap">
                      <li className="text-sm my-3 text-black-100">{data.characters}</li>
                    </ul> */}
                      </div>
                    </>
                  );
                })
              : 'No data'}
            <div className="bg-white shadow rounded lg:w-[500px]  md:w-full w-full px-4 py-2 md:p-8 mt-8 md:mt-12 ">
              <div className="text-center font-normal ">
                <p className="text-xl md:text-3xl  text-black-200">Sign in to ComX</p>
                <p className="text-sm mt-2 text-black-100">Welcome to ComX</p>

                <div className="mt-6">
                  <Link href="/sign-in">
                    <a>
                      <Button>Sign in</Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
