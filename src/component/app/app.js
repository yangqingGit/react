/**
 * Created by YIZHI-SHIXI on 2019/5/28.
 */

import React,{Component} from "react"
import CommentAdd from "../comment-add/comment-add"
import CommentList from "../comment-list/comment-list"
export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            comments:[
                {username:"tom",content:"good"},
                {username:"jack",content:"nono"},
            ]
        }
    }
    addComment = (comment)=>{
        const {comments} = this.state;
        comments.unshift(comment);
        this.setState({comments})
    }
    deleteComment = (index) =>{
       const {comments} = this.state;
        comments.splice(index,1);
        this.setState({comments})
    }
    render(){
        const {comments} = this.state;
        return( 
            <div className="container">
                 <p>请发表对React的评论</p>
                <CommentAdd addComment={this.addComment} />
                <CommentList comments={comments} deleteComment={this.deleteComment}/>
            </div>
        )
    }
}