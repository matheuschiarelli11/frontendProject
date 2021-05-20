import axios from "axios";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Container } from "./styles";

const SecondBarChart = () => {
    const [chartData, setChartData] = useState({});

    const baseURL = "http://localhost:3333";

    const ChartMonth = () => {
        const data = JSON.parse(localStorage.getItem("user"));

        if (!data) {
            return;
        }

        const token = data.token;
        console.log();
        axios
            .get(`${baseURL}/months/`, {
                headers: { authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setChartData({
                    labels: res.data.months,
                    datasets: [
                        {
                            label: "Login realizados no MÊS",
                            responsive: true,
                            data: res.data.loginQty,
                            borderColor: ["rgba(0, 0, 0, 0.6)"],
                            backgroundColor: ["rgba(0, 1, 51, 0.8)"],
                            borderWidth: 1,
                            color: "#fff",
                        },
                    ],
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        ChartMonth();
    }, []);
    return (
        <Container
            style={{
                height: "300px",
                width: "550px",
                marginLeft: "400px",
                color: "white",
            }}
        >
            <Bar
                data={chartData}
                options={{
                    scales: {
                        yAxes: {
                            ticks: {
                                maxTicksLimit: 6,
                            },
                        },
                    },
                }}
            />
        </Container>
    );
};

export default SecondBarChart;
