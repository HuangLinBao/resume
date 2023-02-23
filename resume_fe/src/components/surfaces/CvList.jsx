import * as React from "react";
import Box from "@mui/material/Box";
import ImageView from "../Views/ImageView";
import { Typography } from "@mui/material";

export default function CvList() {
  return (
    <Box
      sx={{
        p: 8,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ImageView></ImageView>
      <Typography sx={{ p: 4 }} variant="h5">
        No CVs available
      </Typography>
    </Box>
  );
}
