import { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider, User, UserCredential, TwitterAuthProvider } from "firebase/auth";
import auth from '../../firebase/firebase.config.js';
// import axios from "axios";




export const userContext = createContext(null);
interface authProviderProps {
    children: ReactNode
}

export interface AuthInfo {
    user: User | object | null;
    loader: boolean;
    createEmailPasswordUser: (email: string, password: string) => Promise<UserCredential>;
    createGoogleUser: () => Promise<UserCredential>;
    createGithubUser: () => Promise<UserCredential>;
    createTwitterUser: () => Promise<UserCredential>;
    loggedinUser: (email: string, password: string) => Promise<UserCredential>;
    logOut: () => Promise<void>;
}

const initialAuthInfo: AuthInfo = {
    user: {email: "", password: ""},
    loader: true,
    createEmailPasswordUser: async (email, password) => createUserWithEmailAndPassword(auth, email, password),
    createGoogleUser: async () => signInWithPopup(auth, new GoogleAuthProvider()),
    createGithubUser: async () => signInWithPopup(auth, new GithubAuthProvider()),
    createTwitterUser: async () => signInWithPopup(auth, new TwitterAuthProvider()),
    loggedinUser: async (email, password) => signInWithEmailAndPassword(auth, email, password),
    logOut: async () => signOut(auth),
  };

export const UserContext = createContext<AuthInfo>(initialAuthInfo);


const googleProvider : GoogleAuthProvider = new GoogleAuthProvider();
const githubProvider : GithubAuthProvider = new GithubAuthProvider();
const twitterProvider: TwitterAuthProvider = new TwitterAuthProvider();



const AuthProvider = ({ children }: authProviderProps) => {

    const [user, setUser] = useState <User | null> (null);
    const [loader, setLoader] = useState <boolean> (true);

    // create user with email and password
    const createEmailPasswordUser : (email: string, password: string) => Promise<UserCredential> = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // continue with google
    const createGoogleUser : () => Promise<UserCredential> = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);

    }

    // continue with github
    const createGithubUser : () => Promise<UserCredential> = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider);

    }

    // continue with twitter 
    const createTwitterUser: () => Promise<UserCredential> = () => {
        setLoader(true);
        return signInWithPopup(auth, twitterProvider);
    }

    // sigin in with email and password
    const loggedinUser : (email: string, password: string) => Promise<UserCredential> = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out
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
        createTwitterUser,
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