import React, { useState, useEffect, useReducer } from 'react'
import * as _ from 'lodash'
import { createHashHistory } from 'history'
import data from '../data/output.json'

const history = createHashHistory()

interface Props {
  children?: React.ReactNode
}

interface Data {
  topic: string
  title: string
  front: string
  back: string
}

const Provider: React.FC<Props> = ({ children }) => {
  const [response, setResponse] = useState<Data[]>([])
  const [cardTopic, setCardTopic] = useState('All')

  useEffect(() => {
    const localStorageCards = window.localStorage.getItem('cards')
    if (localStorageCards) {
      setResponse(JSON.parse(localStorageCards))
    } else {
      setResponse(data)
    }
  }, [])

  const cardIdReducer = (cardId: number, action: string) => {
    const cardSetLength =
      cardTopic === 'All'
        ? data.length
        : data.filter((card) => card.topic === _.lowerCase(cardTopic)).length
    switch (action) {
      case 'next':
        if (cardId === cardSetLength - 1) {
          history.push('/')
          return 0
        }
        if (cardId <= cardSetLength - 1) {
          return cardId + 1
        }
        history.push('/')
        return 0
      case 'previous':
        if (cardId === 0) {
          return cardSetLength - 1
        }
        if (cardId <= cardSetLength - 1) {
          return cardId - 1
        }
      case 'go back':
        return 0
      default:
        return 0
    }
  }

  const [cardId, dispatch] = useReducer(cardIdReducer, 0)

  const goBack = () => {
    history.push('/')
  }

  const setCardTopicOnClick = (topic: string) => {
    setCardTopic(topic)
  }

  const state = {
    cardId,
    goBack,
    dispatch,
    cardTopic,
    response,
    setCardTopicOnClick,
  }

  return <CardContext.Provider value={state}>{children}</CardContext.Provider>
}

export const withProvider = (Component: any) => {
  const WrapperComponent = (props: any) => {
    return (
      <Provider>
        <Component {...props} />
      </Provider>
    )
  }
  return WrapperComponent
}

interface Context {
  dispatch: (action: string) => void
  cardId: number
  cardTopic: string
  goBack: () => void
  setCardTopicOnClick: (topic: string) => void
  response: {
    topic: string
    title: string
    front: string
    back: string
  }[]
}

const DEFAULT_STATE = {
  dispatch: () => {},
  cardId: 0,
  cardTopic: 'All',
  goBack: () => {},
  response: [],
  setCardTopicOnClick: () => {},
}

export const CardContext = React.createContext<Context>(DEFAULT_STATE)
