import React, { useEffect, useState } from 'react';
import axios from "axios";
// import "./style";
import {Container, Loader, Movies} from "./style";
import Movie from '/Users/jeongtaeung/Desktop/study-react-app/my-app/src/pages/Movie/index';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovies = async() => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    setMovie(movies);
    setIsLoading(false);
    console.log("aa ", movies);
  };
  useEffect(()=> {
    getMovies();
  },[]);

  return (
      <Container>
        { isLoading ? (
            <Loader>
              <span className="loader_text">Loading...</span>
            </Loader>
        ) : (
            <Movies>
              {movie.map(({genres, id, medium_cover_image, summary, title, year}) => (
                  <Movie key={id} id={id} year={year} title={title} summary={summary} poster={medium_cover_image} genres={genres}/>
              ))}
            </Movies>
        ) }
      </Container>
  )
}
export default Index;

