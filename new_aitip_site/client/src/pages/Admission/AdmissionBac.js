import React, {useContext, useEffect} from 'react';
import AdmissionBacContent1 from "./AdmissionBacParts/AdmissionBacContent1";
import AdmissionBacContent2 from "./AdmissionBacParts/AdmissionBacContent2";
import AdmissionBacContent3 from "./AdmissionBacParts/AdmissionBacContent3";
import AdmissionBacContent4 from "./AdmissionBacParts/AdmissionBacContent4";
import AdmissionBacContent5 from "./AdmissionBacParts/AdmissionBacContent5";
import AdmissionBacContent6 from "./AdmissionBacParts/AdmissionBacContent6";
import CardContainer from '../../components/CardContainer';
import "../../css/main_style.css"
import {fetchDirectionsBachelor} from "../../http/admissionAPI";
import {Context} from "../../index";

const AdmissionBac = () => {
    const {admission_store} = useContext(Context)

    useEffect(() => {
        fetchDirectionsBachelor(1, 10).then(data => {
            admission_store.setDirections_bachelor(data.rows)
            console.log(1)
            console.log(admission_store.directions_bachelor)
        })
    }, [])

    return (
        <div className='rootContainer'>
            <CardContainer>
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