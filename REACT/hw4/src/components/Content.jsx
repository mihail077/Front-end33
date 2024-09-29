import React from "react";

class Content extends React.Component {

    render () {
      return (
      <div>
        3. Створити комаоненту Content і розмістити її в App.
        Всередині компоненти Content створити та викликати компоненту MyEvents та в якій у довільному порядку використати події:
        onClick, onMouseDown, onMouseUp, onMouseMove, onCut, onCopy, onMouseWheel
        <h3>компонента Content</h3>
        <MyEvents/>
        </div>
      )
    }
  }

  class MyEvents extends React.Component {

    click = () => {
      console.log("click");
    };

    mouseDown = () => {
      console.log("mouse down");
    };
  
    mouseUp = () => {
      console.log("mouse up");
    };
  
    mouseMove = () => {
      console.log("mouse move");
    };

    cut = () => {
      console.log("text cut");
    };
  
    copy = () => {
      console.log("text copy");
    };

    mouseWheel = () => {
      console.log("mouse wheel");
    };

    render() {
      return (
      <div onWheel={this.mouseWheel}>
        <h4>компонента MyEvents</h4>
        <button onClick={this.click}>click</button>
        <div className="xxx"  onMouseDown={this.mouseDown}
              onMouseUp={this.mouseUp}
              onMouseMove={this.mouseMove}
          ></div>
        <p onCopy={this.copy}
           onCut={this.cut}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Amet quae harum, nostrum illum placeat dolore facere vel ad fugit magnam nulla et maxime?
            Quam nobis ipsum dolorem reprehenderit illum repellendus?</p>
        
      </div>
      )
    }
  }
  export default Content