import axios from "axios";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Container } from "./styles";

const BarChart = () => {
    const [chartData, setChartData] = useState({});

    const Chart = () => {
        axios
            .get("http://localhost:3333/info")
            .then((res) => {
                setChartData({
                    labels: res.data.days,
                    datasets: [
                        {
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
                height: "400px",
                width: "800px",
                marginLeft: "290px",
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

export default BarChart;
