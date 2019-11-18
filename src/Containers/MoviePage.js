import React from 'react';
import {
  CircularProgress,
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  Grid,
} from '@material-ui/core';
import { Header, Footer } from '../Components/Layouts';
import useFetchMovies from '../Components/FetchApiData';
import MoviePlaceholderImg from '../Assets/movie_placeholder_img.png';

const useStyles = makeStyles({
  container: {
    minHeight: '60vh',
  },
  cardLeft: {
    width: '40%',
  },
  cardTitle: {
    width: '100%',
    height: 'auto',
    minHeight: '50%',
    display: 'block',
  },
  cardDetails: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
  pos: {
    fontSize: 18,
    marginBottom: 12,
    marginLeft: 12,
  },
  subGrid: {
    height: 'auto',
    width: '60%',
  },
});

export default function MoviePage(props) {
  const [{ movies, isLoading, isError }, doFetch] = useFetchMovies();
  const classes = useStyles();

  function getTargetMovieFromPath() {
    const path = props.location.pathname;
    const movieId = parseInt(path.substring(path.lastIndexOf('/') + 1), 10);
    return (movies.find((movie) => {
      return (movie.show.id === movieId);
    }));
  }

  function stripHtmlTags(string) {
    const tempDivElement = document.createElement('div');
    tempDivElement.innerHTML = string;
    return tempDivElement.textContent || tempDivElement.innerText || '';
  }

  function movieDescription() {
    const movie = getTargetMovieFromPath();
    if (movie === undefined) {
      return (<h1 align="center">Movie not found</h1>);
    }
    return (
      <Grid container className={classes.container}>
        <Card className={classes.cardLeft}>
          <CardMedia
            component="img"
            image={
              movie.show.image && movie.show.image.original
                ? movie.show.image.original
                : MoviePlaceholderImg
            }
          />
        </Card>
        <Grid container className={classes.subGrid}>
          <Card className={classes.cardTitle}>
            <CardHeader className={classes.title} title={movie.show.name} />
            <Typography className={classes.pos}>
              {stripHtmlTags(movie.show.summary)}
            </Typography>
          </Card>
          <Card className={classes.cardDetails}>
            <Typography className={classes.pos}>
              Status :
              {
                movie && movie.show
                  ? `${movie.show.status}\n`
                  : 'N/A'
              }
              <br />
              Type :
              {
                movie && movie.show
                  ? movie.show.type
                  : 'N/A'
              }
              <br />
              Genres:
              {
                movie && movie.show && movie.show.genre
                  ? movie.show.genres.map((str) => { return (`${str} `); })
                  : 'N/A'
              }
              <br />
              Language :
              {
                movie && movie.show
                  ? movie.show.language
                  : 'N/A'
              }
              <br />
              Created by :
              {
                movie && movie.show && movie.show.network
                  ? movie.show.network.name
                  : 'N/A'

              }
              <br />
              Rating :
              {
                movie && movie.show && movie.show.rating
                  ? movie.show.rating.average
                  : 'N/A'
              }
              <br />
            </Typography>
          </Card>
        </Grid>
      </Grid>
    );
  }

  function getMovieDescription() {
    if (isError) {
      return <h1 align="center"> Error while fetching movie data. </h1>;
    }
    if (isLoading) {
      return <CircularProgress size={40} style={{ marginLeft: '50%' }} />;
    }
    return movieDescription();
  }

  return (
    <>
      <Header />
      {
        getMovieDescription()
      }
      <Footer />
    </>
  );
}
