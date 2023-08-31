import * as React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"

interface INhanVien {
  nhanviens: {
    ho_ten: string
    tuoi: string
    ten_phong: string
    chuc_vu: string
  }[]
}
const rows: string[] = ["STT", "Họ Tên", "Tuổi", "Tên Phòng", "Chức Vụ"]

const Employees: React.FC<INhanVien> = ({ nhanviens }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {rows.map((row, index) => (
              <TableCell key={index}>{row}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {nhanviens.map((nhanvien, index) => (
            <TableRow key={index}>
              <TableCell>{index}</TableCell>
              <TableCell>{nhanvien.ho_ten}</TableCell>
              <TableCell>{nhanvien.tuoi}</TableCell>
              <TableCell>{nhanvien.ten_phong}</TableCell>
              <TableCell>{nhanvien.chuc_vu}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Employees
