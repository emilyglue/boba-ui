import { Button } from '@mui/material'
import ColumnBox from '../utils/components/ColumnBox'
import Response from './Response'

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
          <Button onClick={onClick} style={{ margin: '2rem' }}>
            {btnText}
          </Button>
        </ColumnBox>
      </div>
    </ColumnBox>
  )
}

export default ResponseBox
