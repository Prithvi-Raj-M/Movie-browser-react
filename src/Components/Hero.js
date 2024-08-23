const Hero=({text,backdrop})=>{

    //TMDB API Key:f81754d79080dcb156253e80206cb06d

    return(
    <header className="bg-dark text-white p-5 hero-container">
        <h2 className="hero-text">{text}</h2>
        {backdrop&&
            <div className="hero-backdrop" style={{backgroundImage:`url(${backdrop})`}}></div>
        }

    </header>

    )
}
export default Hero;