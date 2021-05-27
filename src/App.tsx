import React from "react";
import "./App.css";
import {
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";
import Theme from "./theme";
import AppBar from "./components/AppBar";
import BodyContent from "./components/BodyContent";

function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <AppBar />
        <BodyContent />
      </ThemeProvider>
    </div>
  );
}

export default App;
