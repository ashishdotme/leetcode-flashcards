import React, { useContext, useState, useEffect } from 'react'
import * as _ from 'lodash'
import { Card, Button } from 'semantic-ui-react'
import { CardContext } from '../context/CardContext'
import data from '../data/output.json'
import { createHashHistory } from 'history'

const history = createHashHistory()

export interface StartingCards {
  [key: string]: Object[]
}

const CardsLanding = () => {
  const context = useContext(CardContext)
  const [startingCards, setStartingCards] = useState<StartingCards>({})
  const { setCardTopicOnClick } = context

  useEffect(() => {
    const displayStartingCards = (res: any) => {
      const grouped = _.groupBy(res, 'topic')
      grouped['All'] = res
      return grouped
    }
    setStartingCards(displayStartingCards(data))
  }, [])

  const showCardsRoute = () => {
    history.push('/cards')
  }
  const topics = Object.keys(startingCards)
  const mappedStartingCards = (topics || []).map((topic: any, i) => {
    return (
      <div key={topic} className="card">
        <Card.Content>
          <Card.Header>{_.capitalize(topic.replace('-', ' '))}</Card.Header>
          <Card.Description>
            <Button
              onClick={() => {
                setCardTopicOnClick(topic)
                showCardsRoute()
              }}
            >
              View
            </Button>
          </Card.Description>
        </Card.Content>
      </div>
    )
  })
  return <Card.Group centered>{mappedStartingCards}</Card.Group>
}

export default CardsLanding
