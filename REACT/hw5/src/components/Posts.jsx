import { Component } from 'react'
import { POSTS } from '../constants'

export class Posts extends Component {

  state = {
    POSTS: POSTS.map(post => ({...post,isShow:false}))
  }

  showDetails(id) {
    const {POSTS} = this.state

    const post = POSTS.find(post => post.id === id)
    post.isShow = !post.isShow

    const indexOf = POSTS.findIndex(post =>post.id === id)
    POSTS.splice(indexOf,1,post)
    this.setState({POSTS:POSTS})
  }

  render() {

    const {POSTS} = this.state

    return (<div className='posts'>
      <h3>posts</h3>
      {
      POSTS.map((el,ind) => (
          <div key={ind} className='us'>
            id:{el.id}; title:{el.title};
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