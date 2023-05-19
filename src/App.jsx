import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
