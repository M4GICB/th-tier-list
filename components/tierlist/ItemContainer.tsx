import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import { HeroCard } from "@/components/hero-card/HeroCard";
import { RankBox } from "./RankBox";

import { HeroList } from "@/types";

export const ItemContainer = (heroes: HeroList) => {
  if (heroes) {
    return (
      <Stack
        margin={1}
        spacing={7}
        direction="row"
        sx={{
          display: "flex",
          flexWrap: "wrap", // Allow wrapping
          alignItems: "stretch", // Align cards consistently
          justifyContent: "center", // Optional: Center cards in the container
          pl: 2,
        }}
      >
        {heroes?.heroes?.map((hero) => (
          <HeroCard key={hero.name} hero={hero} />
        ))}
      </Stack>
    );
  } else {
    return <>no data</>;
  }
};
