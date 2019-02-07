import React, {Component} from 'react'

export default class HeaderColum extends Component{
    constructor(props){
        super(props);
        this.state = {
            sortASC: false
        }
    }
    isSort = function(){
        return  this.state.sortASC ? "asc cell__header" : "cell__header"
    }
    render(){
        const {title, sort} = this.props;
        
        return(
            <th className = "data-table__header">
                <p
                    onClick={() => {
                        this.setState({sortASC: !this.state.sortASC});
                        sort(title);
                    }}
                    className = {this.isSort.call(this)}>{title}</p>
            </th>
        )  
    }
    
}