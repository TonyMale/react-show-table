import React from 'react';

export default  function Rows(props){ 
        const {row, update, index, activeIndex} = props;
        const isActive = function (){
            return activeIndex == index ? "table-active" : ""
        }
        return(
            <tr className = {isActive()} onClick ={() => {update({activeRowIndex: index})}}>
                <td className='cell'>{row.id}</td>
                <td className='cell'>{row.firstName}</td>
                <td className='cell'>{row.lastName}</td>
                <td className='cell'>{row.email}</td>
                <td className='cell'>{row.phone}</td>
            </tr>
        )
}