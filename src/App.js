import './App.css';
import NavBar from './NavBar';
import AboutView from './About';
import HomeView from './Home';
import SearchView from "./Search";
import MovieView from './Movies';
import PageNotFound from "./PageNotFound";
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=b0b34ff88b0e14811eed6de6288bede9&query=${searchText}&include_adult=false&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => {
        // console.log(data.results);
        setSearchResult(data.results);
      })
  }, [searchText]);


  return (
    <div>
      <NavBar searchText={{searchText}} setSearchText={setSearchText}/>
      <Switch>
        <Route path='/' exact>
          <HomeView />
        </Route>
        <Route path='/about' component={AboutView}/>
        <Route path='/search'>
          <SearchView keyword={searchText} searchResult={searchResult} id={id} setId={setId}/>
        </Route>
        <Route path="/movie/:id">
          <MovieView id={id}/>
        </Route>
        <Route path="*">
          <PageNotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
