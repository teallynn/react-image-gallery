import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';


const PhotoList = props => {

  const results = props.data;
  let pics;
  if (results.length > 0) {
    pics = results.map(pic => <Photo url={`http://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} key={pic.id}/>
    );
  } else {
    pics = <NotFound />
  }

  return(
    <ul>
      {pics}
    </ul>
  );
}

export default PhotoList;
