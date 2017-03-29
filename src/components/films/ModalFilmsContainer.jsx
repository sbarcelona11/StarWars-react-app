import React, {PropTypes} from 'react';
import './ModalFilmsContainer.css';
import { getByUrl } from '../../store/actions';


class ModalFilmsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      speciesF: [],
      starshipsF: [],
      vehiclesF: [],
      charactersF: [],
      planetsF: []
    };
  }

  componentWillMount() {
    // Species
    let species = this.props.data.species;
    species.forEach(function (url) {
      let data = getByUrl(url);
      data.then((specie) => {
        this.state.speciesF.push({
          name: specie.name,
          url: url
        });
        this.setState({ speciesF: this.state.speciesF });
      });
    }.bind(this));

    // Starships
    let starships = this.props.data.starships;
    starships.forEach(function (url) {
      let data = getByUrl(url);
      data.then((vehicle) => {
        this.state.starshipsF.push({
          name: vehicle.name,
          url: url
        });
        this.setState({ starshipsF: this.state.starshipsF });
      });
    }.bind(this));

    // Vehicles
    let vehicles = this.props.data.vehicles;
    vehicles.forEach(function (url) {
      let data = getByUrl(url);
      data.then((starship) => {
        this.state.vehiclesF.push({
          name: starship.name,
          url: url
        });
        this.setState({ vehiclesF: this.state.vehiclesF });
      });
    }.bind(this));

    // Characters
    let characters = this.props.data.characters;
    characters.forEach(function (url) {
      let data = getByUrl(url);
      data.then((character) => {
        this.state.charactersF.push({
          name: character.name,
          url: url
        });
        this.setState({ charactersF: this.state.charactersF });
      });
    }.bind(this));

    // Planets
    let planets = this.props.data.planets;
    planets.forEach(function (url) {
      let data = getByUrl(url);
      data.then((planet) => {
        this.state.planetsF.push({
          name: planet.name,
          url: url
        });
        this.setState({ planetsF: this.state.planetsF});
      });
    }.bind(this));
  }

  componentDidMount() {
    $('.modal').modal();
  }

  render() {
    const { data } = this.props;
    var createSpecies = this.state.speciesF.map(function(item, index) {
      return (
        <p key={item.name + index}> {item.name} </p>
      );
    });
    var createStarships = this.state.starshipsF.map(function(item, index) {
      return (
        <p key={item.name + index}> {item.name} </p>
      );
    });
    var createVehicles = this.state.vehiclesF.map(function(item, index) {
      return (
        <p key={item.name + index}> {item.name} </p>
      );
    });
    var createCharacters = this.state.charactersF.map(function(item, index) {
      return (
        <p key={item.name + index}> {item.name} </p>
      );
    });
    var createPlanet = this.state.planetsF.map(function(item, index) {
      return (
        <p key={item.name + index}> {item.name} </p>
      );
    });
    return (
      <div id={data.episode_id} className="modal">
        <div className="modal-content">
          <h4>{data.title}</h4>
          <p><strong>Episode Id:</strong> {data.episode_id}</p>
          <p><strong>Director:</strong> {data.director}</p>
          <p><strong>Producer(s):</strong> {data.producer}</p>
          <p><strong>Release Date:</strong> {data.release_date}</p>
          <p><strong>Species:</strong> {createSpecies}</p>
          <p><strong>Starships:</strong> {createStarships} </p>
          <p><strong>Vehicles:</strong> {createVehicles}</p>
          <p><strong>Characters:</strong> {createCharacters}</p>
          <p><strong>Planets:</strong> {createPlanet}</p>
          <p><strong>Opening Crawl:</strong></p>
          <p>{data.opening_crawl}</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    );
  }
}

export default ModalFilmsContainer;

