import React, { useEffect, useState } from "react"
import "./App.css"
import Employees from "./components/Employees"

interface DataNhanVien {
  ho_ten: string
  tuoi: string
  ten_phong: string
  chuc_vu: string
}

function App() {
  const [dataNhanVien, setDataNhanVien] = useState<DataNhanVien[]>([])
  useEffect(() => {
    fetch("http://localhost:3001/NhanVien")
      .then((res) => res.json())
      .then((data) => {
        setDataNhanVien(data)
      })
  },[])
  return (
    <>
      <Employees nhanviens = {dataNhanVien}/>
    </>
  )
}

export default App
