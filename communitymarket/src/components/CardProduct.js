import React from "react"
import Heart from "./Heart"
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBBtn,
  MDBCol,
} from "mdb-react-ui-kit"

export default function CardProduct({datos}) {
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      <MDBCol>
        <MDBCard className="h-100">
      

          <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/city/042.webp"
            alt="..."
            position="top"
          />
            <Heart />
          <MDBCardBody>
            <MDBCardTitle>${datos.precio}</MDBCardTitle>
            <MDBCardText>{datos.titulo}</MDBCardText>
            <MDBCardText>{datos.desc}</MDBCardText>
            <MDBBtn>AGREGAR</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    
    </MDBRow>
  )
}
