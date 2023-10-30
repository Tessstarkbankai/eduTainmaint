import axios from "axios";

export const client = axios.create({
	// baseURL: "https://us-central1-eduutainment.cloudfunctions.net/app",
	baseURL: "http://127.0.0.1:5001/eduutainment/us-central1/app",
});
