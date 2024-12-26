//Next auth
import { getServerSession } from "next-auth";

//Next navigation
import { redirect } from "next/navigation";

//Options
import { authOptions } from "@/lib/utils/auth";

//Components
import { LogoutButton } from "@/components/auth/LogoutButton";
import { EditButton } from "@/components/auth/EditButton";
import { TierList } from "@/components/tierlist/TierList";

import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return <TierList />;
}
