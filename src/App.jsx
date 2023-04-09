import { Home } from './components/home';
import { About } from './components/about';
import { Users } from './components/users';
import styles from './global.module.css'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'


export function App() {
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li><Link to={"/"}>Página inicial</Link ></li>
                    <li><Link to={"/usuarios"}>Usuários</Link ></li>
                    <li><Link to={"/sobre"}>Sobre</Link ></li>
                </ul>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/usuarios' element={<Users />}></Route>
                    <Route path='/sobre' element={<About />}></Route>
                </Routes>
            </BrowserRouter>
        </div>

    )
}