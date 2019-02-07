import React from 'react';
import Rows from './Rows';
import HeaderColum from './HeaderColum'


export default function DataTable(props){
    const {data, update, sort, currentPage, rowPerPage, activeIndex} = props;
    if(!data) {return (<p>Loading...</p>);}
    const titleColums = ['id', 'firstName', 'lastName', 'email', 'phone'];
    const indexOfLastRow = currentPage * rowPerPage;
    const indexOfFirstRow = indexOfLastRow - rowPerPage;
    const showDataTable = data.slice(indexOfFirstRow, indexOfLastRow);
    const rows = showDataTable.map((row, index) => {
        return <Rows row = {row} update={update} index = {index} activeIndex = {activeIndex} key = {row.id + row.lastName}></Rows>
    })
    const tableHeader = titleColums.map(title => {
        return <HeaderColum title = {title} sort = {sort} key = {title}></HeaderColum>
    })
    return(
        <table className = "table table-bordered col-10 offset-1">
            <thead>
                <tr>
                    {tableHeader}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}