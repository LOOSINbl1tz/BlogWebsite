import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";

function Blog() {
  const match = useParams();
  /*axios({
    // Endpoint to send files
    url: `http://localhost:8000/blog/${match.params.id}/`,
    method: "POST",
    headers: {},

    // Attaching the form data
    data: formData,
  })
    .then((res) => {
      console.log("res.data.username");
    })

    // Catch errors if any
    .catch((err) => {
      setError(err.response.data.username);
      return;
    });*/
  return <div>Blog {match.id} here</div>;
}

export default Blog;
