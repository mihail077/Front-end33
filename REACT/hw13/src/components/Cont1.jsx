import { Component } from "react";
import { myContext } from "../App";

 export class Cont1 extends Component {

    render () {
        return (
            <>
                <h3>cont1 component</h3>

                <div>
                  <myContext.Consumer>
                    {(value) => <div>count: {value}</div>}
                  </myContext.Consumer>
                </div>
            </>
        )
    }
    
}