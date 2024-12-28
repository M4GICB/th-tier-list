//Next auth
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth";
import { checkAdmin } from "@/lib/auth/admins";

//Material UI
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

import { ProfileButton } from "./ProfileButton";
import { LoginButton } from "@/components/auth/LoginButton";
import AuthMenu from "./AuthMenu";

export default async function MyAppBar() {
  const session = await getServerSession(authOptions);
  const adminFlagResult = await checkAdmin(session?.user?.email);

  const pages = [{ name: "Tier List", path: "/" }];

  if (adminFlagResult) {
    pages.push({ name: "Edit", path: "edit" });
  }

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            sx={{ display: "flex", mr: 1 }}
            variant="rounded"
            src="icon.png"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TH.TL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <a href={page.path} key={page.name}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {page.name}
                </Button>
              </a>
            ))}
          </Box>

          <AuthMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
