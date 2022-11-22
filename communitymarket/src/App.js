import "./styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Session from "./components/Session"
import Profile from "./views/Profile"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "./ContextApi"
import CreateSession from "./components/CreateSession"



export default function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Session />} />
            <Route path="/create" element={<CreateSession />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
