import { Link } from "react-router-dom"
import { useDispatch, useSelector} from 'react-redux'
import { getAsyncPosts } from "../../store/slice/posts.slice"
import { useEffect } from "react"

export function Posts() {

  const dispatch = useDispatch()
  const posts = useSelector(store => store.posts)

  useEffect(() => {
    dispatch(getAsyncPosts());
  }, [dispatch]);

    return (
      <div>
        <h2>posts</h2>
        <div>
          {
            !!posts.length && posts.map((post, ind) => (
              <div key={ind}>
                <b>{post.id}</b> {post.body}
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