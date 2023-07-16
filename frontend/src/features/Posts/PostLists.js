import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import { Card } from "react-bootstrap";
import AddPostForm from "./AddPostForm";

import React from "react";

const PostLists = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <Card
      key={post.id}
      style={{
        "background-color": "gray",
        "padding-left": "20px",
        "margin-bottom": "20px",
      }}
    >
      <Card.Title style={{ marginTop: "20px", marginLeft: "10px" }}>
        <h3>{post.title}</h3>
      </Card.Title>
      <Card.Body
        style={{
          "font-size": "20px",
          color: "white",
        }}
      >
        <Card.Text>
          <p>{post.content.substring(0, 100)}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  return (
    <div>
      <AddPostForm />

      <section>
        <h2>Posts</h2>
        {renderedPosts}
      </section>
    </div>
  );
};

export default PostLists;
