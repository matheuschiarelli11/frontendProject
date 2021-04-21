import React, { Component } from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

import { FaBurn } from "react-icons/fa";

import { Redirect } from "react-router-dom";
import { authService } from "../../services/api";
import { toast } from "react-toastify";

import { Container, Form, RegisterButton } from "./styles";

export default class register extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        buttonEnable: false,
        redirectTo: null,
    };

    changeNome = (event) => {
        this.setState(
            {
                name: event.target.value,
            },
            this.inputVerify
        );
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

    singUp = async (event) => {
        event.preventDefault();

        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        };

        try {
            const res = await authService.registerUser(data);
            console.log("res", res.data);
            authService.loggedUser(res.data);
            this.setState({
                redirectTo: "/main",
            });
            return res.data;
        } catch (error) {
            toast.error(error.response.data.error);
        }
    };

    inputVerify = () => {
        if (
            this.state.name &&
            this.state.password.length >= 5 &&
            this.state.email
        ) {
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
        if (this.state.redirectTo) {
            return <Redirect to={this.state.redirectTo} />;
        }

        const { name, email, password, buttonEnable } = this.state;

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
                        <Tippy
                            content="Senha precisa conter no minimo CINCO caracteres!"
                            placement="bottom"
                        >
                            <input
                                type="password"
                                placeholder="Senha"
                                value={password}
                                onChange={this.changePassword}
                            />
                        </Tippy>
                    </div>

                    <RegisterButton
                        buttonEnable={!buttonEnable}
                        onClick={this.singUp}
                    >
                        Cadastre-se
                    </RegisterButton>
                </Form>
            </Container>
        );
    }
}
