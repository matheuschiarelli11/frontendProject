import React, { useState, useEffect, useRef } from "react";
import { authService } from "../../services/api";
import { Container, EditUser } from "./styles";
import swal from "sweetalert";
import { toast } from "react-toastify";

const Modal = ({ onClose = () => {} }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const [buttonEnable, setButton] = useState(false);

    const modalRef = useRef();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("user"));

        setUser({ ...data.user, token: data.token });

        let handler = (event) => {
            if (!modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    useEffect(() => {
        inputVerify();
    }, [name, password]);

    function inputVerify() {
        if (name && password) {
            setButton(true);
        } else {
            setButton(false);
        }
    }

    async function updateInfo() {
        const data = {
            name: name,
            password: password,
            token: user.token,
            id: user.id,
        };

        try {
            const response = await authService.editUser(data);
            const localUser = JSON.parse(localStorage.getItem("user"));
            localStorage.removeItem("user");
            authService.loggedUser({
                user: response.data,
                token: localUser.token,
            });
            swal({
                title: "Sucesso!",
                text: "Suas informações foram alteradas",
                type: "success",
            }).then(function () {
                onClose();
                location.reload();
            });
        } catch (error) {
            toast.error(error.response.data.message, {
                autoClose: 2500,
                hideProgressBar: true,
            });
        }
    }

    return (
        <Container ref={modalRef}>
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
                    onChange={(e) => setName(e.target.value)}
                ></input>

                <h1>Digite sua senha</h1>

                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                ></input>

                <button
                    onClick={() => {
                        updateInfo();
                    }}
                    disabled={!buttonEnable}
                >
                    Salvar
                </button>
            </EditUser>
        </Container>
    );
};

export default Modal;
