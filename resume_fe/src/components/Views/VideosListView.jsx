import { Box } from "@mui/material";
import * as React from "react";
import VidCard from "../cards/VidCard";

export default function VideosListView() {
  return (
    <Box
      sx={{
        height: 360,
        width: 840,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <VidCard
        name={"8 Tips for Writing a Winning Resume"}
        image={
          "https://i.ytimg.com/vi/u75hUSShvnc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOCmRNlXpPuEuEFpSoAz7mcUVx6Q"
        }
        url={"https://www.youtube.com/watch?v=u75hUSShvnc"}
      ></VidCard>
      <VidCard
        name={"Write an Incredible Resume: 5 Golden Rules!"}
        image={
          "https://i.ytimg.com/vi/Tt08KmFfIYQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6geVN17Z5lLDGqbv1nu4I2BHjRg"
        }
        url={"https://www.youtube.com/watch?v=Tt08KmFfIYQ"}
      ></VidCard>
      <VidCard
        name={"CV for Students with NO Experience (FREE TEMPLATE)"}
        image={
          "https://i.ytimg.com/vi/aArb68OBFPg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-d46vM32JGCKvLqnx7SWBnw8XHg"
        }
        url={"https://www.youtube.com/watch?v=aArb68OBFPg"}
      ></VidCard>
    </Box>
  );
}
