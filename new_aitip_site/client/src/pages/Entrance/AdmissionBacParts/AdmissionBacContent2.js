import React from 'react';
import "../../../css/page_styles/AdmissionBac.css"
import Card from "../../../components/Card";

const AdmissionBacContent2 = () => {
    const specialties = ["директор и администратор предприятия",
        "консультант по управлению", "помощник руководителя", "менеджер по проекту",
        "менеджер по развитию", "бренд-менеджер", "инновационный менеджер",
        "менеджер интернет-проекта", "менеджер по качеству и персоналу"]

    const passing_points_obj = {
        "Русский язык": "24 баллов",
        "Математика": "27 баллов",
        "Информатика и ИКТ": "40 баллов",
        "Обществознание": "42 балла",
    };


    let col_count = 1
    let col_width = 0.3 * window.innerWidth
    let main_part_width = 0.6

    if (window.innerWidth < 600) {
        col_count = 1
        col_width = 0.9 * window.innerWidth * main_part_width
    } else if (600 <= window.innerWidth && window.innerWidth < 1200) {
        col_count = 2
        col_width = 0.45 * window.innerWidth * main_part_width
    } else {
        col_count = 3
        col_width = 0.3 * window.innerWidth * main_part_width
    }
    console.log(col_count, col_width)



    return (
        <Card className="content2">
            <div className="title_choose_direction">
                <div style={{color: "#292D32"}}>Выбери</div>
                <div style={{color: "#076DB1"}}> направление</div>
            </div>
            <ul className="tracks">
                <li>
                    <button>Экономика</button>
                </li>
                <li>
                    <button>Менеджмент</button>
                </li>
                <li>
                    <button>Юриспруденция</button>
                </li>
                <li>
                    <button>Государственное и муниципальное управление</button>
                </li>
                <li>
                    <button>Туризм</button>
                </li>
            </ul>
            <Card
                title="38.03.02 Менеджмент"
                imgSrc={"../asets/management.png"}
                imgPos="left"
                style={{width: "60vw", margin: "var(--main_part_width)", padding: "30px"}}
            >
                <p>Card text</p>
            </Card>
            <div className="direction_block">
                <div className="extended_description">
                    Менеджер (руководитель) профессионально занимается управлением организациями и
                    социально-экономическими процессами в разных сферах и уровнях. Менеджер осуществляет весь спектр
                    управленческих функций: организацию, планирование и стимулирование работы предприятия или его
                    подразделений, координирует деятельность подчиненных, осуществляет контроль, оценивает и
                    корректирует их работу, прогнозирует и предотвращает возможные риски. В компетенции менеджера также
                    входит управление персоналом, материальное и нематериальное стимулирование работников, регулирование
                    межличностных отношений в коллективе.
                </div>
                <div className="title_who_can_you_become">Кем ты можешь стать:</div>
                <ul type="circle" style={{columnWidth: col_width, columnCount: col_count}} className="specialties">
                    {specialties.map(el =>
                        <li className="specialty" style={{width: col_width}} key={el}>{el}</li>
                    )}
                </ul>
                <div style={{display: "flex", flexDirection: "row",
                    flexWrap: "wrap"}}>
                    <div className="entrance_tests_and_points">
                        <div className="entrance_tests_and_points_title">
                            <p style={{color: "#AD4820"}}>Проходные баллы</p>
                            <p>2021 года</p>
                        </div>
                        <ul>
                            {Object.keys(passing_points_obj).map(key =>
                                <li>{key} - {passing_points_obj[key]} </li>)}
                        </ul>
                    </div>
                    <div className="entrance_tests_and_points">
                        <div>
                            <p style={{color: "#AD4820"}}>Проходные баллы</p>
                            <p>2021 года</p>
                        </div>
                        <ul>
                            {Object.keys(passing_points_obj).map(key =>
                                <li>{key} - {passing_points_obj[key]} </li>)}
                        </ul>
                    </div>
                </div>
                <div className="documents_block">
                    <div className="document">
                        <img className="document_icon" src={"../asets/document_icon.png"}/>
                        <div>Правила проведения вступительных испытаний</div>
                    </div>
                    <div className="document">
                        <img className="document_icon" src={"../asets/document_icon.png"}/>
                        <div>Расписание вступительных испытаний 2022</div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default AdmissionBacContent2;
