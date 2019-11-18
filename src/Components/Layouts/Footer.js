import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  text: {
    textAlign: 'center',
    color: 'grey',
  },
  box: {
    minHeight: '10vh',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <footer>
        <h3 className={classes.text}>react-technical-test</h3>
      </footer>
    </Box>
  );
}
