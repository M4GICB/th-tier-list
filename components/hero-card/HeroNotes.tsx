import CircleIcon from "@mui/icons-material/Circle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

interface Props {
  notes: string[];
}
export const HeroNotes = (props: Props) => {
  return (
    <List dense={true} sx={{ listStyleType: "disc", pl: 2 }}>
      {props.notes.map((note) => (
        <ListItem key={note} sx={{ display: "list-item", pl: 0 }}>
          <ListItemText primary={note} />
        </ListItem>
      ))}
    </List>
  );
};
