import React from "react";
import { Table } from 'react-bootstrap'

export class Users extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usuarios: []
        }
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        <th>idade</th>
                        <th>Gênero</th>
                        <th>Ocupação</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 1</td>
                        <td> Luis </td>
                        <td> Luis@teste.com </td>
                        <td> 0000-0000</td>
                        <td> endereco </td>
                        <td> 26 </td>
                        <td> masculino </td>
                        <td> developer </td>
                    </tr>

                    <tr>
                        <td> 1</td>
                        <td> Luis </td>
                        <td> Luis@teste.com </td>
                        <td> 0000-0000</td>
                        <td> endereco </td>
                        <td> 26 </td>
                        <td> masculino </td>
                        <td> developer </td>
                    </tr>

                </tbody>
            </Table>

        )





    }
}