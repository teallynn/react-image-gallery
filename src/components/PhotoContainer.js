import React, { Component } from 'react';
import Photo from './Photo';
import App from '../App';
import axios from 'axios';

const apiKEY = '678754dac22a1763de2dd920377ab18b';

class PhotoContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pics: [],
      loaded: false,
      topic: 'tapir'
    };
  }

  componentDidMount() {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKEY}&tags=${this.state.topic}&per_page=30&format=json&nojsoncallback=1`)
      .then(function (response) {
        console.log(response);
        console.log(this.state.topic);
        this.setState({
          pics: response.data.photos,
          loaded: true
        });
      })
      .catch(function (error) {
        console.log('Error fetching and parsing data');
      });
  }

  componentWillUnmount() {

  }

  render() {
    console.log(this.state.pics);
    return(
      <div className="photo-container">
        <h2>{this.props.title}</h2>
        <ul>
          <li>
            <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg" alt="" />
          </li>
          <li>
            <img src="https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg" alt="" />
          </li>

          <Photo />

          <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default PhotoContainer;
