import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import SignInOutContainer from "../forms/AuthForm";

export default function MyAppBar(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ResuMe
          </Typography>
          {props.authState ? (
            <Button onClick={props.handleLogout} color="inherit">
              Logout
            </Button>
          ) : (
            <Button onClick={handleClickOpen} color="inherit">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"840px"}
      >
        <DialogTitle fontWeight={"bold"} id="alert-dialog-title">
          "Auth"
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              p: 3,
              height: 1360,
              width: 540,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <SignInOutContainer
              handleCreateAccount={props.handleSignUp}
              handleSignIn={props.handleCredentials}
              handleDialog={setOpen}
            ></SignInOutContainer>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
