import React, { PropTypes } from 'react';
import { getVehicles } from '../../store/actions';
import ListVehiclesContainer from './ListVehiclesContainer';

class VehiclesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount () {
    const data = this.loadData();
    data.then((vehicles) => {
      this.setState({ data: vehicles });
    });
  }

  componentDidMount() {
  }

  loadData() {
    return (getVehicles());
  }

  render () {
    const vehiclesName = this.state.data.map(data => (
      <ListVehiclesContainer
        key={data.name}
        data={data}
      />
    ));
    return (
      <div className="row center">
        {vehiclesName}
      </div>
    );
  }
}

export default VehiclesContainer;
