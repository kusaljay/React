import React from 'react';

const Movie = (props) => {
  return(
    <div className="Movie">
      <p>
        {props.name}<br />
        {props.description}<br />
        {props.director}
      </p>
    </div>
  );
}

export default Movie;