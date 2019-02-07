import React, { Component } from 'react';
import DataTable from './Table/DataTable';
import ActiveRow from './Table/ActiveRow';
import Filter from './Table/Filter'
import Paginations from './Table/Paginations';

export default class DataPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
          data: [],
          activeRowIndex: null,
          filterValue: '',
          currentPage: 1,
          rowPerPage:  50
        }
        this.sorted = {id: true, firstName: true, lastName: true, email: true, phone: true};
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            data: nextProps.data
        })
    }
    sort(type){
        const isSorted = this.sorted[type]
        let direction = isSorted ? 1 : -1;
        const dataSorted = this.state.data.slice().sort((a,b)=>{
            const [valA, valB]  = type === "id" ? [a[type], b[type]] : [a[type].toLowerCase(), b[type].toLowerCase()];
            return valA > valB ? direction: direction * -1; 
        })
        this.sorted[type] = !isSorted;
        this.setState({
          data: dataSorted,
          activeRowIndex: null
        })
      }
    updateData(config){
    this.setState(config);
    }
    render(){
        if(this.props.data.length === 0 && !this.props.loading){
            return (<h5 className = "data-panel__message">Данные будут представлены ниже</h5>)
        }
        else if(this.props.data.length === 0 || this.props.loading){
            return (<h5 className = "data-panel__message">Идет загрузка данных...</h5>)
        }
        else {
            return(
                <div className = "data-panel">
                    <Filter
                        data = {this.props.data}
                        filterValue = {this.state.filterValue}
                        update ={this.updateData.bind(this)}
                    ></Filter>
                    <DataTable
                        data = {this.state.data}
                        update = {this.updateData.bind(this)}
                        sort = {this.sort.bind(this)}
                        currentPage = {this.state.currentPage}
                        rowPerPage = {this.state.rowPerPage}
                        activeIndex = {this.state.activeRowIndex}
                    >
                    </DataTable>
                    <Paginations
                        count = {Math.ceil(this.state.data.length/this.state.rowPerPage)}
                        update ={this.updateData.bind(this)}
                        currentPage = {this.state.currentPage}
                    ></Paginations>
                    <ActiveRow data = {this.state.data} index = {this.state.activeRowIndex}></ActiveRow>
                </div>
            )
        }        
    }
}