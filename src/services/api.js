import axios from "axios";

const baseURL = "http://localhost:3333";

export const authService = {
    async authenticate(data) {
        const endpoint = `${baseURL}/session`;
        return axios.post(endpoint, data);
    },

    async registerUser(data) {
        const endpoint = `${baseURL}/user`;
        return axios.post(endpoint, data);
    },

    loggedUser(data) {
        const parsedData = JSON.stringify(data);
        localStorage.setItem("user", parsedData);
    },

    getLoggedUser() {
        let data = localStorage.getItem("user");

        if (!data) return null;

        try {
            let parsedData = JSON.parse(data);
            return parsedData;
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    cleanLoggedUser() {
        localStorage.clear();
        window.location.reload();
    },
};
