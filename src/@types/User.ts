import Settings from "../helpers/settings"
import { User, Session, WeakPassword } from '@supabase/supabase-js'


export type AddUserType = {
    name: string
    email: string
    password: string
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
