import { Button } from '@mui/material'
import ColumnBox from '../utils/components/ColumnBox'
import Response from './Response'
import './ResponseBox.css'

const DecisionButton = ({
  onClick,
  text
}: {
  onClick: () => void
  text: string
}) => (
  <Button onClick={onClick} style={{ margin: '2rem' }} variant='contained'>
    {text}
  </Button>
)

const ResponseBox = ({
  bobaKey,
  onClick,
  shouldGetBoba
}: {
  bobaKey: null | number
  onClick: () => void
  shouldGetBoba: null | number
}) => {
  const isInitialized = shouldGetBoba !== null
  let titleText = ''
  let subtitleText = ''
  let btnText = ''
  if (!isInitialized) {
    return <></>
  } else if (shouldGetBoba) {
    titleText = 'Yaaaaaaaaaaaaas'
    subtitleText = 'Go treat yo self'
    btnText = 'r u sure'
  } else {
    titleText = 'Not this time...'
    subtitleText = 'but maybe next time!'
    btnText = 'I need a second opinion'
  }

  return (
    <ColumnBox height='100vh'>
      <div className='hideOverflow' key={bobaKey}>
        <Response subtitleText={subtitleText} titleText={titleText} />
        <ColumnBox>
          <DecisionButton onClick={onClick} text={btnText} />
        </ColumnBox>
      </div>
    </ColumnBox>
  )
}

export default ResponseBox
