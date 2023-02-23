import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Login from "./Login";
import Signup from "./Signup";

const SignInOutContainer = (props) => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const boxStyle = { width: "100%", margin: "20px auto" };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Box elevation={20} style={boxStyle}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Sign In" />

        <Tab label="Sign Up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login
          closeDialog={props.handleDialog}
          handleLogin={props.handleSignIn}
          handleChange={handleChange}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup
          closeDialog={props.handleDialog}
          handleSignUp={props.handleCreateAccount}
        />
      </TabPanel>
    </Box>
  );
};

export default SignInOutContainer;
