import { Grid, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React from "react";

function SchedulerPage() {
  return (
    <>
      <Typography variant="h3" textAlign="center" sx={{ marginTop: 3 }}>
        Scheduler
      </Typography>

      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "50vh" }}
      >
        <Typography>Event Title</Typography>
        <TextField sx={{ marginBottom: 2 }}></TextField>

        <Typography>Event Date</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>

        <Typography sx={{ marginTop: 2 }}>Event Description</Typography>
        <TextField sx={{ marginBottom: 2 }}></TextField>

        
      </Grid>
    </>
  );
}

export default SchedulerPage;
