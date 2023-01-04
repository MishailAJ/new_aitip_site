import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../../components/personalities/TypeBar";
import {Context} from "../../index";
import {fetchStaff} from "../../http/staffAPI";
import {observer} from "mobx-react-lite";
import PersonalitiesList from "../../components/personalities/PersonalitiesList";

const PersonalitiesPage = observer(() => {
    const {staff_store} = useContext(Context)

    useEffect(() => {
            fetchStaff(null, null, null, 1, 10).then(data => {
                    staff_store.setStaff(data.rows)
                    staff_store.setTotalCount(data.count)
                }
            )
            console.log(staff_store.staff)
    }, [])

    useEffect(() => {
        (async () => {
            fetchStaff(staff_store.selectedLetter.id, staff_store.selectedPost.id, staff_store.selectedAcademic_degree, staff_store.page, staff_store.limit).then(data => {
                staff_store.setStaff(data.rows)
                staff_store.setTotalCount(data.count)
            })
        })()
    }, [staff_store, staff_store.page, staff_store.selectedLetter, staff_store.selectedPost, staff_store.selectedAcademic_degree])


    return (
        <Container className="mt-5" style={{display: "flex", width: "100vw"}}>
            <Row style={{width: "100vw", left: 0}}>
                <Col md={3} style={{display: "inline-block", width: "200px", right: 0}}>
                    <div style={{width: "200px", margin: "0 20px"}}>
                        <TypeBar/>
                    </div>
                </Col>
                <Col md={10} style={{display: "inline-block", width: "70vw", left: 0}}>
                    <div style={{width: "70%"}}>
                        <PersonalitiesList/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
);


export default PersonalitiesPage;