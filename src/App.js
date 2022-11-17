import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./appRouter/AppRouter";
import NavbarComp from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
