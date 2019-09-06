/**
 * Created by YIZHI-SHIXI on 2019/5/28.
 */
import React,{Component} from "react"
import PropTypes from "prop-types"
export default class CommentList extends Component{

    //给组件内指定属性
   static propTypes = {
        comments:PropTypes.array.isRequired
    }
    deleteItem = (e) =>{
        const index= e.target.dataset.index
      console.log(e.target.dataset.index);
        this.props.deleteComment(index);
    }
    render(){
        const {comments} = this.props
        return(
            <div>
                <div className="reply-wrap">
                    <p>评论回复</p>
                    {
                        comments.map((item,index) =>
                            <div className="comment-item"key={index}>
                            <p>{item.username}说:</p>
                            <p>{item.content}</p>
                            <button onClick={this.deleteItem} data-index={index}>删除</button>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}
