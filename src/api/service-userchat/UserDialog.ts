import { del, get, post, put } from "@/api/http/api"
import { CreateUserDialogEntity, CreateUserDialogMessageEntity, ReadUserDialogMessageRequest } from "@/types/service-userchat/UserDialog"

const baseRouter = 'UserDialog/'

export const CreateUserDialog = (data: CreateUserDialogEntity) => {
    return post(`${baseRouter}CreateUserDialog`, data)
}
export const CreateDialogMessage = (data: CreateUserDialogMessageEntity) => {
    return post(`${baseRouter}CreateDialogMessage`, data)
}
export const DeleteUserDialogToUser = (userId: number, userDialogId: number) => {
    return del(`${baseRouter}DeleteUserDialogToUser`, { userId, userDialogId })
}
export const DeleteUserDialogMessage = (userId: number, deleteMessageId: number) => {
    return del(`${baseRouter}DeleteUserDialogMessage`, { userId, deleteMessageId })
}
export const ReadUserDialogMessage = (data: ReadUserDialogMessageRequest) => {
    return put(`${baseRouter}ReadUserDialogMessage`, data)
}