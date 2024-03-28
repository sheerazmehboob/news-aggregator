import React from "react";
import back from "../../assets/images/back.png";
import next from "../../assets/images/next.png";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pagesToShow = 10;
  let startIndex = Math.max(1, currentPage - 5);
  let endIndex = Math.min(startIndex + pagesToShow - 1, totalPages);

  if (endIndex - startIndex + 1 < pagesToShow) {
    startIndex = Math.max(1, endIndex - pagesToShow + 1);
  }

  const pages = Array.from({ length: endIndex - startIndex + 1 }, (_, index) => startIndex + index);
  const showPrevButton = startIndex > 1;
  const showNextButton = endIndex < totalPages;

  return (
    <div className="w-full flex-wrap flex justify-center p-3 gap-2">
      {showPrevButton && (
        <button onClick={() => onPageChange(startIndex - 1)}>
          <img src={back} alt="" height={30} width={40}/>
        </button>
      )}
      {pages.map((page) => (
        <button
          className="border px-3 rounded-md hover:bg-purple-900 "
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}
      {showNextButton && (
        <button onClick={() => onPageChange(endIndex + 1)}>
          <img src={next} alt="" height={30} width={40}/>
        </button>
      )}
    </div>
  );
};

export default Pagination;
