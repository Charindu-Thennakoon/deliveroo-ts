import React from "react";
import {
  Box,
  Grid,
  Paper,
  Link,
  Typography,
  useTheme,
  useMediaQuery,
  SxProps,
  Theme,
} from "@mui/material";

// Define the type for the content item
interface ContentItem {
  href: string;
  text: React.ReactNode;
}

// Define the type for the component props
interface MainFooterColumnProps {
  title: string;
  content: ContentItem[];
}

const MainFooterColumn: React.FC<MainFooterColumnProps> = ({
  title,
  content,
}) => {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));

  const columnContainer: SxProps<Theme> = {
    backgroundColor: "#434848",
    padding: theme.spacing(isMdScreen ? 3 : 2),
    height: "90%",
  };

  const columnTitleStyle: SxProps<Theme> = {
    color: "white",
    mb: 1,
    fontSize: isMdScreen ? "1.1rem" : "1rem",
    fontWeight: 500,
  };

  const menuItem: SxProps<Theme> = {
    py: 0.5,
  };

  const linkDecoration: SxProps<Theme> = {
    textDecoration: "none",
    color: "white",
    "&:hover": { color: "#00ccbc" },
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Paper square sx={columnContainer}>
        <Typography sx={columnTitleStyle}>{title}</Typography>
        {content.map((link, subIndex) => (
          <Box key={subIndex} sx={menuItem}>
            <Link sx={linkDecoration} href={link.href}>
              {link.text}
            </Link>
          </Box>
        ))}
      </Paper>
    </Grid>
  );
};

export default MainFooterColumn;
