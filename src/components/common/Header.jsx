import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = ({ appName }) => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-4">
        <div className="container">
          <a href="/" className="brand-logo">{appName}</a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/films">Films</Link></li>
            <li><Link to="/people">People</Link></li>
            <li><Link to="/planets">Planets</Link></li>
            <li><Link to="/species">Species</Link></li>
            <li><Link to="/starships">Starships</Link></li>
            <li><Link to="/vehicles">Vehicles</Link></li>
          </ul>

          {/*<ul className="side-nav" id="mobile-demo">*/}
            {/*<li><a href="sass.html">Sass</a></li>*/}
            {/*<li><a href="badges.html">Components</a></li>*/}
            {/*<li><a href="collapsible.html">Javascript</a></li>*/}
            {/*<li><a href="mobile.html">Mobile</a></li>*/}
          {/*</ul>*/}
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  appName: PropTypes.string
};

Header.defaultProps = {
  appName: 'Star Wars API'
};

export default Header;
