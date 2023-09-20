import { useEffect, useState } from 'react';
import SliderItem from '/src/components/SliderItem.jsx';

function Slider({}) {
    const [list, setList] = useState();
    const items = [
        {id: 0, name: "HBAR", value: "0.0505", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/hbar.svg"},
        {id: 1, name: "NEAR", value: "1.119", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/near.svg"},
        {id: 2, name: "AAVE", value: "64.5", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/aave.svg"},
        {id: 3, name: "BTC", value: "27,136.91", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/btc.svg"},
        {id: 4, name: "ETH", value: "1,629.99", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/eth.svg"},
        {id: 5, name: "LUNA", value: "0.391", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/luna.svg"},
        {id: 6, name: "ADA", value: "0.2554", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/ada.svg"},
        {id: 7, name: "SOL", value: "20.29", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/sol.svg"},
        {id: 8, name: "AVAX", value: "9.04", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/avax.svg"},
        {id: 9, name: "DOT", value: "4.136", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/dot.svg"},
        {id: 10, name: "DOGE", value: "0.06251", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/doge.svg"},
        {id: 11, name: "MATIC", value: "0.5447", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/matic.svg"},
        {id: 12, name: "SHIBA", value: "0.0000074", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/shiba.svg"},
        {id: 13, name: "AXS", value: "4.54", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/axs.svg"},
        {id: 14, name: "ATOM", value: "7.303", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/atom.svg"},
        {id: 15, name: "KSM", value: "19.65", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/ksm.svg"},
        {id: 16, name: "FTX", value: "1.4322", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/ftx.svg"},
        {id: 17, name: "UNI", value: "4.391", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/uni.svg"},
        {id: 18, name: "SAND", value: "0.3", imageSrc: "https://gravityteam.co/wp-content/themes/gravity-team-dist/src/img/crypto/sand.svg"},
    ];
    
    useEffect(() => {
        setList(items.map((element) => <SliderItem key={element.id} imgRef={element.imageSrc} name={element.name} value={element.value} />));
    }, []);
    
    return (
        <div className="slider-cnt">
            <div key={0} className="content-gallery-cnt slider-ani">{list}</div>
            <div key={1} className="content-gallery-cnt slider-ani">{list}</div>
            <div key={2} className="content-gallery-cnt slider-ani">{list}</div>
        </div>
    );
}

export default Slider;