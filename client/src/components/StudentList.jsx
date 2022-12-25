import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function createData(
  name,
  age,
  sClass,
  section,
  rollNo,
  email,
  mobile,
  address,
  edit,
  sDelete
) {
  return {
    name,
    age,
    sClass,
    section,
    rollNo,
    email,
    mobile,
    address,
    edit,
    sDelete,
  };
}

const rows = [
  createData(
    "tommy",
    30,
    "history",
    "A",
    "12vd32",
    "tommy@gmail.com",
    "123453232",
    "goa",
    <Button href="/student-update">Edit</Button>,
    <Button>Delete</Button>
  ),
  createData(
    "tommy",
    30,
    "history",
    "A",
    "12vd32",
    "tommy@gmail.com",
    "123453232",
    "goa",
    "edit",
    "delete"
  ),
  createData(
    "tommy",
    30,
    "history",
    "A",
    "12vd32",
    "tommy@gmail.com",
    "123453232",
    "goa",
    "edit",
    "delete"
  ),
  createData(
    "tommy",
    30,
    "history",
    "A",
    "12vd32",
    "tommy@gmail.com",
    "123453232",
    "goa",
    "edit",
    "delete"
  ),
  createData(
    "tommy",
    30,
    "history",
    "A",
    "12vd32",
    "tommy@gmail.com",
    "123453232",
    "goa",
    "edit",
    "delete"
  ),
  createData(
    "tommy",
    30,
    "history",
    "A",
    "12vd32",
    "tommy@gmail.com",
    "123453232",
    "goa",
    "edit",
    "delete"
  ),
  //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //   createData("Eclair", 262, 16.0, 24, 6.0),
  //   createData("Cupcake", 305, 3.7, 67, 4.3),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function StudentList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="student table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Section</TableCell>
            <TableCell align="right">Roll-No</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Mobile</TableCell>
            <TableCell align="right">Addresss</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={Math.random()}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.sClass}</TableCell>
              <TableCell align="right">{row.section}</TableCell>
              <TableCell align="right">{row.rollNo}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.mobile}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.edit}</TableCell>
              <TableCell align="right">{row.sDelete}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
