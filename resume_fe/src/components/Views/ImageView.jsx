import { Box } from "@mui/material";
import * as React from "react";
import test from "../../assets/img/test.jpg";

export default function ImageView() {
  return (
    <Box
      component="img"
      sx={{
        height: 360,
        width: 640,
      }}
      alt=""
      src={test}
    />
  );
}
