import imgHero from '../imgs/illustration-hero.svg';
import icon from '../imgs/icon-music.svg'

export default function Card() {
  return (
    <div className="card">
      <img className="card__img" src={imgHero} alt="illustration-hero" />
      <div className="card__main">
        <h3 className="card__title">Order Summary</h3>
        <p className="card__par">
          You can now listen to millions of songs, audiobooks, and podcasts on any
          device anywhere you like!
        </p>
        <div className="card__price-box">
          <img className='card__price-icon' src={icon} alt="music-icon" />
          <div className="card__price-plan">
            <h6>Annual Plan</h6>
            <p>$59.99/year</p>
          </div>
          <a className="card__price-change" href="#">Change</a>
        </div>
        <div className="card__btns">
          <button className='btn-primary'>Proceed to Payment</button>
          <button className='btn-primary--ghost'>Cancel Order</button>
        </div>
      </div>
    </div>
  );
}
