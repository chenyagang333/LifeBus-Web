import { get } from "../http/api"

export const GetDialogAndGroupsByUserId = () => {
    return get('UserChat/GetDialogAndGroupsByUserId')
}