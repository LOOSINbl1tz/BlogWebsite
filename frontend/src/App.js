import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import Register from "./screens/Register";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container className="w-100 p-3">
          <Register />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
