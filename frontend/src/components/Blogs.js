import React from "react";
import { Card } from "react-bootstrap";

function Blogs({ blog }) {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <a href={`/blog/${blog.id}`}>
          <Card.Title>{blog.title}</Card.Title>
        </a>
        <Card.Subtitle className="mb-2 text-muted">
          By <a href={`/user/${blog.aid}`}>{blog.author}</a>
        </Card.Subtitle>
        <Card.Text>{blog.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Blogs;
