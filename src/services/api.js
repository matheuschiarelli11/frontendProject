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

    editUser(data) {
        const endpoint = `${baseURL}/user/${data.id}`;
        return axios.put(endpoint, data, {
            headers: { authorization: `Bearer ${data.token}` },
        });
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

    async deleteUser(data) {
        const endpoint = `${baseURL}/user/${data.id}`;
        return axios.delete(endpoint);
    },

    cleanLoggedUser() {
        localStorage.clear();
    },
};
