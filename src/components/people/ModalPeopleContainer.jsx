import React, { PropTypes } from 'react';
import { getByUrl } from '../../store/actions';

class ModalPeopleContainer extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      speciesP: [],
      starshipsP: [],
      vehiclesP: [],
      movies: []
    };
  }

  componentDidMount() {
    $('.modal').modal();
  }

  componentWillMount() {
    // Species
    let species = this.props.data.species;
    species.forEach(function (url) {
      let data = getByUrl(url);
      data.then((specie) => {
        this.state.speciesP.push({
          name: specie.name,
          url: url
        });
        this.setState({ speciesP: this.state.speciesP });
      });
    }.bind(this));
    // Starships
    let starships = this.props.data.starships;
    starships.forEach(function (url) {
      let data = getByUrl(url);
      data.then((vehicle) => {
        this.state.starshipsP.push({
          name: vehicle.name,
          url: url
        });
        this.setState({ starshipsP: this.state.starshipsP });
      });
    }.bind(this));

    // Vehicles
    let vehicles = this.props.data.vehicles;
    vehicles.forEach(function (url) {
      let data = getByUrl(url);
      data.then((starship) => {
        this.state.vehiclesP.push({
          name: starship.name,
          url: url
        });
        this.setState({ vehiclesP: this.state.vehiclesP });
      });
    }.bind(this));
    // Movies
    let movies = this.props.data.films;
    movies.forEach(function (url) {
      let data = getByUrl(url);
      data.then((movies) => {
        this.state.movies.push({
          name: movies.title,
          url: url
        });
        this.setState({ movies: this.state.movies });
      });
    }.bind(this));
  }

  render () {
    const { data } = this.props;
    var createSpecies = this.state.speciesP.map(function(item, index) {
      return (
        <p key={item.name + index}> {item.name} </p>
      );
    });
    var createStarships = this.state.starshipsP.map(function(item, index) {
      return (
        <p key={item.name + index}> {item.name} </p>
      );
    });
    var createVehicles = this.state.vehiclesP.map(function(item, index) {
      return (
        <p key={item.name + index}> {item.name} </p>
      );
    });
    var createMovies = this.state.movies.map(function(item, index) {
      return (
        <p key={item.name + index}> {item.name} </p>
      );
    });
    return (
      <div id={data.name} className="modal">
        <div className="modal-content">
          <h4>{data.name}</h4>
          <p><strong>Birth Year:</strong> {data.birth_year}</p>
          <p><strong>Eye Color:</strong> {data.eye_color}</p>
          <p><strong>Gender:</strong> {data.gender}</p>
          <p><strong>Hair Color:</strong> {data.hair_color}</p>
          <p><strong>Height:</strong> {data.height}</p>
          <p><strong>Skin Color:</strong> {data.skin_color}</p>
          <p><strong>Species:</strong> {createSpecies}</p>
          <p><strong>Starships:</strong> {createStarships}</p>
          <p><strong>Vehicles:</strong> {createVehicles}</p>
          <p><strong>Films:</strong> {createMovies}</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    );
  }
}

export default ModalPeopleContainer;
