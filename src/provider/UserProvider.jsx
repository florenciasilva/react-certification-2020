import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext(null);

const useUserContext = () =>{
    const context = useContext(LoginContext);
    if (!context) {
      throw new Error(`Can't use "useUserContext" without an AuthProvider!`);
    }
    return context;
  }

const UserProvider = ({ children }) => {
   const [ userContext, setUserContext ] = useState(null);
   const [ errorContext, setErrorContext ] = useState(null);

    return (
      <LoginContext.Provider value={{ userContext, errorContext, setUserContext, setErrorContext }}>
        {children}
      </LoginContext.Provider>
    );
  }
  
  export { useUserContext };
  export default UserProvider;
