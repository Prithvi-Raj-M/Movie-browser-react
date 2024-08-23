import './App.css';
import {useState,useEffect} from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutView from './Components/AboutView';
import SearchView from './Components/SearchView';
import MovieView from './Components/MovieView';
import {  Routes, Route } from 'react-router-dom';


function App() {
const [searchResult, setSearchResult]=useState([]);
const [searchText, setSearchText]=useState('');

useEffect(()=>{
  if(searchText){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=f81754d79080dcb156253e80206cb06d&query=${searchText}&include_adult=false&language=en-US&page=1`)
      .then(response=>response.json())
      .then(data=>{
        setSearchResult(data.results)
      })
  }
},[searchText])
  return (
      <div>
        <Navbar searchText={searchText} setSearchText={setSearchText}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<AboutView />} />
          <Route path="/search" exact element={<SearchView keyword={searchText} searchResult={searchResult}/>} />
          <Route path="/movie/:id" element={<MovieView />} />
        </Routes>
      </div>
  );
}

export default App;
