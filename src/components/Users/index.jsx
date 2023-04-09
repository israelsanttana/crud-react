import React from "react";
import { Table, Button, Form } from 'react-bootstrap'


export class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usuarios: []
        }
    }

    componentDidMount() {
        this.searchUser();

    }

    componentWillUnmount() {

    }

    searchUser = () => {
        fetch("https://rest-api-user.herokuapp.com/categories")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ usuarios: dados })

            })

    }

    deleteUser = (id) => {
        fetch("https://rest-api-user.herokuapp.com/categories/" + id, { method: 'DELETE' })
            .then(resposta => {
                if (resposta.ok) {
                    this.searchUser();
                }
            })

    }


    render() {
        return (
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>idade</th>
                            <th>Gênero</th>
                            <th>Ocupação</th>
                            <th> Editar</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.usuarios.map((usuarios) =>
                                <tr>
                                    <td> {usuarios.nome} </td>
                                    <td> {usuarios.email} </td>
                                    <td> {usuarios.telefone} </td>
                                    <td> {usuarios.idade} </td>
                                    <td> {usuarios.genero}</td>
                                    <td> {usuarios.ocupacao} </td>
                                    <td> Atualizar  <Button variant="danger" onClick={() => this.deleteUser(usuarios.id)}>Excluir</Button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="number" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Idade</Form.Label>
                            <Form.Control type="number" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Gênero</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Ocupação</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Salvar
                        </Button>
                    </Form>
                </div>
            </>
        )


    }


}