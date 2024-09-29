
import { useDispatch, useSelector } from "react-redux"
import { SET_STO } from "../store/actions/counter";

export function Sto () {

    const selector = useSelector(state => state.countReducer)
    
    const dispatch = useDispatch()
    
    return(
        <>
        <button onClick={() => dispatch(SET_STO())}>
            Sto
        </button>
        </>
        
    )
}