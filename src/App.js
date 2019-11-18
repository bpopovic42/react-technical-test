import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MoviePage, Home } from './Containers';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movie" component={MoviePage} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
