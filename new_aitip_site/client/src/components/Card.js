import React from "react";
import FadingImg from "./FadingImg";
import "./Card.css";

class Card extends React.Component {
    /*
        TODO: сделать компонент ColoredText, который будет брать цвет для текста из пропа primaryColor своей карточки
    */

    constructor(props) {
        super(props);
    }

    render() {

        // Для каждого расположения (top, right, bottom, left, none) определены особые стили в CSS-классах, оканчивающиеся на эти расположения
        return (
            <div 
                className={`Card Card-${this.props.imgPos}`} 
                style={{...this.props.style}}
            >
                {
                    this.props.imgPos != 'none' &&
                    
                    <div className={`Card-image Card-image-${this.props.imgPos}`}> 
                    <FadingImg
                            imgPos={this.props.imgPos}
                            imgSrc={this.props.imgSrc}
                    /> 
                    </div>
                }
                <div className={`Card-body Card-body-${this.props.imgPos}`}>
                    {
                        this.props.title && <h1>{this.props.title}</h1>
                    }
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;