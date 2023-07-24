import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Blogs({ blog }) {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <Card.Title>
            <h2>
              <Link to={`/blog/${blog.id}`} style={{ color: "black" }}>
                {blog.title}
              </Link>
            </h2>
          </Card.Title>

          <Card.Subtitle className="mb-2 text-muted">
            By{" "}
            <Link to={`/user/${blog.author}`} style={{ color: "gray" }}>
              {blog.author_name}
            </Link>
          </Card.Subtitle>
          <Card.Text>{blog.body}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Blogs;
