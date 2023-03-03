import React from "react";
import style from './Pagination.module.css'


const Pagination = ({recipesPerPage, allRecipes, paginado, currentPage, setCurrentPage, isActive, setIsActive}) => {
    const pageNumbers = []; 

    for (let i = 1; i <=Math.ceil(allRecipes/recipesPerPage); i++) {
        pageNumbers.push(i)
    }

    const nextPage = () => {
        setCurrentPage(currentPage + 1)
        setIsActive(currentPage + 1)
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
        setIsActive(currentPage - 1)
    }

   

    return (
        <div className={style.container}>
                {currentPage > 1 ? <div className={style.arrowLeft} onClick={prevPage}></div> : null}
                {pageNumbers && pageNumbers.map((page,index) => {
                    return (
                       <button value={page}  className={isActive === page ? style.active : style.page}  key={index} onClick={() => paginado(page)}>{page}</button>
                    )
                })}
                {currentPage < pageNumbers.length ? <div className={style.arrowRight} onClick={nextPage}></div> : null}
        </div>
    )
};


export default Pagination;