import { Link } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux'
import { fetchComments } from '../../store/actions/comments.action'
import { useEffect } from "react"

export function Comments() {

  const dispatch = useDispatch()
  const comments = useSelector(store => store.comments)

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

    return (
      <div>
        <h2>comments</h2>
        <div>
          {
            !!comments.length && comments.map((comment, ind) => (
              <div key={ind}>
                <b>{comment.id}</b> {comment.name} ,{comment.body}
              </div>
            ))
          }
        </div>
        <br />

        <Link to='/'>
        back
        </Link>
      </div>
    )
}