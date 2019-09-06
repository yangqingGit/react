import React, { Component, Fragment } from 'react';
import TodoItem from "./todoItem";

//定义一个react组件
class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[],
      inputValue:''
    }
      this.handlerInput = this.handlerInput.bind(this);
      this.handlerBtn = this.handlerBtn.bind(this);
      this.itemClick = this.itemClick.bind(this);
  }
    handlerInput(e){
     this.setState({
         inputValue:e.target.value
     })
    }
  handlerBtn(){
    this.setState({
    list:[...this.state.list,this.state.inputValue],
        inputValue:''
    })
  }
  itemClick(index){
      console.log(index)
      const list=this.state.list;
      list.splice(index,1);
      var kkk=1;
      this.setState({
          list:list
      })
  }
    getTodoItem(){
        return(
            this.state.list.map((item,index)=> {
                return(
                <TodoItem
                key={index}
                index={index}
                content={item}
                delete={this.itemClick}
                />)
                // return <li key={index} onClick={this.itemClick.bind(this,index)}>{item}</li>
            })
        )
    }
    //父组件通过属性的形式向子组件传递参数
    //子组件通过props接受父组件的参数
  render() {
    //jsx语法
    return (
        <Fragment>
          < div >
          < input value={this.state.inputValue} onChange={this.handlerInput}/>
          < button onClick={this.handlerBtn} className="red-btn">add</ button >
          </ div >
           < ul >
            {this.getTodoItem()}
           </ ul >
        </Fragment>
    );
  }
}

export default TodoList; //导出组件
