import React from 'react';

class Movie extends React.Component{

render(){
    return(
        this.props.movie.map((item) => (
        <>
          <p>title:{item.title}</p>
          <p>overview:{item.overview}</p>
          <p>vote_average:{item.vote_average}</p>
          <p>vote_count:{item.vote_count}</p>
          <p>poster_path:{item.poster_path}</p>
          <p>popularity:{item.popularity}</p>
          <p>release_date:{item.release_date}</p>
        </>

        ))
    )
    
}

}

export default Movie;