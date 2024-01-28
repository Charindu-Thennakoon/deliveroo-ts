import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/itemsSlice"; // Adjust the import path as necessary
import { RootState, AppDispatch } from "../../redux/store"; // Adjust the import path as necessary
import { styled, useTheme } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// Define the type for your items (adjust this according to your actual data structure)
type Item = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  kal: number;
};

// Define a type for the grouped items
type GroupedItems = {
  [category: string]: Item[];
};

function MenuItemCard() {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.items.items);
  const status = useSelector((state: RootState) => state.items.status);
  const theme = useTheme();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchItems());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error loading data.</div>;
  }

  const groupedItems: GroupedItems = items.reduce(
    (acc: GroupedItems, item: Item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {}
  );

  const CardWrapper = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    margin: "10px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      margin: "10px 0",
    },
  }));

  const CardImage = styled(CardMedia)(({ theme }) => ({
    width: "150px",
    height: "150px",
    objectFit: "cover",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "200px",
    },
  }));

  const CardDetails = styled(CardContent)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      padding: "10px",
    },
  }));

  const CardTitle = styled(Typography)({
    fontSize: "18px",
    fontWeight: "bold",
  });

  const CardDescription = styled(Typography)({
    fontSize: "14px",
    color: "gray",
  });

  const CardCalory = styled(Typography)({
    fontSize: "14px",
    color: "gray",
  });

  const CardPrice = styled(Typography)({
    fontSize: "16px",
    fontWeight: "bold",
    color: "gray",
  });

  const CardButton = styled(Button)({
    width: "60px",
    backgroundColor: "white",
    color: "grey",
    border: "1px solid grey",
    "&:hover": {
      backgroundColor: "lightgrey",
    },
  });

  const CenteredIcon = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  });

  return (
    <div>
      {Object.keys(groupedItems).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <Grid container spacing={2}>
            {groupedItems[category].map((item) => (
              <Grid key={`${category}-${item.id}`} item xs={12} sm={6} md={6}>
                <CardWrapper theme={theme}>
                  <CardImage
                    image={item.image || "default-image.jpg"}
                    title={item.name}
                    theme={theme}
                  />
                  <CardDetails theme={theme}>
                    <Box>
                      <CardTitle variant="h5">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                      <CardCalory>{item.kal} Kal</CardCalory>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <CardPrice>£{item.price}</CardPrice>
                      <CardButton>
                        <CenteredIcon>
                          <AddIcon />
                        </CenteredIcon>
                      </CardButton>
                    </Box>
                  </CardDetails>
                </CardWrapper>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  );
}

export default MenuItemCard;
