import { Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { lazy, Suspense, useContext } from "react"
import Loader from "./components/Loader"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./components/ScrollToTop"
import { EventContext } from "./context/EventContext"
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Events = lazy(() => import("./pages/Events"))
const Blog = lazy(() => import("./pages/Blog"))
const Login = lazy(() => import("./pages/Login"))
const CreateEvent = lazy(() => import("./pages/CreateEvent"))
const EventDetail = lazy(() => import("./pages/EventDetail"))
const TicketDetail = lazy(() => import("./pages/TicketDetail"))

const App: React.FC = () => {
  const { token } = useContext(EventContext);
  return (
    <div className="">
      <ToastContainer/>
      <Navbar/>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={token ? <><ScrollToTop/><Home/></> : <Navigate to="/login" replace />}/>
          <Route path="/about" element={token ? <><ScrollToTop/><About/></> : <Navigate to="/login" replace />}/>
          <Route path="/events" element={token ? <><ScrollToTop/><Events/></> : <Navigate to="/login" replace />}/>
          <Route path="/blog" element={token ? <><ScrollToTop/><Blog/></> : <Navigate to="/login" replace />}/>
          <Route path="/login" element={token ? <Navigate to="/" replace /> : <><ScrollToTop/><Login/></>}/>
          <Route path="/create-event" element={token ? <><ScrollToTop/><CreateEvent/></> : <Navigate to="/login" replace />}/>
          <Route path="/event-detail/:eventId" element={token ? <><ScrollToTop/><EventDetail/></> : <Navigate to="/login" replace />}/>
          <Route 
            path="/ticket-detail/:eventId" 
            element={
              token || sessionStorage.getItem('paymentRedirect') 
              ? <><ScrollToTop/><TicketDetail/></> 
              : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  )
}

export default App