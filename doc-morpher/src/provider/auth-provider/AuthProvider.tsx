import { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider, User, UserCredential } from "firebase/auth";
import auth from '../../firebase/firebase.config.js'
// import axios from "axios";




export const userContext = createContext(null);
interface authProviderProps {
    children: ReactNode
}

export interface AuthInfo {
    user: User | null;
    loader: boolean;
    createEmailPasswordUser: (email: string, password: string) => Promise<UserCredential>;
    createGoogleUser: () => Promise<UserCredential>;
    createGithubUser: () => Promise<UserCredential>;
    loggedinUser: (email: string, password: string) => Promise<UserCredential>;
    logOut: () => Promise<void>;
}

export const UserContext = createContext<AuthInfo | null>(null);


const googleProvider : GoogleAuthProvider = new GoogleAuthProvider();
const githubProvider : GithubAuthProvider = new GithubAuthProvider();



const AuthProvider = ({ children }: authProviderProps) => {

    const [user, setUser] = useState <User | null> (null);
    const [loader, setLoader] = useState <boolean> (true);

    const createEmailPasswordUser : (email: string, password: string) => Promise<UserCredential> = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const createGoogleUser : () => Promise<UserCredential> = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);

    }
    const createGithubUser : () => Promise<UserCredential> = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider);

    }

    const loggedinUser : (email: string, password: string) => Promise<UserCredential> = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    
    const logOut : () => Promise<void> = () => {
        return signOut(auth)
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

    const authInfo = {
        user,
        loader,
        createEmailPasswordUser,
        createGoogleUser,
        createGithubUser,
        loggedinUser,
        logOut,
    }

    return (
        <div>
            <UserContext.Provider value={authInfo}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default AuthProvider;