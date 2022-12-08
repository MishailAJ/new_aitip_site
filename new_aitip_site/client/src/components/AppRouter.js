// Отвечает за то, какие страницы доступны, для каких нужно быть авторизованным (Admin) и какая запускается по умолчанию (Main)

import React, {useContext} from 'react';
import {authRoutes, publicRoutes} from "../routes";
import {Route} from "react-router-dom";
import {Routes} from "react-router";
import {Context} from "../index";
import Main from "../pages/Main";


const AppRouter = () => {

    const {user} = useContext(Context);
    console.log(user.isAuth)

    const aRoutes = authRoutes.map(
        ({path, Component}, key) =>
            <Route key={key} path={path} element={Component}/>
    )
    const pRoutes = publicRoutes.map(
        ({path, Component}, key) =>
            <Route key={key} path={path} element={Component}/>
    )

    return (
        <Routes>
            {user.isAuth && aRoutes}
            {pRoutes}
            <Route path="*" element={<Main/>}/>
        </Routes>
    )

}


export default AppRouter;
