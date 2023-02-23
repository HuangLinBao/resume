import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Box } from "@mui/material";
import { CardActionArea } from "@mui/material";

export default function VidCard(props) {
  const { name, image, url } = props;

  function openNewTab(url) {
    window.open(url, "_blank");
  }

  return (
    <Card sx={{ m: 2, maxWidth: 260, height: 130 }} id="card">
      <CardActionArea onClick={() => openNewTab(url)} sx={{ height: "100%" }}>
        <Box sx={{ height: "100%", display: "flex", flexDirection: "row" }}>
          <CardContent sx={{ width: "70%" }}>
            <Typography
              fontWeight={"bold"}
              align="left"
              component="div"
              variant="h7"
            >
              {name}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              position: "absolute",
              right: 0,
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
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
