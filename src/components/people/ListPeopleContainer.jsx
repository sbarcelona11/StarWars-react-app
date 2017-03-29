import React, { PropTypes } from 'react';
import ModalPeopleContainer from './ModalPeopleContainer';

class ListPeopleContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <div className="row center">
          <h5 className="header col s12 light">
            <a className="waves-effect waves-light btn" href={`#${data.name}`}>{data.name}</a>
          </h5>
        </div>
        <ModalPeopleContainer data={data} />
      </div>
    );
  }
}

export default ListPeopleContainer;
