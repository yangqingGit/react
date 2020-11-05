/**
 * Created by YIZHI-SHIXI on 2019/4/2.
 */
import React, {Component} from "react"
class todoItem extends Component{
    constructor(props){
        super(props)
    }
    render() {
        //jsx语法
        return (
          <li onClick={this.deleteItem.bind(this)}>{this.props.content}</li>
    );
    }
    deleteItem(){
        this.props.delete(this.props.index)
    }
}
export default todoItem