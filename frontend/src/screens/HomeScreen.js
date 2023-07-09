import React from "react";
import blog from "../blog";
import Blogs from "../components/Blogs";
import { Row, Col } from "react-bootstrap";

function HomeScreen() {
  return (
    <div className="w-100 p-3">
      {blog.map((blog) => (
        <Col key={blog.id} className="w-100 p-3">
          <article>
            <Blogs blog={blog} />
          </article>
        </Col>
      ))}
    </div>
  );
}

export default HomeScreen;
