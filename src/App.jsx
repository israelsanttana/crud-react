import { Home } from './components/home';
import { About } from './components/about';
import { Users } from './components/users';
import styles from './global.module.css'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export function App() {
    return (
        <div>
            <BrowserRouter>
                <Nav variant="tabs">
                    <Nav.Item>
                        <Nav.Link as={Link} to={"/"}>Página inicial</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to={"/usuarios"}>Usuários</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link as={Link} to={"/sobre"}>Sobre</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/usuarios' element={<Users />}></Route>
                    <Route path='/sobre' element={<About />}></Route>
                </Routes>
            </BrowserRouter>
        </div>

    )
}