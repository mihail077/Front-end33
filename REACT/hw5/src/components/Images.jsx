import { Component } from 'react'

export class Images extends Component {

  state = {
    isShowButton: true,
  }
  showOrHideButton = () => {
    this.setState({isShowButton:!this.state.isShowButton})    
  }

  render() {
    return (<div className='images'>
      <h3>images</h3>
      {
        this.state.isShowButton 
        ?<button onClick={this.showOrHideButton} className='green'>show button</button>  
        :<button onClick={this.showOrHideButton} className='red'>hide button</button>
      } 
      </div>
    )  
  }
}

