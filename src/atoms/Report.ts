import { atom } from "recoil";
import { Report } from "../@types/Reports";


export const CreateReportAtom = atom<Report>({
    key: 'REPORT_CREATE',
    default: {
        department: '',
        service: 1,
        director: '',
        assistant_1: '',
        assistant_2: '',
        permitted_absentee_name_1: '',
        permitted_absentee_name_2: '',
        permitted_absentee_name_3: '',
        permitted_absentee_name_4: '',
        permitted_absentee_phone_1: '',
        permitted_absentee_phone_2: '',
        permitted_absentee_phone_3: '',
        permitted_absentee_phone_4: '',
        non_permitted_absentee_name_1: '',
        non_permitted_absentee_name_2: '',
        non_permitted_absentee_name_3: '',
        non_permitted_absentee_name_4: '',
        non_permitted_absentee_phone_1: '',
        non_permitted_absentee_phone_2: '',
        non_permitted_absentee_phone_3: '',
        non_permitted_absentee_phone_4: '',
        checked_on_1: '',
        checked_on_2: '',
        checked_on_3: '',
        checked_on_4: '',
        any_observations: '',
        assistant_hod_remark: '',
        number_of_members_department: 0,
        number_of_members_service: 0,
        number_of_absentees: 0,
        unit_leader_attendance_details: '',
        b_c_d_explanation: '',
        service_uniform: '',
        peculiar_incidents: '',
        general_incidents: '',
        hod_remark: '',
        md_remark: '',
        official_remark: ''
    }
})