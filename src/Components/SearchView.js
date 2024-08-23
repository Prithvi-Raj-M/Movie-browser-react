import Hero from './Hero';
import Image from './Detail.jpg';
import { Link } from "react-router-dom";

const MovieCard =({movie})=>{
    function Posterpathcheck(){
        let posterURLcheck=""
        if(movie.poster_path!==null){
            posterURLcheck=`http://image.tmdb.org/t/p/w500${movie.poster_path}`
        }
        else{
            posterURLcheck=Image
        }
        return posterURLcheck
    }
    const detailUrl = `/movie/${movie.id}`
    const posterURL=Posterpathcheck()
    return(
    <div className="col-lg-3 col-md-2 col-2 my-4">
        <div className="card" >
            <img src={posterURL} className="card-img-top" alt={movie.original_title}></img>
            <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                <p className="card-text">{movie.overview}.</p>
                <Link to={detailUrl} className="btn btn-primary">More Details</Link>
            </div>
        </div>
    </div>
    )
}

const SearchView = ({keyword,searchResult}) =>{
    const title = `You are searching for ${keyword}`
    function CheckResult(){
        if(searchResult.length===0){
            return(<div className='lead'>There are no results for {keyword}!!!!</div>)
        }
    }
    const resultHTML=searchResult.map((obj,i)=>{
        return(
            <MovieCard movie={obj} key={i} />
        )
    })
    return(
      <div>
        <Hero text={title}/>
        {CheckResult()}
        {resultHTML &&
            <div className="container">
                <div className='row'>
                    {resultHTML}
                </div>
            </div>
        }
      </div>
    )
  }
export default SearchView;