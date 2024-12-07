import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const defaultValue = null

export const EventContext = createContext<any>(defaultValue)

const EventContextProvider = ( props: any ) => {
    
    const [token, setToken] = useState<string | null>('')
    const backendURL = import.meta.env.VITE_BACKEND_URL

    const navigate = useNavigate()

    
    useEffect(() => {
        const localToken = localStorage.getItem('token');
        console.log(localToken);
      
        if (localToken) {
          setToken(localToken);
        }
      
        return () => {};
      }, []);
      
      // Log the token when it changes
      useEffect(() => {
        if (token) {
          console.log(token, "Token acquired");
        }
      }, [token]);
    
    const value = {
        token, setToken, navigate, backendURL
    }

    return (
        <EventContext.Provider value={value}>
            {props.children}
        </EventContext.Provider>
    )
}

export default EventContextProvider