import Link from "next/link";
import React from "react";

const Pagination = ({ currentPage, prevHref, nextHref }) => {
  // const {currentpage , prevhref, nexthref} = currentPage;
  // console.log("Pagination", currentPage);
  // console.log("Pagination", prevHref);
  // console.log("Pagination", nextHref);
  return (
    <div>
      <div className="join flex gap-2">
        <Link href={prevHref}>
          <button
            className={`${
              Number(currentPage) === 1 ? "disabled" : ""
            } join-item btn text-2xl`}
          >
            -
          </button>
        </Link>
        <button className="join-item btn text-2xl">Page {currentPage}</button>
        <Link href={nextHref}>
          <button
            className={`${
              Number(currentPage) === 2489 ? "disabled" : ""
            }join-item btn text-2xl`}
          >
          +
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
