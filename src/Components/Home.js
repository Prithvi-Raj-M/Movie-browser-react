import Hero from './Hero';

const Home = () =>{
    return(
      <div>
        <Hero text="Welcome to the Movie Browser"/>
        <div className='container'>
          <div className="row">
            <div className="col-lg-8 my-3 offset-lg-2">
              <p className="lead">
              Introducing Movie Browser - the ultimate movie companion for cinephiles and casual movie-goers alike. With Movie Browser, 
              you can easily browse a vast movie database, search for movies by title, save your watchlist, keep track of movies 
              you've watched, mark favorites, and even rate movies.
               </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
export default Home;