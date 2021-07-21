import "./App.css";
import Business from "../Business/Business";
import React from 'react'
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/Searchbar'


class App extends React.Component {
  render() {
    return (
      <div className="App">
      <h1>ravenous</h1>
      <SearchBar/>
      <BusinessList/>
    </div>
    )
  }
};


export default App;
