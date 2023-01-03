import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Link} from "react-router-dom";
import {useLocation, useNavigate} from "react-router";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(user.isAuth)

    const letsAuth = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            console.log(user.user)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Пароль"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {isLogin
                        ?
                        <div className="d-flex justify-content-between p-3 mb-3" style={{flexDirection: "row"}}>
                            <div>
                                Нет аккаунта ? <Link to={REGISTRATION_ROUTE}>Зарегистрироваться</Link>
                            </div>
                            <Button variant="outline-success" style={{width: "30%"}} onClick={letsAuth}>
                                Войти
                            </Button>
                        </div>
                        :
                        <div className="d-flex justify-content-between p-3 mb-3" style={{flexDirection: "row"}}>
                            <div>
                                Есть аккаунт? <Link to={LOGIN_ROUTE}>Войти в аккаунт</Link>
                            </div>
                            <Button variant="outline-success" style={{width: "30%", textAlign: "justify"}} onClick={letsAuth}>
                                Зарегистрироваться
                            </Button>
                        </div>
                    }
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
