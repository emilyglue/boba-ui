import { Button } from '@mui/material'
import ColumnBox from '../utils/components/ColumnBox'
import Response from './Response'
import responses from '../utils/responses'

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
  if (!isInitialized) {
    return <></>
  }
  const responseList = responses[shouldGetBoba]
  const responseKey = Math.floor(Math.random() * responseList.length)
  const response = responseList[responseKey]

  return (
    <ColumnBox style={{ marginTop: 'calc(100vh / 4)' }}>
      <div className='hideOverflow' key={bobaKey}>
        <Response subtitleText={response.subtitle} titleText={response.title} />
        <ColumnBox>
          <Button onClick={onClick} style={{ margin: '2rem' }}>
            {shouldGetBoba ? 'r u sure' : 'I need a second opinion'}
          </Button>
        </ColumnBox>
      </div>
    </ColumnBox>
  )
}

export default ResponseBox
