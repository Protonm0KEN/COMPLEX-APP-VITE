import { useDispatch, useSelector } from "react-redux"
import "./ui/styles.scss"
import { RootState } from "../../../../redux/store/store"
import { setTodoGroupName, updateTodoGroupId } from "../../redux/slices/todoGroupSlice/todoGroupSlice"
import { addTodoGroupToTodoGroups } from "../../redux/slices/todoGroupsSlice/todoGroupsSlice"
import { changeIsCreateTodoGroupFormOpen } from "../../redux/slices/createTodoGroupFormSlice/createTodoGroupFormSlice"
const CreateTodoGroupForm = () => {
    const todoGroups = useSelector((state: RootState) => state.todoAppReducer.todoGroups.todoGroups)
    const todoGroup = useSelector((state: RootState) => state.todoAppReducer.todoGroup)
    const isCreateTodoGroupFormOpen = useSelector((state: RootState) => state.todoAppReducer.createTodoGroupForm.isCreateTodoGroupFormOpen)
    const dispatch = useDispatch()
    const onClickAddNewTodoGroup = () => {
        if (todoGroup.todoGroupName) {
            if (todoGroups.find((group) => group.todoGroupName === todoGroup.todoGroupName)) {
                alert("Уже есть группа с таким названием")
            } else {
                dispatch(addTodoGroupToTodoGroups(todoGroup))
                dispatch(setTodoGroupName(""))
                dispatch(updateTodoGroupId(Math.random().toString(16).slice(2)))
                dispatch(changeIsCreateTodoGroupFormOpen())
            }
        } else {
            alert("Вы не написали название")
        }
    }
    return (
        <div className={`CreateTodoGroupForm_layout ${isCreateTodoGroupFormOpen ? "active" : null}`}>
            <form className="CreateTodoGroupForm" onSubmit={(e) => e.preventDefault()}>
                <div className="CreateTodoGroupForm_fields">
                    <input value={todoGroup.todoGroupName} onChange={(e) => dispatch(setTodoGroupName(e.target.value))} type="text" placeholder="todo group title" />
                </div>
                <button onClick={onClickAddNewTodoGroup} className="CreateTodoGroupForm_button">Add New todo grooup</button>
                <button onClick={() => dispatch(changeIsCreateTodoGroupFormOpen())} className="CreateTodoGroupForm_closeFormBtn">X</button>
            </form>
        </div>
    )
}
export default CreateTodoGroupForm