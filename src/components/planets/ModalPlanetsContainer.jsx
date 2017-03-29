import React, { PropTypes } from 'react';
import { getByUrl } from '../../store/actions';

class ModalPeopleContainer extends React.Component
{
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      residentsPl: []
    };
  }

  componentDidMount() {
    $('.modal').modal();
  }

  componentWillMount() {
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

    // Residents
    let residents = this.props.data.residents;
    residents.forEach(function (url) {
      let data = getByUrl(url);
      data.then((resident) => {
        this.state.residentsPl.push({
          name: resident.name,
          url: url
        });
        this.setState({ residentsPl: this.state.residentsPl });
      });
    }.bind(this));
  }

  render () {

    var createMovies = this.state.movies.map(function(item, index) {
      return (
        <p key={item.name + index}> {item.name} </p>
      );
    });

    var createResidents = this.state.residentsPl.map(function(item, index) {
      return (
        <p key={item.name + index}> {item.name} </p>
      );
    });

    const { data } = this.props;
    return (
      <div id={data.name} className="modal">
        <div className="modal-content">
          <h4>{data.name}</h4>
          <p><strong>Diameter:</strong> {data.diameter}</p>
          <p><strong>Rotation Period:</strong> {data.rotation_period}</p>
          <p><strong>Orbital Period:</strong> {data.orbital_period}</p>
          <p><strong>Gravity:</strong> {data.gravity}</p>
          <p><strong>Population:</strong> {data.population}</p>
          <p><strong>Climate:</strong> {data.climate}</p>
          <p><strong>Terrain:</strong> {data.terrain}</p>
          <p><strong>Surface Water:</strong> {data.surface_water}</p>
          <p><strong>Movies:</strong> {createMovies}</p>
          <p><strong>Residents:</strong> {createResidents}</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    );
  }
}

export default ModalPeopleContainer;
