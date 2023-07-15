import Editor from "../components/EditorWithUseQuill";
import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useQuill } from "react-quilljs";
import BlotFormatter from "quill-blot-formatter";

function BlogPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { quill, quillRef, Quill } = useQuill({
    modules: { blotFormatter: {} },
  });
  if (Quill && !quill) {
    // const BlotFormatter = require('quill-blot-formatter');
    Quill.register("modules/blotFormatter", BlotFormatter);
  }

  const handlePublish = (event) => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    console.log(quill.getText());
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  /*
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
  };*/

  return (
    <div>
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={handleTitleChange}
          />
        </Form.Group>
        <Editor placeholder={"Write Here..."} />

        <Button
          variant="primary"
          onClick={handlePublish}
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            margin: "20px 0px",
          }}
        >
          Publish
        </Button>
      </Form>
    </div>
  );
}

export default BlogPost;
