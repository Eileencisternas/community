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

export default function ProfileCard({datos}) {


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
              <h3>Nombre:{datos.nombre}</h3>
            </MDBCardText>
            <MDBCardText>
              <h3>Correo electrónico:{datos.email}</h3>
            </MDBCardText>
            <MDBCardText>
              <h3>Telefono:{datos.telefono}</h3>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  )
}
