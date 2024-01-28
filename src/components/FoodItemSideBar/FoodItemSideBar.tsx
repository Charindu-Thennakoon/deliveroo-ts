import React from "react";
import { Box, Typography } from "@mui/material";
import MenuItemCard from "./MenuItemCard";

const FoodItemSideBar: React.FC = () => {
  return (
    <Box flex={2} p={2}>
      <Typography
        variant="h6"
        component="div"
        sx={{ fontSize: 15, mt: 2, mb: 4 }}
      >
        Adults need around 2000 kcal a day
      </Typography>

      <MenuItemCard />
    </Box>
  );
};

export default FoodItemSideBar;
