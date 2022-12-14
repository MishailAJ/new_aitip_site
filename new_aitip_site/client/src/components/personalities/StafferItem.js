// Карточка сотрудника, которая при нажатии будет раскрываться и показывать подробную информацию

import React from 'react';
import {observer} from "mobx-react-lite";
import Card from "../card/Card";

function viewDiv(elementId) {
    let div = document.getElementById(elementId);
    if (getComputedStyle(div).display === "none") {
        div.style.display = "flex"
    }
    if (getComputedStyle(div).display === "flex") {
        div.style.display = "none"
    }
}

const StafferItem = observer(({staffer}) => {

    const textsNames = {
        "Биография": staffer.bio_text,
        "Дисциплины и курсы": staffer.disciplines_and_courses_text,
        "Публикации": staffer.publications_text,
        "Проекты": staffer.projects_text
    }

    console.log(staffer.name)

    return (
        <div>
            <div id={staffer.id} style={{
                cursor: "pointer",
                margin: "0 10px",
                padding: "0",
                borderColor: "lightgray",
                display: "flex"
            }}
                // onClick={() => viewDiv(staffer.id)}
            >
                <img src={process.env.REACT_APP_API_URL + staffer.img}
                     style={{width: 150, display: "inline-block", margin: 0, height: "100px"}}
                     alt="картинка чет не загрузилась"/>
                <div>
                    <div> {staffer.name} </div>
                    <div> {staffer.post} </div>
                    <div> {staffer.academic_degree} {staffer.title}</div>
                    <div> {staffer.email} </div>
                    <div> {staffer.phone_number} </div>
                    <div> {staffer.adress} </div>
                </div>
            </div>
            <div id="div_for_button_list">
                <ul className="tracks">
                    {Object.entries(textsNames).map(([k, v]) => (v &&
                            <li key={k}>
                                <button
                                    key={k}
                                    onClick={() =>
                                    {
                                        let p = document.createElement('p');

                                        document.getElementById("div_for_button_list").appendChild(p);
                                        p.appendChild(document.createTextNode(v))

                                    }
                                    }
                                >
                                    {k}
                                </button>
                            </li>
                        )
                    )}
                </ul>
            </div>
            {/*{[staffer.bio_text, staffer.disciplines_and_courses_text, staffer.publications_text, staffer.projects_text].map(i => (i !== "none" &&
                <p>{i}</p>
            ))}*/}
        </div>
    )
});

export default StafferItem;
