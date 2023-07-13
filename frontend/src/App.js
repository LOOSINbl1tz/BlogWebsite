import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Login from "./screens/Login";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import Register from "./screens/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Counter from "./features/counter/Counter";
import Blog from "./screens/Blog";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path="/register" element={<Register />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
