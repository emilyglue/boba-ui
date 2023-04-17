import Box from '@mui/material/Box'

const ColumnBox = ({ children, ...props }: any) => (
  <Box
    alignItems='center'
    display='flex'
    flexDirection='column'
    justifyContent='center'
    {...props}
  >
    {children}
  </Box>
)

export default ColumnBox
