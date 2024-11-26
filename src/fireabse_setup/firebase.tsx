import {initializeApp} from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import {
	query,
	collection,
	where,
	getDocs,
	addDoc,
	getFirestore,
} from "@firebase/firestore";

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
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt: "select_account"});

export const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleAuthProvider);
		const user = res.user;

		// TODO: Move the add user to database on first sign in server-side
		const q = query(
			collection(firestore, "users"),
			where("uid", "==", user.uid)
		);
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(collection(firestore, "users"), {
				uid: user.uid,
				name: user.displayName,
				authProvider: "google",
				email: user.email,
			});
		}
	} catch (err) {
		console.error(err);
	}
};
