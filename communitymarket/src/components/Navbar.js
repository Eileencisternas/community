import { useContext } from "react"
import { ContextApi } from "../ContextApi"
import Navbar from "react-bootstrap/Navbar"
import community from "../assets/imgs/logonav.png"
import "../assets/css/navbar.css"

// import Nav from "react-bootstrap/Nav"

function Navb() {
  const { auth } = useContext(ContextApi)
  console.log("🚀 ~ file: Navbar.js ~ line 11 ~ Navb ~ auth", auth)
  
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <div class="content">
          <Navbar.Brand href="#home">
            <img
              className="logoNav"
              src={community}
              width="30"
              alt="Comunity Market"
            />{" "}
            Community Market
          </Navbar.Brand>
          <Navbar.Toggle />
          {!auth.isAuth? (<Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="login">Iniciar Sesión</a>
            </Navbar.Text>
          </Navbar.Collapse>):""}
          
        </div>
      </Navbar>
    </>
  )
}

export default Navb
