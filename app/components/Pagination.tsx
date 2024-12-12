import React from 'react';
import { Button } from '@/components/ui/button'

type PaginationProps = {
  questionsPerPage: number;
  totalQuestions: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
};

export default function Pagination({ questionsPerPage, totalQuestions, paginate, currentPage }: PaginationProps) {
  const pageNumbers = []
  const totalPages = Math.ceil(totalQuestions / questionsPerPage)

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  const visiblePageNumbers = pageNumbers.filter(number => 
    number === 1 || 
    number === totalPages || 
    (number >= currentPage - 1 && number <= currentPage + 1)
  )

  return (
    <nav className="flex justify-center items-center mt-8 space-x-2">
      <Button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        variant="outline"
        className="px-4 py-2"
      >
        Prev
      </Button>
      {visiblePageNumbers.map((number, index, array) => (
        <React.Fragment key={number}>
          {index > 0 && array[index - 1] !== number - 1 && (
            <span className="px-2">...</span>
          )}
          <Button
            onClick={() => paginate(number)}
            variant={currentPage === number ? 'default' : 'outline'}
            className="px-4 py-2"
          >
            {number}
          </Button>
        </React.Fragment>
      ))}
      <Button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="outline"
        className="px-4 py-2"
      >
        Next
      </Button>
    </nav>
  )
}

