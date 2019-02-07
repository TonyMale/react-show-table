
import React from 'react'

export default function Paginations(props){
    const {count, update, currentPage} = props;
    const pageNumbers = [];
    for(let i=1; i <= count; i++){
        pageNumbers.push(i)
    }
    const isPrev = function(param){
        return "page-item" + (param ? " disabled" : "")
    }
    const isActive = function(param){
        return "page-item" + (param === currentPage ? " active" : "")
    }
    const renderPageNumber = pageNumbers.map(number =>{
        return <li 
                    className = {isActive(number)}
                    key={number}
                    id={number}
                    onClick = {()=> update({currentPage: number})}
                >
                    <a className="page-link" href="##">{number}</a>
                </li>
    })
    return(
        <ul className = "pagination my-pagination">
            <li className = {isPrev(currentPage === 1)} onClick = {()=> {
                if(currentPage > 1){
                    let countPage = currentPage - 1;                   
                    update({currentPage: countPage});
                    
                }}}
            >
                <a className="page-link" href="##">Previous</a>            
            </li>
            {renderPageNumber}
            <li className = {isPrev(currentPage === count)} onClick = {()=> {
                if(currentPage < count){
                    let countPage = currentPage + 1;
                    update({currentPage: countPage});                    
                }}}
            >
                <a className="page-link" href="##">Next</a>            
            </li>
        </ul>
        
    )
}