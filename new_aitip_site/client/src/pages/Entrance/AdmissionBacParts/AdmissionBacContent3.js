import React from 'react';
import Card from '../../../components/Card';
import Content3Img from '../../../local_assets/Content3_photo.png';

const AdmissionBacContent3 = () => {
    return (
        <Card
            title="Траектория поступления"
            imgSrc={Content3Img}
            imgPos='left'
            style={{gridColumnStart: 1, gridColumnEnd: 3}}
        >
            <ul className='Card-megaList'>
                <li>Выбери <a href='' style={{color: '#076DB1'}}>образовательную программу</a></li>
                <li>Подай <a href='' style={{color: '#076DB1'}}>документы</a></li>
                <li>Сдай <a href='' style={{color: '#076DB1'}}>вступительные испытания</a></li>
                <li>Наслаждайся</li>
            </ul>
        </Card>
    );
}

export default AdmissionBacContent3;
