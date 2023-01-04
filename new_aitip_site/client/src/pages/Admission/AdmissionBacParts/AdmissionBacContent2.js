import React, {useContext, useEffect, useState} from 'react';
import Card from '../../../components/Card';
import "../../../css/page_styles/AdmissionBac.css"
import Content2Img from '../../../local_assets/Content2_photo.png';
import {fetchDirectionsBachelor, fetchOneDirectionBachelor} from "../../../http/admissionAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";

const AdmissionBacContent2 = observer(() => {
    const directions = ["Экономика", "Менеджмент", "Юриспруденция", "Государственное и муниципальное управление", "Туризм"]

    const specialties = ["директор и администратор предприятия",
        "консультант по управлению", "помощник руководителя", "менеджер по проекту",
        "менеджер по развитию", "бренд-менеджер", "инновационный менеджер",
        "менеджер интернет-проекта", "менеджер по качеству и персоналу"].sort((a, b) => a.length - b.length)

    const passing_points = [
        "Математика (27 баллов)",
        "Русский язык (36 баллов)",
        "Предмет по выбору поступающего: Обществознание (42 балла), Информатика и ИКТ (40 баллов), География (37 баллов), Иностранный язык (22 балла), История (32 балла)"]

    const costs = {"Очно-заочная": "48000", "Заочная": "47000"}

    const {admission_store} = useContext(Context)
    // const [chosenDirection, setChosenDirection] = useState();
    //
    //
    // useEffect(() => {
    //     fetchDirectionsBachelor(1, 10).then(data => {
    //             admission_store.setDirections_bachelor(data.rows)
    //         }
    //     )
    //     console.log(admission_store.directions_bachelor)
    // }, [])
    //
    // useEffect(() => {
    //     fetchOneDirectionBachelor(admission_store.selectedDirections_bachelor).then(data => {
    //         setChosenDirection(data)
    //         console.log(chosenDirection)
    //     })
    // }, [admission_store.setSelectedDirections_bachelor])


    return (
        <Card
            width={12}
            imgPos="none"
            className="content2"
        >
            <div> {admission_store.directions_bachelor.map((item) => (
                <div>
                    {item.specialities}
                </div>
            ))} </div>
            {/*<div>{admission_store.selectedDirections_bachelor}</div>*/}
            <h1 className="local_title">
                Выбери <span style={{color: "#076DB1"}}>направление</span>
            </h1>
            <ul className="tracks">
                {directions.map(d =>
                    <li key={d}>
                        <button
                            key={d}
                        >
                            {d}
                        </button>
                    </li>
                )}
            </ul>
            <Card
                width={12}
                imgSrc={Content2Img}
                imgPos="right"
                className="direction_inner_card"
            >
                    <h1>38.03.02 Менеджмент</h1>
                    <h3>Профиль: Менеджмент организации </h3>
                    <p>Преимуществом данного направления подготовки является тот фактор, что выпускники способны вести
                        самостоятельную предпринимательскую деятельность, а также обладают навыками разработки и оценки
                        бизнес-планов инвестиционных, инновационных и социальных проектов. </p>
            </Card>
            <div className="direction_block">
                    <p className="extended_description">
                        Менеджер (руководитель) профессионально занимается управлением организациями и
                        социально-экономическими процессами в разных сферах и уровнях. Менеджер осуществляет весь спектр
                        управленческих функций: организацию, планирование и стимулирование работы предприятия или его
                        подразделений, координирует деятельность подчиненных, осуществляет контроль, оценивает и
                        корректирует их работу, прогнозирует и предотвращает возможные риски. В компетенции менеджера также
                        входит управление персоналом, материальное и нематериальное стимулирование работников, регулирование
                        межличностных отношений в коллективе.
                    </p>
                    <p className="title_who_can_you_become">Кем ты можешь стать:</p>
                    <ul className="specialties">
                        {specialties.map(el =>
                            <li className="specialty" key={el}>{el}</li>
                        )}
                    </ul>
                <div className="points_and_2_documents">
                    <div className="passing_points" style={{borderColor: "#AD4820"}}>
                        <p className="local_title">
                            <span style={{color: "#AD4820"}}>Проходные баллы </span> 2021 года
                        </p>
                        <ol>
                            {passing_points.map(subject =>
                                <li key={subject}>{subject} </li>)}
                        </ol>
                    </div>
                    <div className="passing_points" style={{borderColor: "#076DB1"}}>
                        <p className="local_title">
                            <span style={{color: "#076DB1"}}>Проходные баллы </span> 2021 года
                        </p>
                        <ol>
                            {passing_points.map(subject =>
                                <li key={subject}>{subject} </li>)}
                        </ol>
                    </div>
                    <div className="_2_documents">
                        <div className="_1_of_first_2_documents">
                            <img className="document_icon" src={"../assets/document_icon.png"}/>
                            <p>Правила проведения вступительных испытаний</p>
                        </div>
                        <div className="_1_of_first_2_documents">
                            <img className="document_icon" src={"../assets/document_icon.png"}/>
                            <p>Расписание вступительных испытаний 2022</p>
                        </div>
                    </div>
                </div>
                <div className="cost_zone">
                    {
                        Object.keys(costs).map(form =>
                            <div className="cost" key={form}>
                                <p className="cost_price">{costs[form]}</p>
                                <p className="cost_form">{form}</p>
                            </div>)
                    }
                </div>
                <div className="last_document_of_content_2">
                    <img className="document_icon" src={"../assets/document_icon.png"}/>
                    <p>ПОЛОЖЕНИЕ о порядке предоставления льгот по оплате обучения в Алтайском институте труда и права
                        (филиал) Образовательного учреждения профсоюзов высшего образования «Академия труда и социальных
                        отношений»</p>
                </div>
                <button className="small_grey_link_to_block" style={{float: "right"}}>Перейти к разделу "Документы"
                </button>
            </div>
        </Card>
    );
});

export default AdmissionBacContent2;
