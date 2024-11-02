const Pagination = ({ totalPage, currPage, paginate }) => {
  let pageNumbers = [];

  if (totalPage <= 5) {
    for (let i = 1; i <= totalPage; i++) {
      pageNumbers.push(i);
    }
  } else {
    pageNumbers.push(1);

    if (currPage > 3) {
      pageNumbers.push("...");
    }

    for (
      let i = Math.max(2, currPage - 1);
      i <= Math.min(totalPage - 1, currPage + 1);
      i++
    ) {
      pageNumbers.push(i);
    }

    if (currPage < totalPage - 3) {
      pageNumbers.push("...");
    }

    pageNumbers.push(totalPage);
  }

  return (
    <div className="pagination">
      <button disabled={currPage === 1} onClick={() => paginate(currPage - 1)}>
        Prev
      </button>

      {pageNumbers.map((num) => {
        return (
          <button
            onClick={() => paginate(num)}
            className={currPage === num && num !== "..." ? "active" : ""}
            disabled={num === "..."}
          >
            {num}
          </button>
        );
      })}

      <button
        disabled={currPage === totalPage}
        onClick={() => paginate(currPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
