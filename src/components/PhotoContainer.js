import React, { Component } from 'react';
import PhotoList from './PhotoList';
import axios from 'axios';

const apiKEY = '678754dac22a1763de2dd920377ab18b';

class PhotoContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pics: [],
      loaded: false,
      topic: this.props.topic
    };
  }

  componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKEY}&tags=${this.state.topic}&per_page=32&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pics: response.data.photos.photo,
          loaded: true
        });
      })
      .catch(function (error) {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return(
      <div className="photo-container">
        <h2>{this.props.title}</h2>

          <PhotoList data={this.state.pics}/>

      </div>
    );
  }
}

export default PhotoContainer;
