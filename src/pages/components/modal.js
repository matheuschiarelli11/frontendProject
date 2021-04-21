import React, { useState, useEffect } from "react";
import { authService } from "../../services/api";
import { Container, EditUser } from "./styles";
import swal from "sweetalert";

const Modal = ({ onClose = () => {} }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("user"));

        setUser({ ...data.user, token: data.token });
    }, []);

    function changeName(e) {
        setName(e.target.value);
    }

    function changePassword(e) {
        setPassword(e.target.value);
    }

    async function updateInfo() {
        const data = {
            name: name,
            password: password,
            token: user.token,
            id: user.id,
        };

        const response = await authService.editUser(data);
        const localUser = JSON.parse(localStorage.getItem("user"));
        localStorage.removeItem("user");
        authService.loggedUser({ user: response.data, token: localUser.token });
        swal({
            text: "Suas informações foram alteradas",
            type: "success",
        }).then(function () {
            location.reload();
        });
    }

    return (
        <Container>
            <div className="modal-header">
                <p>Alterar Usuário</p>
                <span onClick={onClose} className="close-span">
                    X
                </span>
            </div>
            <EditUser>
                <h1>Nome</h1>
                <input
                    placeholder="Altere seu nome de usuário"
                    value={name}
                    onChange={changeName}
                ></input>
                <h1>Digite sua senha</h1>
                <input
                    value={password}
                    onChange={changePassword}
                    type="password"
                ></input>
                <button
                    onClick={() => {
                        updateInfo();
                        onClose();
                    }}
                >
                    Salvar
                </button>
            </EditUser>
        </Container>
    );
};

export default Modal;
