import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";

function SignIn() {
  return (
    <>
    <Typography variant="h3" textAlign="center" sx={{marginTop: 3}}>Sign In</Typography>
    
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "50vh" }}
      >
        <Typography>Username</Typography>
        <TextField sx={{marginBottom: 2}}></TextField>
        <Typography>Password</Typography>
        <TextField sx={{marginBottom: 2}}></TextField>

        <Button>Sign In</Button>
        <Typography>OR</Typography>
        <Button href="/signUp">Create Account</Button>
        
      </Grid>
    </>
  );
}

export default SignIn;
