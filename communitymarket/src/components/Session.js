import Button from "react-bootstrap/Button"
import "../assets/css/session.css"
import { ContextApi } from "../ContextApi"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Session (props) {
  const [datos, setDatos] = useState({
    email: "a@a.cl",
    clave: "1",
  })
  const { totalUsuarios, auth,setUsuario } = useContext(ContextApi)
  const navigate = useNavigate()
  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault()
    console.log(
      "enviando datos..." + datos.email + " " + datos.clave,
      auth,
      totalUsuarios
    )
    let usu = totalUsuarios.usuarios.filter(
      (elem) => elem.email == datos.email && elem.clave == datos.clave
    )
    console.log("🚀 ~ file: Session.js ~ line 32 ~ enviarDatos ~ usu", usu)

    if (usu.length == 1) {
      auth.setisAuth(true)
      setUsuario(usu[0])
      navigate("/profile")
    } else {
      auth.setisAuth(false)
    }
    console.log(
      "🚀 ~ file: Session.js ~ line 36 ~ enviarDatos ~ auth",
      auth.isAuth
    )
  }
  const login = () => {}
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={enviarDatos}>
        <div className="Auth-form-content">
          <div className="form-group mt-3">
            <label>Correo electrónico</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={handleInputChange}
              name="email"
              value='a@a.cl'
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={handleInputChange}
              name="clave"
              value='1'
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="submit">
              Iniciar sesión
            </Button>
          </div>
          <p className="forgot-password text-right mt-2">¿Tienes cuenta?</p>
          <Button href="create" type="button" variant="warning">
            Crear cuenta
          </Button>
        </div>
      </form>
    </div>
  )
}
