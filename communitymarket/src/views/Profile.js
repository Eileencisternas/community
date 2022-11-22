import React from "react"

import "../assets/css/profile.css"
import TabNav from "../components/TabNav"
import { ContextApi } from "../ContextApi"
import { useContext } from "react"

export default function Profile() {
  const { auth } = useContext(ContextApi)
  
  return (
    <>
    {auth.isAuth? <TabNav />:'No tiene Session'}
 
    </>
  )
}
