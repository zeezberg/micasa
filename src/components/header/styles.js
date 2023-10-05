import styled from "@emotion/styled";
import { AppBar, Box, TextField, Toolbar, Typography } from "@mui/material";
import theme from "theme";

export const HeaderAppBar = styled(AppBar)(() => ({
  width: "100%",
  height: "100px",
  background: theme.palette.secondary.main,
  position: "fixed",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  color: "#000",
}));

export const HeaderToolBar = styled(Toolbar)(() => ({
  width: "100%",
  background: theme.palette.secondary.main,
  height: "100px",
  display: "flex",
  alignItems: "center",
  color: "#000",
}));

export const HeaderTypography = styled(Box)(() => ({
  fontFamily: theme.fonts.montserrat,
  fontSize: "18px",
  fontWeight: "500px",
  letterSpacing: "1px",
}));

export const HeaderSearch = styled(TextField)(() => ({
  borderColor: "#000",
  width: "300px",
  minWidth: "200px",
}));
