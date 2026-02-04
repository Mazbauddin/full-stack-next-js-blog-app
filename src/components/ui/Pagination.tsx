import React from "react";
import { FaArrowLeft } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  return (
    <div className="mt-12" aria-label="Pagination">
      <ul className="flex justify-start space-x-2 items-center text-gray-500">
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className={`px-4 py-2 rounded-md flex items-center font-semibold transition-colors ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:text-primary cursor-pointer"}`}
          >
            <FaArrowLeft size={14} />
          </button>
        </li>

        {}
      </ul>
    </div>
  );
};

export default Pagination;
