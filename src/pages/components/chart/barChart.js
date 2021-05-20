import axios from "axios";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Container } from "./styles";

const BarChart = () => {
    const [chartData, setChartData] = useState({});

    const baseURL = "http://localhost:3333";

    const Chart = () => {
        const data = JSON.parse(localStorage.getItem("user"));

        if (!data) {
            return;
        }

        const token = data.token;

        axios
            .get(`${baseURL}/days/`, {
                headers: { authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setChartData({
                    labels: res.data.days,
                    datasets: [
                        {
                            label: "Login realizados no DIA",
                            responsive: true,
                            data: res.data.loginQty,
                            borderColor: ["rgba(0, 0, 0, 0.6)"],
                            backgroundColor: ["rgba(75, 192, 192, 0.6)"],
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
        Chart();
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
                                beginAtZero: false,
                            },
                        },
                    },
                }}
            />
        </Container>
    );
};

export default BarChart;
