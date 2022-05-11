import axios from "axios";

const {
    REACT_APP_YOUTUBE_API_KEY: YOUTUBE_API_KEY = "",
    REACT_APP_YOUTUBE_API_URL: YOUTUBE_API_URL = "",
} = process.env;

const YouTubeApi = axios.create({
    baseURL: YOUTUBE_API_URL,
    params: {
        key: YOUTUBE_API_KEY,
    },
});

export function YouTubeApiErrorMessagesParser(e) {
    let message = "Whoops!. Something went wrong calling the Api."

    try {
        const responseErrors = (e?.response?.data?.error?.errors || []).map(
            (error) => error.message
        );
        message = `${e?.message}. ` || "";

        if (responseErrors.length) {
            message += responseErrors.join(" ");
        }
    } catch (e) {
        // Silence is golden. We will use the default message.
    }

    return new Error(`Whoops! ${message}`);
}

export default YouTubeApi;
