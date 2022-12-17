import React from 'react';
import AdmissionBacContent1 from "./AdmissionBacParts/AdmissionBacContent1";
import AdmissionBacContent2 from "./AdmissionBacParts/AdmissionBacContent2";
import AdmissionBacContent3 from "./AdmissionBacParts/AdmissionBacContent3";
import AdmissionBacContent4 from "./AdmissionBacParts/AdmissionBacContent4";
import AdmissionBacContent5 from "./AdmissionBacParts/AdmissionBacContent5";
import AdmissionBacContent6 from "./AdmissionBacParts/AdmissionBacContent6";
import CardContainer from '../../components/CardContainer';

const AdmissionBac = () => {
    return (
        <div className='rootContainer'>
            <CardContainer
                columns={3}
            >
                <AdmissionBacContent1/>
                <AdmissionBacContent2/>
                <AdmissionBacContent3/>
                <AdmissionBacContent4/>
                <AdmissionBacContent5/>
                <AdmissionBacContent6/>
            </CardContainer>
        </div>
    );
};

export default AdmissionBac;