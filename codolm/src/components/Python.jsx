// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import githubStyle from 'react-syntax-highlighter/dist/esm/styles/hljs/github';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/esm/styles/prism";

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { xonokai  } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { monokai  } from 'react-syntax-highlighter/dist/esm/styles/prism';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { duotoneDark  } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CommonButton from "./Common";

export default function PythonHomePage() {
  const code = `
    class Student :
        max_age = 26

        def __init__(self, name, surname, year_of_birth ,field):
            self.name = name
            self.surname = surname
            self.year_of_birth = year_of_birth
            self.field = field

            def _set_name(self, new_name):
                self.name = new_name
            
            def _set_surname(self, new_surname):
                self.surname = new_surname
            
            def __set_year_of_birth(self, new_year_of_birth):
                self.year_of_birth = new_year_of_birth

            def get_name(self):
                return self.name

            def get_length(self):
                return len(self.get_name())

            def __str__(self):
                return "Student(name='Default Name', surname='Default Surname', 'Default Birth Year', 'Default Field')"
            
    if __name__ == "__main__":
        me = Student("Michael", "Hajny", 2000, "IT")
        my_name = me.get_name()
        len_of_name = me.get_length()
        # print(f"Hi { my_name } your name is { len_of_name } letter long !")
    
    Output :
    >> Hi Michael your name is 7 letter long !
`;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Python</h1>
      <div
        style={{
          border: "0px solid rgba(56, 125, 122, .1)",
          borderRadius: "25px",
          padding: "0px",
          overflowX: "auto",
          margin: "0rem 4rem 0rem 4rem",
          backgroundColor: "rgba(56, 125, 122)",
        }}
      >
        <SyntaxHighlighter language="python" style={nord}>
          {code}
        </SyntaxHighlighter>
      </div>
      <CommonButton path={"/"} name={"Back"} />
    </>
  );
}
