import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import { User } from "firebase/auth";

type AuthContextType = {
	currentUser: User | null | undefined;
	getUser: () => User | null;
	signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
	currentUser: null,
	getUser() {
		return null;
	},
	signOut() {
		return auth.signOut();
	},
});

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }: any) {
	const [currentUser, setCurrentUser] = useState<User | null>();
	const [loading, setLoading] = useState(true);

	function signOut() {
		return auth.signOut();
	}

	function getUser() {
		return auth.currentUser;
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		getUser,
		signOut,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
