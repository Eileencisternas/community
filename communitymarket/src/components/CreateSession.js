import React from "react"
import Button from 'react-bootstrap/Button';
import '../assets/css/createSession.css'

export default function (props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
        <div className="form-group mt-3">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="nombre"
            />
          </div>
          <div className="form-group mt-3">
            <label>Correo electrónico</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Repetir Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
          <Button variant="warning">Crear cuenta</Button>
          <a href="login">ya tengo cuenta</a>
          </div>
    
        </div>
      </form>
    </div>
  )
}