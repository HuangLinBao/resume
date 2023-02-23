import { Box } from "@mui/material";
import * as React from "react";
import ResourceCard from "../cards/ResourceCard";

export default function ResourcesListView() {
  return (
    <Box
      sx={{
        p: 3,
        height: 360,
        width: 840,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ResourceCard
        name={"7 Simple But Effective Ways to Make Your CV Stand Out"}
        image={"https://www.topuniversities.com/themes/custom/tu_d8/logo.svg"}
        url={
          "https://www.topuniversities.com/blog/7-simple-effective-ways-make-your-cv-stand-out"
        }
      ></ResourceCard>
      <ResourceCard
        name={"How to Write a Modern CV in 2022"}
        image={
          "https://d1a8zj7ykmx1ne.cloudfront.net/images/logos/logo-topcv.svg"
        }
        url={
          "https://www.topcv.com/career-advice/how-to-update-your-outdated-cv"
        }
      ></ResourceCard>
    </Box>
  );
}
