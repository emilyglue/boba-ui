import Typography from '@mui/material/Typography'
import WordWrapBox from '../utils/components/WordWrapBox'

const Response = ({
  subtitleText,
  titleText
}: {
  subtitleText: string
  titleText: string
}) => (
  <WordWrapBox className='responseText'>
    <Typography variant='h1'>{titleText}</Typography>
    <Typography variant='h4'>{subtitleText}</Typography>
  </WordWrapBox>
)

export default Response
