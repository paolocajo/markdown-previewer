import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("# Markdown Preview");
  return (
    <main>
      <div className="markdown">
        <textarea
          className="input"
          id="editor"
          placeholder="Write your Markdown here..."
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article id="preview" className="result">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </div>
    </main>
  );
}

export default App;
