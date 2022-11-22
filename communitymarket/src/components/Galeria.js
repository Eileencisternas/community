import "../assets/css/galeria.css"
import Heart from "./Heart"
import { ContextApi } from "../ContextApi"
import { useContext } from "react"

export default function Galeria() {
  const {  pub } = useContext(ContextApi)
  

  return (
    <div className="galeria grid-columns-5 p-3">
      {pub.map((foto) => {
        return (
          <div key={foto.id} className="foto">
            <Heart liked={foto.liked} foto={foto} />
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
