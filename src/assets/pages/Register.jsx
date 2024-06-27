import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoPersonOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";

import Header from "../components/Header";
import TextInput from "../components/TextInput";
import LoginButton from "../components/LoginButton";

import { Container, Form } from '../styles/commonStyles.js';

import Image from '../images/library.jpg';

function Register() {
    return (
        <IconContext.Provider value={{ color:"#666360", size:"1.2em" }}>
            <Container>
                <img src={Image} alt="" />

                <Form>
                    <Header />
                    <p>Crie sua conta</p>

                    <TextInput type="text" icon={<IoPersonOutline />} placeholder="Nome" />
                    <TextInput type="text" icon={<IoMailOutline />} placeholder="E-mail" />
                    <TextInput type="text" icon={<IoLockClosedOutline />} placeholder="Senha" />
                    <LoginButton text="Cadastrar" />

                    <Link to={'/login'}>Voltar para o login</Link>
                </Form>
            </Container>
        </IconContext.Provider>
    );
}

export default Register;