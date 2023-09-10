import { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

function App() {
  const defaultMarkdown = "# Markdown Preview";
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  return (
    <main>
      <div className="markdown">
        <div className="editor-container">
          <textarea
            className="input"
            id="editor"
            placeholder="Write your Markdown here..."
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          ></textarea>
          <button
            className="btn-delete"
            onClick={() => {
              setMarkdown(defaultMarkdown);
            }}
          >
            Delete
          </button>
        </div>
        <article id="preview" className="result">
          <ReactMarkdown remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>
        </article>
      </div>
    </main>
  );
}

export default App;
