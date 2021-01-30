import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import './App.scss';
import Card from '../../components/Card/Card'
import AppSlider from '../appSlider/AppSlider'
import AppToggle from '../appToggle/AppToggle'
import { selectPricing } from '../../redux/pricing/pricingSlice'

function App() {

  const pricing = useSelector(selectPricing)
  const isMobile = useMediaQuery({ query: '(max-width: 375px)' })
  const discountText = isMobile ? '-25%' : '25% discount'

  const handleCTAClick = () => {
    alert(`Start trial for ${pricing.pageViews} pageviews for $${pricing.price}.00 / ${pricing.billingTime}`)
  }


  return (
    <div className="App">
      <section id="title">
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </section>
      <section id="content">
        <Card>
          <div className="pricing-info">
            <div className="pageviews">{`${pricing.pageViews} pageviews`}</div>
            {isMobile ? <div className="slider-wrap"><AppSlider /></div> : null}
            <div className="price"><strong>{`$${pricing.price}.00`}</strong> / {pricing.billingTime}</div>
          </div>
          {isMobile ? null: <div className="slider-wrap"><AppSlider /></div> }
          <div className="billing">
            <p className="billing-monthly">Monthly{isMobile ? null : " Billing"}</p>
            <div className="toggle-wrap"><AppToggle /></div>
            <p className="billing-yearly">Yearly{isMobile ? null : " Billing"}<span className="discount">{discountText}</span></p>
          </div>
          <hr/>
          <footer>
            <section id="footer-info">
              <ul>
                <li>Unlimited websites</li>
                <li>100% data ownership</li>
                <li>Email reports</li>
              </ul>
            </section>
            <section id="cta">
              <button onClick={handleCTAClick}>Start my trial</button>
            </section>
          </footer>
        </Card>
      </section>
    </div>
  );
}

export default App;