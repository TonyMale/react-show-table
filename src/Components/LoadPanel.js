import React from 'react'

export default function LoadPanel(props){
    const {loadData} = props;
    const LINK_BIG_DATA = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
    const LINK_SMALL_DATA = "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
    return(        
        <div className = 'load-panel'>
            <h3 className ="load-panel__title">Выберете загружаемый объем данных</h3>
            <div>
                <button type="button" onClick = {() => {loadData(LINK_SMALL_DATA)}} className="btn btn-primary load-panel__button">Маленький</button>
                <button type="button" onClick = {() => {loadData(LINK_BIG_DATA)}} className="btn btn-danger load-panel__button">Большой</button>
            </div>            
        </div>
    )
}