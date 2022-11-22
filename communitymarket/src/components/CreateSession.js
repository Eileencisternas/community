import React from "react"
import Button from "react-bootstrap/Button"
import "../assets/css/createSession.css"
import { ContextApi } from "../ContextApi"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
export default function (props) {
  const navigate = useNavigate()

  const { setUsuarios, usuarios } =
    useContext(ContextApi)
  const [datos, setDatos] = useState({
    email: "",
    nombre: "",
    clave: "",
    telefono: "",
   
  })
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
    let indiceExistente = usuarios.filter(
      (usu) => usu.email === datos.email
    )
 if(indiceExistente.length==0){
   setUsuarios([...usuarios, datos])
   console.log(
     "🚀 ~ file: CreateSession.js ~ line 34 ~ enviarDatos ~ usuarios",
     usuarios
   )
   navigate("/login")

 } else {alert('usuario ya existe')}
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={enviarDatos}>
        <div className="Auth-form-content">
          <div className="form-group mt-3">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="nombre"
              onChange={handleInputChange}
              name="nombre"
              required
            />
          </div>
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
          <div className="form-group mt-3">
            <label>Telefono</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter telefono"
              onChange={handleInputChange}
              name="telefono"
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button type="submit" variant="warning">
              Crear cuenta
            </Button>
            <br></br>
            <Link to="/login">ya tengo cuenta</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
