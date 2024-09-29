import { Component } from "react";
import {POSTS} from '../constans/index'


export class Posts extends Component {

    render() {
        return (
            <div>     
                <h3>компонента Posts</h3>            
                    {
                        POSTS.map(el => {
                        return(
                        <div key={el.id} style={{padding:'15px',border:'1px solid blue',margin:'15px'}}>
                        {el.id} - {el.title} 
                        </div>
                        )
                        })    
                    }
            </div>
        )
    }
}
export default Posts
