import { Component } from "react";
import { myContext } from "../App";

export class Cont extends Component {

    render () {
        return (
            <>
              <h3>cont component</h3> 

                <div>
                  <myContext.Consumer>
                    {(value) => <div>count: {value}</div>}
                  </myContext.Consumer>
                </div>
            </>
        )
    }
}