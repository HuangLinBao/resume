import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function HelpCard(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card elevation={0} sx={{ m: 2, maxWidth: 345, border: "5px solid black" }}>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          <img src={props.image} style={{ height: 153 }} />
        </CardMedia>
        <CardContent>
          <Typography
            fontWeight={"bold"}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"840px"}
      >
        <DialogTitle fontWeight={"bold"} id="alert-dialog-title">
          "{props.content}"
        </DialogTitle>
        <DialogContent>{props.childComponent}</DialogContent>
      </Dialog>
    </Card>
  );
}
