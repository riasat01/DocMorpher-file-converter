import { ReactNode } from "react";

interface authProviderProps {
    children: ReactNode
}

const AuthProvider = ({ children }: authProviderProps) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AuthProvider;