import axios from "axios";
import {jwtDecode} from "jwt-decode";

axios.defaults.baseURL = "https://minimemo.store";
// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const getAuthToken = () => {
    return window.localStorage.getItem("authToken");
}

export const setAuthToken = (token) => {
    window.localStorage.setItem("authToken", token);
}

export const getRefreshToken = () => {
    return window.localStorage.getItem("refreshToken");
}

export const setRefreshToken = (token) => {
    console.log(token)
    window.localStorage.setItem("refreshToken", token);
}

export const isLogged = () => {
    return getAuthToken() !== null && getAuthToken() !== 'null';
}

export const logout = () => {
    setAuthToken(null)
    setRefreshToken(null)
}

export const isTokenExpired = () => {
    const token = getAuthToken();
    if (token === null || token === 'null') {
        return true;
    }
    const decoded = jwtDecode(token);
    return decoded.exp < Date.now() / 1000;
}

function refreshToken() {
    axios.post("/auth/refresh", {
        refreshToken: getRefreshToken(),
        accessToken: getAuthToken()
        }
    ).then((response) => {
        console.log(response);
        setAuthToken(response.data.token);
        setRefreshToken(response.data.refreshToken);
        window.location.reload();
    }).catch((error) => {
        console.log(error);
        logout();
        window.location.reload();
    });
}

export const request = (method, url, data) => {
    let headers = {};
    if (isLogged()) {
        headers["Authorization"] = `Bearer ${getAuthToken()}`;
        if (isTokenExpired()) {
            console.log("token expired");
            refreshToken();
            return;
        }
    }
    return axios({
        method: method,
        url: url,
        data: data,
        headers: headers
    }).catch((error) => {
        if (error.response.status === 401) {
            const message = error.response.data.message;
            if (message.includes("Token has expired")) {
                refreshToken();
            }
        }
        throw error;
    });
}