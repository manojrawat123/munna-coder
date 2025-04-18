import { toast } from "react-toastify";
import { API_BASE_URL, API_BASE_URL2 } from "../../config"
import axios from "axios";

export const postAuthRequest = async (route, data, token, popUp = true, url = 1) => {
    try {
        const p_url = url == 1 ? API_BASE_URL : API_BASE_URL2;
        const res = await axios.post(`${p_url}/${route}/`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        // const result = res.json();

        const result = res.data;

        if (popUp) {
            if (result.error) {
                toast.error(result.error, { position: "top-center" });
                return false;
            }

            if (result.message) {
                toast.success(result.message, { position: "top-center" });
                return result;
            }

            else {
                return result;
            }
        }
        return result;

    } catch (error) {
        console.log(error.response);
        if (popUp) {
            console.log(error);
            if (error.status == 400) {
                toast.error(error?.response?.data?.error, {
                    position: "top-center"
                });
            }

            else {
                toast.error("Internal Server Error", {
                    position: "top-center"
                });
            }
        }

        return false;
    }
}


export const postRequest = async (route, data, popUp = true, url = 1) => {
    try {
        const new_url = url == 2 ? API_BASE_URL2 : API_BASE_URL;

        const res = await axios.post(`${new_url}/${route}/`, data);

        const result = await res.data;

        if (popUp) {
            if (result.error) {
                toast.error(result.error, { position: "top-center" });
                return false;
            }

            if (result.message) {
                toast.success(result.message, { position: "top-center" });
                return result;
            }

            else {
                return result;
            }
        }

        return result;

    } catch (error) {
        // console.log("ApisError");
        console.log(error);
        if (popUp) {

            if (error.status == 400) {
                toast.error(error?.response?.data?.error, {
                    position: "top-center"
                });
            }
            else {
                toast.error("Internal Server Error", {
                    position: "top-center"
                });

            }

        }
        return false;
    }
}

export const getAuthRequest = async (route, token) => {
    try {
        const res = await fetch(`${API_BASE_URL}/${route}/`, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        });
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const getRequest = async (route) => {
    try {
        const res = await fetch(`${API_BASE_URL}/${route}/`);
        const data = await res.json();
        console.log(data);
        return data;

    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
}


export const getRequestParams = async (route, params) => {
    try {
        const res = await axios(`${API_BASE_URL}/${route}/`, { params : params });
        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
}
