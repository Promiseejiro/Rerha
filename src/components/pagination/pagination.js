import React from "react";

import { Pagination, Container } from "@mui/material";
const Paginate = ({ page, count, paginationHandler }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "2rem",
      }}
    >
      <Pagination
        count={count}
        page={page}
        onChange={paginationHandler}
      ></Pagination>
    </Container>
  );
};
export default Paginate;
