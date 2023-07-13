import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Card } from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData();

    formData.append("username", username);
    formData.append("password", password);

    axios({
      // Endpoint to send files
      url: "http://localhost:8000/auth/login/",
      method: "POST",
      headers: {},

      // Attaching the form data
      data: formData,
    })
      .then((res) => {
        console.log("res.data.detail");
      })

      // Catch errors if any
      .catch((err) => {
        setError(err.response.data.detail);
        return;
      });

    setUsername("");
    setPassword("");
    setError("");
  };
  return (
    <Card border="primary " style={{ width: "50%" }} className="mx-auto">
      <Card.Header>
        <h1>Login</h1>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          {error && <div className="text-danger">{error}</div>}
          <Form.Group controlId="formUsername">
            <Card.Title>
              <Form.Label>Username</Form.Label>
            </Card.Title>
            <Card.Text>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Card.Text>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Card.Title>
              {" "}
              <Form.Label>Password</Form.Label>
            </Card.Title>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Card.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Card.Footer>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Login;
