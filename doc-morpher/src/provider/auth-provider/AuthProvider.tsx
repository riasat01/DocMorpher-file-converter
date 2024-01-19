import { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,GithubAuthProvider } from "firebase/auth";
import auth from "../../Hooks/authentication.config";
import axios from "axios";



export const userContext = createContext(null);
interface authProviderProps {
    children: ReactNode
}

const AuthProvider = ({ children }: authProviderProps) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createEmailPasswordUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const createGoogleUser = () => {
        const provider = new GoogleAuthProvider();
        setLoader(true);
        return signInWithPopup(auth, provider);

    }
    const createGithubUser = () => {
        const provider = new GithubAuthProvider();
        setLoader(true);
        return signInWithPopup(auth, provider);

    }

    const loggedinUser = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user


                
                setUser(user);
                setLoader(false);

            } else {
                // User is signed out
                // ...
                setLoader(true);
            }
        }
        )
    }, []);

    const signUp = () => {
        signOut(auth).then(() => {
            setUser(null);
            setLoader(false)
        }).catch(() => {

        });
    }

    

    const authInfo = {
        user,
        loader,
        createEmailPasswordUser,
        createGoogleUser,
        createGithubUser,
        loggedinUser,
        signUp,
    }

    return (
        <div>
            <userContext.Provider value={authInfo}>
                {children}
            </userContext.Provider>
        </div>
    );
};

export default AuthProvider;