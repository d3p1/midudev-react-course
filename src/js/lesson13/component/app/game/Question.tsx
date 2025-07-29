/**
 * @description Game question
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {gradientDark} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import {QuestionManager} from '../../../service/question-manager.ts'
import {useQuestionStore} from '../../../store/question.ts'
import type {Question as QuestionType} from '../../../types'

export const Question: React.FC<{info: QuestionType}> = ({info}) => {
  const answer = useQuestionStore((state) => state.answer)

  return (
    <>
      <h3 className="text-center bg-primary-700 rounded-2xl p-4 font-black">
        {info.question}
      </h3>
      <SyntaxHighlighter language="javascript" style={gradientDark}>
        {info.code}
      </SyntaxHighlighter>
      <ul className="flex flex-col gap-4">
        {info.answers.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => answer(info.id, index)}
              className={`rounded-2xl p-4 italic cursor-pointer ${QuestionManager.processAnswerStyles(
                index,
                info.correctAnswer,
                info.userSelectedAnswer,
              )}`}
            >
              {item}
            </li>
          )
        })}
      </ul>
    </>
  )
}
