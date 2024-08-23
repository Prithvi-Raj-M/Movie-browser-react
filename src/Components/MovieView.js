import Hero from './Hero';
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

const MovieView=()=>{
    const {id}=useParams()

    const[MovieDetails,setMovieDetails]=useState({})
    const[IsLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f81754d79080dcb156253e80206cb06d&language=en-US`)
            .then(response=>response.json())
            .then(data=>{
                setMovieDetails(data)
                setIsLoading(false)
      })
    }, [id])
    function renderMovieDetails(){
        if(IsLoading){
            return <Hero text="Loading..."/>
        }
        if(MovieDetails){
            const posterPath=`http://image.tmdb.org/t/p/w500${MovieDetails.poster_path}`
            const backdropURL=`http://image.tmdb.org/t/p/original${MovieDetails.backdrop_path}`
            return (
                <div>
                    <Hero text={MovieDetails.original_title} backdrop={backdropURL}/>
                    <div className="container">
                        <div className='row my-5'>
                            <div className='col-md-3'>
                                <img src={posterPath} className='img-fluid shadow rounded'alt={MovieDetails.original_title}></img>
                            </div>
                            <div className='col-md-9'>
                                <h2>{MovieDetails.original_title}</h2>
                                <p className='lead'>
                                    {MovieDetails.overview}
                                </p>
                                <p className='lead'>
                                    <strong>Ratings:</strong>{MovieDetails.vote_average}
                                    <br></br>
                                    <strong>Votes</strong>{MovieDetails.vote_count}
                                    <p>{MovieDetails.poster_path}</p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
    return renderMovieDetails()
}
export default MovieView;