import { useContext } from "react"
import { ContextApi } from "../ContextApi"
import "../assets/css/galeria.css"

const Favoritos = () => {
  const { totalFotosFavoritos } = useContext(ContextApi)
  const { fotosFavoritos } = totalFotosFavoritos

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {fotosFavoritos.map((foto) => {
          return (
            <div key={foto.id} className="foto">
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
    </div>
  )
}

export default Favoritos
