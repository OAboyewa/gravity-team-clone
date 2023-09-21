
function Header({topSiteNavigation, ourServicesDP}) {
    return (
        <div className="header-cnt">
            <div className="header-logo-wrp">
            <a className="" href="">
                < img className="header-logo-img" src="https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/logo-light.png" />
            </a>
            </div>
            <div className="header-navigation-wrp">
            <ul className="header-navigation-cnt">
                <li>
                    {topSiteNavigation.hl1 == "active" ? 
                       <a className="header-item-active" href="">ABOUT US</a> :
                        <a className="header-item-inactive" href="">ABOUT US</a>
                    }
                </li>
                <li className="dp-state">
                    {topSiteNavigation.hl2 == "active" ? 
                       <a className="header-item-active" href="">OUR SERVICES</a> :
                        <a className="header-item-inactive" href="">OUR SERVICES</a>
                    }
                    <div className="dropdown dp00-position-coords">
                        {ourServicesDP.hl1 == "active" ? 
                            <a className="dp00-item dp-active" href="">CRYPTO COIN MARKET MAKING</a> :
                            <a className="dp00-item dp-inactive" href="">CRYPTO COIN MARKET MAKING</a>
                        }
                        {ourServicesDP.hl2 == "active" ? 
                            <a className="dp00-item dp-active" href="">LIQUIDITY FOR CRYPTO EXCHANGES</a> :
                            <a className="dp00-item dp-inactive" href="">LIQUIDITY FOR CRYPTO EXCHANGES</a>
                        }
                    </div>
                </li>
                <li>
                    {topSiteNavigation.hl3 == "active" ? 
                       <a className="header-item-active" href="">WORK WITH US</a> :
                        <a className="header-item-inactive" href="">WORK WITH US</a>
                    }
                </li>
                <li>
                    {topSiteNavigation.hl4 == "active" ? 
                       <a className="header-item-active" href="">BLOG</a> :
                        <a className="header-item-inactive" href="">BLOG</a>
                    }
                </li>
            </ul>
            </div>
            <div className="header-contact-nav-cnt dp-state">
            <a className="dropdown-label" href="">GET IN TOUCH</a>
            <div className="dropdown dp01-position-coords">
                <span className="dp01-label">
                What Type of Client Are You?
                </span>
                <a className="dp01-item" href="">CRYPTO PROJECT</a>
                <a className="dp01-item" href="">CRYPTO EXCHANGE</a>
                <a className="dp01-item" href="">CRYPTO VC</a>
                <a className="dp01-item" href="">OTHER</a>
            </div>
            </div>
        </div>
    );
}

export default Header;