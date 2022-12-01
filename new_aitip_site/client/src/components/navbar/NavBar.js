import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {
    Button,
    ButtonGroup,
    Card,
    Collapse,
    Container,
    Dropdown,
    DropdownButton,
    Image,
    Navbar,
    Row
} from "react-bootstrap";
import {useNavigate} from "react-router";
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import DropdownItem from "react-bootstrap/DropdownItem";
import First from "./1";
import Second from "./2";
import Third from "./3";


const NavBar = observer(() => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);

    const upMenu = [
        {
            name: "Абитуриенту",
            list: [
                {
                    name_el: "Направления подготовки",
                    list_el: ["Стоимость", "Важные документы", "Кураторы", "Как поступить", "Время и даты"]
                },
                {
                    name_el: "Приемная кампания",
                    list_el: ["Документы", "Ход", "Расписание ВИ"]
                },
                {
                    name_el: "Контакты",
                    list_el: ["Телефонный справочник", "Карта корпусов", "Задать вопрос"]
                },
            ]
        },
        {
            name: "Студентам и выпускникам",
            list: [
                {
                    point: "",
                    list: []
                },
                {
                    point: "",
                    list: []
                },
                {
                    point: "",
                    list: []
                },
                {
                    point: "",
                    list: []
                },
                {
                    point: "",
                    list: []
                },
                {
                    point: "",
                    list: []
                },
                {
                    point: "",
                    list: []
                },
            ]

        },
        {
            name: "",
            list: [
                {
                    point: "",
                    list: []
                },
            ]

        },
        {
            name: "",
            list: [
                {
                    point: "",
                    list: []
                },
            ]

        },
    ]

    return (
        <Navbar style={{flexDirection: "column", margin: "0 0", padding: "0 0"}}>
            <First/>
            <Second/>
            <Third/>
        </Navbar>
    )
});


export default NavBar;
