import axios, { AxiosInstance } from "axios";
import axiosRetry from "axios-retry";

// default config
const axiosCustom: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    method: "GET"
});

/**
 * count and delay retries for fail requests before throw an error
 * these settings can be specified inside special request 
 * axios.get('/url', {
        'axios-retry': {
            retries: 0
        }
 * })
 */
axiosRetry(
    axiosCustom,
    {
        retries: 3,
        retryDelay(retryCount) {
            return retryCount * 300
        }
    }
);

export default axiosCustom;