import { useDispatch, useSelector } from "react-redux"
import "./ui/styles.scss"
import { addStepToTodoSteps, setTodoContent, setTodoDateOfFinishing, setTodoName, setTodoTimeOfFinishing, updateTodoDateOfCreation, updateTodoId, updateTodoSteps, updateTodoTimeOfCreation } from "../../redux/slices/todoSlice/todoSlice"
import { RootState } from "../../../../redux/store/store"
import { useState } from "react"
import CreateTodoFormButton from "../CreateTodoFormButton"
import { setStepId, setStepTitle } from "../../redux/slices/todoStep/todoStepSlice"
import { setTodoGroupName } from "../../redux/slices/todoGroupSlice/todoGroupSlice"
import { addTodoToTodoList } from "../../redux/slices/todoListSlice/todoListSlice"
import { changeIsCreateTodoFormOpen } from "../../redux/slices/createTodoFormSlice/createTodoFormSlice"
const CreateTodoForm = () => {
    const isCreateTodoFormOpen = useSelector((state: RootState) => state.todoAppReducer.createTodoForm.isCreateTodoFormOpen)
    const step = useSelector((state: RootState) => state.todoAppReducer.todoStep)
    const DateObj = new Date()
    const todo = useSelector((state: RootState) => state.todoAppReducer.todo)
    const todoFormatedTime = `${DateObj.getHours()}:${DateObj.getMinutes() < 10 ? `0${DateObj.getMinutes()}` : DateObj.getMinutes()}`
    const todoFormatedDate = `${DateObj.getDate()}.${DateObj.getMonth() < 10 ? `0${DateObj.getMonth() + 1}` : DateObj.getMonth()}.${DateObj.getFullYear()}`
    const [isAddStepsShown, setIsAddStepsShown] = useState<boolean>(false)
    const { todoName, todoContent, todoDateOfFinishing, todoSteps } = useSelector((state: RootState) => state.todoAppReducer.todo)
    const dispatch = useDispatch()
    const onClickAddStepsShown = () => {
        setIsAddStepsShown(!isAddStepsShown)
    }
    const onClickAddNewTodoToTodoList = () => {
        if (todoName.length > 0 && todoContent.length > 0) {
            dispatch(addTodoToTodoList(todo))
            dispatch(setTodoName(""))
            dispatch(setTodoContent(""))
            dispatch(setTodoDateOfFinishing(""))
            dispatch(setTodoGroupName(""))
            dispatch(setTodoTimeOfFinishing(""))
            dispatch(updateTodoId(Math.random().toString(16).slice(2)))
            dispatch(updateTodoDateOfCreation(todoFormatedDate))
            dispatch(updateTodoTimeOfCreation(todoFormatedTime))
            dispatch(updateTodoSteps([]))
            dispatch(changeIsCreateTodoFormOpen())
        }else if(todoName.length <= 0){
            alert("Вы не написали заголовок")
        }else if(todoContent.length <= 0){
            alert("Вы не написали содержимое задачи")
        }else {
            alert("Вы не ввели никакие данные")
        }
    }
    const onClickAddStep = () => {
        dispatch(addStepToTodoSteps(step))
        dispatch(setStepTitle(""))
        dispatch(setStepId(Math.random().toString(16).slice(2)))
    }
    const date = todoDateOfFinishing.slice(0, 2)
    const month = todoDateOfFinishing.slice(3, 5)
    const year = todoDateOfFinishing.slice(6, 10)
    const formatedDateOfFinishing = `${year}-${month}-${date}`

    return (
        <div className={`CreateTodoForm_layout ${isCreateTodoFormOpen ? "active" : null}`}>
            <form onSubmit={(e) => e.preventDefault()} className="CreateTodoForm">
                <div className="CreateTodoForm_fields">
                    <label htmlFor="todoTitle">Todo Title</label>
                    <input id="todoTitle" value={todoName} onChange={(e) => dispatch(setTodoName(e.target.value))} type="text" placeholder="Add Todo Title..." />
                    <label htmlFor="todoContent">Todo Content</label>
                    <input id="todoContent" value={todoContent} onChange={(e) => dispatch(setTodoContent(e.target.value))} type="text" placeholder="Add Todo Content..." />
                </div>
                <div className="CreateTodoForm_addSteps">
                    <CreateTodoFormButton buttonTitle={isAddStepsShown ? "Close Add Steps Modal" : "AddSteps"} func={onClickAddStepsShown} />
                    {isAddStepsShown
                        ?
                        <>
                            <label htmlFor="stepTitle">Step Title</label>
                            <input value={step.stepTitle} onChange={(e) => dispatch(setStepTitle(e.target.value))} type="text" id="stepTitle" />
                            <CreateTodoFormButton func={onClickAddStep} buttonTitle={"Add Step"} />
                            <ul className="CreateTodoForm_steps">
                                {todoSteps.map((step) => {
                                    return (
                                        <li key={step.stepId}>
                                            <p className="CreateTodoForm_step">
                                                {step.stepTitle}
                                            </p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </>
                        : null}
                </div>
                <div className="CreateTodoForm_finishDate">
                    <label htmlFor="finishDate">Todo Finish Date</label>
                    <input placeholder="Step Title" onChange={(e) => {
                        const year = e.target.value.slice(0, 4)
                        const month = e.target.value.slice(5, 7)
                        const day = e.target.value.slice(8, 12)
                        const formatedFinishDate = `${day}.${month}.${year}`
                        dispatch(setTodoDateOfFinishing(formatedFinishDate))
                    }} value={formatedDateOfFinishing} type="date" name="todoFinishDate" id="finishDate" />
                </div>
                <CreateTodoFormButton func={onClickAddNewTodoToTodoList} buttonTitle={"Add New todo"} />
                <button onClick={() => dispatch(changeIsCreateTodoFormOpen())} className="CreateTodoForm_closeFormBtn">x</button>
            </form>
        </div>
    )
}
export default CreateTodoForm