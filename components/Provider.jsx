"use client";

import { createContext, useState, useEffect } from "react";
export const AppContext = createContext();

const Provider = ({children}) => {

    const [rootUser, setRootUser] = useState(null);
    

  return (
    <AppContext.Provider value={{
        rootUser,
        setRootUser
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default Provider