import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <i class="fas fa-bars"></i>
        <Link to={'/'}>
          <img src='https://www.youtube.com/yt/about/media/images/brand-resources/logos/YouTube-logo-full_color_dark.svg' width='35px'/>
        </Link>

      </header>
    );
  }
}

export default Header;