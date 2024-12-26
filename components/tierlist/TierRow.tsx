// tierrow.tsx
import React from "react";
import Stack from "@mui/material/Stack";
import { RankBox } from "./RankBox";
import { ItemContainer } from "./ItemContainer";
import { Hero } from "@/types";
import { tierColorDict } from "@/lib/utils/tierColors";
import { Tier } from "@/types";

interface TierRowProps {
  rank: Tier;
  heroes: Hero[];
}

export const TierRow: React.FC<TierRowProps> = ({ rank, heroes }) => {
  return (
    <Stack direction="row" spacing={2} sx={{ height: "14vh", borderRadius: 1 }}>
      <RankBox rank={rank} />
      <ItemContainer heroes={heroes} />
    </Stack>
  );
};
