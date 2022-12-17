import React from "react";
import '../css/component_styles/Card.css';

class CardContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div 
                className="CardContainer"
                style={{
                    gridTemplateColumns: `repeat(${this.props.columns}, 1fr)`,
                    display: 'grid',
                    gap: '60px 20px',
                }}
            >
                {
                    this.props.children
                }
            </div>
        );
    }
}

export default CardContainer;