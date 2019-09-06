/**
 * Created by YIZHI-SHIXI on 2019/5/29.
 */
import React,{Component} from "react"
import axios from "axios"
export default class MostStar extends Component{


    state = {
        repoName:"",
        repoUrl:""
    }
    componentDidMount(){
        const url="https://api.github.com/search/repositories?q=r&sort=stars"
        axios.get(url).then(res=>{
            const result = res.data;
            console.log(result);
        })
    }
    render(){
        const {repoName , repoUrl} = this.state;
        if(!repoName){
            return <h2>loading</h2>
        }
      else{
            return <h2>Most star repo is <a href={repoUrl}>{repoName}</a></h2>
        }
    }
}