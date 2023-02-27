import React from "react";
import style from './Pagination.module.css'

const Pagination = ({recipesPerPage, allRecipes, paginado}) => {
    const pageNumbers = []; 

    for (let i = 1; i <=Math.ceil(allRecipes/recipesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={style.container}>
                {pageNumbers && pageNumbers.map((page,index) => {
                    return (
                       <button className={style.page} key={index} onClick={() => paginado(page)}>{page}</button>
                    )
                })}
        </div>
    )
};


export default Pagination;