
import { useDispatch, useSelector } from "react-redux"
import { SET_PLUS10 } from "../store/actions/counter";

export function Plus10 () {

    const selector = useSelector(state => state.countReducer)
    
    const dispatch = useDispatch()
    
    return(
        <>
        <button onClick={() => dispatch(SET_PLUS10())}>
            Plus10
        </button>
        </>
        
    )
}