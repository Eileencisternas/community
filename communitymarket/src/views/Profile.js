import React from "react"

import "../assets/css/profile.css"
import TabNav from "../components/TabNav"
import { ContextApi } from "../ContextApi"
import { useContext } from "react"

export default function Profile() {
  const { auth,usuario } = useContext(ContextApi)
  console.log("🚀 ~ file: Profile.js ~ line 10 ~ Profile ~ auth", auth,usuario)

  return (
    <>
    {auth.isAuth? <TabNav />:'No tiene Session'}
 
    </>
  )
}
