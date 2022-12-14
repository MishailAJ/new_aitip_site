import React from 'react';
import "../../../css/AdmissionBac.css"
import {forEach} from "react-bootstrap/ElementChildren";
import Card from '../../../components/Card';

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
    let passing_points_json = JSON.stringify(passing_points_obj);

    console.log(passing_points_json)


    let col_count = 1
    if (window.innerWidth < 400) {
        col_count = 1
    } else if (400 <= window.innerWidth && window.innerWidth < 630){
        col_count = 2
    } else {
        col_count = 3
    }

    return (
        <Card
            imgPos="none"
            className="content2"
            style={{gridColumnStart: 1, gridColumnEnd: 4}}
        >
            <div className="title_choose_direction">
                <div style={{color: "#292D32"}}>Выбери</div>
                <div style={{color: "#076DB1"}}> направление</div>
            </div>
            <ul className="tracks">
                <li><button>Экономика</button></li>
                <li><button>Менеджмент</button></li>
                <li><button>Юриспруденция</button></li>
                <li><button>Государственное и муниципальное управление</button></li>
                <li><button>Туризм</button></li>
            </ul>
            <div className="direction_block">
                <div className="extended_description">
                    Менеджер (руководитель) профессионально занимается управлением организациями и социально-экономическими процессами в разных сферах и уровнях. Менеджер осуществляет весь спектр управленческих функций: организацию, планирование и стимулирование работы предприятия или его подразделений, координирует деятельность подчиненных, осуществляет контроль, оценивает и корректирует их работу, прогнозирует и предотвращает возможные риски. В компетенции менеджера также входит управление персоналом, материальное и нематериальное стимулирование работников, регулирование межличностных отношений в коллективе.
                </div>
                <div className="title_who_can_you_become">Кем ты можешь стать</div>
                <ul type="circle" style={{columnCount: col_count}} className="specialties">
                    {specialties.map(el =>
                        <li className="specialty" key={el}>{el}</li>
                    )}
                </ul>
                <div className="passing_points">
                    <ul>
                        {passing_points_json}
                    </ul>
                </div>
            </div>
        </Card>
    );
};

export default AdmissionBacContent2;
