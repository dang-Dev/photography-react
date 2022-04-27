import React from "react";
import { Switch, Route } from "react-router-dom";
import ResponsiveAppBar from "../NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Home from "../components/home";
import TodoList from "../components/todolist";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ height: "100vh" }}>
        <UserAuthContextProvider>
          <Switch>
            <Route exact path="/">
              <ProtectedRoute>
                <ResponsiveAppBar />
                <Container fixed sx={{ width: "75%" }}>
                  <Home />
                </Container>
              </ProtectedRoute>
            </Route>
            <Route path="/todo-list">
              <TodoList />
            </Route>
            <Route path="/sign-in">
              <Login />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
          </Switch>
        </UserAuthContextProvider>
      </Box>
    </React.Fragment>
  );
};

export default App;
