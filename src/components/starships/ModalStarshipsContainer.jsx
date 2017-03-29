import React, { PropTypes } from 'react';
import { getByUrl } from '../../store/actions';

class ModalStarshipsContainer extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      pilotsSt: []
    };
  }

  componentDidMount() {
    $('.modal').modal();
  }

  componentWillMount () {
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
    // Pilots
    let peoples = this.props.data.pilots;
    peoples.forEach(function (url) {
      let data = getByUrl(url);
      data.then((people) => {
        this.state.pilotsSt.push({
          name: people.name,
          url: url
        });
        this.setState({ pilotsSt: this.state.pilotsSt });
      });
    }.bind(this));
  }

  render () {
    const { data } = this.props;

    var createMovies = this.state.movies.map(function(item, index) {
      return (
        <p key={item.name + index}> {item.name} </p>
      );
    });

    var createPilots = this.state.pilotsSt.map(function(item, index) {
      return (
        <p key={item.name + index}> {item.name} </p>
      );
    });
    return (
      <div id={data.name} className="modal">
        <div className="modal-content">
          <h4>{data.name}</h4>
          <p><strong>Model:</strong> {data.model}</p>
          <p><strong>Starship Class:</strong> {data.starship_class}</p>
          <p><strong>Cost in Credits:</strong> {data.cost_in_credits}</p>
          <p><strong>Length:</strong> {data.length}</p>
          <p><strong>Passenger Size:</strong> {data.passengers}</p>
          <p><strong>Max Atmosphering Speed:</strong> {data.max_atmosphering_speed}</p>
          <p><strong>Hyperdrive Rating:</strong> {data.hyperdrive_rating}</p>
          <p><strong>MGLT:</strong> {data.MGLT}</p>
          <p><strong>Cargo Capacity:</strong> {data.cargo_capacity}</p>
          <p><strong>Consumables:</strong> {data.consumables}</p>
          <p><strong>Movies:</strong> {createMovies}</p>
          <p><strong>Pilots:</strong> {createPilots}</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    );
  }
}

export default ModalStarshipsContainer;
