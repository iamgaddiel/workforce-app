import { useRecoilState } from "recoil";
import { Report, ReportAction } from "../../@types/Reports";
import { ADD_ASSISTANT_1, ADD_ASSISTANT_2, ADD_ASSISTANT_HOD_REMARK, ADD_CHECKED_ON_1, ADD_CHECKED_ON_2, ADD_CHECKED_ON_3, ADD_CHECKED_ON_4, ADD_DATE, ADD_DEPARTMENT, ADD_GENERAL_INCIDENT, ADD_HOD_OR_MD, ADD_HOD_REMARK, ADD_ITEM_EXPLANATION, ADD_MD_REMARK, ADD_OFFICIAL_REMARK, ADD_OTHER_INCIDENT, ADD_PECULIAR_INCIDENT, ADD_SERVICE, ADD_SERVICE_UNIFORM, ADD_TOTAL_ABSENTEES, ADD_TOTAL_MEMBERS_IN_DEPARTMENT, ADD_TOTAL_MEMBERS_IN_SERVICE, ADD_UNIT_LEADERS_ATTENDANCE_DETAIL, ADD_WHO_OBTAINED_PERMISSION_NAME_1, ADD_WHO_OBTAINED_PERMISSION_NAME_2, ADD_WHO_OBTAINED_PERMISSION_NAME_3, ADD_WHO_OBTAINED_PERMISSION_NAME_4, ADD_WHO_OBTAINED_PERMISSION_PHONE_1, ADD_WHO_OBTAINED_PERMISSION_PHONE_2, ADD_WHO_OBTAINED_PERMISSION_PHONE_3, ADD_WHO_OBTAINED_PERMISSION_PHONE_4 } from "../actions/ReportAtions";
import { CreateReportAtom } from "../../atoms/Report";



export function reportReducer(prevState: Report, { payload, action }: ReportAction) {

    const newState: Report = prevState

    if (action === ADD_DEPARTMENT) {
        return {
            ...newState,
            department: payload
        }
    }
    if (action === ADD_DATE) {
        return {
            ...newState,
            date: payload
        }
    }

    // if (action === ADD_SERVICE) {
    //     return {
    //         ...newState,
    //         service: payload
    //     }
    // }

    if (action === ADD_HOD_OR_MD) {
        return {
            ...newState,
            hod_or_md: payload
        }
    }

    if (action === ADD_ASSISTANT_1) {
        return {
            ...newState,
            assistant_1: payload
        }
    }

    if (action === ADD_ASSISTANT_2) {
        return {
            ...newState,
            assistant_2: payload
        }
    }

    if (action === ADD_TOTAL_MEMBERS_IN_DEPARTMENT) {
        return {
            ...newState,
            number_of_members_in_department: payload
        }
    }

    if (action === ADD_TOTAL_MEMBERS_IN_SERVICE) {
        return {
            ...newState,
            number_of_members_in_service: payload
        }
    }

    if (action === ADD_TOTAL_ABSENTEES) {

        return {
            ...newState,
            number_of_absentee_members: payload
        }
    }

    if (action === ADD_UNIT_LEADERS_ATTENDANCE_DETAIL) {

        return {
            ...newState,
            unit_leader_attendance_details: payload
        }
    }

    if (action === ADD_ITEM_EXPLANATION) {

        return {
            ...newState,
            b_c_d_explanation: payload
        }
    }


    // Who Obtained Permissions
    if (action === ADD_WHO_OBTAINED_PERMISSION_NAME_1) {

        return {
            ...newState,
            permitted_absentee_name_1: payload
        }
    }

    if (action === ADD_WHO_OBTAINED_PERMISSION_NAME_2) {

        return {
            ...newState,
            permitted_absentee_name_2: payload
        }
    }

    if (action === ADD_WHO_OBTAINED_PERMISSION_NAME_3) {

        return {
            ...newState,
            permitted_absentee_name_3: payload
        }
    }

    if (action === ADD_WHO_OBTAINED_PERMISSION_NAME_4) {

        return {
            ...newState,
            permitted_absentee_name_4: payload
        }
    }


    // Who Obtained Permission
    if (action === ADD_WHO_OBTAINED_PERMISSION_PHONE_1) {

        return {
            ...newState,
            permitted_absentee_phone_1: payload
        }
    }

    if (action === ADD_WHO_OBTAINED_PERMISSION_PHONE_2) {

        return {
            ...newState,
            permitted_absentee_phone_2: payload
        }
    }

    if (action === ADD_WHO_OBTAINED_PERMISSION_PHONE_3) {

        return {
            ...newState,
            permitted_absentee_phone_3: payload
        }
    }

    if (action === ADD_WHO_OBTAINED_PERMISSION_PHONE_4) {

        return {
            ...newState,
            permitted_absentee_phone_4: payload
        }
    }


    // CheckOn
    if (action === ADD_CHECKED_ON_1) {
        return {
            ...newState,
            checked_on_1: payload
        }
    }
    if (action === ADD_CHECKED_ON_2) {

        return {
            ...newState,
            checked_on_2: payload
        }
    }
    if (action === ADD_CHECKED_ON_3) {
        return {
            ...newState,
            checked_on_3: payload
        }
    }
    if (action === ADD_CHECKED_ON_4) {
        return {
            ...newState,
            checked_on_4: payload
        }
    }


    // REMARKS
    if (action === ADD_SERVICE_UNIFORM) {
        return {
            ...newState,
            service_uniform: payload
        }
    }

    // INCIDENT
    if (action === ADD_PECULIAR_INCIDENT) {
        return {
            ...newState,
            peculiar_incidents: payload
        }
    }
    if (action === ADD_GENERAL_INCIDENT) {
        return {
            ...newState,
            general_incidents: payload
        }
    }
    if (action === ADD_OTHER_INCIDENT) {
        return {
            ...newState,
            observations: payload
        }
    }


    // REMARKS
    if (action === ADD_HOD_REMARK) {

        return {
            ...newState,
            hod_remark: payload
        }
    }

    if (action === ADD_ASSISTANT_HOD_REMARK) {

        return {
            ...newState,
            assistant_hod_remark: payload
        }
    }
    if (action === ADD_MD_REMARK) {

        return {
            ...newState,
            md_remark: payload
        }
    }
    if (action === ADD_MD_REMARK) {

        return {
            ...newState,
            md_remark: payload
        }
    }

    if (action === ADD_OFFICIAL_REMARK) {

        return {
            ...newState,
            official_remark: payload
        }
    }

    return newState

}