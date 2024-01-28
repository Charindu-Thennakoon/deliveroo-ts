import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";

const SecondaryNavBar: React.FC = () => {
  const buttonStyles = {
    color: "#00ccbc",
    textTransform: "none",
    marginRight: 4,
  };

  return (
    <AppBar
      position="sticky"
      style={{ top: "64px" }}
      sx={{ backgroundColor: "white", color: "gray" }}
    >
      <Toolbar>
        <Button sx={buttonStyles} component={Link} to="/section1">
          New daily Specials
        </Button>
        <Button sx={buttonStyles} component={Link} to="/section2">
          Salads
        </Button>
        <Button sx={buttonStyles} component={Link} to="/section3">
          Hot Power Bowls
        </Button>
        <Button sx={buttonStyles} component={Link} to="/section3">
          Gym food
        </Button>
        <Button sx={buttonStyles} component={Link} to="/section3">
          Bundles
        </Button>
        <Button sx={buttonStyles} component={Link} to="/section3">
          Rainbow Wraps
        </Button>
        <Button sx={buttonStyles} component={Link} to="/section3">
          Vegan Menu
        </Button>
        <Button sx={buttonStyles} component={Link} to="/section3">
          Snacks & Sides
        </Button>
        <Button sx={buttonStyles} component={Link} to="/section3">
          Yoghurt & fruit
        </Button>
        <Button sx={buttonStyles} component={Link} to="/section3">
          Cold Drinks
        </Button>
        <Button sx={buttonStyles} component={Link} to="/section3">
          Smoothies, shakes & juice
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default SecondaryNavBar;
