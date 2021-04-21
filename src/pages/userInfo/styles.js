import styled from "styled-components";

export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 40px;
    margin: 100px auto;
    display: block;
    flex-direction: row;
    align-items: center;

    h1 {
        color: black;
        font-size: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .info-text {
        color: #003366;
        font-size: 30px;
        flex-direction: row;
        display: block;
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

export const ButtonEdit = styled.button`
    position: absolute;
    cursor: pointer;
    background: #091166;
    color: white;
    border: 0;
    padding: 10px;
    margin-left: 550px;
    border-radius: 4px;
    font-size: 20px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    width: 80px;
`;

export const ButtonDelete = styled.button`
    cursor: pointer;
    background: #c8140c;
    color: white;
    border: 0;
    padding: 10px;
    border-radius: 4px;
    font-size: 18px;
    padding: 18px;
    margin-left: 260px;
    margin-top: 50px;

    &:hover {
        opacity: 0.9;
        transition: 1s;
    }
`;

export const Icon = styled.div`
    font-size: 50px;
    color: white;
    margin-bottom: 10px;
`;
