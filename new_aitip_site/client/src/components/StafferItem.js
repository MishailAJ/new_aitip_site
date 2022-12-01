import React from 'react';
import {Card, Col} from "react-bootstrap";
import {useNavigate} from "react-router";
import {PERSON} from "../consts";
import logo from "../local_asets/logo.png"
import {observer} from "mobx-react-lite";


const StafferItem = observer(({staffer}) => {

    const navigate = useNavigate()
    // const newLine = (staff_store.cardNumber % 2 === 0 && staff_store.cardNumber > 0)
    console.log(staffer)



    return (
        <Col md={5} style={{margin: "10px", display: "inline-block", width: "200px"}}>
            <Card style={{width: "300px"}}>
                <div style={{width: "100%", height: "100%", cursor: "pointer", margin: "0 10px", padding: "0", borderColor: "lightgray", display: "flex", justifyContent: "space-between"}} onClick={() => navigate(PERSON + "/" + staffer.id)}>
                    <img src={process.env.REACT_APP_API_URL + staffer.img} style={{width: 150, display: "inline-block", margin: 0}} alt="картинка чет не загрузилась"/>
                    <div style={{width: 150, display: "inline-block", margin: 0}}>
                        <div style={{width: "80%"}}> {staffer.name} </div>
                        <div style={{width: "80%"}}> {staffer.post} </div>
                    </div>
                </div>
            </Card>
        </Col>
    )
});

export default StafferItem;
