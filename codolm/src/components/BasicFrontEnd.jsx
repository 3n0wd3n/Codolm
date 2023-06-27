import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function BasicFE() {
    const code =
        `
    <!DOCTYPE html>
    <html>
        <head>
        <title>My Webpage</title>
        <style>
            body {
            font-family: Arial, sans-serif;
            }
            h1 {
            color: blue;
            }
        </style>
        <script>
            function greet() {
            var name = prompt('Please enter your name:');
            alert('Hello, ' + name + '!');
            }
        </script>
        </head>
        <body>
            <h1>Welcome to My Webpage</h1>
            <button onclick="greet()">Say Hello</button>
        </body>
    </html>
`;

    return (
        <>
            <h1 style={{textAlign: "center"}}>HTML CSS JS</h1>
            <div style={{ border: "0px solid rgba(56, 125, 122, .1)", borderRadius: "25px", padding: "0px", overflowX: 'auto', margin: "0rem 4rem 0rem 4rem", backgroundColor: "rgba(56, 125, 122)" }}>
                <SyntaxHighlighter language="html" style={tomorrow}>
                    {code}
                </SyntaxHighlighter>
            </div>
        </>
    );
}
