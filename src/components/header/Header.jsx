import { Box, IconButton, Menu } from "@mui/material";
import React, { Fragment } from "react";
import {
  HeaderAppBar,
  HeaderSearch,
  HeaderToolBar,
  HeaderTypography,
} from "./styles";

import { Add } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <HeaderAppBar position="static">
        <HeaderToolBar>
          <div>
            {["left"].map((anchor) => (
              <Fragment key={anchor}>
                {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}

                {/* <IconButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton> */}

                <IconButton onClick={toggleDrawer(anchor, true)}>
                  <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                  onOpen={toggleDrawer(anchor, true)}
                >
                  {list(anchor)}
                </SwipeableDrawer>
              </Fragment>
            ))}
          </div>

          <HeaderTypography>Категории</HeaderTypography>
          <HeaderSearch
            InputProps={{
              style: {
                borderRadius: "40px",
              },
            }}
            variant="outlined"
            label="Поиск..."
          />
          <Box
            sx={{
              flexGrow: "1",
            }}
          >
            <img src="http://micasa.kg/images/logo.png" alt="micasa" />
          </Box>

          <HeaderTypography>
            <IconButton>
              <Add />
            </IconButton>
            Желаемое
          </HeaderTypography>

          <HeaderTypography>
            <IconButton>
              <AddIcon />
            </IconButton>
            Войти
          </HeaderTypography>

          <HeaderTypography>
            <IconButton>
              <Add />
            </IconButton>
            Корзина
          </HeaderTypography>
        </HeaderToolBar>
      </HeaderAppBar>
    </div>
  );
};

export default Header;
