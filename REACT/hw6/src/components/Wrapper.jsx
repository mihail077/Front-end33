import { Component } from "react";
import { Navbar } from "./Navbar";
import { Content1 } from "./Content1";

export class Wrapper extends Component {

    state = {
        showNavbar: true,
        showContent1: true,
    }

    render() {
        const {showNavbar, showContent1} = this.state
        return (
            <div className="wrap">
                <span>wrapper component</span>
                <br/>
                <button onClick={() => this.setState({showNavbar: !showNavbar})}>
                 {showNavbar ? 'hide navbar' : 'show navbar'}   
                </button>
                {
                  showNavbar &&
                  <Navbar/> 
                }
                <br/>
                <button onClick={() => this.setState({showContent1: !showContent1})}>
                 {showContent1 ? 'hide content1' : 'show content1'}   
                </button>
                {
                  showContent1 &&
                  <Content1/>
                }
            </div>
        )
    }
}
