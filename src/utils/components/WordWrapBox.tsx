import { ReactNode } from 'react'
import Box from '@mui/material/Box'

const WordWrapBox = ({
  children,
  className
}: {
  children: ReactNode
  className?: string
}) => (
  <Box
    className={className}
    style={{
      textAlign: 'center',
      wordBreak: 'break-word'
    }}
  >
    {children}
  </Box>
)

export default WordWrapBox
