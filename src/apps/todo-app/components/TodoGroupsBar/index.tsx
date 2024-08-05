import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../redux/store/store"
import { useState } from "react"
import "./ui/styles.scss"
import { replaceTodoGroupInTodoGroups } from "../../redux/slices/todoGroupsSlice/todoGroupsSlice"
import { changeIsCreateTodoGroupFormOpen } from "../../redux/slices/createTodoGroupFormSlice/createTodoGroupFormSlice"
const TodoGroupsBar = () => {
  const dispatch = useDispatch()
  const todoGroups = useSelector((state: RootState) => state.todoAppReducer.todoGroups.todoGroups)
  const [isTodoGroupCreateFormShown, setIsTodoGroupCreateFormShown] = useState(false)
  return (
    <div className="TodoGroupsBar">
      <div className="TodoGroupsBar_tabs">
        {todoGroups.map((todoGroup) => {
          return (
            <button onClick={() => {
              for (let i = 0; i < todoGroups.length; i++) {
                if (todoGroups[i].isTodoGroupShown !== true) {
                  dispatch(replaceTodoGroupInTodoGroups({
                    todoGroup: {
                      todoGroupId: todoGroup.todoGroupId,
                      isTodoGroupShown: todoGroup.isTodoGroupShown ? false : true,
                      todoGroupName: todoGroup.todoGroupName,
                      todoGroupTodos: todoGroup.todoGroupTodos
                    },
                    todoGroupId: todoGroup.todoGroupId
                  }))
                } else {
                  dispatch(replaceTodoGroupInTodoGroups({
                    todoGroup: {
                      todoGroupId: todoGroups[i].todoGroupId,
                      isTodoGroupShown: false,
                      todoGroupName: todoGroups[i].todoGroupName,
                      todoGroupTodos: todoGroups[i].todoGroupTodos
                    },
                    todoGroupId: todoGroups[i].todoGroupId
                  }))
                }
              }
            }} key={todoGroup.todoGroupId} className="TodoGroupsBar_tab">
              {todoGroup.todoGroupName}
              {todoGroup.isTodoGroupShown === true ? "+" : ""}
            </button >
          )
        })}
      </div>
      <button onClick={() => {
        dispatch(changeIsCreateTodoGroupFormOpen())
        setIsTodoGroupCreateFormShown(!isTodoGroupCreateFormShown)
        }} className="TodoGroupsBar_createTodoGroupBtn">
        Create New Todo Group +
      </button>
    </div >
  )
}
export default TodoGroupsBar