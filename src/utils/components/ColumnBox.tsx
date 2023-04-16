import Box from '@mui/material/Box'
import { ReactNode } from 'react'

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
