import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoMailOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";

import Header from "../components/Header";
import TextInput from "../components/TextInput";
import LoginButton from "../components/LoginButton";

import { Container, Form } from '../styles/commonStyles.js';

import Image from '../images/library.jpg';

function Login() {
  return (
    <IconContext.Provider value={{ color: "#666360", size: "1.2em" }}>
      <Container>
        <Form>
          <Header />
          <p>Faça seu login</p>
        
          <TextInput type="email" icon={<IoMailOutline />} placeholder="E-mail" />
          <TextInput type="password" icon={<IoLockClosedOutline />} placeholder="Senha" />
          <LoginButton text="Entrar"/>
        
          <Link to={'/register'}>Criar conta</Link>
        </Form>
        <img src={Image} alt="" />
      </Container>
    </IconContext.Provider>
  );
}

export default Login;