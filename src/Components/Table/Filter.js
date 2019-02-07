import React from 'react'

export default function Filter(props){
    const {data, filterValue, update} = props
    const handleChange =(e)=>{
        const value = e.target.value;
        update({filterValue: value})
    }
    const handleSubmit = () =>{
        const filterData = data.filter(row => {
            return row.firstName.toLowerCase().includes(filterValue.toLowerCase()) || row.lastName.toLowerCase().includes(filterValue.toLowerCase()) || row.email.toLowerCase().includes(filterValue.toLowerCase()) || row.phone.toLowerCase().includes(filterValue.toLowerCase())
        })
        update({
            data: filterData,
            activeRowIndex: null
        }) 
    }
    return(
        <div className ="filter">
            <input
                type='text'
                placeholder='поиск...'
                value={filterValue}
                onChange = {handleChange}
                className="filter__input"
            />
            <button className="filter__button" onClick={handleSubmit}>Найти</button>
        </div>
    )
}