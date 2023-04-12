import { Home } from './components/Home';
import { About } from './components/About';
import { Users } from './components/users';
import styles from './global.module.css'
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export function App() {
    return (
        <main className={styles.main}>
            <BrowserRouter>
                <Nav variant="tabs" className='flex-column'>
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
        </main>

    )
}