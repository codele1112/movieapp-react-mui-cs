// import React from "react";
import Pagination from "@mui/material/Pagination";

function CustomPagination({ setPage, numberOfPages = 10 }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <Pagination
        count={numberOfPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
        color="primary"
      />
    </div>
  );
}

export default CustomPagination;
