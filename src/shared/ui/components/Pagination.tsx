import { useState } from "react";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: Props) => {
  const PAGE_WINDOW = 5;

  const [startPage, setStartPage] = useState(1);

  const endPage = Math.min(startPage + PAGE_WINDOW - 1, totalPages);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  const handlePrev = () => {
    if (startPage > 1) {
      setStartPage(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (endPage < totalPages) {
      setStartPage(prev => prev + 1);
    }
  };

  return (
    <div className={className} style={{ display: "flex", gap: 8 }}>
      <button onClick={handlePrev} disabled={startPage === 1}>
        {"<"}
      </button>

      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          style={{
            fontWeight: page === currentPage ? "bold" : "normal",
            padding: "4px 8px",
          }}
        >
          {page}
        </button>
      ))}

      <button onClick={handleNext} disabled={endPage === totalPages}>
        {">"}
      </button>
    </div>
  );
};
