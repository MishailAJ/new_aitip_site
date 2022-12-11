import React from 'react';

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