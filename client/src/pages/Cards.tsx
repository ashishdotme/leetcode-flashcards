import React from 'react'
import * as _ from 'lodash'
import CardNavButtons from '../components/card/CardNavButtons'
import CardContainer from '../components/card/CardContainer'
import data from '../data/output.json'

const CardsContainer = () => {
  return (
    <div>
      {<CardContainer cards={_.shuffle(data)} />}
      {<CardNavButtons />}
    </div>
  )
}

export default CardsContainer
