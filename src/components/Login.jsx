import React from "react";
import { ReactComponent as Image } from "../assets/login_undraw.svg";
import { Box } from "@mui/system";
import { Grid, Item } from "@mui/material";

const Login = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box
            sx={{ backgroundColor: "#0A1929", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}
          >
            <Image />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
