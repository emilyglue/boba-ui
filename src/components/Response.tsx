import { Button } from '@mui/material'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

const Response = () => {
  const [shouldGetBoba, setShouldGetBoba] = useState<null | number>(null)
  const onClick = () => {
    const random = Math.round(Math.random())
    setShouldGetBoba(random)
  }
  const isInitialized = shouldGetBoba !== null
  const DecisionButton = ({ text }: { text: string }) => (
    <Button onClick={onClick}>{text}</Button>
  )
  if (!isInitialized) {
    return (
      <Container>
        <DecisionButton text='Pls tell me' />
      </Container>
    )
  } else if (shouldGetBoba) {
    return (
      <Container>
        <Typography variant='h1'>Yaaaaaaaaaaaaas</Typography>
        <p>Go treat yo self</p>
        <DecisionButton text='Are you sure?' />
      </Container>
    )
  }
  return (
    <Container>
      <Typography variant='h1'>Not this time</Typography>
      <p>But maybe next time!</p>
      <DecisionButton text='I need a second opinion' />
    </Container>
  )
}

export default Response
