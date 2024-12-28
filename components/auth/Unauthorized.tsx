import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { LockOutlined as LockIcon } from "@mui/icons-material";

export const Unauthorized = ({ back }: any) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
      padding={4}
    >
      <LockIcon style={{ fontSize: 80, color: "#d32f2f", marginBottom: 16 }} />
      <Typography variant="h4" gutterBottom>
        Access Denied
      </Typography>
      <Typography variant="body1" paragraph>
        You do not have the necessary permissions to view this page.
      </Typography>
      <a href={back}>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Go Back
        </Button>
      </a>
    </Box>
  );
};
