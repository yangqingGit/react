/**
 * Created by YIZHI-SHIXI on 2019/5/31.
 */
import React,{Component} from "react"
export default class App extends Component{

    constructor(props){
        super(props)
        this.myref=React.createRef();
        this.state = {
            count:0
        }
    }
    increament = ()=>{
        //1 得到选择的增加数量
        const number = this.myref.current.value * 1;

        //2 得到原本的count
        // const count = this.state.count;
         //3 更新
        this.props.store.dispatch({type:"INCREMENT",data:number})
    }

    decreament = ()=>{
        //1 得到选择的增加数量
        const number = this.myref.current.value * 1;
        //2 得到原本的count
        this.props.store.dispatch({type:"DECREMENT",data:number})
    }
    render(){
        const count = this.props.store.getState();
        return(
         <div>
             <p>click{count} times</p>
             <select name="" id="" ref={this.myref}>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
             </select>&nbsp;
             <button onClick={this.increament}>+</button>
             <button onClick={this.decreament}>-</button>
         </div>
        )
    }
}