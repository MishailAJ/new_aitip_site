import React from 'react';
import Card from '../../../components/Card';
import Content4Img from '../../../local_assets/Content4_photo.png';

const AdmissionBacContent4 = () => {
    return (
        <Card
            imgSrc={Content4Img}
            imgPos='bottom'
            style={{gridColumnStart: 3, gridColumnEnd: 4, height: '400px'}}
        >
            <h1>Важные <a href='' style={{color: '#AD4820'}}>даты</a></h1>
            <p>
            <span style={{color: '#AD4820'}}>c 1 августа</span><br/>
            подача заявлений
            </p>
            <p>
            <span style={{color: '#AD4820'}}>20-30 августа</span><br/>
            вступительные испытания
            </p>
        </Card>
    );
}

export default AdmissionBacContent4;