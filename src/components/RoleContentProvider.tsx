import React, { createContext, useContext, useState, SetStateAction } from "react";

interface RoleContextType {
    role: string;
    setRole: React.Dispatch<SetStateAction<string>>;
}
const RoleContext = createContext<RoleContextType>({ role: "", setRole: () => {} });

const RoleContextProvider = ( {children}: { children: React.ReactNode }) => {
    const [role, setRole] = useState("anonymous");
    return (
        <RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>
    );
}

 export const useRole = () => {
    return useContext(RoleContext);
}

export default RoleContextProvider;
