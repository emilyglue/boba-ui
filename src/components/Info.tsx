import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Link, Modal, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { Box } from '@mui/system'
import { useState } from 'react'
import ColumnBox from '../utils/components/ColumnBox'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const Info = () => {
  const [showInfoModal, setShowInfoModal] = useState(false)

  return (
    <>
      <IconButton
        onClick={() => setShowInfoModal(true)}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 99999
        }}
      >
        <InfoOutlinedIcon />
      </IconButton>
      <Modal
        open={showInfoModal}
        onClose={() => setShowInfoModal(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <ColumnBox>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              buy me a boba?
            </Typography>
            <img
              alt='profile pic'
              style={{
                borderRadius: 20,
                height: 200,
                margin: 10,
                width: 200
              }}
              src='./jinx.jpg'
            />
            <>&#x1F449;&#x1F448;</>{' '}
            <img
              alt='venmo logo'
              src='./icons8-venmo-40.png'
              style={{ margin: 5 }}
            />
            <Link
              color='secondary'
              href='https://account.venmo.com/u/emilyglue'
              target='_blank'
              underline='none'
            >
              @emilyglue
            </Link>
            <Typography
              mt={3}
              textAlign='center'
              variant='caption'
              component='p'
            >
              disclaimer: some responses may or may not have been written with
              the help of ChatGPT
            </Typography>
          </ColumnBox>
        </Box>
      </Modal>
    </>
  )
}
export default Info
