import { useEffect, useState } from "react";

const MovieView = (id) => {
    const [movieDetiles, setMovieDetiles] = useState({});

    useEffect(() => {
        const currentUrl = window.location.href;
        let ID = currentUrl.split('/');
        ID = ID[ID.length - 1];
        
        const url = `https://api.themoviedb.org/3/movie/${ID}?api_key=b0b34ff88b0e14811eed6de6288bede9&language=en-US`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMovieDetiles(data);
                console.log(data);
            });
    }, [id])

    const posterUrl = `https://image.tmdb.org/t/p/original/${movieDetiles.poster_path}`;

    return(
        <div>
            <div className="Wrapper">
                <h1>{movieDetiles.original_title}</h1>
            </div>
            <img src={posterUrl} className="movie-img"></img>
            <div className="overview">
                <h1><u><b>OVERVIEW</b></u></h1>
                <div className="overview-text">
                    <p>{movieDetiles.overview}</p>
                </div>
            </div>
        </div>
    );
}

export default MovieView;