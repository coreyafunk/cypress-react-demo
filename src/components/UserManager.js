import { Container, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'

const UserManager = () => {
  return (
    <Container maxWidth={false}>
      <Paper>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant='h4'>User Management</Typography>
        </Box>
      </Paper>
    </Container>
  )
}

export default UserManager
