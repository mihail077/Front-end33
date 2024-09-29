
import { useDispatch, useSelector } from "react-redux"
import { SET_DIVIDE } from "../store/actions/counter";

export function Divide () {

    const selector = useSelector(state => state.countReducer)

    const dispatch = useDispatch()
    
    return(
        <>
        <button onClick={() => dispatch(SET_DIVIDE())}>
            Divide/2
        </button>
        </>
        
    )
}