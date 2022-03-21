import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./Firebase.init";
initializeAuthentication();
const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const provider = new GoogleAuthProvider();
	const auth = getAuth();

	const LoginWithGoogle = () => {
		return signInWithPopup(auth, provider);
	};
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return unsubscribe;
	}, [auth]);
	const Logout = () => {
		signOut(auth)
			.then(() => setUser({}))
			.finally(() => setIsLoading(false));
	};
	return {
		user,
		LoginWithGoogle,
		Logout,
		isLoading
	};
};
export default useFirebase;
