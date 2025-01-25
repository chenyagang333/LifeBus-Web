export interface CreateUserGroupsEntity {
	adminId: number;
	icon: string;
	CreateUserGroupsToUsers: any;
}

export interface CreateUserGroupsMessageEntity {
	UserGroupsId: number;
	FromUserId: number;
	FromUserName: string;
	FromUserAvatar: string;
	PostMessagese: string;
	ReceiveUserIds: any;
}

/**
 * 读取群聊消息请求
 */
export interface ReadUserGroupsMessageRequest {
	userGroupsId: number;
	toUserId: number;
	readMessageIds: any;
}
