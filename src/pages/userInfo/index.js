import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import * as FaIcons from "react-icons/fa";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { authService } from "../../services/api";
import { Container, ButtonEdit, ButtonDelete, Icon } from "./styles";
import Modal from "../components/modal";

const Dashboard = () => {
    const [user, setUser] = useState({});
    const [redirect, setRedirect] = useState(null);
    const [showModal, setShowModal] = useState(null);

    useEffect(() => {
        const localuser = JSON.parse(localStorage.getItem("user"));

        setUser(localuser.user);
    }, []);

    async function handleDelete() {
        swal({
            title: "Excluir cadastro?",
            text: "Essa ação não pode ser desfeita",
            icon: "warning",
            buttons: ["Não", "Sim"],
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                authService.deleteUser(user);
                localStorage.removeItem("user");
                swal("Cadastro removido com sucesso!", {
                    icon: "success",
                });
                setRedirect("/");
            }
        });
    }

    if (redirect) {
        return <Redirect to={redirect} />;
    }
    return (
        <>
            <Container>
                <Icon>
                    <div>
                        <Link to="/main">
                            <FaIcons.FaArrowLeft />
                        </Link>
                    </div>
                </Icon>

                <div>
                    <h1>Nome:</h1>
                    <h1 className="info-text">{user.name}</h1>
                </div>

                <div>
                    <h1>Email:</h1> <h1 className="info-text">{user.email}</h1>
                </div>

                <ButtonEdit onClick={() => setShowModal(true)}>
                    Editar Nome
                </ButtonEdit>
                <ButtonDelete onClick={() => handleDelete()}>
                    Excluir Usuário
                </ButtonDelete>
            </Container>
            {showModal ? <Modal onClose={() => setShowModal(false)} /> : null}
        </>
    );
};

export default Dashboard;
