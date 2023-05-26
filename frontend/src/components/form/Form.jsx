import React, { useRef } from "react"
import styled from "styled-components"

const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;

    
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label``;

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: #fff;
    height: 42px;
`;

export function Form(onEdit) {

    const ref = useRef();

    return (
        <FormContainer ref={ref}>
            <InputArea>
                <label>Nome</label>
                <Input name="nome" />
            </InputArea>

            <InputArea>
                <label>E-mail</label>
                <Input name="email" type="email" />
            </InputArea>

            <InputArea>
                <label>Telefone</label>
                <Input name="fone" />
            </InputArea>

            <InputArea>
                <label>Data de nascimento</label>
                <Input name="data_nascimento" type="date" />
            </InputArea>

            <Button type="submit">Salvar</Button>
        </FormContainer>

    )
}