import { todoGroupInterface } from "../../todoGroupSlice/types/todoGroupSliceTypes";

export interface todoGroupsInterface {
    todoGroups: todoGroupInterface[]
}
export interface todoGroupsSliceInitialState extends todoGroupsInterface{}