import ghibliNavImg from "../../imgs/ghibli-1.png"

const FavoriteFilms = () => {
  return (
    <section className="favorite-films">
      <div className="films-wrapper">
        <h2>Top 3 films to watch next</h2>

        <div className="search-img">
          <img src={ghibliNavImg} alt="Dancing characters from my neighbor Totoro"/>
        </div>
      </div>
    </section>
  )
}

export default FavoriteFilms
