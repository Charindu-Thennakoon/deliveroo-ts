import React from "react";
import PrimaryNavBarSingleProduct from "../components/NavBar/PrimaryNavBar/PrimaryNavBarSingleProduct";
import SecondaryNavBar from "../components/NavBar/SecondaryNavBar/SecondaryNavBar";
import { Box, Stack } from "@mui/material";
import FixedCart from "../components/FixedCart/FixedCart";
import FoodItemSideBar from "../components/FoodItemSideBar/FoodItemSideBar";
import SingleItem from "../components/SingleItem/SingleItem";
import Footer from "../components/Footer/Footer";
//import SingleItem2 from '../components/SingleItem/SingleItem2';

const Menu: React.FC = () => {
  return (
    <Box>
      <PrimaryNavBarSingleProduct />
      <SingleItem />
      <SecondaryNavBar />
      <Stack direction="row" spacing={2} mb={3} justifyContent="space-between">
        <FoodItemSideBar />
        <FixedCart />
      </Stack>
      <Footer />
    </Box>
  );
};

export default Menu;
