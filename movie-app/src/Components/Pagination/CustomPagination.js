import { Pagination } from "@mui/material";
import React from "react";
import { createMuiTheme, ThemeProvider } from "@mui/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: dark,
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e) => {
            handlePageChange(e.target.textContent);
          }}
          count={numOfPages}
          variant="outlined"
          shape="rounded"
          size="large"
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
