import styled from "styled-components";

export const Title = styled.h1`
    color: #fff;
    margin-left: 300px;

    a {
        display: flex;
        font-size: 20px;
        text-decoration: none;
        color: #ff6666;
        margin-left: 50px;
    }
`;

export const LogOutButton = styled.button`
    margin-left: 590px;
    background: #ff5050;
    border: 0;
    padding: 15px;
    border-radius: 4px;
    cursor: pointer;

    font-size: 15px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    &:hover {
        background: #f04139;
        transition: 0.4s;
    }
`;
