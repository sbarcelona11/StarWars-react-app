import {browserHistory} from 'react-router';
import swapi from 'sw-api-js';

export const getAll = () => {
  return swapi()
    .then(response => response)
    .then((all) => {
      return all;
    })
    .catch(e => e);
  //.then(() => { browserHistory.push('/'); });
};

export const getByUrl = (url) => {
  return swapi(url)
    .then(response => response)
    .then((peoples) => {
      return peoples;
    })
    .catch(e => e);
  // .then(() => {
  //   browserHistory.push('/');
  // });
};

export const getFilms = () => {
  return swapi('films')
    .then(response => response)
    .then((films) => {
      return films;
    })
    .catch(e => e);
    // .then(() => {
      // browserHistory.push('/');
    // });
};

export const getFilmsById = (filmId) => {
  return swapi('films', filmId)
    .then(response => response)
    .then((films) => {
      return films;
    })
    .catch(e => e);
    // .then(() => {
    //   browserHistory.push('/');
    // });
};

export const getPeoples = () => {
  return swapi('people')
    .then(response => response)
    .then((peoples) => {
      return peoples;
    })
    .catch(e => e);
    // .then(() => {
    //   browserHistory.push('/');
    // });
};

export const getPeoplesById = (peopleId) => {
  return swapi('people', peopleId)
    .then(response => response)
    .then((peoples) => {
      return peoples;
    })
    .catch(e => e);
    // .then(() => {
    //   browserHistory.push('/');
    // });
};

export const getPlanets = () => {
  return swapi('planets')
    .then(response => response)
    .then((planets) => {
      return planets;
    })
    .catch(e => e);
    // .then(() => {
    //   browserHistory.push('/');
    // });
};

export const getPlanetsById = (planetId) => {
  return swapi('planets', planetId)
    .then(response => response)
    .then((peoples) => {
      return peoples;
    })
    .catch(e => e);
    // .then(() => {
    //   browserHistory.push('/');
    // });
};

export const getSpecies = () => {
  return swapi('species')
    .then(response => response)
    .then((species) => {
      return species;
    })
    .catch(e => e);
    // .then(() => {
    //   browserHistory.push('/');
    // });
};

export const getSoeciesById = (speciesId) => {
  return swapi('species', speciesId)
    .then(response => response)
    .then((species) => {
      return species;
    })
    .catch(e => e);
    // .then(() => {
    //   browserHistory.push('/');
    // });
};

export const getStarchips = () => {
  return swapi('starships')
    .then(response => response)
    .then((starships) => {
      return starships;
    })
    .catch(e => e);
    // .then(() => {
    //   browserHistory.push('/');
    // });
};

export const getStarshipsById = (starshipId) => {
  return swapi('starships', starshipId)
    .then(response => response)
    .then((starhips) => {
      return starhips;
    })
    .catch(e => e);
    // .then(() => {
    //   browserHistory.push('/');
    // });
};

export const getVehicles = () => {
  return swapi('vehicles')
    .then(response => response)
    .then((vehicles) => {
      return vehicles;
    })
    .catch(e => e);
    // .then(() => {
    //   browserHistory.push('/');
    // });
};

export const getVehiclesById = (vehiclesId) => {
  return swapi('vehicles', vehiclesId)
    .then(response => response)
    .then((vehicles) => {
      return vehicles;
    })
    .catch(e => e);
    // .then(() => {
    //   browserHistory.push('/');
    // });
};
