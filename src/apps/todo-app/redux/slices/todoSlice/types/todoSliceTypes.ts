import { todoGroup } from "../../todoGroupSlice/types/todoGroupSliceTypes";

export interface todoInterface  {

    //todo general
    todoName: string,
    todoContent: string,
    todoId: string,

    //todo time 
    todoDateOfCreation: string,
    todoTimeOfCreation: string,
    todoDateOfFinishing?: string,
    todoTimeOfFinishing?: string,

    //todo group
    todoGroup: todoGroup
}
export interface todoSliceInitialState extends todoInterface {}