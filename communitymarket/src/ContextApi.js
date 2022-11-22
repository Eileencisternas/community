import { useEffect } from "react"
import { createContext, useState } from "react"

let usuariosDB = [
  { id: "1", email: "a@a.cl", clave: "1", nombre: "12", telefono: "12" },
]
export const ContextApi = createContext({})

export const Provider = ({ children }) => {
  const [fotos, setFotos] = useState([])
  const [fotosFavoritos, setFotosFavoritos] = useState([])
  const [pub, setPub] = useState([
    {
      foto: "",
      titulo: "test",
      desc: "test",
      precio: 1000,
      id: 1,
      liked: false,
      email: "",
    },
  ])
  const [publicaciones, setPublicaciones] = useState([
    {
      foto: "",
      titulo: "test",
      desc: "test",
      precio: 1000,
      id: 1,
      liked: false,
      email: "",
    },
  ])
  const [usuarios, setUsuarios] = useState(usuariosDB)
  const [usuario, setUsuario] = useState({})
  const [isAuth, setisAuth] = useState(false)

  const totalFotos = { fotos, setFotos }
  const totalFotosFavoritos = { fotosFavoritos, setFotosFavoritos }
  const totalUsuarios = { usuarios, setUsuarios }
  const auth = { isAuth, setisAuth }

  useEffect(() => {}, [])

  return (
    <ContextApi.Provider
      value={{
        totalFotos,
        totalFotosFavoritos,
        totalUsuarios,
        auth,
        usuario,
        setUsuario,
        publicaciones,
        setPublicaciones,
        pub,
        setPub,
        usuarios,
        setUsuarios,
      }}
    >
      {children}
    </ContextApi.Provider>
  )
}
