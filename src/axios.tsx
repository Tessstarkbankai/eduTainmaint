import axios from "axios";

export const client = axios.create({
	baseURL: "https://us-central1-eduutainment.cloudfunctions.net/app",
});
