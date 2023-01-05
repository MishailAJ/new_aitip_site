// Отрисовка каждого сотрудника в карточке

import React, {useContext, useEffect, useState} from 'react';

import {Row} from "react-bootstrap";
import {Context} from "../../index";
import StafferItem from "./StafferItem";
import {observer} from "mobx-react-lite";
import {fetchOneStaffer} from "../../http/staffAPI";


const PersonalitiesList = observer(() => {
    const {staff_store} = useContext(Context)
    console.log(staff_store.staff)

    const [chosenStaffer, setChosenStaffer] = useState();

    useEffect(() => {
        fetchOneStaffer(staff_store.selectedStaffer).then(data => {
            setChosenStaffer(data)
            console.log(typeof data, Object.keys(chosenStaffer))
        })
    }, [staff_store.selectedStaffer])


    return (
        <Row style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", width: "100%", margin: 0, padding: 0}}>
            {staff_store.staff.map(staffer =>
                <div onClick={() => staff_store.setSelectedStaffer(staffer.id)}>
                    <img src={process.env.REACT_APP_API_URL + staffer.img}
                         style={{width: 150, display: "inline-block", margin: 0, height: "100px"}}
                         alt="картинка чет не загрузилась"/>
                    <div>
                        <div> {staffer.name} </div>
                        <div> {staffer.post} </div>
                    </div>
                </div>
            )}
            <StafferItem key={chosenStaffer.id} staffer={chosenStaffer}/>
        </Row>
    );
});

export default PersonalitiesList;