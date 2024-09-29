import React from 'react'
import './App.css';
import './HomeworkPage.css'

function App() {

  function HomeworkPage() {

    function Header(props) {
      return <div className='header'>header component,{props.object}</div> 
    }
    
    function Sidebar(props) {
      return <div className='sidebar'>sidebar component, {props.object}</div>
    }

    function Content() {

      function Count() {

        const [count, setNewCount] = React.useState(0)

        const add = () => {
          setNewCount(count+1)
        }
        const min = () => {
          setNewCount(count-1)
        }
        return (
          <div>count component
            <br/>
            <button onClick={add}>plus</button>
            <b> {count} </b>
            <button onClick={min}>minus</button>
          </div>
        )
      }

      const contentObject = {
        title: 'Hello',
        describe: 'This is description'
      }
      return (
      <div className='content'>content component
        <hr/>
        <Count/>
        <hr/>
        <h1>{contentObject.title}</h1>
        <p>{contentObject.describe}</p>
      </div>
      )
    }

    function Footer(props) {
      return <div className='footer'>footer component, {props.object}</div>
    }

    const object1 = <div className="object">Object 1</div>;
    const object2 = <div className="object">Object 2</div>;
    const object3 = <div className="object">Object 3</div>;

    return (
    <div className='homeworkPage'>
      HomeworkPage
      <Header object = {object1}/>
      <Sidebar object = {object2}/>
      <Content/>
      <Footer object = {object3}/>
    </div> 
    )
  }
  return (
    <div className="App">
      <HomeworkPage />
    </div>
  );
}
export default App;
