// Сопоставление ссылки на страницу и загружающейся JS страницы (компонента)

import {
    ADMIN, ADMISSION_APE, ADMISSION_BAC, CONTACTS, COUNTERING, DOCUMENTS, EDUCATIONAL_P,
    EMPLOYERS_P,
    HISTORY, INDUSTRIAL_P, INFO_EDU_ORG, INTERNATIONAL_ACT,
    LEGAL_CLINIC,
    MAIN_ROUTE, PERSONALITIES_PAGE, SCIENCE, SCIENCE_P, STAFF,
    STRUCTURE, STUDENTS_APE, STUDENTS_BAC
} from "./consts";
import Main from "./pages/Main";
import Contacts from "./pages/Institute/Contacts";
import Industrial_p from "./pages/Partners/Industrial_p";
import Educational_p from "./pages/Partners/Educational_p";
import Employers_p from "./pages/Partners/Employers_p";
import History from "./pages/Institute/History";
import Structure from "./pages/Institute/Structure";
import Info_edu_org from "./pages/Institute/Info_edu_org";
import Inter_act from "./pages/Institute/Inter_act";
import Countering from "./pages/Institute/Countering";
import Admin from "./pages/Admin";
import PersonalitiesPage from "./pages/Institute/PersonalitiesPage";
import Legal_Clinic from "./pages/Partners/Legal_Clinic";
import Admission_BAC from "./pages/Entrance/Admission_BAC";
import Admission_APE from "./pages/Entrance/Admission_APE";
import Documents from "./pages/Institute/Documents";
import Science from "./pages/Science/Science";
import Staff from "./pages/Staff/Staff";
import Students_BAC from "./pages/Students/Students_BAC";
import Students_APE from "./pages/Students/Students_APE";
import Science_p from "./pages/Partners/Science_p";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <Main/>
    },
    {
        path: CONTACTS,
        Component: <Contacts/>
    },
    {
        path: INDUSTRIAL_P,
        Component: <Industrial_p/>
    },
    {
        path: EDUCATIONAL_P ,
        Component: <Educational_p/>
    },
    {
        path: EMPLOYERS_P,
        Component: <Employers_p/>
    },
    {
        path: SCIENCE_P,
        Component: <Science_p/>
    },
    {
        path: HISTORY,
        Component: <History/>
    },
    {
        path: PERSONALITIES_PAGE,
        Component: <PersonalitiesPage/>
    },
    {
        path: STRUCTURE,
        Component: <Structure/>
    },
    {
        path: INFO_EDU_ORG,
        Component: <Info_edu_org/>
    },
    {
        path: INTERNATIONAL_ACT ,
        Component: <Inter_act/>
    },
    {
        path: COUNTERING,
        Component: <Countering/>
    },
    {
        path: LEGAL_CLINIC,
        Component: <Legal_Clinic/>
    },
    {
        path: ADMISSION_BAC,
        Component: <Admission_BAC/>
    },
    {
        path: ADMISSION_APE,
        Component: <Admission_APE/>
    },
    {
        path: DOCUMENTS,
        Component: <Documents/>
    },
    {
        path: SCIENCE,
        Component: <Science/>
    },
    {
        path: STAFF,
        Component: <Staff/>
    },
    {
        path: STUDENTS_BAC,
        Component: <Students_BAC/>
    },
    {
        path: STUDENTS_APE,
        Component: <Students_APE/>
    },
]

export const authRoutes = [
    {
        path: ADMIN,
        Component: <Admin/>
    },
]