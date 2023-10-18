import { Typography, Grid, TextField, Button } from '@mui/material'
import React from 'react'

function SignUp() {
  return (
    <><Typography variant="h3" textAlign="center" sx={{ marginTop: 3 }}>Sign Up</Typography><Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "50vh" }}
      >
          <Typography>Username</Typography>
          <TextField sx={{ marginBottom: 2 }}></TextField>
          <Typography>Password</Typography>
          <TextField sx={{ marginBottom: 2 }}></TextField>

          <Button>Create Account</Button>
          <Typography>OR</Typography>
          <Button href="/signIn">Sign In</Button>

      </Grid>
    </>
  )
}

export default SignUp