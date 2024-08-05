import { todoStepInterface } from "../../todoStep/types/todoStepSliceTypes";

export interface todoInterface  {

    //todo general
    todoName: string,
    todoContent: string,
    todoId: string,

    //todo time 
    todoDateOfCreation: string,
    todoTimeOfCreation: string,
    todoDateOfFinishing: string,
    todoTimeOfFinishing: string,

    //todo group
    todoGroupName: string

    //todo steps
    todoSteps: todoStepInterface[]

    //todo state
    todoState: string
}
export interface todoSliceInitialState extends todoInterface {}