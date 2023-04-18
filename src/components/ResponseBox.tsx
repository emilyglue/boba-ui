import { Button, Link } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
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
    <ColumnBox maxHeight='600px'>
      <ColumnBox className='hideOverflow' key={bobaKey}>
        <Response subtitleText={response.subtitle} titleText={response.title} />
        <ColumnBox>
          {shouldGetBoba ? (
            <Link
              href='https://letmegooglethat.com/?q=boba+near+me'
              target='_blank'
              underline='none'
            >
              <Button
                aria-label='find-boba-near-me'
                variant='outlined'
                endIcon={<ArrowForwardIcon />}
                style={{ margin: '2rem' }}
              >
                Find boba
              </Button>
            </Link>
          ) : (
            <Button
              aria-label='again'
              onClick={onClick}
              variant='outlined'
              style={{ margin: '2rem' }}
            >
              I need a second opinion
            </Button>
          )}
        </ColumnBox>
      </ColumnBox>
    </ColumnBox>
  )
}

export default ResponseBox
