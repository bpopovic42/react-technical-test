import React, { useState } from 'react';
import { makeStyles, CircularProgress, Box } from '@material-ui/core';
import SearchBar from '../Components/SearchBar';
import MoviesList from '../Components/MoviesList';
import { Header, Footer } from '../Components/Layouts';
import useFetchMovies from '../Components/FetchApiData';

const useStyles = makeStyles({
  box: {
    width: 'auto',
    minHeight: '60vh',
  },
});

export default function Home() {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [{ movies, isLoading, isError }, doFetch] = useFetchMovies();

  const classes = useStyles();

  const handleSearchInput = (event) => {
    const newSearchInput = event.target.value.toLowerCase();
    setSearchInput(newSearchInput);
    setFilteredMovies(movies.filter((movie) => {
      const movieName = movie.show.name.toLowerCase();
      return (newSearchInput !== '' && movieName.includes(newSearchInput));
    }));
  };

  function getFilteredMovies() {
    if (isError) {
      return <h1 align="center">Error while fetching movie list.</h1>;
    }
    if (isLoading) {
      return <CircularProgress size={40} style={{ marginLeft: '50%' }} />;
    }
    return <MoviesList filteredMovies={filteredMovies} />;
  }

  return (
    <>
      <Header />
      <SearchBar handleSearchInput={handleSearchInput} />
      <Box className={classes.box} fixed="true">
        {
          getFilteredMovies()
        }
      </Box>
      <Footer />
    </>
  );
}
