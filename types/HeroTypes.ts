// herotypes.ts
import { tierColorDict } from "@/lib/utils/tierColors";

export interface Hero {
  name: string;
  faction: string;
  role: string;
  notes: string[];
  tier: Tier;
}

export interface HeroList {
  heroes: Hero[];
}

export type Tier = keyof typeof tierColorDict; // "S" | "A" | "B" | "C" | "D" | "F"

export type HeroesByTier = {
  [tier in Tier]: Hero[];
};
