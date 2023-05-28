import React, { useEffect, useState } from "react";
import { FormContainer, InputArea, Input, Button } from "./Form.styles";
import axios from "axios";
import { toast } from "react-toastify";

export function Form({ getUsers, onEdit, setOnEdit }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [fone, setFone] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    useEffect(() => {
        if (onEdit) {
            setNome(onEdit.nome || "");
            setEmail(onEdit.email || "");
            setFone(onEdit.fone || "");
            setDataNascimento(onEdit.data_nascimento || "");
        } else {
            setNome("");
            setEmail("");
            setFone("");
            setDataNascimento("");
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome || !email || !fone || !dataNascimento) {
            return toast.warn("Preencha todos os campos");
        }

        const userData = {
            nome,
            email,
            fone,
            data_nascimento: dataNascimento,
        };
        console.log(userData);

        try {
            if (onEdit) {
                await axios.put("http://localhost:8800/" + onEdit.id, userData);
            } else {
                await axios.post("http://localhost:8800/", userData);
            }
            console.log("enviou");

            toast.success("Usuário salvo com sucesso");
            setNome("");
            setEmail("");
            setFone("");
            setDataNascimento("");
            setOnEdit(null);
            getUsers();
        } catch (error) {
            toast.error("Ocorreu um erro ao salvar o usuário");
        }
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <InputArea>
                <label>Nome</label>
                <Input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </InputArea>

            <InputArea>
                <label>E-mail</label>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </InputArea>

            <InputArea>
                <label>Telefone</label>
                <Input
                    type="number"
                    value={fone}
                    onChange={(e) => setFone(e.target.value)}
                />
            </InputArea>

            <InputArea>
                <label>Data de nascimento</label>
                <Input
                    type="date"
                    value={dataNascimento}
                    onChange={(e) => setDataNascimento(e.target.value)}
                />
            </InputArea>

            <Button type="submit">Salvar</Button>
        </FormContainer>
    );
}
