
function InteractiveGridCell({heading, description}) {
    return(
        <div className="interactive-grid-cell">
            <span className="interactive-grid-cell-heading">{heading}</span>
            <span className="interactive-grid-cell-description">{description}</span>
            <span className="interactive-grid-cell-bg"></span>
        </div>
    );
}

export default InteractiveGridCell;