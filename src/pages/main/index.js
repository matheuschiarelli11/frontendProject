import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../../services/api";
import Navbar from "../components/menuBar/navbar";
import { Title, LogOutButton } from "./styles";
import BarChart from "../components/chart/barChart";
import SecondBarChart from "../components/chart/barChart2";

const main = () => {
    let history = useHistory();

    async function logout() {
        await authService.cleanLoggedUser();
        history.push("/");
    }

    useEffect(() => {
        const loggedUser = authService.getLoggedUser();

        if (!loggedUser) {
            return history.push("/");
        }
    }, []);

    return (
        <>
            <Navbar />
            <LogOutButton onClick={logout}>Sair</LogOutButton>
            <Title>Você esta logado!</Title>
            <BarChart />
            <br />
            <br />
            <SecondBarChart />
        </>
    );
};
export default main;
