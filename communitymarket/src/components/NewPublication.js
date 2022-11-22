import { Container, FormGroup } from "react-bootstrap"
import Form from "react-bootstrap/Form"
import { nanoid } from 'nanoid'
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import DragDrop from "./DragDrop"
import "../assets/css/newPublication.css"
import { ContextApi } from "../ContextApi"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

function NewPublication() {
  const id = nanoid();
  const [datos, setDatos] = useState({
    foto: "",
    titulo: "",
    desc: "",
    precio: 0,
    id: id ,
    liked: false,
  })
  const { setPublicaciones, auth, setUsuario, publicaciones } =
    useContext(ContextApi)
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
    console.log("enviando datos..." + datos.titulo + " " + datos.precio)
    let id = nanoid(); 
    setDatos({
      ...datos,
      ['id']: id,
    })
    

    setPublicaciones([...publicaciones, datos])
  }
  return (
    <Container className="publication">
      <Form onSubmit={enviarDatos}>
        <FormGroup>
          {" "}
          <DragDrop />
        </FormGroup>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Titulo publicación</Form.Label>
          <Form.Control
            type="text"
            placeholder="Titulo"
            onChange={handleInputChange}
            name="titulo"
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Descripción Publicación</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Descripción"
            onChange={handleInputChange}
            name="desc"
          />
        </Form.Group>
        <InputGroup className="mb-4">
          <InputGroup.Text>$</InputGroup.Text>
          <Form.Control
            aria-label="Valor producto"
            onChange={handleInputChange}
            name="precio"
          />
        </InputGroup>
        <Form.Check type="switch" id="custom-switch" label="Click switch" />
        <Button variant="primary" type="submit">
          Publicar
        </Button>
      </Form>
    </Container>
  )
}

export default NewPublication
