import { del, post, put } from "@/api/http/api"
import { CreateUserGroupsEntity, CreateUserGroupsMessageEntity, ReadUserGroupsMessageRequest } from "@/types/service-userchat/UserGroups"

const baseRouter = 'UserGroups/'

export const CreateUserGroups = (data: CreateUserGroupsEntity) => {
    return post(`${baseRouter}CreateUserGroups`, data)
}
export const CreateGroupsMessage = (data: CreateUserGroupsMessageEntity) => {
    return post(`${baseRouter}CreateGroupsMessage`, data)
}
export const DeleteUserGroupsToUser = (userId: number, userGroupsId: number) => {
    return del(`${baseRouter}DeleteUserGroupsToUser`, { userId, userGroupsId })
}
export const DeleteUserGroupsMessage = (userGroupsId: number, toUserId: number, deleteMessageId: number) => {
    return del(`${baseRouter}DeleteUserGroupsMessage`, { userGroupsId, toUserId, deleteMessageId })
}
export const ReadUserGroupsMessage = (data: ReadUserGroupsMessageRequest) => {
    return put(`${baseRouter}ReadUserGroupsMessage`, data)
}