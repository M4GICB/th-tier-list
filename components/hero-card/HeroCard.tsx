import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import InfoIcon from "@mui/icons-material/Info";

import { HeroNotes } from "./HeroNotes";
import { HeroInfo } from "./HeroInfo";

import { Hero } from "@/types";

export const HeroCard = ({ hero }: { hero: Hero }) => {
  const { name, faction, role, notes } = hero; // Destructure inside the component
  const image = `/images/${name.replace(/ /g, "_")}.png`;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // Centers children horizontally
        justifyContent: "center", // Optional: centers vertically if needed
        height: "100%",
        aspectRatio: "1",
      }}
    >
      <Avatar
        sx={{
          bgcolor: "primary.main",
          height: "75%",
          width: "75%",
          aspectRatio: "1", // Ensures it remains square
        }}
        variant="rounded"
        src={image}
      />
      <HeroInfo name={name} faction={faction} role={role} notes={notes} />
    </Box>
  );
};
