import React, { PropTypes } from 'react';
import { getSpecies } from '../../store/actions';
import ListSpeciesContainer from './ListSpeciesContainer';

class SpeciesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount () {
    const data = this.loadData();
    data.then((species) => {
      this.setState({ data: species });
    });
  }

  componentDidMount() {
  }

  loadData() {
    return (getSpecies());
  }

  render () {
    const speciesName = this.state.data.map(data => (
      <ListSpeciesContainer
        key={data.name}
        data={data}
      />
    ));
    return (
      <div className="row center">
        {speciesName}
      </div>
    );
  }
}

export default SpeciesContainer;
