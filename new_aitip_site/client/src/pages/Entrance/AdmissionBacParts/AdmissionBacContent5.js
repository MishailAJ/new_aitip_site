import React from 'react';
import Card from '../../../components/Card';
import Content5Img from '../../../local_assets/Content5_photo.png';

const AdmissionBacContent5 = () => {
    return (
        <Card
            title="Про оплату обучения"
            imgSrc={Content5Img}
            imgPos='left'
            style={{gridColumnStart: 1, gridColumnEnd: 4}}
        >
            <h2>В Алтайском институте труда и права существует <a href='' style={{color: '#076DB1'}}>гибкая система оплаты</a> за обучение.</h2>
            <h3>Вы можете оплачивать свою учебу:</h3>
            <ul>
                <li>единовременно, за весь срок обучения;</li>
                <li>за год обучения;</li>
                <li>по семестрам;</li>
                <li>по месяцам (данный вариант возможен при трудном материальном положении студента и рассматривается в индивидуальном порядке)</li>
            </ul>
            <a href='' style={{float: 'right', color: '#999999'}}>перейти к разделу "Документы"</a>
        </Card>
    );
}

export default AdmissionBacContent5;
