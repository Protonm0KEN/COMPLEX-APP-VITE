import { useDispatch, useSelector } from "react-redux"
import { todoInterface } from "../../redux/slices/todoSlice/types/todoSliceTypes"
import { todoStepInterface } from "../../redux/slices/todoStep/types/todoStepSliceTypes"
import "./ui/styles.scss"
import { deleteTodoFromTodoList, replaceTodoInTodoList } from "../../redux/slices/todoListSlice/todoListSlice"
import { RootState } from "../../../../redux/store/store"
import { replaceTodoGroupInTodoGroups } from "../../redux/slices/todoGroupsSlice/todoGroupsSlice"
const TodoCard = ({ Todo }: { Todo: todoInterface }) => {
    const todoGroups = useSelector((state: RootState) => state.todoAppReducer.todoGroups.todoGroups)
    const {
        todoName,
        todoDateOfFinishing,
        todoDateOfCreation,
        todoSteps,
        todoId,
        todoContent,
        todoTimeOfCreation,
        todoGroupName,
        todoTimeOfFinishing,
        todoState
    } = Todo
    const dispatch = useDispatch()
    const todoStateFunction = () => {
        if (todoState === "active") {
            return "active"
        } else if (todoState === "deffered") {
            return "deffered"
        } else if (todoState === "done") {
            return "done"
        } else {
            return null
        }
    }
    const deleteStepFromTodoCard = ({ stepId }: todoStepInterface) => {
        const newTodo = {
            ...Todo,
            todoSteps: todoSteps.filter((step) => step.stepId !== stepId)
        }
        dispatch(replaceTodoInTodoList({ todoId, newTodo }))
    }
    const completeStepInTodoCard = ({ stepId }: todoStepInterface) => {
        const step = todoSteps.find((step) => step.stepId === stepId)
        if (step) {
            const indexOfStep = todoSteps.indexOf(step)
            const cloneOfSteps = structuredClone(todoSteps)
            cloneOfSteps[indexOfStep].isStepDone = true
            const newTodo = {
                ...Todo,
                todoSteps: cloneOfSteps
            }
            dispatch(replaceTodoInTodoList({ todoId, newTodo }))
        }
    }
    const completeTodoCard = () => {
        const newTodo = {
            ...Todo,
            todoState: "done"
        }
        dispatch(replaceTodoInTodoList({ todoId, newTodo }))
    }
    const changeTodoGroup = ({ todoGroupName }: { todoGroupName: string }) => {
        const newTodo = {
            ...Todo,
            todoGroupName: todoGroupName,
        }
        dispatch(replaceTodoInTodoList({ todoId, newTodo }))
        if (todoGroupName.length > 0) {
            const todoGroup = structuredClone(todoGroups.find((todoGroup) => todoGroup.todoGroupName === todoGroupName))
            if (todoGroup?.todoGroupTodos?.find((todo) => todo.todoName === todoName)) {
                alert("Уже есть такая задача в этой группе")
            } else {
                todoGroup?.todoGroupTodos.push(Todo)
            }
            console.log(todoGroup)
            dispatch(replaceTodoGroupInTodoGroups({ todoGroup, todoGroupId: todoGroup?.todoGroupId }))
        }
    }
    return (
        <>
            <div className="TodoCard">
                <div className="TodoCard_top">
                    <h1 className="TodoCard_title">{todoName}</h1>
                    <div className="TodoCard_progress">
                        <div className={`progress-bar ${todoStateFunction()}`}></div>
                        <p className="progress-text">{todoState === "active"
                            ? "Активный"
                            : todoState === "deffered"
                                ? "Отложенный"
                                : "Выполненный"}</p>
                    </div>
                    {todoGroups.length > 0
                        ? <div className="TodoCard_group">
                            <select defaultValue={""} onChange={(e) => changeTodoGroup({ todoGroupName: e.target.value })} name="" id="">
                                {todoGroups.map((todoGroup) => {
                                    return (
                                        <option key={todoGroup.todoGroupId} value={todoGroup.todoGroupName}>{todoGroup.todoGroupName}</option>
                                    )
                                })}
                            </select>
                        </div>
                        : null}
                </div>
                <div className="TodoCard_body">
                    <p className="TodoCard_content">{todoContent}</p>
                    <p className="">{todoSteps.length > 0 ? "Шаги:" : null}</p>
                    {todoSteps.length > 0 ? <div className="TodoCard_steps">
                        {todoSteps.map((step: todoStepInterface) => {
                            return (
                                <div key={step.stepId} className="TodoCard_step">
                                    <p className="step_title">{step.stepTitle}</p>
                                    <div className="step_buttons">
                                        {step.isStepDone ? <p className="TodoCard_step--completed">Шаг Выполнен</p> : <button onClick={() => completeStepInTodoCard({ stepId: step.stepId })} className="completeStepButton">Завершить Шаг</button>}
                                        <button onClick={() => deleteStepFromTodoCard({ stepId: step.stepId })} className="deleteStepButton">Удалить Шаг</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div> : null}
                </div>
                <div className="TodoCard_bottom">
                    <div className="TodoCard_dates">
                        <p className="TodoCard_dateOfCreation">Дата Создания: {todoDateOfCreation}</p>
                        <p className="TodoCard_dateOfFinishing">Дата Окончания: {todoDateOfFinishing}</p>
                    </div>
                    <div className="TodoCard_times">
                        <p className="TodoCard_timeOfCreation">Время Создания: {todoTimeOfCreation}</p>
                        <p className="TodoCard_timeOfFinishing">Время Окончания: {todoTimeOfFinishing}</p>
                    </div>
                    <div className="TodoCard_buttons">
                        {/* <button className="edit-button">Редактировать</button> */}
                        <button onClick={completeTodoCard} className="complete-button">Выполнить</button>
                        <button onClick={() => dispatch(deleteTodoFromTodoList({ todoId: todoId }))} className="delete-button">Удалить</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TodoCard