import s from "./Paginator.module.css"
import React from "react";
import { useState } from 'react';

type Props = {
    totalItemCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    portionSize?: number
}

const Paginator: React.FC<Props> = ({ totalItemCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalItemCount / pageSize)

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize
    let rightPortionPageNumber = portionNumber * portionSize

    let pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }


    return (
        <div>
            {leftPortionPageNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span key={p} onClick={() => { onPageChanged(p) }} className={currentPage === p && s.selectedPage}>{p}</span>
                })}
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
        </div>)

}

export default Paginator;