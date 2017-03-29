import React, { PropTypes } from 'react';
import ModalFilmsContainer from './ModalFilmsContainer';

class ListFilmsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
        <div className="row">
          <div className="center">
            <h5 className="header col s12 light">
              <a className="waves-effect waves-light btn" href={`#${data.episode_id}`}>{data.title}</a>
            </h5>
          </div>
          <ModalFilmsContainer data={data} />
        </div>
    );
  }
}

export default ListFilmsContainer;
