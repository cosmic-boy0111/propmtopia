"use client";

import { Api } from "@utils/api";
import { createContext, useState, useEffect } from "react";
export const AppContext = createContext();

const Provider = ({children}) => {

    const [rootUser, setRootUser] = useState(null);

    const getRootUser = async () => {
        console.log('under the get root user');
        await Api._user._authenticate().then((response) => {
            if (response.status === 200) {
                console.log(response.data);
                setRootUser(response.data)
            } else {
                console.log("user not found");
            }
        })

    }

    useEffect(() => {
        getRootUser();
    }, [])

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