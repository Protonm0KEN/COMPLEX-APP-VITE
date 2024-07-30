import { useDispatch, useSelector } from "react-redux"
import "./ui/styles.scss"
import { setTodoContent, setTodoName } from "../../redux/slices/todoSlice/todoSlice"
import { RootState } from "../../../../redux/store/store"
const CreateTodoForm = () => {

    const { todoName, todoContent } = useSelector((state: RootState) => state.todoAppReducer.todo)
    const dispatch = useDispatch()
    const onClickAddNewTodoToTodoList = () => {

    }
    return (
        <form onSubmit={(e) => e.preventDefault()} className="createTodoForm">
            <div className="createTodoForm_fields">
                <input value={todoName} onChange={(e) => dispatch(setTodoName(e.target.value))} type="text" placeholder="Add Todo Title..." />
                <input value={todoContent} onChange={(e) => dispatch(setTodoContent(e.target.value))} type="text" placeholder="Add Todo Content..." />
            </div>
            <div className="createTodoForm_addSteps">

            </div>
            <button type="submit" onClick={onClickAddNewTodoToTodoList}>Add New Todo</button>
        </form>
    )
}
export default CreateTodoForm