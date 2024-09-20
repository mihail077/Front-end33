import { Link } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux'
import { getAsyncComments } from "../../store/slice/comments.slice"
import { useEffect } from "react"

export function Comments() {

  const dispatch = useDispatch()
  const comments = useSelector(store => store.comments)

  useEffect(() => {
    dispatch(getAsyncComments());
  }, [dispatch]);

    return (
      <div>
        <h2>comments</h2>
        <div>
          {
            !!comments.length && comments.map((comment, ind) => (
              <div key={ind}>
                <b>{comment.id}</b> {comment.body}
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