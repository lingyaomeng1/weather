import React, { Component } from 'react';

import Search_Bar from '../containers/Search_Bar'
import Weather_List from '../containers/weather_list'

export default class App extends Component {
  render() {
    return (
      <div>
      	<Search_Bar />
      	<Weather_List />
      </div>
    );
  }
}
