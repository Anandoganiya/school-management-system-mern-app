import React, { useContext, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";
import { authContext } from "../context/AuthContext";

export default function StudentList() {
  const { authUser } = useContext(authContext);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/student/getAllStudents",
          {},
          {
            headers: {
              Authorization: `Bearer ${authUser.accessToken}`,
            },
          }
        );
        let data = [];
        res.data.students.forEach((student) => {
          let edit = (
            <Button href={`/student-update?emailId=${student.email}`}>
              Edit
            </Button>
          );
          let sDelete = (
            <Button onClick={() => handleDelete(student.email)}>Delete</Button>
          );
          let s = { ...student, edit, sDelete };
          data.push(s);
          rows.push(s);
        });
        setRows(data);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);
  const handleDelete = async (email) => {
    console.log(email);
    try {
      await axios.delete("http://localhost:5000/student/deleteStudent", {
        headers: {
          Authorization: `Bearer ${authUser.accessToken}`,
        },
        data: { emailId: email },
      });
      const res = await axios.post(
        "http://localhost:5000/student/getAllStudents",
        {},
        {
          headers: {
            Authorization: `Bearer ${authUser.accessToken}`,
          },
        }
      );
      let data = [];
      res.data.students.forEach((student) => {
        let edit = (
          <Button href={`/student-update?emailId=${student.email}`}>
            Edit
          </Button>
        );
        let sDelete = (
          <Button onClick={() => handleDelete(student.email)}>Delete</Button>
        );
        let s = { ...student, edit, sDelete };
        data.push(s);
        rows.push(s);
      });
      setRows(data);
    } catch (error) {
      console.log(error.response);
    }
  };
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
              <TableCell align="right">{row.rollNumber}</TableCell>
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
