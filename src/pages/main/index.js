import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { authService } from "../../services/api";
import Navbar from "../components/menuBar/navbar";

import { Title, LogOutButton } from "./styles";
import BarChart from "../components/chart/barChart";

export default class main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            redirectTo: null,
        };
    }

    async componentDidMount() {
        const loggedUser = await authService.getLoggedUser();

        if (!loggedUser) {
            this.setState({ redirectTo: "/" });
            console.log(loggedUser);
        }
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={this.state.redirectTo} />;
        }

        return (
            <>
                <Navbar />

                <LogOutButton onClick={authService.cleanLoggedUser}>
                    Sair
                </LogOutButton>

                <Title>Você esta logado!</Title>

                <BarChart />
            </>
        );
    }
}
