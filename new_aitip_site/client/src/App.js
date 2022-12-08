// BrowserRouter - обертка для запуска всех страниц. На каждой странице будут меню (NavBar), а также компонент-страница (какую страницу запускать решает AppRouter)


import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import NavBar from "./components/navbar/NavBar";


const App = observer(() => {
  return (
      <BrowserRouter>
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
  )
})

export default App;
