import React, { PropTypes } from 'react';
//import './FilmsContainer.scss';
import { getPeoples } from '../../store/actions';
import ListPeopleContainer from './ListPeopleContainer';

class PeopleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount () {
    const data = this.loadData();
    data.then((people) => {
      this.setState({ data: people });
    });
  }

  componentDidMount() {
  }

  loadData() {
    return (getPeoples());
  }

  render () {
    const peopleName = this.state.data.map(data => (
      <ListPeopleContainer
        key={data.name}
        data={data}
      />
    ));
    return (
      <div className="row center">
        {peopleName}
      </div>
    );
  }
}

export default PeopleContainer;
