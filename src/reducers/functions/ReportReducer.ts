import { useRecoilState } from "recoil";
import { Report, ReportAction } from "../../@types/Reports";
import { ADD_ASSISTANT_1, ADD_ASSISTANT_2, ADD_ASSISTANT_HOD_REMARK, ADD_CHECKED_ON_1, ADD_CHECKED_ON_2, ADD_CHECKED_ON_3, ADD_CHECKED_ON_4, ADD_DEPARTMENT, ADD_GENERAL_INCIDENT, ADD_HOD_OR_MD, ADD_HOD_REMARK, ADD_MD_REMARK, ADD_OFFICIAL_REMARK, ADD_OTHER_INCIDENT, ADD_PECULIAR_INCIDENT, ADD_SERVICE, ADD_SERVICE_UNIFORM, ADD_TOTAL_ABSENTEES, ADD_TOTAL_MEMBERS_IN_DEPARTMENT, ADD_TOTAL_MEMBERS_IN_SERVICE, ADD_UNIT_LEADERS_ATTENDANCE_DETAIL, ADD_WHO_OBTAINED_PERMISSION_NAME_1, ADD_WHO_OBTAINED_PERMISSION_NAME_2, ADD_WHO_OBTAINED_PERMISSION_NAME_3, ADD_WHO_OBTAINED_PERMISSION_NAME_4, ADD_WHO_OBTAINED_PERMISSION_PHONE_1, ADD_WHO_OBTAINED_PERMISSION_PHONE_2, ADD_WHO_OBTAINED_PERMISSION_PHONE_3, ADD_WHO_OBTAINED_PERMISSION_PHONE_4 } from "../actions/ReportAtions";
import { CreateReportAtom } from "../../atoms/Report";



export function reportReducer(state: Report, { payload, action }: ReportAction) {
    const [reportsValue, setReportValue] = useRecoilState(CreateReportAtom)
    const newState: Report = state

    if (action === ADD_DEPARTMENT) {
        setReportValue({
            ...reportsValue,
            department: payload
        })
        return {
            ...newState,
            department: payload
        }
    }

    if (action === ADD_SERVICE) {
        setReportValue({
            ...reportsValue,
            service: payload
        })
        return {
            ...newState,
            service: payload
        }
    }

    if (action === ADD_HOD_OR_MD) {
        setReportValue({
            ...reportsValue,
            director: payload
        })
        return {
            ...newState,
            director: payload
        }
    }

    if (action === ADD_ASSISTANT_1) {
        setReportValue({
            ...reportsValue,
            assistant_1: payload
        })
        return {
            ...newState,
            assistant_1: payload
        }
    }

    if (action === ADD_ASSISTANT_2) {
        setReportValue({
            ...reportsValue,
            assistant_2: payload
        })
        setReportValue({
            ...reportsValue,
            department: payload
        })
        return {
            ...newState,
            assistant_2: payload
        }
    }

    if (action === ADD_TOTAL_MEMBERS_IN_DEPARTMENT) {
        setReportValue({
            ...reportsValue,
            number_of_members_department: payload
        })
        return {
            ...newState,
            number_of_members_department: payload
        }
    }

    if (action === ADD_TOTAL_MEMBERS_IN_SERVICE) {
        setReportValue({
            ...reportsValue,
            number_of_members_service: payload
        })
        return {
            ...newState,
            number_of_members_service: payload
        }
    }

    if (action === ADD_TOTAL_ABSENTEES) {
        setReportValue({
            ...reportsValue,
            number_of_absentees: payload
        })
        return {
            ...newState,
            number_of_absentees: payload
        }
    }

    if (action === ADD_UNIT_LEADERS_ATTENDANCE_DETAIL) {
        setReportValue({
            ...reportsValue,
            unit_leader_attendance_details: payload
        })
        return {
            ...newState,
            unit_leader_attendance_details: payload
        }
    }


    // Who Obtained Permissions
    if (action === ADD_WHO_OBTAINED_PERMISSION_NAME_1) {
        setReportValue({
            ...reportsValue,
            permitted_absentee_name_1: payload
        })
        return {
            ...newState,
            permitted_absentee_name_1: payload
        }
    }

    if (action === ADD_WHO_OBTAINED_PERMISSION_NAME_2) {
        setReportValue({
            ...reportsValue,
            permitted_absentee_name_2: payload
        })
        return {
            ...newState,
            permitted_absentee_name_2: payload
        }
    }

    if (action === ADD_WHO_OBTAINED_PERMISSION_NAME_3) {
        setReportValue({
            ...reportsValue,
            permitted_absentee_name_3: payload
        })
        return {
            ...newState,
            permitted_absentee_name_3: payload
        }
    }

    if (action === ADD_WHO_OBTAINED_PERMISSION_NAME_4) {
        setReportValue({
            ...reportsValue,
            permitted_absentee_name_4: payload
        })
        return {
            ...newState,
            permitted_absentee_name_4: payload
        }
    }


    // Who Obtained Permission
    if (action === ADD_WHO_OBTAINED_PERMISSION_PHONE_1) {
        setReportValue({
            ...reportsValue,
            permitted_absentee_phone_1: payload
        })
        return {
            ...newState,
            permitted_absentee_phone_1: payload
        }
    }

    if (action === ADD_WHO_OBTAINED_PERMISSION_PHONE_2) {
        setReportValue({
            ...reportsValue,
            permitted_absentee_phone_2: payload
        })
        return {
            ...newState,
            permitted_absentee_phone_2: payload
        }
    }

    if (action === ADD_WHO_OBTAINED_PERMISSION_PHONE_3) {
        setReportValue({
            ...reportsValue,
            permitted_absentee_phone_3: payload
        })
        return {
            ...newState,
            permitted_absentee_phone_3: payload
        }
    }

    if (action === ADD_WHO_OBTAINED_PERMISSION_PHONE_4) {
        setReportValue({
            ...reportsValue,
            permitted_absentee_phone_4: payload
        })
        return {
            ...newState,
            permitted_absentee_phone_4: payload
        }
    }


    // CheckOn
    if (action === ADD_CHECKED_ON_1) {
        setReportValue({
            ...reportsValue,
            checked_on_1: payload
        })
        return {
            ...newState,
            checked_on_1: payload
        }
    }
    if (action === ADD_CHECKED_ON_2) {
        setReportValue({
            ...reportsValue,
            checked_on_2: payload
        })
        return {
            ...newState,
            checked_on_2: payload
        }
    }
    if (action === ADD_CHECKED_ON_3) {
        setReportValue({
            ...reportsValue,
            checked_on_3: payload
        })
        return {
            ...newState,
            checked_on_3: payload
        }
    }
    if (action === ADD_CHECKED_ON_4) {
        setReportValue({
            ...reportsValue,
            checked_on_4: payload
        })
        return {
            ...newState,
            checked_on_4: payload
        }
    }


    // REMARKS
    if (action === ADD_SERVICE_UNIFORM) {
        setReportValue({
            ...reportsValue,
            service_uniform: payload
        })
        return {
            ...newState,
            service_uniform: payload
        }
    }

    // INCIDENT
    if (action === ADD_PECULIAR_INCIDENT) {
        setReportValue({
            ...reportsValue,
            peculiar_incidents: payload
        })
        return {
            ...newState,
            peculiar_incidents: payload
        }
    }
    if (action === ADD_GENERAL_INCIDENT) {
        setReportValue({
            ...reportsValue,
            general_incidents: payload
        })
        return {
            ...newState,
            general_incidents: payload
        }
    }
    if (action === ADD_OTHER_INCIDENT) {
        setReportValue({
            ...reportsValue,
            any_observations: payload
        })
        return {
            ...newState,
            any_observations: payload
        }
    }
    
    
    // REMARKS
    if (action === ADD_HOD_REMARK) {
        setReportValue({
            ...reportsValue,
            hod_remark: payload
        })
        return {
            ...newState,
            hod_remark: payload
        }
    }
    
    if (action === ADD_ASSISTANT_HOD_REMARK) {
        setReportValue({
            ...reportsValue,
            assistant_hod_remark: payload
        })
        return {
            ...newState,
            assistant_hod_remark: payload
        }
    }
    if (action === ADD_MD_REMARK) {
        setReportValue({
            ...reportsValue,
            md_remark: payload
        })
        return {
            ...newState,
            md_remark: payload
        }
    }
    if (action === ADD_MD_REMARK) {
        setReportValue({
            ...reportsValue,
            md_remark: payload
        })
        return {
            ...newState,
            md_remark: payload
        }
    }
    
    if (action === ADD_OFFICIAL_REMARK) {
        setReportValue({
            ...reportsValue,
            any_observations: payload
        })
        return {
            ...newState,
            any_observations: payload
        }
    }
    
    return newState

}