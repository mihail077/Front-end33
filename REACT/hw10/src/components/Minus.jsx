
import { useDispatch, useSelector } from "react-redux"
import { SET_MINUS } from "../store/actions/counter";

export function Minus () {

    const selector = useSelector(state => state.countReducer)
    
    const dispatch = useDispatch()
    
    return(
        <>
        <button onClick={() => dispatch(SET_MINUS())}>
            Minus
        </button>
        </>
        
    )
}