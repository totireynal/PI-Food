import React from "react";

const Pagination = ({recipesPerPage, allRecipes, paginado}) => {
    const pageNumbers = []; 

    for (let i = 1; i <=Math.ceil(allRecipes/recipesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
                {pageNumbers && pageNumbers.map((page,index) => {
                    return (
                       <button key={index} onClick={() => paginado(page)}>{page}</button>
                    )
                })}
        </div>
    )
};


export default Pagination;