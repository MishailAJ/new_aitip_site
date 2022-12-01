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