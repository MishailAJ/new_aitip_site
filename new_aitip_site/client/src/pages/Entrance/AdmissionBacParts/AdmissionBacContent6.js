import React from 'react';
import Card from '../../../components/Card';
import Content6FileIcon from '../../../local_assets/icons/document-text.svg';

const AdmissionBacContent6 = () => {
    return (
        <Card
            imgPos='none'
            style={{gridColumnStart: 1, gridColumnEnd: 4}}
        >
            <h1>Важные <a href='' style={{color: '#076DB1'}}>документы</a></h1>
            <a href=''>
                <div className='Card-filesList'>
                    <div className='Card-filesList-file'>
                        <img src={Content6FileIcon}></img>
                        <p>Очень важный документ номер 1</p>
                    </div>
                    <div className='Card-filesList-file'>
                        <img src={Content6FileIcon}></img>
                        <p>Очень важный документ номер 2</p>
                    </div>
                    <div className='Card-filesList-file'>
                        <img src={Content6FileIcon}></img>
                        <p>Очень важный документ номер 3</p>
                    </div>
                    <div className='Card-filesList-file'>
                        <img src={Content6FileIcon}></img>
                        <p>Очень важный документ номер 4</p>
                    </div>

                    <div className='Card-filesList-file'>
                        <img src={Content6FileIcon}></img>
                        <p>Очень важный документ номер 5</p>
                    </div>

                    <div className='Card-filesList-file'>
                        <img src={Content6FileIcon}></img>
                        <p>Очень важный документ номер 6</p>
                    </div>

                </div>
            </a>
        </Card>
    );
}

export default AdmissionBacContent6;