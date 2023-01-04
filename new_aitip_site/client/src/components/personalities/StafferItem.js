// Карточка сотрудника, которая при нажатии будет раскрываться и показывать подробную информацию

import React from 'react';
import {observer} from "mobx-react-lite";
import Card from "../card/Card";


const StafferItem = observer(({staffer}) => {

    console.log(staffer.name)

    return (
            <Card style={{width: "300px"}}>
                <div style={{width: "100%", height: "100%", cursor: "pointer", margin: "0 10px", padding: "0", borderColor: "lightgray", display: "flex", justifyContent: "space-between"}}>
                    <img src={process.env.REACT_APP_API_URL + staffer.img} style={{width: 150, display: "inline-block", margin: 0}} alt="картинка чет не загрузилась"/>
                    <div style={{width: 150, display: "inline-block", margin: 0}}>
                        <div style={{width: "80%"}}> {staffer.name} </div>
                        <div style={{width: "80%"}}> {staffer.post} </div>
                        <div style={{width: "80%"}}> {staffer.email} </div>
                        <div style={{width: "80%"}}> {staffer.phone_number} </div>
                        <div style={{width: "80%"}}> {staffer.adress} </div>
                    </div>
                </div>
            </Card>
    )
});

export default StafferItem;
