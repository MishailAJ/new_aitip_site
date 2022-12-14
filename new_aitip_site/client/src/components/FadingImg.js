import React from 'react';

/** 
 * Компонент исчезающей картинки.
 * 
 * Пример использования:
 * ```
    <FadingImg
        imgPos="left"
        imgSrc={ImportedImage}
    />
 * ```
 * Данный код задаёт картинку, имеющую эффект исчезновения с левой стороны, источник которой - это объект ImportedImage.
 * 
 * Props:
 * @param {Object | string} imgSrc - изображение (либо импортированное, либо путь к нему).
 * @param {"left" | "right" | "top" | "bottom"} imgPos - в какой части картинки будет эффект исчезновения (top, right, bottom, left).
*/
class FadingImg extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <img 
                src={this.props.imgSrc} 
                style={{
                    WebkitMaskImage: `linear-gradient(to ${this.props.imgPos}, rgba(0,0,0,0), rgba(0,0,0,1) 60%)`,
                    maskImage: `linear-gradient(to ${this.props.imgPos}, rgba(0,0,0,0), rgba(0,0,0,1) 60%)`
                }}
            />
        );
    }
}

export default FadingImg;