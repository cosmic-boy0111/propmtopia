"use client";

import { createContext, useState, useEffect } from "react";
export const AppContext = createContext();

const Provider = ({children}) => {

    const [rootUser, setRootUser] = useState(null);

    const getRootUser = async () => {
        // getting the root user
    }

    useEffect(() => {
        getRootUser();
    }, [])
    

  return (
    <AppContext.Provider value={{
        rootUser
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default Provider