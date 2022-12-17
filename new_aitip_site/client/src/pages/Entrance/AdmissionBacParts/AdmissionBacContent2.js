import React from 'react';
import "../../../css/AdmissionBac.css"

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
    if (window.innerWidth < 400) {
        col_count = 1
    } else if (400 <= window.innerWidth && window.innerWidth < 630){
        col_count = 2
    } else {
        col_count = 3
    }

    return (
        <div className="content2">
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
                <div className="title_who_can_you_become">Кем ты можешь стать:</div>
                <ul type="circle" style={{columnCount: col_count}} className="specialties">
                    {specialties.map(el =>
                        <li className="specialty" key={el}>{el}</li>
                    )}
                </ul>
                <div className="numbers_and_documents">
                    <div className="passing_points">
                        <div>
                            <div style={{color: "#AD4820"}}>Проходные баллы</div>
                            <div>2021 года</div>
                        </div>
                        <ul>
                            {Object.keys(passing_points_obj).map(key =>
                                <li>{key} - {passing_points_obj[key]} </li>)}
                        </ul>
                    </div>
                    <div className="passing_points">
                        <div>
                            <div style={{color: "#AD4820"}}>Проходные баллы</div>
                            <div>2021 года</div>
                        </div>
                        <ul>
                            {Object.keys(passing_points_obj).map(key =>
                                <li>{key} - {passing_points_obj[key]} </li>)}
                        </ul>
                    </div>
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
        </div>
    );
};

export default AdmissionBacContent2;
