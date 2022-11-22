import { useEffect } from "react"
import { createContext, useState } from "react"

let usuariosDB = [{id:'1', email:'a@a.cl',clave:'1',nombre:'12',telefono:'12'}]
export const ContextApi = createContext({})

export const Provider = ({ children }) => {
  const [fotos, setFotos] = useState([])
  const [fotosFavoritos, setFotosFavoritos] = useState([])
  const [publicaciones, setPublicaciones] = useState([])
  const [usuarios, setUsuarios] = useState(usuariosDB)
  const [usuario, setUsuario] = useState({})
  const [isAuth, setisAuth] = useState(false)
  


  const totalFotos = { fotos, setFotos }
  const totalFotosFavoritos = { fotosFavoritos, setFotosFavoritos }
  const totalUsuarios = {usuarios,setUsuarios}
  const auth = {isAuth, setisAuth}
  console.log("🚀 ~ file: ContextApi.js ~ line 19 ~ Provider ~ auth", auth)

  const fotosRender = async () => {
    const endpoint = "/fotos.json"
    const response = await fetch(endpoint)
    const { photos } = await response.json()
    setFotos(photos)
  }

  useEffect(() => {
    fotosRender()
  }, [])

  return (
    <ContextApi.Provider value={{ totalFotos, totalFotosFavoritos,totalUsuarios,auth,usuario,setUsuario ,publicaciones, setPublicaciones}}>
      {children}
    </ContextApi.Provider>
  )
}
