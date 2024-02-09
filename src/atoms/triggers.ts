import { atom } from "recoil";


export const UserListTrigger = atom<boolean>({
    key: 'reload_user_list',
    default: false
})

export const UserDetailsTrigger = atom<boolean>({
    key: 'reload_user_detail',
    default: false
})

