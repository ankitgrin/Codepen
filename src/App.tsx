import { useState, useEffect } from "react";
import Editor from "./components/Editor/Editor";
import "./scss/App.scss";
import useLocalStorage from "./hooks/useLocalStorage";
import { initialCss, initialHtml, initialJS } from "./assets/data";

function App() {
  const [html, setHtml] = useLocalStorage("html", initialHtml);
  const [css, setCss] = useLocalStorage("css", initialCss);
  const [js, setJs] = useLocalStorage("js", initialJS);
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
<html>
<body>${html}</body>
<style>${css}</style>
<script>${js}</script>
</html>
`);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          displayName="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
        />
        <Editor
          displayName="CSS"
          language="css"
          value={css}
          onChange={setCss}
        />
        <Editor
          displayName="JS"
          language="javascript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
