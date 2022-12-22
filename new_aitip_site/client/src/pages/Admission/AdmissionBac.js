import React from 'react';
import AdmissionBacContent1 from "./AdmissionBacParts/AdmissionBacContent1";
import AdmissionBacContent2 from "./AdmissionBacParts/AdmissionBacContent2";
import AdmissionBacContent3 from "./AdmissionBacParts/AdmissionBacContent3";
import AdmissionBacContent4 from "./AdmissionBacParts/AdmissionBacContent4";
import AdmissionBacContent5 from "./AdmissionBacParts/AdmissionBacContent5";
import AdmissionBacContent6 from "./AdmissionBacParts/AdmissionBacContent6";
import CardContainer from '../../components/CardContainer';
import "../../css/main_style.css"

const AdmissionBac = () => {
    return (
        <div className='rootContainer'>
            <CardContainer>
                <AdmissionBacContent1 id="admission_bac_content1"/>
                <AdmissionBacContent2 id="admission_bac_content2"/>
                <AdmissionBacContent3 id="admission_bac_content3"/>
                <AdmissionBacContent4 id="admission_bac_content4"/>
                <AdmissionBacContent5 id="admission_bac_content5"/>
                <AdmissionBacContent6/>
            </CardContainer>
        </div>
    );
};

export default AdmissionBac;