import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function BashScriptingPage() {
    const code = `  #!/bin/bash
    FIRST_ARGUMENT=${1}
    SECOND_ARGUMENT=${2}
  
    if [ $# -eq 1 ]
    then
        min=0
        max=$FIRST_ARGUMENT
    elif [ $# -eq 2 ]
    then
        min=$FIRST_ARGUMENT
        max=$SECOND_ARGUMENT
    else
        min=0
        max=100
    fi
  
    counter=0
  
    while true
    do
        if [ $max -lt $min ]
        then
            break
        fi
  
        med=$(($min + $(($(($max - $min)) / 2))))
  
        echo "Is your number smaller than $med ? (y, n)"
        read answer
        if [ $answer == "y" ]
        then
            max=$(($med - 1))
        else
            counter=$(($counter + 1))
        fi
        echo "Is your number bigger than $med ? (y, n)"
        read answer
        if [ $answer == "y" ]
        then
            min=$(($med + 1))
        else
            counter=$(($counter + 1))
        fi
  
        if  [ $counter -eq 2 ]
        then 
            echo "We found your number $med"
                break
        fi
        counter=0
    done`;

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Bash</h1>
            <div style={{ border: "0px solid rgba(56, 125, 122, .1)", borderRadius: "25px", padding: "0px", overflowX: 'auto', margin: "0rem 4rem 2rem 4rem", backgroundColor: "rgba(56, 125, 122)" }}>
                <SyntaxHighlighter language="bash" style={duotoneDark}>
                    {code}
                </SyntaxHighlighter>
            </div>
        </>
    )
}