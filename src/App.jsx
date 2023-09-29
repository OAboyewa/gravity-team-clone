import './App.css'
import InteractiveGridCell from './components/InteractiveGridCell';
import Header from '/src/components/Header.jsx';
import Slider from '/src/components/Slider.jsx';

function App() {
  return (
    <>
      {/* TOP SITE NAVIGATION 
      <Header 
        topSiteNavigation={{hl1: "inactive", hl2: "inactive", hl3: "inactive", hl4: "inactive"}} 
        ourServicesDP={{hl1: "inactive", hl2: "inactive"}} /> */}
      {/* HERO
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
      </div> */}
      {/* About Gravity Team */}
      <div className="about-gravity-team">
        <h2 className="about-gravity-team-heading">About Gravity Team</h2>
        <p className="about-gravity-team-description">
          At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. 
          We are a crypto native market maker founded by traders, developers,
           and innovators who are strong believers and supporters of the future of decentralization and digital assets.
        </p>
        <div className="interactive-grid">
          <InteractiveGridCell heading={"~$150 billion"} description={"cumulative trading volume to date"} />
          <InteractiveGridCell heading={"0.8%"} description={"of the global crypto spot trading volume"} />
          <InteractiveGridCell heading={"~40"} description={"Gravity Teammates (& growing)"} />
          <InteractiveGridCell heading={"25+"} description={"leading global and local crypto exchanges"} />
          <InteractiveGridCell heading={"2017"} description={"start, crypto-natives"} />
          <InteractiveGridCell heading={"1,200+"} description={"crypto-asset pairs"} />
          <InteractiveGridCell heading={"24/7"} description={"liquidity"} />
          <InteractiveGridCell heading={"~200 mil"} description={"trades done to date"} />
        </div>
      </div>
      {/* About Gravity Team */}
      <div className="crypto-market-making">
        <h2 className="crypto-market-making-heading">Crypto Market Making</h2>
        <p className="crypto-market-making-description">
          We are a global crypto liquidity provider and algorithmic market maker.
           We trade digital assets listed on Centralized Exchanges in over 45 countries worldwide.
        </p>
        <div className="two-column">
          <div className="two-column-left">
            <span className="two-column-item">Market Making for Crypto Projects</span>
            <span className="two-column-item">Accelerate your token’s journey by boosting its liquidity</span>
            <span className="two-column-item">
              We invest in building long-term, sustainable relationships and support our projects in their growth journey with our services,
               industry expertise and network.
            </span>
            <a className="two-column-item" href="#">
              <span>Learn more</span>
              <img src="https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/arrow.svg" alt="" />
            </a>
          </div>
          <div className="two-column-right">
            {/*<div className="piller-1">
              <div className="table-wrapper">
                <img className="token ani-bounce" src="https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/tokens-growth/token-1.png" alt="" />
                <img className="shadow" src="https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/tokens-growth/shadow-1.png" alt="" />
                <img className="table" src="https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/tokens-growth/table-1.png" alt="" />
                <div className="bar-wrapper ani-elevate">
                  <img className="bar" src="https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/tokens-growth/bar-1.png" alt="" />
                </div>
              </div>
    </div>*/}
          </div>
        </div>
        <div className="two-column">
          <div className="two-column-left"></div>
          <div className="two-column-right">
            <span className="two-column-item">Market Making for Crypto Exchanges</span>
            <span className="two-column-item">Attract more traders and projects with deep order books & liquidity</span>
            <span className="two-column-item">
              Our world-class market making services are proven to help local and emerging exchanges win traders and gain market-leading positions
               of up to 90% market dominance.
            </span>
            <a className="two-column-item" href="#">
              <span>Learn more</span>
              <img src="https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/arrow.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="two-column">
          <div className="two-column-left">
            <span className="two-column-item">Our Partners & Friends</span>
          </div>
          <div className="two-column-right"></div>
        </div>
      </div>
      {/* We are in a good company */}
      <div>
        <h2>We are in a good company</h2>
        <p>Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below</p>
      </div>
    </>
  )
}

export default App
