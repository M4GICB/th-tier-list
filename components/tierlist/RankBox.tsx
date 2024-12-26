// rankbox.tsx
import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { tierColorDict } from "@/lib/utils/tierColors";
// import { Rank } from "@/types";

interface RankBoxProps {
  rank: keyof typeof tierColorDict;
}

export const RankBox: React.FC<RankBoxProps> = ({ rank }) => {
  const color = tierColorDict[rank];

  return (
    <Box sx={{ height: "100%" }}>
      <Avatar
        sx={{
          bgcolor: color,
          height: "100%",
          width: "100%",
          aspectRatio: "1",
        }}
        variant="rounded"
      >
        {rank}
      </Avatar>
    </Box>
  );
};
