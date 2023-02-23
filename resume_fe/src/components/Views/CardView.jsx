import * as React from "react";
import Box from "@mui/material/Box";
import HelpCard from "../cards/HelpCard";
import links from "../../assets/Icons/links.svg";
import youtube from "../../assets/Icons/YouTube.svg";
import ResourcesListView from "./ResourcesListView";
import VideosListView from "./VideosListView";

export default function CardsView() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <HelpCard
        childComponent={<ResourcesListView></ResourcesListView>}
        content="Useful Resources"
        image={links}
      ></HelpCard>
      <HelpCard
        childComponent={<VideosListView></VideosListView>}
        content="Links to YouTube"
        image={youtube}
      ></HelpCard>
    </Box>
  );
}
