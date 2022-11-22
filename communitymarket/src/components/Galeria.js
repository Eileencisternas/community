import "../assets/css/galeria.css"
import Heart from "./Heart"
import { ContextApi } from "../ContextApi"
import { useContext } from "react"

export default function Galeria() {
  const { totalFotos,publicaciones } = useContext(ContextApi)
  console.log("🚀 ~ file: Galeria.js ~ line 8 ~ Galeria ~ publicaciones", publicaciones)

  const { fotos } = totalFotos

  return (
    <div className="galeria grid-columns-5 p-3">
      {publicaciones.map((foto) => {
        return (
          <div key={foto.id} className="foto">
            <Heart liked={foto.liked} foto={foto} />
            <img src={foto.foto} alt="foto" width={50}/>
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
