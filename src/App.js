import React, { Component } from 'react';
import LoadPanel from './Components/LoadPanel';
import DataPanel from './Components/DataPanel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: null
    }
  }
  loadData(url) {
    this.setState({loading: true})
    fetch(url)
      .then(function (response) {
        if (response.status !== 200) {
          return Promise.reject(new Error(response.statusText))
        }
        return Promise.resolve(response)
      })
      .then(response => response.json())
      .then(data => this.setState({ data: data, loading: false }))
      .catch(error =>  this.setState({ error: error}))
  }
  
  render() {
    if(this.state.error){
      return (
        <div className = "container">
          <div className="row justify-content-center ">
            <h3>Произошла ошибка при загрузке данных</h3>
            <h5 className = "text-danger">{this.state.error}</h5>
          </div>          
        </div>
      ) 
    }
    return (
      <div className="App">
        <LoadPanel loadData = {this.loadData.bind(this)}></LoadPanel>
        <DataPanel data = {this.state.data} loading = {this.state.loading}></DataPanel>
      </div>
    );
  }
}

export default App;
