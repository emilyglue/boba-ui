import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button } from '@mui/material'
import ColumnBox from '../utils/components/ColumnBox'

const Title = ({
  onClick,
  shouldGetBoba
}: {
  onClick: () => void
  shouldGetBoba: null | number
}) => {
  const isInitialized = shouldGetBoba !== null
  const titleContainer = isInitialized ? 'container moveup' : 'container'
  const titleText = isInitialized ? 'title shrink' : 'title'

  return (
    <div className={titleContainer}>
      <h1 className={titleText} style={{ textAlign: 'center' }}>
        Should I get boba today?
      </h1>
      {!isInitialized && (
        <ColumnBox>
          <Button aria-label='next' onClick={onClick} variant='outlined'>
            hmmm
            <ExpandMoreIcon />
          </Button>
        </ColumnBox>
      )}
    </div>
  )
}

export default Title
