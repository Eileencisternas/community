import React from "react"
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit"
import "../assets/css/profileCard.css"
import { Button } from "react-bootstrap"
import { ContextApi } from "../ContextApi"
import { useContext, useState } from "react"

export default function ProfileCard() {
  const { usuarios, usuario, setUsuario, setUsuarios } = useContext(ContextApi)
  const actualizar = () => {

    let email = usuario.email
 
    const indice = usuarios.findIndex((elemento) => elemento.email == email)


    if (indice != -1) {
      usuarios[indice].nombre = document.getElementById("nombre").value
      usuarios[indice].telefono = document.getElementById("telefono").value
      usuarios[indice].clave = document.getElementById("clave").value
      alert("Usuario actualizado con exito.")
    }

   
  }
  return (
    <MDBCard>
      <MDBRow className="g-0">
        <MDBCol md="4">
          <MDBCardImage
            className="contImg"
            src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
            alt="..."
            fluid
          />
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody className="bodyCardText">
            <MDBCardTitle>
              <h1 className="contentTitle">Datos Personales</h1>
            </MDBCardTitle>
            <MDBCardText>
              <h3>
                Nombre:
                <input
                  type="text"
                  id="nombre"
                  defaultValue={usuario.nombre}
                ></input>
              </h3>
            </MDBCardText>
            <MDBCardText>
              <h3>Correo electrónico:{usuario.email}</h3>
            </MDBCardText>
            <MDBCardText>
              <h3>
                Contraseña:
                <input
                  type="text"
                  id="clave"
                  defaultValue={usuario.clave}
                ></input>
              </h3>
            </MDBCardText>
            <MDBCardText>
              <h3>
                Telefono:
                <input
                  type="text"
                  id="telefono"
                  defaultValue={usuario.telefono}
                ></input>
              </h3>
            </MDBCardText>
            <MDBCardText>
              <Button type="button" onClick={actualizar}>
                Actualizar
              </Button>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  )
}
