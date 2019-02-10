import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

// Global CSS (e.g. body)
import './global.scss';

// Major Components
import BannerMessage from './components/BannerMessage';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import GreatQuotes from './components/GreatQuotes';

export default class App extends Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = {
      listOfItems: data,
    };
  }

  render() {
    const { listOfItems } = this.state;
    return (
      <div>
        <BannerMessage>&nbsp;</BannerMessage>
        <Header />
        <br />
        <GreatQuotes />
        <br />
        <List items={listOfItems} />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

// Retrieve static json
fetch('graveyard.json').then((response) => {
  // Process it
  response.json().then((data) => {
    // Sort by the dateClose (date discontinued)
    const graveyard = data.sort((a, b) => new Date(b.dateClose) - new Date(a.dateClose));
    // Render the app
    render(<App data={graveyard} />, document.querySelector('#killedbygoogle'));
  });
});
