import React, {useContext, useEffect} from 'react';

import {Row} from "react-bootstrap";
import {Context} from "../index";
import StafferItem from "./StafferItem";

import {fetchStaff} from "../http/staffAPI";
import {observer} from "mobx-react-lite";


const PersonalitiesList = observer(() => {
    const {staff_store} = useContext(Context)
    console.log("Personalities")


    return (
        <Row className="d-flex" >
            {staff_store.staff.map(staffer =>
                <StafferItem key={staffer.id} staffer={staffer}/>
            )}
        </Row>
    );
});

export default PersonalitiesList;
