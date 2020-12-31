import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { Button } from 'semantic-ui-react'
import gfm from 'remark-gfm'

interface Props {
  card: {
    topic: string
    title: string
    front: string
    back: string
  }
}

const CardDetails = ({ card }: Props) => {
  const [hideAnswer, setHideAnswer] = useState(true)
  const [hideQuestion, setHideQuestion] = useState(true)

  const toggleQuestion = () => {
    setHideQuestion(!hideQuestion)
  }

  const toggleAnswer = () => {
    setHideAnswer(!hideAnswer)
  }

  return (
    <div className="card">
      <header className="card-header">
        {!hideQuestion && (
          <p className="card-header-title">
            {card.title}
            <div className="tag ml-3">{card.topic}</div>
          </p>
        )}
      </header>
      <div className="card-content">
        <p className="title is-4">
          <ReactMarkdown plugins={[gfm]} children={card.front} />
        </p>
        <div className="content">
          {hideAnswer ? '' : <ReactMarkdown plugins={[gfm]} children={card.back} />}
        </div>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          {hideQuestion ? (
            <Button basic color="green" onClick={toggleQuestion}>
              Reveal Question
            </Button>
          ) : (
            <Button basic color="green" onClick={toggleQuestion}>
              Hide Question
            </Button>
          )}
        </p>
        <p className="card-footer-item">
          {hideAnswer ? (
            <Button basic color="green" onClick={toggleAnswer}>
              Reveal Answer
            </Button>
          ) : (
            <Button basic color="green" onClick={toggleAnswer}>
              Hide Answer
            </Button>
          )}
        </p>
      </footer>
    </div>
  )
}

export default CardDetails
