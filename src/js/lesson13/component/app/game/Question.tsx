/**
 * @description Game question
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import SyntaxHighlighter from 'react-syntax-highlighter'
import {gradientDark} from 'react-syntax-highlighter/dist/esm/styles/hljs'

export const Question = () => {
  const codeString = '(num) => num + 1'

  return (
    <>
      <h3 className="text-center bg-primary-700 rounded-2xl p-4 font-black">
        Question 1
      </h3>
      <SyntaxHighlighter language="javascript" style={gradientDark}>
        {codeString}
      </SyntaxHighlighter>
      <ul className="flex flex-col gap-4">
        <li className="bg-primary-700 rounded-2xl p-4 italic cursor-pointer">
          Answer 1
        </li>
        <li className="bg-primary-700 rounded-2xl p-4 italic cursor-pointer">
          Answer 2
        </li>
        <li className="bg-primary-700 rounded-2xl p-4 italic cursor-pointer">
          Answer 3
        </li>
        <li className="bg-primary-700 rounded-2xl p-4 italic cursor-pointer">
          Answer 4
        </li>
      </ul>
    </>
  )
}
