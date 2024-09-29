
import { useDispatch, useSelector } from "react-redux"
import { SET_MINUS10 } from "../store/actions/counter";

export function Minus10 () {

    const selector = useSelector(state => state.countReducer)
    
    const dispatch = useDispatch()
    
    return(
        <>
        <button onClick={() => dispatch(SET_MINUS10())}>
            Minus10
        </button>
        </>
        
    )
}