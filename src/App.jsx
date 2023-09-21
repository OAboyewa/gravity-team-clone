import './App.css'
import Header from '/src/components/Header.jsx';
import Slider from '/src/components/Slider.jsx';

function App() {
  return (
    <>
      {/*TOP SITE NAVIGATION*/}
      <Header />
      {/*HERO*/}
      <div className="hero">
        <h1 className="hero-heading">Balancing Crypto Markets</h1>
        <p className="hero-subheading">Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 200+ digital assets across 25+ centralized spot and derivative crypto exchanges.</p>
        <div className="hero-btn">
          <a className="btn-txt-cnt" href="#">
            <div className="btn-bg-overlay"></div>
            <span className="btn-txt">GET IN TOUCH</span>
          </a>
        </div>
        <div className="hero-bg-video">
          <video src="\src\assets\hero-animation.mp4" autoPlay loop></video>
        </div>
        <div className="hero-infinite-slider-cnt">
          <div className="slider-title-wrp">
            <span className="slider-title">TRADING</span>
          </div>
          <Slider />
        </div>
      </div>
    </>
  )
}

export default App
