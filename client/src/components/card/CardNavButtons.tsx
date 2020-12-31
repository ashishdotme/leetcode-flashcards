import React, { useContext } from 'react'
import { Button, Icon, Grid } from 'semantic-ui-react'
import { CardContext } from '../../context/CardContext'

const CardNavButtons = () => {
  const context = useContext(CardContext)
  const { dispatch, goBack } = context

  return (
    <div>
      <Grid
        centered
        style={{
          paddingTop: '40px',
        }}
      >
        <Button.Group textAlign="center">
          <Button
            primary
            onClick={() => {
              dispatch('previous')
            }}
          >
            <Icon name="arrow alternate circle left outline" />
          </Button>
          <Button
            onClick={() => {
              dispatch('go back')
              goBack()
            }}
          >
            Home
          </Button>
          <Button
            primary
            onClick={() => {
              dispatch('next')
            }}
          >
            <Icon name="arrow alternate circle right outline" />
          </Button>
        </Button.Group>
      </Grid>
    </div>
  )
}

export default CardNavButtons
