import React, { useContext } from 'react'
import * as _ from 'lodash'
import CardNavButtons from '../components/card/CardNavButtons'
import CardDetails from '../components/card/Card'
import { CardContext } from '../context/CardContext'

const CardsContainer = () => {
  const context = useContext(CardContext)
  const { cardId, cardTopic, response } = context
  const filteredReponse =
    cardTopic === 'All' ? response : response.filter((card) => card.topic === cardTopic)
  const cards = _.shuffle(filteredReponse)
  const cardDetails = cards.map((card) => {
    return <CardDetails card={card} />
  })

  return (
    <div>
      {cardDetails[cardId]}
      {<CardNavButtons />}
    </div>
  )
}

export default CardsContainer
