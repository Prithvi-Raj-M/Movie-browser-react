import Hero from './Hero';


const AboutView = () =>{
    return(
      <div>
        <Hero text="About Us" />
        <div className='container'>
          <div className="row">
            <div className="col-lg-8 my-3 offset-lg-2">
              <p className="lead">
              About Us: Welcome to Movie Browser, your ultimate destination for discovering and exploring a diverse 
              collection of films. Our platform offers a seamless experience for movie enthusiasts, allowing you to 
              search, filter, and find movies that match your interests. Whether you're looking for the latest blockbusters
               or hidden gems, Movie Browser provides detailed movie information, personalized recommendations, and the ability
                to manage your own watchlist. Our mission is to make movie browsing enjoyable and informative, helping you
                 find your next great film with ease.
               </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
export default AboutView;