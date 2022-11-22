import { useContext, useState } from "react"
import { ContextApi } from "../ContextApi"

export default function Heart({ liked, foto }) {
  const { publicaciones, totalFotosFavoritos } = useContext(ContextApi)


  const [filled, setFilled] = useState(liked)

  const { fotosFavoritos, setFotosFavoritos } = totalFotosFavoritos

  const agregarFavoritos = (foto) => {
    let { id } = foto
   

    const indice = publicaciones.findIndex((elemento) => elemento.id === id)
    let corazon = (publicaciones[indice].liked = true)
    setFilled(corazon)
    const agregar_foto = [...fotosFavoritos, foto]
    setFotosFavoritos(agregar_foto)
  }

  const quitarFavoritos = (foto) => {
    const { id } = foto
    let indiceExistente = fotosFavoritos.filter(
      (favorito) => favorito.id !== id
    )
 

    setFotosFavoritos(indiceExistente)
    const indiceCorazon = publicaciones.findIndex(
      (elemento) => elemento.id === id
    )
    let corazon = (publicaciones[indiceCorazon].liked = false)
    setFilled(corazon)
  }

  return (
    <>
      <svg
        width="40px"
        viewBox="0 0 24 24"
        onClick={() =>
          filled ? quitarFavoritos(foto) : agregarFavoritos(foto)
        }
      >
        <path
          fill={filled ? "red" : "black"}
          d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
        />
      </svg>
    </>
  )
}
