import { useContext } from "react"
import { ContextApi } from "../ContextApi"
import Navbar from "react-bootstrap/Navbar"
import community from "../assets/imgs/logonav.png"
import "../assets/css/navbar.css"
import { Form } from "react-bootstrap"

// import Nav from "react-bootstrap/Nav"

function Navb() {
  const { auth, publicaciones, setPub } = useContext(ContextApi)
  
  //se crea funcion filtrar
  const searchPub = (searchInput) => {

 
    if (searchInput !== "") {
      let lisFilter = publicaciones.filter((ele) =>
        ele.titulo.includes(searchInput)
      )
      
      setPub(lisFilter)
    } else {
      setPub(publicaciones)
    }
  }
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <div className="content">
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
          {!auth.isAuth ? (
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <a href="login">Iniciar Sesión</a>
              </Navbar.Text>
            </Navbar.Collapse>
          ) : (
            <Navbar.Collapse className="justify-content-end">
              <Navbar>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Buscar Producto"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => searchPub(e.target.value)}
                  />
                </Form>
              </Navbar>
            </Navbar.Collapse>
          )}
        </div>
      </Navbar>
    </>
  )
}

export default Navb
