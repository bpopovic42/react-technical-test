import { useState, useEffect } from 'react';

const useFetchMovies = () => {
  const defaultQuery = 'test';
  const [movies, setMovies] = useState(undefined);
  const [url, setUrl] = useState('https://api.tvmaze.com/search/shows?q=');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsError(false);

      try {
        setIsLoading(true);
        const response = await fetch(url + defaultQuery);
        const json = await response.json();
        setMovies(json);
        setIsLoading(false);
        console.log(`Movies fetched : ${json}, loading : ${isLoading}`);
        /* .then(response => response.json())
        .then(movies => setMovies(movies),setIsLoading(false)); */
      } catch (error) {
        console.log('Error fetching data');
        setIsError(true);
      }
    };
    fetchMovies();
  }, [url], [isLoading]);

  return [{ movies, isLoading, isError }, setUrl];
};

export default useFetchMovies;
