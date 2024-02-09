

interface Permissions{
    name: string
    phone: string
}

interface CheckedOn{
    name: string
    checked: boolean
}

export type Report = {
    director : string,
    assistant_1: string,
    assistant_2 ?: string,
    service: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
    department: string,
    number_of_members_department: number,
    number_of_members_service: number,
    number_of_absentees: number,
    unit_leader_attendance_details: string,
    b_c_d_explanation: string
    permitted_absentee_name_1: string,
    permitted_absentee_name_2: string,
    permitted_absentee_name_3: string
    permitted_absentee_name_4: string
    permitted_absentee_phone_1: string
    permitted_absentee_phone_2: string
    permitted_absentee_phone_3: string
    permitted_absentee_phone_4: string
    non_permitted_absentee_name_1: string
    non_permitted_absentee_name_2: string
    non_permitted_absentee_name_3: string
    non_permitted_absentee_name_4: string
    non_permitted_absentee_phone_1: string
    non_permitted_absentee_phone_2: string
    non_permitted_absentee_phone_3: string
    non_permitted_absentee_phone_4: string
    checked_on_1: string,
    checked_on_2: string,
    checked_on_3: string,
    checked_on_4: string,
    service_uniform: string,
    peculiar_incidents: string,
    general_incidents: string,
    any_observations: string,
    hod_remark: string,
    assistant_hod_remark: string,
    md_remark: string,
    official_remark: string
}

export type ReportAction = {
    payload: any,
    action: string
}