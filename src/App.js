import Navbar from "./Navbar"
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import UserProfile from "./components/Profile"
import Reserve from "./Reserve"
import Detail from "./components/Detail"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Profile" element={<UserProfile />} />
          <Route path = "/Detail/0" element={<Detail id={0} />} />
          <Route path = "/Detail/1" element={<Detail id={1} />} />
          <Route path = "/Detail/2" element={<Detail id={2} />} />
          <Route path = "/Detail/3" element={<Detail id={3} />} />
          <Route path = "/Detail/4" element={<Detail id={4} />} />
          <Route path = "/Detail/5" element={<Detail id={5} />} />
          <Route path = "/Detail/6" element={<Detail id={6} />} />
          <Route path = "/Detail/7" element={<Detail id={7} />} />
          <Route path = "/Detail/8" element={<Detail id={8} />} />
          <Route path = "/Detail/9" element={<Detail id={9} />} />
          <Route path="/Reserve" element={<Reserve/>} />
        </Routes>
      </div>
    </>
  )
}

export default App