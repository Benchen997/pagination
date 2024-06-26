import React from 'react'
import "../App.css"

export default function PageNation({paginate, postsPerPage, currentPage, totalPosts}) {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='page-nation'>           
                {
                    pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <a onClick={() => paginate(number)} href="!#" 
                                className={`page-link 
                                ${ currentPage === number 
                                    ? "active-page" 
                                    : ""}`}>
                                {number}
                            </a>
                        </li>
                    ))
                }        
            </ul>
        </nav>
    )
}
