import {
    ABOUT, ADMIN,
    ADMISSION, ALLPROGRAMS, ARCHIVE, AUTH, BASIC, CONFERENCES,
    CONTACTS, COUNTERING, DOCFORCOL, EDUCATIONAL_P, ELECTION,
    ELS, EMPLOYERS_P,
    EMPLOYMENT, GRADUATES, GREETING, HISTORY, INDUSTRIAL_P, INFO_EDU_ORG, INTERNATIONAL_ACT,
    LABORATORIES, LEGAL_CLINIC,
    MAIN_ROUTE, ONEPROGRAM, PERSON, PERSONALITIES_PAGE,
    PUBLICATIONS, REFERENCES, REPLACEMENT, REQUISITES,
    SCHEDULE, STRUCTURE
} from "./consts";
import Main from "./pages/Main";
import AllPrograms from "./pages/Education/AllPrograms";
import OneProgram from "./pages/Education/OneProgram";
import Admission from "./pages/_Applicant/Admission";
import Contacts from "./pages/Institute/Contacts";
import Schedule from "./pages/Education/Schedule";
import Els from "./pages/Education/Els";
import Laboratories from "./pages/Science/Laboratories";
import Employment from "./pages/_Students&Graduates/Employment";
import Graduates from "./pages/_Students&Graduates/Graduates";
import Docforcol from "./pages/_Employees/Docforcol";
import Election from "./pages/_Employees/Election";
import Replacement from "./pages/_Employees/Replacement";
import References from "./pages/Education/References";
import Industrial_p from "./pages/_Partners/Industrial_p";
import Educational_p from "./pages/_Partners/Educational_p";
import Employers_p from "./pages/_Partners/Employers_p";
import About from "./pages/Institute/About";
import Greeting from "./pages/Institute/Greeting";
import History from "./pages/Institute/History";
import Archive from "./pages/Institute/Archive";
import Structure from "./pages/Institute/Structure";
import Basic from "./pages/Institute/Basic";
import Info_edu_org from "./pages/Institute/Info_edu_org";
import Requisites from "./pages/Institute/Requisites";
import Inter_act from "./pages/Institute/Inter_act";
import Countering from "./pages/Institute/Countering";
import Conferences from "./pages/Science/Conferences";
import Publications from "./pages/Science/Publications";
import Legal_Clinic from "./pages/LegalClinic/Legal_Clinic";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import PersonPage from "./pages/PersonPage";
import PersonalitiesPage from "./pages/Institute/PersonalitiesPage";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <Main/>
    },
    {
        path: AUTH,
        Component: <Auth/>
    },
    {
        path: ALLPROGRAMS,
        Component: <AllPrograms/>
    },
    {
        path: ONEPROGRAM + "/:id",
        Component: <OneProgram/>
    },
    {
        path: ADMISSION,
        Component: <Admission/>
    },
    {
        path: CONTACTS,
        Component: <Contacts/>
    },
    {
        path: SCHEDULE,
        Component: <Schedule/>
    },
    {
        path: ELS,
        Component: <Els/>
    },
    {
        path: LABORATORIES,
        Component: <Laboratories/>
    },
    {
        path: EMPLOYMENT,
        Component: <Employment/>
    },
    {
        path: GRADUATES,
        Component: <Graduates/>
    },
    {
        path: DOCFORCOL,
        Component: <Docforcol/>
    },
    {
        path: ELECTION,
        Component: <Election/>
    },
    {
        path: REPLACEMENT,
        Component: <Replacement/>
    },
    {
        path: REFERENCES,
        Component: <References/>
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
        path: ABOUT,
        Component: <About/>
    },
    {
        path: GREETING,
        Component: <Greeting/>
    },
    {
        path: HISTORY,
        Component: <History/>
    },
    {
        path: ARCHIVE,
        Component: <Archive/>
    },
    {
        path: PERSONALITIES_PAGE,
        Component: <PersonalitiesPage/>
    },
    {
        path: PERSON  + "/:id",
        Component: <PersonPage/>
    },
    {
        path: STRUCTURE,
        Component: <Structure/>
    },
    {
        path: BASIC,
        Component: <Basic/>
    },
    {
        path: INFO_EDU_ORG,
        Component: <Info_edu_org/>
    },
    {
        path: REQUISITES,
        Component: <Requisites/>
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
        path: CONFERENCES,
        Component: <Conferences/>
    },
    {
        path: PUBLICATIONS,
        Component: <Publications/>
    },
    {
        path: LEGAL_CLINIC,
        Component: <Legal_Clinic/>
    },
]

export const authRoutes = [
    {
        path: ADMIN,
        Component: <Admin/>
    },
]






