import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import ActionCreators from "../store/action-creator/"

//! поєднуємо екшн креатори і dispatch
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}
