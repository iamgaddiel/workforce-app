import Settings from "../helpers/settings"
import { User, Session, WeakPassword } from '@supabase/supabase-js'


export type AddUserType = {
    name: string
    email: string
    password: string
    role: 'admin' | 'user'
}

export type EditUserType = {
    name: string
    email: string
}

export type UserType = {
    user: User;
    session: Session;
    weakPassword?: WeakPassword | undefined;
} | {
    user: null;
    session: null;
    weakPassword?: null | undefined;
}
