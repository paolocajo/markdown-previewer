import { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import deletePNG from "./assets/delete.png";

function App() {
  const defaultMarkdown = `# Markdown Preview
You can see the Markdown guide [here](https://www.markdownguide.org/cheat-sheet/)`;
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
              setMarkdown("");
            }}
          >
            <img src={deletePNG} alt="delete-button" />
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
