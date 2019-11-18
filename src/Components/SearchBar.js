import React from 'react';
import { makeStyles, TextField, Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: 10,
    marginRight: 1,
  },
  bar: {
    minHeight: '20vh',
  },
}));

const submitHandler = (event) => {
  event.preventDefault();
};

export default function SearchBar({ handleSearchInput }) {
  const classes = useStyles();

  return (

    <Box className={classes.bar}>
      <form
        className={classes.container}
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <TextField
          id="searchBar"
          margin="normal"
          variant="filled"
          placeholder="Search for a movie..."
          className={classes.textField}
          onChange={handleSearchInput}
        />
      </form>
    </Box>
  );
}
