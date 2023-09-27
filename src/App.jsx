import './App.css'
import InteractiveGridCell from './components/InteractiveGridCell';
import Header from '/src/components/Header.jsx';
import Slider from '/src/components/Slider.jsx';

function App() {
  return (
    <>
      {/* TOP SITE NAVIGATION */}
      <Header 
        topSiteNavigation={{hl1: "inactive", hl2: "inactive", hl3: "inactive", hl4: "inactive"}} 
        ourServicesDP={{hl1: "inactive", hl2: "inactive"}} />
      {/* HERO */}
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
      {/* About Gravity Team */}
      <div className="about-gravity-team">
        <h2>About Gravity Team</h2>
        <p>
          At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. 
          We are a crypto native market maker founded by traders, developers,
           and innovators who are strong believers and supporters of the future of decentralization and digital assets.
        </p>
        <div className="interactive-grid">
          <InteractiveGridCell heading={"~$150 billion"} description={"cumulative trading volume to date"} />
          <InteractiveGridCell heading={"0.8%"} description={"of the global crypto spot trading volume"} />
          <InteractiveGridCell heading={"~40"} description={"Gravity Teammates(& growing)"} />
          <InteractiveGridCell heading={"25+"} description={"leading global and local crypto exchanges"} />
          <InteractiveGridCell heading={"2017"} description={"start, crypto-natives"} />
          <InteractiveGridCell heading={"1,200+"} description={"crypto-asset pairs"} />
          <InteractiveGridCell heading={"24/7"} description={"liquidity"} />
          <InteractiveGridCell heading={"~200 mil"} description={"trades done to date"} />
        </div>
      </div>
    </>
  )
}

export default App
