import {  Dispatch, ReactNode, SetStateAction } from "react";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider, User, UserCredential, TwitterAuthProvider, updateProfile } from "firebase/auth";
import auth from '../../firebase/firebase.config.js';
import useAxiosSecure from "../../custom-hooks/use-axios-secure/useAxiosSecure.js";

interface CustomUser extends User {
    email: string,
    displayName: string
}


export const userContext = createContext(null);
interface authProviderProps {
    children: ReactNode
}

export interface AuthInfo {
    user: CustomUser | User | null;
    loader: boolean;
    setLoader: Dispatch<SetStateAction<boolean>>;
    createEmailPasswordUser: (email: string, password: string) => Promise<UserCredential>;
    createGoogleUser: () => Promise<UserCredential>;
    createGithubUser: () => Promise<UserCredential>;
    createTwitterUser: () => Promise<UserCredential>;
    setUserInfo: (name: string, photo: string) => Promise<void>;
    loggedinUser: (email: string, password: string) => Promise<UserCredential>;
    logOut: () => Promise<void>;
}

const initialAuthInfo: AuthInfo = {
    user: null,
    loader: true,
    setLoader: (() => {}) as Dispatch<SetStateAction<boolean>>,
    createEmailPasswordUser: async (email, password) => createUserWithEmailAndPassword(auth, email, password),
    createGoogleUser: async () => signInWithPopup(auth, new GoogleAuthProvider()),
    createGithubUser: async () => signInWithPopup(auth, new GithubAuthProvider()),
    createTwitterUser: async () => signInWithPopup(auth, new TwitterAuthProvider()),
    setUserInfo: async (name: string, photo: string) => updateProfile(auth?.currentUser as User, { displayName: name, photoURL: photo }),
    loggedinUser: async (email, password) => signInWithEmailAndPassword(auth, email, password),
    logOut: async () => signOut(auth),
};

export const UserContext = createContext<AuthInfo>(initialAuthInfo);


const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
const githubProvider: GithubAuthProvider = new GithubAuthProvider();
const twitterProvider: TwitterAuthProvider = new TwitterAuthProvider();



const AuthProvider = ({ children }: authProviderProps) => {

    const [user, setUser] = useState<CustomUser | User | null>(null);
    const [loader, setLoader] = useState<boolean>(true);
    const axiosSecure = useAxiosSecure();

    // create user with email and password
    const createEmailPasswordUser: (email: string, password: string) => Promise<UserCredential> = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // continue with google
    const createGoogleUser: () => Promise<UserCredential> = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);

    }

    // continue with github
    const createGithubUser: () => Promise<UserCredential> = () => {
        setLoader(true);
        return signInWithPopup(auth, githubProvider);

    }

    // continue with twitter 
    const createTwitterUser: () => Promise<UserCredential> = () => {
        setLoader(true);
        return signInWithPopup(auth, twitterProvider);
    }

    // sigin in with email and password
    const loggedinUser: (email: string, password: string) => Promise<UserCredential> = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user info 
    const setUserInfo: (name: string, photo: string) => Promise<void> = (name, photo) => {
        setLoader(true);
        return updateProfile(auth?.currentUser as User, {
            displayName: name,
            photoURL: photo
        })
    }

    // log out
    const logOut: () => Promise<void> = () => {
        setLoader(true);
        return signOut(auth);
    }




    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            const loggedUser = {eamil: currentUser?.email || user?.email}
            if (currentUser) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                axiosSecure.post('/jwt', loggedUser)
                .then(res => {
                    console.log(res);
                })

                console.log(currentUser);
                setUser(currentUser);
                setLoader(false);

            } else {
                // User is signed out
                // ...
                axiosSecure.post('/logout', loggedUser)
                    .then(res => {
                        console.log(res.data);
                    })
                setUser(null);
                setLoader(false);
            }
        }
        )
    }, []);

    const authInfo = {
        user,
        loader,
        setLoader,
        createEmailPasswordUser,
        createGoogleUser,
        createGithubUser,
        createTwitterUser,
        loggedinUser,
        setUserInfo,
        logOut
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