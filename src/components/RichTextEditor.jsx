import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./RichTextEditor.module.css";

const RichTextEditor = () => {
  const [content, setContent] = useState("");

  return (
    <div className={styles.container}>
      <h3>Rich Text Editor</h3>
      <ReactQuill value={content} onChange={setContent} />
    </div>
  );
};

export default RichTextEditor;
