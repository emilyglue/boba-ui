import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { IconButton } from '@mui/material'

const Title = ({
  onClick,
  shouldGetBoba
}: {
  onClick: () => void
  shouldGetBoba: null | number
}) => {
  const isInitialized = shouldGetBoba !== null
  const titleClass = isInitialized ? 'container moveup' : 'container'
  return (
    <div className={titleClass}>
      <Typography
        component='h1'
        fontWeight={900}
        textAlign='center'
        textTransform='uppercase'
        variant='h4'
      >
        Should I get boba today?
        <br />
        {!isInitialized && (
          <IconButton aria-label='next' onClick={onClick}>
            <ExpandMoreIcon />
          </IconButton>
        )}
      </Typography>
    </div>
  )
}

export default Title
