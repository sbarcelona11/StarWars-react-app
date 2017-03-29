import React from 'react';
import './FilmsContainer.scss';
import { getFilms } from '../../store/actions';
import ListFilmsContainer from './ListFilmsContainer';

class FilmsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount () {
    const data = this.loadData();
    data.then((films) => {
      this.setState({ data: films });
    });
  }

  componentDidMount() {
  }

  loadData() {
    return (getFilms());
  }

  render () {
    const filmTitles = this.state.data.map(data => (
      <ListFilmsContainer
        key={data.episode_id}
        data={data}
      />
    ));
    return (
      <div className="row center">
        {filmTitles}
      </div>
    );
  }
}

export default FilmsContainer;
