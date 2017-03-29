import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import FilmsContainer from './components/films/FilmsContainer';
import PeopleContainer from './components/people/PeopleContainer';
import PlanetsContainer from './components/planets/PlanetsContainer';
import SpeciesContainer from './components/species/SpeciesContainer';
import StarshipsContainer from './components/starships/StarshipsContainer';
import VehiclesContainer from './components/vehicles/VehiclesContainer';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={FilmsContainer} />
    <Route path="/films" component={FilmsContainer} />
    <Route path="/people" component={PeopleContainer} />
    <Route path="/planets" component={PlanetsContainer} />
    <Route path="/species" component={SpeciesContainer} />
    <Route path="/starships" component={StarshipsContainer} />
    <Route path="/vehicles" component={VehiclesContainer} />
  </Route>
);
