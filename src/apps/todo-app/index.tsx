import CreateTodoForm from "./components/CreateTodoForm"
import CreateTodoGroupForm from "./components/CreateTodoGroupForm"
import TodoGroupsBar from "./components/TodoGroupsBar"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"
import TodoCard from "./components/TodoCard"
import { changeIsCreateTodoFormOpen } from "./redux/slices/createTodoFormSlice/createTodoFormSlice"
import "./ui/styles.scss"
const TodoApp = () => {
    const dispatch = useDispatch()
    const todoList = useSelector((state: RootState) => state.todoAppReducer.todoList.todoList)
    const todoGroups = useSelector((state: RootState) => state.todoAppReducer.todoGroups.todoGroups)
    const shownTodoGroup = todoGroups.find((todoGroup) => todoGroup.isTodoGroupShown === true)
    return (
        <>
            <div className="TodoApp">
                <TodoGroupsBar />
                <button onClick={() => dispatch(changeIsCreateTodoFormOpen())} className="TodoApp_addNewTodoButton">Add New Todo</button>
                <CreateTodoForm />
                <CreateTodoGroupForm />
                {shownTodoGroup ? shownTodoGroup.todoGroupTodos.map((todo) => {
                    return (
                        <TodoCard key={todo.todoId} Todo={todo} />
                    )
                }) : todoList.map((todo) => {
                    return (
                        <TodoCard key={todo.todoId} Todo={todo} />
                    )
                })}
            </div>
        </>

    )
}
export default TodoApp