import { Component } from "react";
import '../HomeworkPage.css'


export class HomeworkPage extends Component {

    

    render() {
        const headerData = {
            name: "Header",
            info: "This is the header info"
          };
      
          const sidebarData = {
            name: "Sidebar",
            info: "This is the sidebar info"
          };
      
          const footerData = {
            name: "Footer",
            info: "This is the footer info"
          };
        return (
            <div className="homeworkPage"> 
                1. Використовуючи лише класові компоненти повторити вест код
                згідно дз з попередної лекції.
         
                <h3>HomeworkPage</h3>
                <Header data={headerData} />
                <Sidebar data={sidebarData} />
                <Content/>
                <Footer data={footerData} />
                    
            </div>
        )
    }
}

export class Header extends Component {
    render() {
        return <div className="header">
            <h4>{this.props.data.name}</h4>
            <p>{this.props.data.info}</p>
        </div>
    }
}

export class Sidebar extends Component {
    render() {
        return <div className="sidebar">
            <h4>{this.props.data.name}</h4>
            <p>{this.props.data.info}</p>
        </div>
    }
}

export class Content extends Component {
    render() {
        const contentData ={
            title: 'Content',
            describe: 'This is the description'
        }
        return <div className="content">
            <h1>{contentData.title}</h1>
            <p>{contentData.describe}</p>
            <Count/>
        </div>
    }
}
export class Count extends Component {
    state = {
        counter:0
    }

    add = () => {
        this.setState({counter:++this.state.counter})
    }

    min = () => {
        this.setState({counter:--this.state.counter})
    }

    render() {
        return (<div>
                <button onClick={this.add}>PLUS</button>
                count {this.state.counter}
                <button onClick={this.min}>MINUS</button>
        </div>
        )
    }
}



export class Footer extends Component {
    render() {
        return <div className="footer">
            <h4>{this.props.data.name}</h4>
            <p>{this.props.data.info}</p>
        </div>
    }
}

export default HomeworkPage
