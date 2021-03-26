import React, { Component } from "react";

import { Redirect } from "react-router-dom";

import { authService } from "../../services/api";
import { FaDesktop } from "react-icons/fa";

import { Container, Form, SubmitButton } from "./styles";

export default class login extends Component {
    state = {
        email: "",
        password: "",
        buttonEnable: false,
        redirectTo: null,
    };

    changeEmail = (event) => {
        this.setState(
            {
                email: event.target.value,
            },
            this.inputVerify
        );
    };

    changePassword = (event) => {
        this.setState(
            {
                password: event.target.value,
            },
            this.inputVerify
        );
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password,
        };

        try {
            const res = await authService.authenticate(data);
            console.log("res", res.data);
            authService.loggedUser(res.data);
            this.setState({
                redirectTo: "/main",
            });
        } catch (error) {
            console.log(error.response.data.error);
            alert("Erro ao efetuar login");
        }
    };

    inputVerify = () => {
        if (this.state.password && this.state.email) {
            this.setState({
                buttonEnable: true,
            });
        } else {
            this.setState({
                buttonEnable: false,
            });
        }
    };

    async componentDidMount() {
        const loggedUser = await authService.getLoggedUser();

        if (loggedUser) {
            console.log(loggedUser);
            this.setState({ redirectTo: "/main" });
        }
    }

    render() {
        const { email, password, buttonEnable } = this.state;

        if (this.state.redirectTo) {
            return <Redirect to={this.state.redirectTo} />;
        }

        return (
            <Container>
                <h1>
                    <FaDesktop />
                    Faça o Login para acessar a pagina principal
                </h1>

                <Form>
                    <div>
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
                </Form>

                <a href="/register">Não tenho cadastro</a>

                <SubmitButton
                    buttonEnable={!buttonEnable}
                    onClick={this.handleSubmit}
                >
                    Login
                </SubmitButton>
            </Container>
        );
    }
}
