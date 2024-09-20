import { Link } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import { getAsyncUsers } from "../../store/slice/users.slice"

import { useEffect } from "react"

export function Users() {

  const dispatch = useDispatch()
  const users = useSelector(store => store.users)

  useEffect(() => {
    dispatch(getAsyncUsers());
  }, [dispatch]);

    return (
      <div>
        <h2>users</h2>
        <div>
          {
            !!users.length && users.map((user, ind) => (
              <div key={ind}>
                <b>{user.id}</b> {user.name} ,{user.email}
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