import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "./firebase/firebase.init";



firebaseInit()


const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confrimValue, setConfrimValue] = useState("");


    const [user, setUser] = useState({});
    const [error, setError] = useState("");


    const auth = getAuth();

    const getNameValue = (e) => {
        const nameValue = e?.target.value;
        setUserName(nameValue)
    }
    const getEmailValue = (e) => {
        const emailValue = e?.target.value;
        setEmail(emailValue)
    }
    const getPasswordValue = (e) => {
        const passwordValue = e?.target.value;
        setPassword(passwordValue)
    }

    const getConfirmValue = (e) => {
        const confirmValue = e?.target.value;
        setConfrimValue(confirmValue)
    }

    const createObject = () => {
        const hello = {};
        hello.name = userName;
        hello.email = email;
        hello.password = password;
        hello.confirmValue = confrimValue;
        return hello;
    }


    const passwordSignIn = () => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }



    const signUpWithEmail = () => {
        setIsLoading(true)

        return createUserWithEmailAndPassword(auth, email, password, userName)
    }

    const handleSignout = () => {
        setIsLoading(true)

        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
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
        getNameValue,
        getEmailValue,
        getPasswordValue,
        passwordSignIn,
        setUserName,
        getConfirmValue,
        createObject
    }

};

export default useFirebase;
