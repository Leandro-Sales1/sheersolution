import axios from "axios";

const apiUrl = process.env.REACT_APP_GEMINI_URL;

const geminiApi = axios.create({
  baseURL: apiUrl,
});

export default geminiApi
