import React, { PropTypes } from 'react';
//import './FilmsContainer.scss';
import { getPlanets } from '../../store/actions';
import ListPlanetsContainer from './ListPlanetsContainer';

class PlanetsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount () {
    const data = this.loadData();
    data.then((planets) => {
      this.setState({ data: planets });
    });
  }

  componentDidMount() {
  }

  loadData() {
    return (getPlanets());
  }

  render () {
    const planetName = this.state.data.map(data => (
      <ListPlanetsContainer
        key={data.name}
        data={data}
      />
    ));
    return (
      <div className="row center">
        {planetName}
      </div>
    );
  }
}

export default PlanetsContainer;
