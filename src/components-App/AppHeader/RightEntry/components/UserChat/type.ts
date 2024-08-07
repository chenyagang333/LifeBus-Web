export interface UserDialog {
    // 私聊字段
    userDialogId: number,
    toUserId: number,
    toUserAvatar: string,
    toUserName: string,
    lastMessage: string,
    lastPostMessageTime: string,
    unreadCount: number,
    // 群聊字段
    userGroupsId: number,

}
export interface UserDialogMessage {
    userDialogId: number,
    fromUserId: number,
    toUserId: number,
    postMessages: string,
    markRead: boolean,
    retractMessage: boolean,
    createTime: string,
    messageType: number,
    // 群聊字段
    userGroupsId?: number,
    fromUserName?: string,
    fromUserAvatar?: string,
}