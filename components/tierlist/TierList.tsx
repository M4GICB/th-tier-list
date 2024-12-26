// tierlist.tsx
"use client";

import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import { TierRow } from "./TierRow";
import { Hero, HeroesByTier } from "@/types";

export const TierList = () => {
  const [data, setData] = useState<HeroesByTier | null>(null);
  const [loading, setLoading] = useState(true);
  const tierOrder: (keyof HeroesByTier)[] = ["S", "A", "B", "C", "D", "F"];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/data");
      const result = await response.json();

      // Organize heroes by tier into a dictionary
      const heroesByTier: HeroesByTier = result.heroes.reduce(
        (acc: HeroesByTier, hero: Hero) => {
          const tier = hero.tier as keyof HeroesByTier;
          if (!acc[tier]) {
            acc[tier] = [];
          }
          acc[tier].push(hero);
          return acc;
        },
        {} as HeroesByTier
      );

      setData(heroesByTier);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading || data == null) {
    return <>Loading...</>;
  } else {
    return (
      <Stack m={2} spacing={3} sx={{ width: "100%" }}>
        {tierOrder.map((tier, index) => (
          <TierRow key={index} rank={tier} heroes={data[tier]} />
        ))}
      </Stack>
    );
  }
};
