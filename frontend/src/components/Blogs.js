import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Blogs({ blog }) {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <Card.Title>
          <h2>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </h2>
        </Card.Title>

        <Card.Subtitle className="mb-2 text-muted">
          By <Link to={`/user/${blog.aid}`}>{blog.author}</Link>
        </Card.Subtitle>
        <Card.Text>{blog.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Blogs;