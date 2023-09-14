import { useState } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import deletePNG from "./assets/delete.png";
import copySVG from "./assets/copy.svg";

function App() {
  const defaultMarkdown = `# Markdown Preview
You can see the Markdown guide [here](https://www.markdownguide.org/cheat-sheet/)`;
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [copied, setCopied] = useState(false);

  const notificationStyles = {
    position: "absolute",
    bottom: "10%",
    right: "2%",
    backgroundColor: "#57cc99",
    color: "#edf2f4",
    zIndex: "9",
    padding: "5px",
    borderRadius: "5px",
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false); // Esto restablecerá el estado "copied" a false después de 3 segundos
    }, 1000); // 3000 milisegundos (3 segundos)
  };
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
          {copied ? <span style={notificationStyles}>Copied</span> : null}
          <CopyToClipboard text={markdown} onCopy={handleCopy}>
            <button className="btn-copy">
              <img src={copySVG} alt="copy icon" />
            </button>
          </CopyToClipboard>
          <button
            className="btn-delete"
            onClick={() => {
              setMarkdown("");
            }}
          >
            <img src={deletePNG} alt="delete icon" />
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
