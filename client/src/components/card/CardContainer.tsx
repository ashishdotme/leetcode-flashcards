import React, { useContext } from 'react'
import * as _ from 'lodash'
import { CardContext } from '../../context/CardContext'
import Card from './Card'

interface Props {
  cards: any[]
}

const CardContainer = (props: Props) => {
  const context = useContext(CardContext)
  const { cardId, cardTopic } = context
  const filteredReponse =
    cardTopic === 'All' ? props.cards : props.cards.filter((card) => card.topic === cardTopic)
  const cardDetails = filteredReponse.map((card) => {
    return <Card card={card} />
  })

  return <>{cardDetails[cardId]}</>
}

export default CardContainer
