import styled from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 40px;
    margin: 90px auto;

    h1 {
        color: black;
        font-size: 30px;
        display: flex;
        flex-direction: row;
        margin-left: 250px;
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }
`;

export const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    input {
        border: 1px solid #eee;
        padding: 10px 15px;
        display: block;
        margin-bottom: 50px;
    }
`;

export const RegisterButton = styled.button`
    border: 0;
    background: #b30059;
    border-radius: 4px;
    font-size: 15px;
    padding: 10px;
    margin-bottom: -250px;
    margin-left: -90px;
    font-family: "Josefin Sans", sans-serif;
    font-weight: bolder;
    color: white;
`;
