import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBc8AwHCyvNmeRQBPU0aLC7FULXGr5IJTA",
	authDomain: "eduutainment.firebaseapp.com",
	projectId: "eduutainment",
	storageBucket: "eduutainment.appspot.com",
	messagingSenderId: "767558466304",
	appId: "1:767558466304:web:4c938a603bc6ee8bf811e5",
	measurementId: "G-P9M0VNKB2X",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
