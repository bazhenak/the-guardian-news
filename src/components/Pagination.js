import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div style={{ marginTop: "20px" }}>
            {currentPage > 1 && (
                <button onClick={() => onPageChange(currentPage - 1)}>Previous</button>
            )}
            <span style={{ margin: "0 10px" }}>
        Page {currentPage} of {totalPages}
      </span>
            {currentPage < totalPages && (
                <button onClick={() => onPageChange(currentPage + 1)}>Next</button>
            )}
        </div>
    );
};

export default Pagination;
