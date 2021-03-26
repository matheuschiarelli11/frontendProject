import styled from "styled-components";

export const Container = styled.div`
    max-width: 700px;
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
        align-items: center;

        svg {
            margin-right: 10px;
        }
    }

    a {
        text-decoration: none;
        color: red;
        font-size: 15px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        margin-top: -15px;
        margin-left: 30px;
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
        margin-bottom: 40px;
    }
`;

export const SubmitButton = styled.button.attrs((props) => ({
    disabled: props.buttonEnable,
}))`
    background: #7159c5;
    border: 0;
    padding: 10px;
    margin-left: 600px;
    border-radius: 4px;
    margin-bottom: 10px;

    font-family: Andale Mono, monospace;
    font-size: 20px;
    color: #500978;

    :disabled {
        cursor: pointer;
        opacity: 0.4;
    }
`;
