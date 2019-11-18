import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Link,
  makeStyles,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import MoviePlaceholderImg from '../Assets/movie_placeholder_img.png';

const useStyles = makeStyles({
  card: {
    width: 200,
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    height: 140,
    paddingTop: '0%',
  },
});

export default function MoviesList({ filteredMovies }) {
  const classes = useStyles();

  function MovieCard() {
    const cards = filteredMovies.map((movie) => {
      return (
        <Grid item md={2} key={movie.show.id}>
          <Link underline="none" component={RouterLink} to={{ pathname: `/movie/${movie.show.id}`, movie: movie.show }}>
            <Card className={classes.card}>
              <CardMedia
                image={
                  movie.show.image
                    ? movie.show.image.medium
                    : MoviePlaceholderImg
                }
                className={classes.cardMedia}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="h4">
                  {movie.show.name}
                </Typography>
                <Typography variant="h5">
                  {movie.show.type}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      );
    });
    return (
      <Grid style={{ width: '99%' }} container justify="center">{cards}</Grid>
    );
  }

  return (
    MovieCard(filteredMovies)
  );
}
