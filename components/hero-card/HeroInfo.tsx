import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

import CategoryIcon from "@mui/icons-material/Category";

import { HeroNotes } from "./HeroNotes";

export const HeroInfo = ({
  name,
  faction,
  role,
  notes,
}: {
  name: string;
  faction: string;
  role: string;
  notes: string[];
}) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        color="primary"
        variant="outlined"
        endIcon={<InfoIcon />}
        onClick={handleClick}
        sx={{ whiteSpace: "nowrap" }}
      >
        {name}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary={`${faction} - ${role}`} />
            </ListItem>
          </List>
          <Divider />
          <HeroNotes notes={notes} />
        </Typography>
      </Popover>
    </div>
  );
};
