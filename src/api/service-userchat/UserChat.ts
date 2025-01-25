import { get } from "@/api/http/api"

export const GetDialogAndGroupsByUserId = () => {
    return get('UserChat/GetDialogAndGroupsByUserId')
}