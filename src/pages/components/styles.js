import styled from "styled-components";

export const Container = styled.div`
    background: #fff;
    width: 100%;
    max-width: 620px;
    z-index: 10;
    margin: 5rem auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    box-shadow: 0 0 100vh rgba(0, 0, 0, 0.9);

    justify-content: center;
    align-items: center;

    .modal-header {
        background: #2c2c2c;
        width: 604px;
        color: #e9e9e9;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    p {
        margin-left: 245px;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, bold;
        font-size: 20px;
    }

    span {
        font-size: 1.8rem;
        cursor: pointer;
        margin-right: 40px;
    }
`;

export const EditUser = styled.div`
    padding: 1.5rem 1rem;
    color: black;
    font-size: 10px;

    input {
        width: 500px;
        height: 20px;
        padding: 10px 15px;
        margin-bottom: 30px;
        font-size: 15px;
    }

    button {
        display: block;
        font-size: 1.2rem;
        margin-left: 232px;
        padding: 0.5rem 1.8rem;
        outline: none;
        cursor: pointer;
        background: #dd501d;
        border: none;
        color: white;

        :disabled {
            opacity: 0.4;
            cursor: default;
        }
    }
`;
