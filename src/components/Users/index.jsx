import React from "react";
import { Table } from 'react-bootstrap'

export class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usuarios: []
        }
    }

    componentDidMount() {
        fetch("https://rest-api-user.herokuapp.com/categories")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ usuarios: dados })

            })

    }

    componentWillUnmount() {

    }


    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>idade</th>
                        <th>Gênero</th>
                        <th>Ocupação</th>

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
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        )

    }
}