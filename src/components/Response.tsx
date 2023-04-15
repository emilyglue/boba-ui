import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ReactNode, useState } from 'react'
import ColumnBox from '../utils/components/ColumnBox'

const WordWrapBox = ({ children }: { children: ReactNode }) => (
  <Box
    style={{
      textAlign: 'center',
      wordBreak: 'break-word'
    }}
  >
    {children}
  </Box>
)

const Response = () => {
  const [shouldGetBoba, setShouldGetBoba] = useState<null | number>(null)
  const onClick = () => {
    const random = Math.round(Math.random())
    setShouldGetBoba(random)
  }
  const isInitialized = shouldGetBoba !== null
  const DecisionButton = ({ text }: { text: string }) => (
    <Button onClick={onClick} style={{ margin: '2rem' }} variant='contained'>
      {text}
    </Button>
  )
  if (!isInitialized) {
    return (
      <ColumnBox>
        <DecisionButton text='Pls tell me' />
      </ColumnBox>
    )
  } else if (shouldGetBoba) {
    return (
      <ColumnBox>
        <WordWrapBox>
          <Typography variant='h1'>Yaaaaaaaaaaaaas</Typography>
        </WordWrapBox>
        <Typography variant='h4'>Go treat yo self</Typography>
        <DecisionButton text='Are you sure?' />
      </ColumnBox>
    )
  }
  return (
    <ColumnBox>
      <WordWrapBox>
        <Typography variant='h1'>Not this time</Typography>
      </WordWrapBox>
      <WordWrapBox>
        <Typography variant='h4'>But maybe next time!</Typography>
      </WordWrapBox>
      <DecisionButton text='I need a second opinion' />
    </ColumnBox>
  )
}

export default Response
