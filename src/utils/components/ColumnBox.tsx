import Box from '@mui/material/Box'
import { ReactNode } from 'react'

const ColumnBox = ({ children }: { children: ReactNode }) => (
  <Box
    alignItems='center'
    display='flex'
    flexDirection='column'
    height='100vh'
    justifyContent='center'
  >
    {children}
  </Box>
)

export default ColumnBox
