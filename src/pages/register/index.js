import React, { Component } from "react";

import { FaBurn } from "react-icons/fa";

import { Redirect } from "react-router-dom";
import { authService } from "../../services/api";

import { Container, Form, RegisterButton } from "./styles";

export default class register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        redirectTo: null,
    };

    changeNome = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    changeEmail = (event) => {
        this.setState({
            email: event.target.value,
        });
    };

    changePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    singUp = async (event) => {
        event.preventDefault();

        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        };
        const res = await authService.registerUser(data);
        console.log("res", res.data);
        authService.loggedUser(res.data);
        this.setState({
            redirectTo: "/main",
        });
        return res.data;
    };

    async componentDidMount() {
        const loggedUser = await authService.getLoggedUser();

        if (loggedUser) {
            console.log(loggedUser);
            this.setState({ redirectTo: "/main" });
        }
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={this.state.redirectTo} />;
        }

        const { name, email, password } = this.state;

        return (
            <Container>
                <h1>
                    <FaBurn />
                    Registre-se aqui
                </h1>

                <Form>
                    <div>
                        <input
                            type="text"
                            placeholder="Nome"
                            value={name}
                            onChange={this.changeNome}
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={this.changeEmail}
                        />

                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={this.changePassword}
                        />
                    </div>

                    <RegisterButton onClick={this.singUp}>
                        Cadastre-se
                    </RegisterButton>
                </Form>
            </Container>
        );
    }
}
