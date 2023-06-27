// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import githubStyle from 'react-syntax-highlighter/dist/esm/styles/hljs/github';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { xonokai  } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { monokai  } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { duotoneDark  } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CommonButton from './Common'

export default function PythonHomePage() {
    const code = `class WatercoolingComputer:
    def __init__(self, cpu, gpu, reservoir_capacity, radiator_size):
        self.cpu = cpu
        self.gpu = gpu
        self.reservoir_capacity = reservoir_capacity
        self.radiator_size = radiator_size
        self.reservoir_level = 0

    def fill_reservoir(self, amount):
        if amount > 0:
            self.reservoir_level = min(self.reservoir_level + amount, self.reservoir_capacity)

    def cool_cpu(self):
        print(f"Cooling CPU using {self.radiator_size}-sized radiator.")

    def cool_gpu(self):
        print(f"Cooling GPU using {self.radiator_size}-sized radiator.")

    def run_benchmark(self):
        self.fill_reservoir(100)
        self.cool_cpu()
        self.cool_gpu()
        print("Benchmarking computer performance...")

my_computer = WatercoolingComputer("Intel i9-9900K", "NVIDIA GeForce RTX 3080", 500, "360mm")
my_computer.run_benchmark();`;

    return (
        <>
            <h1 style={{textAlign: "center"}}>Python</h1>
            <div style={{ border: "0px solid rgba(56, 125, 122, .1)", borderRadius: "25px", padding: "0px", overflowX: 'auto',  margin: "0rem 4rem 0rem 4rem", backgroundColor: "rgba(56, 125, 122)"}}>
                <SyntaxHighlighter language="python" style={nord}>
                    {code}
                </SyntaxHighlighter>
            </div>
            <CommonButton path={"/"} name={"Back"} />
        </>
    )
}