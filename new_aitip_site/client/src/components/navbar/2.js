import React from 'react';
import {Button, ButtonGroup, Dropdown, DropdownButton} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./NavBar.css"


const Second = () => {

    return (
        <div style={{width: "100vw", backgroundColor: "#365DC1"}}>
            <div className="d-flex" style={{width: "80vw", margin: "0 10vw"}}>
                <Dropdown style={{display: "inline-block", width: "15vw", margin: "0 0"}}>
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                        Абитуриенту
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{justifyContent: "space-around"}}>
                        <DropdownButton
                            key="Направления подготовки"
                            drop="end"
                            title="Направления подготовки"

                        >
                            <ButtonGroup vertical>
                                <Dropdown.Item href="https://yandex.ru/">Стоимость</Dropdown.Item>
                                <Dropdown.Item href="https://yandex.ru/">Важные документы</Dropdown.Item>
                                <Dropdown.Item href="https://yandex.ru/">Кураторы</Dropdown.Item>
                                <Dropdown.Item href="https://yandex.ru/">Как поступить</Dropdown.Item>
                                <Dropdown.Item href="https://yandex.ru/">Время и даты</Dropdown.Item>
                            </ButtonGroup>
                        </DropdownButton>
                        <DropdownButton
                            key="Приемная кампания"
                            drop="end"
                            title="Приемная кампания"
                        >
                            <ButtonGroup vertical>
                                <Dropdown.Item href="https://yandex.ru/">Документы</Dropdown.Item>
                                <Dropdown.Item href="https://yandex.ru/">Ход</Dropdown.Item>
                                <Dropdown.Item href="https://yandex.ru/">Расписание ВИ</Dropdown.Item>
                            </ButtonGroup>
                        </DropdownButton>
                        <DropdownButton
                            key="Контакты"
                            drop="end"
                            title="Контакты"
                        >
                            <ButtonGroup vertical>
                                <ButtonGroup vertical>
                                    <Dropdown.Item href="https://yandex.ru/">Телефонный справочник</Dropdown.Item>
                                    <Dropdown.Item href="https://yandex.ru/">Карта корпусов</Dropdown.Item>
                                    <Dropdown.Item href="https://yandex.ru/">Задать вопрос</Dropdown.Item>
                                </ButtonGroup>
                            </ButtonGroup>
                        </DropdownButton>
                    </Dropdown.Menu>
                </Dropdown>


                <Dropdown style={{display: "inline-block", width: "25vw", margin: "0 5px"}}>
                    <DropdownButton title="Студентам и выпускникам">
                        <ButtonGroup vertical>
                            <Button
                                href="https://yandex.ru/"
                            >
                                Расписание занятий
                            </Button>
                            <Button
                                href="https://yandex.ru/"
                            >
                                Лаборатории
                            </Button>
                            <Button
                                href="https://yandex.ru/"
                            >
                                ДПО
                            </Button>
                            <Button
                                href="https://yandex.ru/"
                            >
                                Трудоустройство
                            </Button>
                            <Button
                                href="https://yandex.ru/"
                            >
                                Наши выпускники
                            </Button>
                            <Button
                                href="https://yandex.ru/"
                            >
                                Ассоциация выпускников
                            </Button>
                            <Button
                                href="https://yandex.ru/"
                            >
                                ЕОИС
                            </Button>
                            <Button
                                href="https://yandex.ru/"
                            >
                                ЭБС
                            </Button>
                        </ButtonGroup>
                    </DropdownButton>
                </Dropdown>

                <Dropdown style={{display: "inline-block", width: "15vw", margin: "0 5px"}}>
                    <DropdownButton title="Сотрудникам">
                        <ButtonGroup vertical>
                            <Button
                                href="https://yandex.ru/"
                            >
                                Документы
                            </Button>
                            <Button
                                href="https://yandex.ru/"
                            >
                                Выборы заведующих кафедрами
                            </Button>
                            <Button
                                href="https://yandex.ru/"
                            >
                                Конкурс на замещение вакантных должностей педагогических работников, относящихся к профессорско-преподавательскому составу
                            </Button>
                            <Button
                                href="https://yandex.ru/"
                            >
                                ЭБС
                            </Button>
                            <Button
                                href="https://yandex.ru/"
                            >
                                ЕОИС
                            </Button>
                            <Button
                                href="https://yandex.ru/"
                            >
                                Списки литературы
                            </Button>
                        </ButtonGroup>
                    </DropdownButton>
                </Dropdown>

                <Dropdown style={{display: "inline-block", width: "15vw", margin: "0 5px"}}>
                    <DropdownButton title="Партнеры">
                        <ButtonGroup vertical>
                            <Button
                                href="https://yandex.ru/"
                            >
                                Индустриальные
                            </Button>
                            <Button
                                href="https://yandex.ru/"
                            >
                                Образовательные
                            </Button>
                            <Button
                                href="https://yandex.ru/"
                            >
                                Работодатели
                            </Button>
                        </ButtonGroup>
                    </DropdownButton>
                </Dropdown>
            </div>
        </div>

    );
};


export default Second;


// const [open, setOpen] = useState(false);
// <>
{/*<div className="mb-2">*/
}
{/*    {object.list.map((el) => (*/
}
{/*        <DropdownButton*/
}
{/*            as={ButtonGroup}*/
}
{/*            key={el.name_el}*/
}
{/*            id={el.name_el}*/
}
{/*            drop="end"*/
}
{/*            variant="secondary"*/
}
{/*            title={el.name_el}*/
}
{/*        >*/
}
{/*            <DropdownItem eventKey="1">Action</DropdownItem>*/
}
{/*            <DropdownItem eventKey="2">Another action</DropdownItem>*/
}
{/*            <DropdownItem eventKey="3">Something else here</DropdownItem>*/
}
{/*            <DropdownItem eventKey="4">Separated link</DropdownItem>*/
}
{/*        </DropdownButton>*/
}
{/*    ))}*/
}
{/*</div>*/
}
{/*<Button*/
}
{/*    onClick={() => setOpen(!open)}*/
}
{/*    aria-controls="example-collapse-text"*/
}
{/*    aria-expanded={open}*/
}
{/*    style={{width: 200}}*/
}
{/*>*/
}
{/*    {object.name}*/
}
{/*</Button>*/
}
{/*<div>*/
}
{/*    <Collapse in={open} dimension="width">*/
}
{/*        <div id="example-collapse-text">*/
}
{/*            <Card body style={{width: 200}}>*/
}
{/*                <ListGroup>*/
}
{/*                    {object.list.map(el => {*/
}
{/*                            <button style={{outline: "none"}}>*/
}
{/*                                {el.name_el}*/
}
{/*                            </button>*/
}
{/*                            // {*/
}
{/*                            //     el.list && el.list.map()*/
}
{/*                            // }*/
}
{/*                        }*/
}
{/*                    )}*/
}
{/*                </ListGroup>*/
}
{/*                /!*Anim pariatur cliche reprehenderit, enim eiusmod high life*!/*/
}
{/*                /!*accusamus terry richardson ad squid. Nihil anim keffiyeh*!/*/
}
{/*                /!*helvetica, craft beer labore wes anderson cred nesciunt sapiente*!/*/
}
{/*                /!*ea proident.*!/*/
}
{/*            </Card>*/
}
{/*        </div>*/
}
{/*    </Collapse>*/
}
{/*</div>*/
}
// </>