export interface CreateUserDialogEntity {
	userId: number;
	userName: string;
	userAvatar: string;
	toUserId: number;
	toUserName: string;
	toUserAvatar: string;
}

export interface CreateUserDialogMessageEntity {
	userDialogId: number;
	userId: number;
	toUserId: number;
	message: string;
}

export interface ReadUserDialogMessageRequest {
	userDialogId: number;
	fromUserId: number;
	toUserId: number;
	readMessageIds: any;
}
