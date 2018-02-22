import React, { Component } from 'react';

import Header from './header';
// we want to put the header into app.js rather than the outermost index.js b/c index.js (or router) implies that only sometimes the component will be displayed

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
