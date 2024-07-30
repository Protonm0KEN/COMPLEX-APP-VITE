export interface newTodo  {

    //newTodo general
    newTodoName: string,
    newTodoContent: string,
    newTodoId: string,

    //newTodo time 
    newTodoDateOfCreation: string,
    newTodoTimeOfCreation: string,
    newTodoDateOfFinishing?: string,
    newTodoTimeOfFinishing?: string,

    //newTodo group
    newTodoGroupName?: string,
    newTodoGroupId?: string,
}
export interface newTodoSliceInitialState extends newTodo {}