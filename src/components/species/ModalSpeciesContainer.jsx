import React, { PropTypes } from 'react';
import { getByUrl } from '../../store/actions';

class ModalSpeciesContainer extends React.Component
{
  constructor(props) {
    super(props);

    this.state =  {
      movies: [],
      charactersSp: []
    };
  }

  componentDidMount () {
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

    // people
    let peoples = this.props.data.people;
    peoples.forEach(function (url) {
      let data = getByUrl(url);
      data.then((people) => {
        this.state.charactersSp.push({
          name: people.name,
          url: url
        });
        this.setState({ charactersSp: this.state.charactersSp });
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

    var createPeoples = this.state.charactersSp.map(function(item, index) {
      return (
        <p key={item.name + index}> {item.name} </p>
      );
    });
    return (
      <div id={data.name} className="modal">
        <div className="modal-content">
          <h4>{data.name}</h4>
          <p><strong>Classification:</strong> {data.classification}</p>
          <p><strong>Designation:</strong> {data.designation}</p>
          <p><strong>Average Height:</strong> {data.average_height}</p>
          <p><strong>Eye Color(s):</strong> {data.eye_colors}</p>
          <p><strong>Hair Color(s):</strong> {data.hair_colors}</p>
          <p><strong>Skin Color(s):</strong> {data.skin_colors}</p>
          <p><strong>Language:</strong> {data.language}</p>
          <p><strong>Movies:</strong> {createMovies}</p>
          <p><strong>Characters:</strong> {createPeoples}</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
    );
  }
}

export default ModalSpeciesContainer;
