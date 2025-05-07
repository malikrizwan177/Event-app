import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const defaultValue = null;

export const EventContext = createContext<any>(defaultValue);

const EventContextProvider = (props: any) => {
  const [token, setToken] = useState<string | null>("");
  const [eventsData, setEventsData] = useState<never[]>([]);
  const [eventBookingPayload, setEventBookingPayload] = useState<never[]>([]);
  const [eventLoader, setEventLoader] = useState<boolean>(false);
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  const getEventsData = async () => {
    if (!verifyToken()) return;
    
    setEventLoader(true);
    try {
      const controller = new AbortController();
      const response = await axios.get(`${backendURL}/api/events/all`, {
        headers: { Authorization: `Bearer ${token}` },
        signal: controller.signal
      });

      if (response.data.success) {
        setEventsData(response.data.events);
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setEventLoader(false);
    }
  };

  const handleApiError = (error: any) => {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        setToken(null);
        navigate('/login');
      }
      toast.error(error.response?.data?.message || 'Authentication failed');
    } else {
      toast.error('An unexpected error occurred');
    }
  };

  const verifyToken = async () => {
    const storedToken = localStorage.getItem("token");
    const expiration = localStorage.getItem("tokenExpiration");
  
    // If no token or expiration, treat as logged out
    if (!storedToken || !expiration) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
      setToken(null);
      return false;
    }
  
    // If token expired, clear storage
    if (Date.now() > parseInt(expiration)) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
      setToken(null);
      return false;
    }
  
    setToken(storedToken);
    return true;
  };

  useEffect(() => {
    const checkTokenExpiration = setInterval(() => {
      const expiration = localStorage.getItem("tokenExpiration");
      if (expiration && Date.now() > parseInt(expiration)) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
        setToken(null);
        navigate("/login");
      }
    }, 60000);

    return () => clearInterval(checkTokenExpiration);
  }, [navigate]);

  useEffect(() => {
    const verifyAndNavigate = async () => {
      const isValid = await verifyToken();
      if (isValid && window.location.pathname === '/login') {
        navigate('/');
      }
    };
    verifyAndNavigate();
  }, [navigate]);

  useEffect(() => {
    if (!token) {
      return navigate('/login');
    }
    getEventsData();
  }, [token]);

  const value = {
    token,
    setToken,
    navigate,
    backendURL,
    eventsData,
    eventBookingPayload,
    setEventBookingPayload,
    eventLoader,
  };

  return (
    <EventContext.Provider value={value}>
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;
