import React, { Component } from 'react';
import axios from 'axios';

class SearchInput extends Component {
  // initialize this muh
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  //   componentDidMount() {
  //     // automatic geolocation feature. Needs work. Or elimination. 
  //     const success = (response) => {
  //       return {
  //         lat: response.coords.latitude,
  //         lon: response.coords.longitude
  //       }
  //     }

  //     const error = (error) => {
  //       console.log(error)
  //     }

  //     let coords = window.navigator.geolocation.getCurrentPosition(success, error)

  //     console.log(coords)
  //   }

  handleInputChange(e) {
    // the state of this component is the single point of truth for the text input's value
    this.setState({
      value: e.target.value
    })
    /* this is where the autocomplete function would run if it worked on codepen */
    /* this.runAutocomplete(this.state.value) */
  }
  
  /* Autocomplete powered by Google Places API */
  /* Other people have used the Google Map Javascript api for similar results. */
  runAutocomplete(term) {
    const API_KEY = 'saskiahamiltonsaskiahamiltonooooahhhhh'
    const BASE_URL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input='
    const PARAMS = '&types=(cities)&key='
    
    const url = `${BASE_URL}${term}${PARAMS}${API_KEY}`
    
    axios.get(url).then(response => {
      console.log(response)
    })
  }

  handleSubmit(e) {
    // stop the browser from refreshing like it wants to with a standard form event
    e.preventDefault()
      // send the value stored in SearchBar's state to the launchSearch function defined in <App />
    this.props.launchSearch(this.state.value)
      // set the text input back to an empty field for easy searching of another location
    this.setState({
        value: ''
      })
      // all this just to launch the search when you press enter... worth it
  }

  render() {
    return (
      <form className="weather-app__form" onSubmit={this.handleSubmit}>
        <input className="weather-app__search-input" type="text" onChange={this.handleInputChange} value={this.state.value} placeholder="Search for a city..." />
        {/*<button>Search</button>*/}
      </form>
    )
  }
}

export default SearchInput;