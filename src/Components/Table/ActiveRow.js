import React from 'react'

export default function ActiveRow(props){
    const {data, index} = props;
    const dataRow = data[index];
    console.log(dataRow);
    if(!dataRow){
        return (<h5>Выберете пользователя</h5>)
    }        
    else{
        return (
            <div className ="active-row col-6 offset-1">
                <div>Выбран пользователь: <b>{dataRow.firstName + dataRow
                .lastName}</b></div>
                <div>Описание: <textarea readOnly value = {dataRow.description} rows="3" className = "active-row__textarea form-control" /></div>
                <div>Адрес проживания: <b>{dataRow.address.streetAddress}</b></div>
                <div>Город: <b>{dataRow.address.city}</b></div>
                <div>Провинция: <b>{dataRow.address.state}</b></div>
                <div>Индекс: <b>{dataRow.address.zip}</b></div>
            </div>
        );
    }    
}