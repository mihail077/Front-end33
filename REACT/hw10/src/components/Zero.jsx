
import { useDispatch, useSelector } from "react-redux"
import { SET_ZERO } from "../store/actions/counter";

export function Zero () {

    const selector = useSelector(state => state.countReducer)

    const dispatch = useDispatch()
    
    return(
        <>
        <button onClick={() => dispatch(SET_ZERO())}>
            Zero
        </button>
        </>
        
    )
}
  