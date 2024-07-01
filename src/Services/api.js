import axios from "axios";
import { baseUrl } from "../Constant/Url";

const createApiCallFunction = () => {
    const api = axios.create({
        baseURL: baseUrl,
        timeout: 90000,
    });

    // Add a request interceptor to handle CORS headers and CSRF token
    api.interceptors.request.use((config) => { return config; },
        (error) => {
            return Promise.resolve(error);
        }
    );

    // Add a response interceptor to handle errors globally
    api.interceptors.response.use((response) => {
        return Promise.resolve(response);
    },
        (error) => {
            // Handle errors
            if (error.response) {
                console.error("Response error:", error.response);
                return Promise.resolve(error.response);
            } else if (error.request) {
                console.error("Request error:", error.request);
                return Promise.resolve({ message: "No response received from server" });
            } else {
                console.error("Request setup error:", error.message);
                return Promise.resolve({ message: "Error setting up request" });
            }
        }
    );

    // Define and return the API call function
    return async (config) => {
        const response = await api(config);
        return response;
    };
};

export const apiService = createApiCallFunction();