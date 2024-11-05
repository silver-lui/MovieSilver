import { Link } from "react-router-dom";

// API KEY = b0b34ff88b0e14811eed6de6288bede9

const SearchView = ({keyword, searchResult, id, setId}) =>{
    var posterUrl;
    var resultsHtml;

    if(searchResult.length == 0){
        return(
            <div>
                <div className="Wrapper">
                    <p>YOU ARE SEARCHING FOR {keyword}</p>
                </div>
                <h1 className="center">Result Not Found</h1>
            </div>
        );
    }
    resultsHtml = searchResult.map((obj, i) => {
        if(obj.poster_path == null)
            posterUrl = "https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg";
        else posterUrl = `https://image.tmdb.org/t/p/original/${obj.poster_path}`;

        const moreUrl = `/movie/${obj.id}`;
        return (
            <div key={i}>
                <div class="card">
                    <img src={posterUrl} class="card-img-top" alt="Image Not Found" />
                    <div class="card-body">
                        <h5 class="card-title">{obj.original_title}</h5>
                        <p class="card-text"></p>
                        <Link onClick={() => {
                            setId(obj.id);
                        }} to={moreUrl} class="btn btn-primary">More...</Link>
                    </div>
                </div>
            </div>
        );
    })

    return(
        <div>
            <div className="Wrapper">
                <p>YOU ARE SEARCHING FOR {keyword}</p>
            </div>
            <div className="container text-center">
                <div className="row row-cols-5">
                    {resultsHtml}
                </div>
            </div>
        </div>
    );
}

export default SearchView;