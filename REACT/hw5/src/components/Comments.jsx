import { Component } from 'react'
import { COMMENTS } from '../constants'

export class Comments extends Component {

  state = {
    COMMENTS: COMMENTS.map(comments => ({...comments,isShow:false}))
  }

  showDetails(id) {
    const {COMMENTS} = this.state

    const comments = COMMENTS.find(comments => comments.id === id)
    comments.isShow = !comments.isShow

    const indexOf = COMMENTS.findIndex(comments =>comments.id === id)
    COMMENTS.splice(indexOf,1,comments)
    this.setState({COMMENTS:COMMENTS})
  }

  render() {

    const {COMMENTS} = this.state

    return (<div className='comment'>
      <h3>comments</h3>
      {
        COMMENTS.map((el,ind) => (
            <div key={ind} className='us'>
              id:{el.id}; email:{el.email};
              <div>
              <button onClick={() => this.showDetails(el.id)}>{el.isShow?'hide details':'show details'}</button>
            </div>
            {
              el.isShow &&
              <div>
              {el.body}
            </div>
            }
            </div>
        ))
      }
      </div>
    )  
  }
}

