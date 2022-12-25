import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import StudentList from "../components/StudentList";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const StudentAdd = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [sClass, setClass] = useState("");
  const [section, setSection] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);
  const navigator = useNavigate();
  const handleStudentAdd = (e) => {
    e.preventDefault();
    if (
      !name ||
      !age ||
      !email ||
      !sClass ||
      !section ||
      !rollNumber ||
      !mobile ||
      !address
    ) {
      setError(true);
      return;
    }
    let student = {
      name,
      age,
      email,
      sClass,
      section,
      rollNumber,
      mobile,
      address,
    };
    console.log(student);
    navigator("/");
    setError(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <Button href="/" color="inherit">
              DashBoard
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container>
            <div className="flex justify-between">
              <div className="text-lg font-semibold">Add New Student</div>
              {/* <Button variant="outlined" href="/student-add">
                Add New
              </Button> */}
            </div>
            {/* <StudentList /> */}
            {error && (
              <div className="text-center text-lg">
                All fields are required!
              </div>
            )}
            <form
              method="POST"
              onSubmit={handleStudentAdd}
              className="text-gray-600 body-font mt-4 "
            >
              <div className="">
                <div className="flex">
                  <div className="relative flex-grow w-full">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name"
                      type="text"
                      id="full-name"
                      name="full-name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ></input>
                  </div>
                  <div className="relative flex-grow w-full">
                    <input
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="Age"
                      type="text"
                      id="age"
                      name="age"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ></input>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="relative flex-grow w-full">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      type="text"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ></input>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="relative flex-grow w-full">
                    <input
                      onChange={(e) => setClass(e.target.value)}
                      placeholder="Class"
                      type="text"
                      id="class"
                      name="class"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ></input>
                  </div>
                  <div className="relative flex-grow w-full">
                    <input
                      onChange={(e) => setSection(e.target.value)}
                      placeholder="Section"
                      type="text"
                      id="section"
                      name="section"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ></input>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="relative flex-grow w-full">
                    <input
                      onChange={(e) => setRollNumber(e.target.value)}
                      placeholder="Roll-No"
                      type="text"
                      id="rollNumber"
                      name="rollNumber"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ></input>
                  </div>
                  <div className="relative flex-grow w-full">
                    <input
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Mobile"
                      type="text"
                      id="mobile"
                      name="mobile"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ></input>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="relative flex-grow w-full">
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address"
                      type="text"
                      id="address"
                      name="address"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    ></input>
                  </div>
                </div>
              </div>
              <button className="text-white mt-4 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </form>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
};

export default StudentAdd;
