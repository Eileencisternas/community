import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "../assets/css/cardProfile.css"

export default function CardProfile() {
  return (
    <Container className="contenedor">
      <div className="cardContent">
        <Row >
          <Col>
            <img
              src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
              alt="..."
              fluid
            />
          </Col>
          <Col className="dates">
            <h2 >Datos personales</h2>
            <h4>Nombre</h4>
            <h4>Correo electrónico</h4>
            <h4>Telefono</h4>
          </Col>
        </Row>
      </div>
    </Container>
  )
}
