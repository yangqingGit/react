/**
 * Created by YIZHI-SHIXI on 2019/5/28.
 */
import React,{Component} from "react"
import './add.css'
export default class CommentAdd extends Component{
    state = {
        username:"",
        content:""
    }

    handleChange = (event)=>{
        const  username = event.target.value;
        this.setState({
           username
        })
    }

    handleChange2 = (event)=>{
        const  content = event.target.value;
        this.setState({
           content
       })
    }

    handleSubmit = ()=>{
        const comment = this.state;
        this.props.addComment(comment);
        this.setState(
            {
                username: "",
                content: ""
            }
        )
    }
    render(){
        return(
            <div>
                <div className="write-wrap">
                    <p>用户名</p>
                    <input type="text"placeholder="用户名"value={this.state.username} onChange={this.handleChange}/>
                    <p>评论内容</p>
                    <textarea placeholder="评论内容"value={this.state.content} onChange={this.handleChange2}/>
                    <br/>
                    <br/>
                    <button onClick={this.handleSubmit}>提交</button>
                </div>
            </div>
        )
    }
}