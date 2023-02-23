import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Box } from "@mui/material";
import { CardActionArea } from "@mui/material";

export default function ResourceCard(props) {
  const { name, image, url } = props;

  function openNewTab(url) {
    window.open(url, "_blank");
  }

  return (
    <Card sx={{ m: 2, maxWidth: 1760, height: 130 }} id="card">
      <CardActionArea onClick={() => openNewTab(url)} sx={{ height: "100%" }}>
        <Box sx={{ height: "100%", display: "flex", flexDirection: "row" }}>
          <CardContent
            sx={{ width: "70%", display: "flex", alignItems: "center" }}
          >
            <Typography
              fontWeight={"bold"}
              align="left"
              component="div"
              variant="h6"
            >
              {name}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              position: "absolute",
              right: 0,

              borderRadius: "50%",
              width: 130,
            }}
            height="150"
            image={image}
          />
        </Box>
      </CardActionArea>
    </Card>
  );
}
