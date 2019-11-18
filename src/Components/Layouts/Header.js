import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import {
  Box,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';

const useStyles = makeStyles({
  box: {
    minHeight: '10vh',
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <AppBar position="static">
        <Toolbar>
          <IconButton component={Link} to={{ pathname: '/' }} edge="start">
            <HomeIcon style={{ color: 'white', fontSize: '35' }} />
          </IconButton>
          <Typography variant="h6" align="center" style={{ flexGrow: 1 }}>
            MovieDB
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
