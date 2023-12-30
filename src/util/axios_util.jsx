import axios from "axios";

axios.defaults.baseURL = "https://minimemo.store";
// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const getAuthToken = () => {
    return window.localStorage.getItem("authToken");
}

export const setAuthToken = (token) => {
    window.localStorage.setItem("authToken", token);
}

export const isLogged = () => {
    return getAuthToken() !== null && getAuthToken() !== 'null';
}

export const logout = () => {
    setAuthToken(null)
}

export const request = (method, url, data) => {
    let headers = {};
    if (isLogged()) {
        headers["Authorization"] = `Bearer ${getAuthToken()}`;
    }
    return axios({
        method: method,
        url: url,
        data: data,
        headers: headers
    });
}