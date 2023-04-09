import React from "react";
import { Table } from 'react-bootstrap'

export class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usuarios: [
                {
                    "id": 1,
                    "nome": "João da Silva",
                    "email": "joao.silva@example.com",
                    "telefone": "(99) 9999-1111",

                    "idade": 28,
                    "genero": "masculino",
                    "ocupacao": "advogado"
                },
                {
                    "id": 2,
                    "nome": "Maria Oliveira",
                    "email": "maria.oliveira@example.com",
                    "telefone": "(99) 9999-2222",

                    "idade": 42,
                    "genero": "feminino",
                    "ocupacao": "médica"
                }
            ]
        }
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