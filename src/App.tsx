import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { lazy, Suspense } from "react"
import Loader from "./components/Loader"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "./components/ScrollToTop"
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Events = lazy(() => import("./pages/Events"))
const Blog = lazy(() => import("./pages/Blog"))
const Login = lazy(() => import("./pages/Login"))
const CreateEvent = lazy(() => import("./pages/CreateEvent"))
const EventDetail = lazy(() => import("./pages/EventDetail"))

const App: React.FC = () => {
  return (
    <div className="">
      <ToastContainer/>
      <Navbar/>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<><ScrollToTop/><Home/></>}/>
          <Route path="/about" element={<><ScrollToTop/><About/></>}/>
          <Route path="/events" element={<><ScrollToTop/><Events/></>}/>
          <Route path="/blog" element={<><ScrollToTop/><Blog/></>}/>
          <Route path="/Login" element={<><ScrollToTop/><Login/></>}/>
          <Route path="/create-event" element={<><ScrollToTop/><CreateEvent/></>}/>
          <Route path="/event-detail/:eventId" element={<><ScrollToTop/><EventDetail/></>}/>
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  )
}

export default App