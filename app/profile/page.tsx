//Next import
import { redirect } from "next/navigation";

//Next auth
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth";

//Components
import { AuthCard } from "@/components/auth/AuthCard";

//Material UI
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { checkAdmin } from "@/lib/auth/admins";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  const adminFlagResult = await checkAdmin(session?.user?.email);

  //If there is a session the user is redirected to /
  if (!session) {
    redirect("/auth");
  }

  // Safely handle null or undefined values for image and name
  const userImage = session?.user?.image || undefined; // Fallback to undefined if null or undefined
  const userName = session?.user?.name || "User"; // Fallback to "User" if null or undefined
  const userEmail = session?.user?.email || "No email"; // Fallback to "No email" if null or undefined
  const role = adminFlagResult ? "Admin" : "User";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ width: "25%", height: "25%", boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Avatar
              src={userImage}
              alt={userName}
              sx={{ width: 80, height: 80, boxShadow: 2 }}
            />
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              Hello, {userName}!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {userEmail}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Role: {role}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
