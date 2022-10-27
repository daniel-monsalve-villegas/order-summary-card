import './OrderSummaryCard.css'
import hero from './assets/illustration-hero.svg'
import music from './assets/icon-music.svg'

function OrderSummaryCard() {
  return (
    <main>    
      <header>
        <img className="hero" src={hero} alt="illustration with a woman listen to music in a purple background" />
      </header>
      <section>
        <h2 className="title">Order Summary</h2>
        <p>You can now listen to millions of songs, audiobooks, and podcasts on
        any device anywhere you like!</p>
        <div className="plan">
          <img className="music" src={music} alt="icon of a musical note" />
          <h4 className="boldi">Annual Plan <p>$59.99/year</p></h4>
          <a href="#">Change</a>
        </div>
        <button className="blue">Proceed to Payment</button>
        <a href="#" id="cancel">Cancel Order</a>
      </section>
    </main>

  )
}

export default OrderSummaryCard
