// import { AppBar, Toolbar, Typography } from "@mui/material";
import Header from "../components/header/Header";
import React from "react";
import { Outlet } from "react-router-dom";
// import Drawer from "components/Drawer/Drawer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

MainLayout.propTypes = {};

export default MainLayout;
