import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function AdvancedFE() {
    const code =
        `
        import { useState } from "react";
        import reactLogo from "./assets/react.svg";
        import "./App.css";
        
        function App() {
          const [count, setCount] = useState(0);
        
          return (
            <div className="App">
              <div>
                <a href="https://reactjs.org" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://vitejs.dev" target="_blank">
                  <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
              </div>
              <h1>React + Vite</h1>
              <h2>On CodeSandbox!</h2>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.tsx</code> and save to test HMR.
                </p>
        
                <p>
                  Tip: you can use the inspector button next to address bar to click on
                  components in the preview and open the code in the editor!
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </div>
          );
        }
        
        export default App;
`;

    return (
        <>
            <h1 style={{textAlign: "center"}}>React</h1>
            <div style={{ border: "0px solid rgba(56, 125, 122, .1)", borderRadius: "25px", padding: "0px", overflowX: 'auto', margin: "0rem 4rem 2rem 4rem", backgroundColor: "rgba(56, 125, 122)" }}>
                <SyntaxHighlighter language="jsx" style={tomorrow}>
                    {code}
                </SyntaxHighlighter>
            </div>
        </>
    );
}
