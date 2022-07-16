import s from "./Paginator.module.css"
import { useState } from 'react';


const Paginator = ({totalItemCount,pageSize,onPageChanged, currentPage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemCount / pageSize)

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber , setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1 ) * portionSize
    let rightPortionPageNumber = portionNumber * portionSize

    let pages = [];

    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }


    return( 
        <div>
            {leftPortionPageNumber > 1 && 
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
            {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map(p => {
                return <span onClick={() => { onPageChanged(p) }} className={currentPage === p && s.selectedPage}>{p}</span>
            })}
            { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button> }
        </div>)
        
}

export default Paginator;