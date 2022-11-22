import React from "react"
import "../assets/css/profile.css"
import { ContextApi } from "../ContextApi"
import { useContext } from "react"

export default function MisPublicaciones() {
  const { usuario, publicaciones } = useContext(ContextApi)

  const mispub = publicaciones.filter((ele) => ele.email === usuario.email)

  return (
    <div className="galeria grid-columns-5 p-3">
      {mispub.map((foto) => {
        return (
          <div key={foto.id} className="foto">
            <img src={foto.foto} alt="foto" width={50} />
            <h3>${foto.precio}</h3>
            <h4>{foto.titulo}</h4>
            <div className="tituloDesc">
              <h4>{foto.desc}</h4>
            </div>
          </div>
        )
      })}
    </div>
  )
}
