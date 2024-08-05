export interface todoGroupInterface {
    todoGroupName?: string,
    todoGroupTodos?: [],
    todoGroupId: string,
    isTodoGroupShown: boolean
}
export interface todoGroupSliceInintialState extends todoGroupInterface { }