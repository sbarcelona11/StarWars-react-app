import React, { PropTypes } from 'react';
//import './FilmsContainer.scss';
import { getStarchips } from '../../store/actions';
import ListStarhipsContainer from './ListStarshipsContainer';

class StarhipsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount () {
    const data = this.loadData();
    data.then((starships) => {
      this.setState({ data: starships });
    });
  }

  componentDidMount() {
  }

  loadData() {
    return (getStarchips());
  }

  render () {
    const starshipsName = this.state.data.map(data => (
      <ListStarhipsContainer
        key={data.name}
        data={data}
      />
    ));
    return (
      <div className="row center">
        {starshipsName}
      </div>
    );
  }
}

export default StarhipsContainer;
