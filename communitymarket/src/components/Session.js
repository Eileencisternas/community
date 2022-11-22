import Button from "react-bootstrap/Button"
import "../assets/css/session.css"
import { ContextApi } from "../ContextApi"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Session(props) {
  const [datos, setDatos] = useState({
    email: "a@a.cl",
    clave: "1",
  })
  const { totalUsuarios, auth, setUsuario } = useContext(ContextApi)
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

    let usu = totalUsuarios.usuarios.filter(
      (elem) => elem.email === datos.email && elem.clave === datos.clave
    )

    if (usu.length === 1) {
      auth.setisAuth(true)
      setUsuario(usu[0])
      navigate("/profile")
    } else {
      alert('No Existe el usuario')
      auth.setisAuth(false)
    }
  }

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
              required
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
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="submit">
              Iniciar sesión
            </Button>
          </div>
          <p className="forgot-password text-right mt-2">¿Tienes cuenta?</p>
          <Link to="/create">Crear Cuenta</Link>
        </div>
      </form>
    </div>
  )
}
