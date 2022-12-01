// Frontend модального окна для добавления сотрудника и функции, изменяющие состояния(установлено в модальном окне определенное значение или нет)


import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, FormControl, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";
import {observer} from "mobx-react-lite";
import {createStaffer} from "../../http/staffAPI";

const CreateStaff = observer(({show, onHide}) => {
    const {staff} = useContext(Context)
    const [name, setName] = useState("")
    const [post, setPost] = useState("")
    const [academic_degree, setAcademic_degree] = useState("")
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: "", description: "", number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addStaffer = () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("price", `${price}`)
        formData.append("img", file)
        formData.append("info", JSON.stringify(info))
        createStaffer(formData).then(() => onHide())
    }

    useEffect(() => {
        fetchTypes().then(data =>
            device.setTypes(data)
        )
        fetchBrands().then(data =>
            device.setBrands(data)
        )
        fetchDevices().then(data =>
            device.setDevices(data.rows)
        )
    }, [])

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Добавление устройства</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row>
                        <Dropdown className="m-2" style={{display: "flex", width: "40%"}}>
                            <DropdownToggle>{device.selectedType.name || "Выберите тип"}</DropdownToggle>
                            <DropdownMenu>
                                {device.types.map(type =>
                                    <DropdownItem onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown className="m-2" style={{display: "flex", width: "40%"}}>
                            <DropdownToggle>{device.selectedBrand.name || "Выберите бренд"}</DropdownToggle>
                            <DropdownMenu>
                                {device.brands.map(brand =>
                                    <DropdownItem onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>
                    </Row>

                    <Row>
                        <FormControl className="mt-3" placeholder="Название" value={name} onChange={e => setName(e.target.value)}/>
                        <FormControl className="mt-3" placeholder="Цена" type="number" value={price} onChange={e => setPrice(Number(e.target.value))}/>
                        <FormControl className="mt-3" type="file" onChange={selectFile}/>
                    </Row>
                    <hr/>
                    <Button variant="outline-info" onClick={addInfo}>
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row key={i.number} className="mt-3">
                            <Col md={4}>
                                <FormControl placeholder="Название характеристики" value={i.title} onChange={e => changeInfo("title", e.target.value, i.number)}/>
                            </Col>
                            <Col md={4}>
                                <FormControl placeholder="Значение характеристики" value={i.description} onChange={e => changeInfo("description", e.target.value, i.number)}/>
                            </Col>
                            <Col md={4}>
                                <Button variant="outline-danger" onClick={() => removeInfo(i.number)}>Удалить</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="outline-success" onClick={addDevice}>
                    Добавить устройство
                </Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateStaff;
