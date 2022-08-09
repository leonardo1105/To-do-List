import React, {Component} from 'react';
import styled,{createGlobalStyle} from 'styled-components';

const GlobalStyle=createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }`
const Lista=styled.div`
  background:#836FFF;
  margin:0 auto;
  height:100vh;

  .mainContainer{
    /* background:red; */
    width:60%;
    margin:0 auto;
    text-align:center;
  }
  .taskContainer{
    width:30rem;
    display:flex;
    justify-content:space-between;
    font-family:'Roboto';
    font-size: 1.5rem;
    margin:0 auto;
    border-bottom:2px solid white;
    color:white;
    font-weight:700;
  }
  .taskContainer button{
    width:30px;
    height:30px;
    background:#FF6347;
    border-radius: 20px;
    border:none;
  }
  `

export default class App extends Component{
  state={
    tarefa:'abobora',
    listaTarefas:[]
  }
  handleChange=(event)=>{
    this.setState({tarefa:event.target.value})
  }
  add=()=>{
    if(this.state.tarefa.trim() !== ''){
      this.setState(
        {
          listaTarefas:this.state.listaTarefas.concat({tarefa:this.state.tarefa,id:Date.now()}),
        tarefa:''}
        )
    }
  }
  remover=(id)=>{
    this.setState({
      listaTarefas:this.state.listaTarefas.filter((item) => { return item.id !== id})
    })
  }
  handleChange2=(e)=>{
    if(e.key === 'Enter'){
      if(this.state.tarefa.trim() !== ''){
        this.setState(
          {
            listaTarefas:this.state.listaTarefas.concat({tarefa:this.state.tarefa,id:Date.now()}),
          tarefa:''}
          )
      }
    }
  }
  render(){
    return(
      <Lista>
        <GlobalStyle/>
        <div className='mainContainer'>
          <h1>To do List</h1>
          <input onKeyDown={this.handleChange2} onChange={this.handleChange} value={this.state.tarefa} />
          <button onClick={this.add}>Adicionar</button>
          {this.state.listaTarefas.map((item)=>(
            <div className='taskContainer'>
              <input id='tarefa' type='checkbox'/>
              <label for='tarefa'>{item.tarefa}</label>
              <button onClick={()=> this.remover(item.id)}>X</button>
            </div>
          ))}
          </div>
      </Lista>
    )
  }
}