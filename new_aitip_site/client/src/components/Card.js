import React from "react";
import FadingImg from "./FadingImg";


/** 
 * Компонент карточки с закруглёнными углами и местом для изображения (опционально).
 * 
 * Пример использования:
 * ```
     <Card
        title="Card title"
        imgSrc={importedImage}
        imgPos="left"
        style={{gridColumnStart: 1, gridColumnEnd: 3}}
    >
        <p>Card text</p>
    </Card>
 * ```
 * Данный код задаёт карточку с заголовком "Card title", изображением importedImage, расположенным слева ("left"). 
 * Причём эта карточка при помещении её в CardContainer будет занимать 1 и 2 столбцы грида.
 * 
 * Props:
 * @param {string} title - заголовок карточки (помещается в стилизованный <h1>).
 * @param {Object | string} imgSrc - изображение, которое помещается в отведённое для него место (либо импортированное, либо путь к нему). Можно не указывать, если imgPos="none".
 * @param {"left" | "right" | "top" | "bottom"} imgPos - позиция изображения в карточке (top, right, bottom, left, none). imgPos="none" указывает на отсутствие изображения.
 * @param {Object} style - дополнительные стили. Также здесь указывается столбцы грида, в которых должна размещаться карточка (пока это не реализовано по-другому).  
*/
class Card extends React.Component {
    // TODO: сделать компонент ColoredText, который будет брать цвет для текста из пропа primaryColor своей карточки

    constructor(props) {
        super(props);
    }

    render() {

        // Для каждого расположения (top, right, bottom, left, none) определены особые стили в CSS-классах, оканчивающиеся на эти расположения
        return (
            <div 
                className={`Card Card-${this.props.imgPos}`} 
                style={{...this.props.style_card}}
            >
                {
                    this.props.imgPos != 'none' &&
                    
                    <div className={`Card-image Card-image-${this.props.imgPos}`} style={{...this.props.style_image}}>
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