import { Component} from "react";
import {createPortal} from 'react-dom'

 export class Portal extends Component {

    data = createPortal('my first portal',document.getElementById('portal'))

    render () {
        return (
            <>
                <h3>portal component</h3>
                {/* {this.data} */}
                {createPortal(<div> MY FIRST PORTAL </div> ,document.getElementById('portal'))}
            </>
        )
    }
}