import React from 'react';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./NavBar.css"


const First = () => {
    return (
        <div className="first">
            <img src={"../asets/menu/eye.png"} className="eye"/>
            <div className="text-1">Версия для слабовидящих</div>
            <div className="d7">
                <form className="searchform">
                    <img className="searchform__img" src={"../asets/menu/search.png"}/>
                    <input className="searchform__inp" placeholder="Поиск по сайту"/>
                    <button className="searchform__btn">
                        Найти
                    </button>
                </form>
            </div>
            <img className="media" src={"../asets/menu/vk.png"}/>
            <img className="media" src={"../asets/menu/youtube.png"}/>
        </div>
    );
};

export default First;
