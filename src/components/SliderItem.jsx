
function SliderItem({imgRef, name, value}) {
    return (
        <div className="content-cnt">
            <div><img src={imgRef}/></div>
            <div>
                <span className="content-price">${value}</span>
                <span>{name}</span>
            </div>
        </div>
    );
}

export default SliderItem;