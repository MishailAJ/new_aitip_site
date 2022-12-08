// Код, который запускается в index.html (последний запускается при запуске проекта). Взаимосвязь с index.html по ключевому слову root. Здесь создается 2 набора переменных (store-ы) и App.js


import ReactDOM from "react-dom";
import App from "./App";
import {createContext} from "react";
import UserStore from "./store/UserStore";
import StaffStore from "./store/StaffStore";


export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        staff_store: new StaffStore()
    }}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);