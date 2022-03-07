import React, {VFC} from "react";
import {Movie, MovieGenres, MovieGenresLI, MoviePoster, MovieTitle, MovieYear} from './style';

interface Props {
    id: string;
    year: string;
    title: string;
    summary: string;
    poster: string;
    genres: Array<string>;
}

const Index: VFC<Props> = ({id, year, title, summary, poster, genres}) => {
    return (
        <Movie>
            <MoviePoster src={poster} alt={title} title={title} />
            <div className="movie_data">
                <MovieTitle>{title}</MovieTitle>
                <MovieYear>{year}</MovieYear>
                <MovieGenres>
                    {genres.map((genre: string, index: number) => (
                        <MovieGenresLI key={index}>
                            {genre}
                        </MovieGenresLI>
                    ))}
                </MovieGenres>
                <p className="movie_summary">{summary.slice(0, 250)}...</p>
            </div>
        </Movie>
    );
}

export default Index;