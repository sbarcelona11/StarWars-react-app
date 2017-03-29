import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from './common/Header';
import Footer from './common/Footer';
import './App.scss';

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Header />
        <div className="section no-pad-bot">
          <div className="container new-height">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
};

export default connect()(App);
