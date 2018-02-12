import React from 'react';
import Photo from './Photo';


const PhotoList = props => {

  const results = props.data;

  let pics = results.map(pic =>
    <Photo url={`http://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id}/>
  );

  return(
    <ul>
      {pics}
    </ul>
  );
}

export default PhotoList;
