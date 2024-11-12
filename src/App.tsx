import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { lazy, Suspense } from "react"
const Home = lazy(() => import("./pages/Home"))
const About = lazy(() => import("./pages/About"))
const Events = lazy(() => import("./pages/Events"))
const Blog = lazy(() => import("./pages/Blog"))
const Login = lazy(() => import("./pages/Login"))
const CreateEvent = lazy(() => import("./pages/CreateEvent"))

const App: React.FC = () => {
  return (
    <div className="">
      <Navbar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/create-event" element={<CreateEvent/>}/>
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  )
}

export default App