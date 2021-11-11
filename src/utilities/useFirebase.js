import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "./firebase/firebase.init";



firebaseInit()


const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [user, setUser] = useState({});
    const [error, setError] = useState("");


    const auth = getAuth();


    const handleSignout = () => {
        setIsLoading(true)

        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }


    const passwordSignIn = () => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError("")
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));


    }



    const signUpWithEmail = () => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                setError("")
                console.log(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
            .finally(() => setIsLoading(false));

    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setError("")
            } else {
                setUser({})
            }
            setIsLoading(false);
        })
    }, [auth]);



    return {
        user,
        error,
        handleSignout,
        setError,
        setUser,
        setIsLoading,
        isLoading,
        signUpWithEmail,
        passwordSignIn,
        userName,
        setUserName,
        email,
        setEmail,
        password,
        setPassword
    }

};

export default useFirebase;