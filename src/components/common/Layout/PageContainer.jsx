import React from "react";
import { Box } from "@mui/material";

const PageContainer = ({
  children,
  maxWidth = "lg",
  noPadding = false,
  sx = {},
}) => {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.background.default,
        maxWidth: maxWidth === "full" ? "100%" : `${maxWidth}px`,
        margin: "0 auto",
        padding: noPadding ? 0 : { xs: 2.5, sm: 3, md: 4 },
        minHeight: "calc(100vh - 64px)",
        pb: { xs: 10, md: 4 }, // Extra bottom padding on mobile for bottom nav
        overscrollBehavior: "none",
        ...sx,
      })}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
