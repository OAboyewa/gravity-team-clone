import { useEffect, useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0);

  /*useEffect(() => {
    const container = document.getElementById("slider-content-00");
    const content = container.getElementsByClassName("content-cnt");
    const element = <div className="content-cnt"></div>;
    let count, start;

    function step(timestamp) {
      if (start === undefined) {
        start = timestamp;
      }

      const elapsed = timestamp - start;
      count = (-Math.min(0.01 * elapsed, 70));
      for(let i = 0; i < content.length; i++) {
        content[i].style.transform = `translate(${count}px, 0)`;
      }

      if (count == -70) {
        content[0].remove();
        container.append(element);
      }

      console.log(timestamp);

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, []);*/

  return (
    <>
      {/*TOP SITE NAVIGATION*/}
      <div className="header-cnt">
        <div className="header-logo-wrp">
          <a className="" href="">
            < img className="header-logo-img" src="https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/logo-light.png" />
          </a>
        </div>
        <div className="header-navigation-wrp">
          <ul className="header-navigation-cnt">
            <li><a href="">ABOUT US</a></li>
            <li>
              <a href="">OUR SERVICES</a>
              <div className="dropdown dp00-position-coords">
                <a className="dp00-item" href="">CRYPTO COIN MARKET MAKING</a>
                <a className="dp00-item" href="">LIQUIDITY FOR CRYPTO EXCHANGES</a>
              </div>
            </li>
            <li><a href="">WORK WITH US</a></li>
            <li><a href="">BLOG</a></li>
          </ul>
        </div>
        <div className="header-contact-nav-cnt">
          <a href="">GET IN TOUCH</a>
          <div className="dropdown dp01-position-coords">
            <span className="dp01-item dp01-label">
              What Type of Client Are You?
            </span>
            <a className="dp01-item" href="">CRYPTO PROJECT</a>
            <a className="dp01-item" href="">CRYPTO EXCHANGE</a>
            <a className="dp01-item" href="">CRYPTO VC</a>
            <a className="dp01-item" href="">OTHER</a>
          </div>
        </div>
      </div>
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
          <div className="slider-content-cnt" id="slider-content-00">
          </div>
        </div>
      </div>
    </>
  )
}

export default App
