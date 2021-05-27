import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
export interface Props {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuItems() {
  return (
    <List>
      {["Code", "Travel", "Recipies"].map((item) => {
        return (
          <ListItem>
            <ListItemText primary={item} />
          </ListItem>
        );
      })}
    </List>
  );
}
export default function MainMenu({ openMenu, setOpenMenu }: Props) {
  return (
    <nav aria-label="main menu navigation">
      <Drawer
        anchor="left"
        disablePortal
        onClose={() => setOpenMenu(false)}
        open={openMenu}
        variant="temporary"
      >
        <MenuItems />
      </Drawer>
    </nav>
  );
}
