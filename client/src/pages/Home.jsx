import React, { useContext, useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import StudentList from "../components/StudentList";
import Button from "@mui/material/Button";
import axios from "axios";
import { authContext } from "../context/AuthContext";

const theme = createTheme();

export default function Home() {
  const { authUser } = useContext(authContext);
  // console.log(authUser.user.email);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position="relative">
        <Toolbar>
          <div className="flex justify-between w-full items-center">
            <Button href="/" color="inherit">
              <Typography variant="h6" color="inherit" noWrap>
                DashBoard
              </Typography>
            </Button>
            <div>{authUser?.user?.email}</div>
          </div>
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
            <div className="flex justify-between mb-5">
              <div className="text-lg font-semibold">Student List</div>
              <Button variant="outlined" href="/student-add">
                Add New
              </Button>
            </div>
            <StudentList />
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
