
import { useDispatch, useSelector } from "react-redux"
import { SET_PLUS } from "../store/actions/counter";

export function Plus () {

    const selector = useSelector(state => state.countReducer)
    
    const dispatch = useDispatch()
    
    return(
        <>
        <button onClick={() => dispatch(SET_PLUS())}>
            Plus
        </button>
        </>
        
    )
}