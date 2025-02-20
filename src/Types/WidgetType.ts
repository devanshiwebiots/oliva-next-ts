import { ContactUsersType } from "./ContactType";

interface SubTitleObjectType {
    text?: string;
    code?: string;
};

interface UsersType {
    id: string;
    activeTab: string;
    image: string;
    name: string;
    email: string;
    gender: string;
  }
export interface CommonCardHeaderTypes {
    headClass?: string;
    title: string;
    icon?:JSX.Element
    subTitle?: SubTitleObjectType[];
    titleClass?: string;
    users?: [] | ContactUsersType[] | UsersType[];
};