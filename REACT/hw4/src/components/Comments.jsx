import { Component } from "react";
import {COMMENTS} from '../constans/index'


export class Comments extends Component {

    render() {
        return (
            <div>   
                <h3>компонента Comments</h3>              
                    {
                        COMMENTS.map(el => {
                        return(
                        <div key={el.id} style={{padding:'15px',border:'2px solid yellow',margin:'15px'}}>
                        {el.id} - {el.name} - {el.email}
                        </div>
                        )
                        })    
                    }
            </div>
        )
    }
}
export default Comments
