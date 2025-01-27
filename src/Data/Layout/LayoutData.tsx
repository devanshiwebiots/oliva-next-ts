import { FileText, Mail, Settings, User } from "react-feather";

export const NotificationData = [
  {
    color: "primary",
    title: "Delivery processing",
    span: "10 min.",
  },
  {
    color: "secondary",
    title: "Order Complete",
    span: "1 hr",
  },
  {
    color: "success",
    title: "Tickets Generated",
    span: "3 hr",
  },
  {
    color: "info",
    title: "Delivery Complete",
    span: "6 hr",
  },
];

export const BookMarkData = [
  {
    icon: "form",
    url: "/forms/form_controls/validation_form",
    title: "Form",
  },
  {
    icon: "user",
    url: "/users/user_profile",
    title: "Profile",
  },
  {
    icon: "table",
    url: "/table/reactstrap_table/basic_table",
    title: "Tables",
  },
];

export const cartHeaderData = [
  {
    id: 1,
    src: 'headphone.png',
    name: 'Headphone'
  },
  {
    id: 2,
    src: 'wireless-headphone.png',
    name: 'AirPods'
  },
]

export const MessageData = [
  {
    src: "3.jpg",
    title: "Helen Walter",
    tag: "Do you want to go see movie?",
  },
  {
    src: "6.jpg",
    title: "Jason Borne",
    tag: "Thank you for rating us.",
  },
  {
    src: "10.jpg",
    title: "Sarah Loren",
    tag: "What`s the project report update?",
  },
];

export const UserListData = [
  {
    icon: <User />,
    path: "/users/user_profile",
    title: "Account",
  },
  {
    icon: <Mail />,
    path: "/email/letter_box",
    title: "Inbox",
  },
  {
    icon: <FileText />,
    path: "/app/task",
    title: "Taskboard",
  },
  {
    icon: <Settings />,
    path: "/users/edit_profile",
    title: "Settings",
  },
];

export let LanguageData = [
  {
    languageParameter: "en",
    languageName: "English",
    languageIconClassName: "us",
    subTitle: "US"
  },
  {
    languageParameter: "du",
    languageName: "Deutsch",
    languageIconClassName: "de",
  },
  {
    languageParameter: "es",
    languageName: "Español",
    languageIconClassName: "es",
  },
  {
    languageParameter: "fr",
    languageName: "Français",
    languageIconClassName: "fr",
  },
  {
    languageParameter: "pt",
    languageName: "Português",
    languageIconClassName: "pt",
    subTitle: "BR"
  },
  {
    languageParameter: "cn",
    languageName: "简体中文",
    languageIconClassName: "cn",
  },
  {
    languageParameter: "ae",
    languageName: "لعربي",
    languageIconClassName: "ae",
    subTitle: "ae"
  },
];
//theme-customizer

export const NavLinkList = [
  {
    path: "https://docs.pixelstrap.net/next/oliva/document/",
    image: "2.png",
    name: "Document",
  },
  {
    path: "https://www.pixelstrap.com/",
    image: "3.png",
    name: "Buy Now",
  },
  {
    path: "https://landing.pixelstrap.net/next/oliva/template/",
    image: "4.png",
    name: "Check Features",
  },
  {
    path: "https://support.pixelstrap.com/",
    image: "5.png",
    name: "Support",
  },
];

export const LightColorData = [
  { primary: "#008dab", secondary: "#e87f24" },
  { primary: "#33BFBF", secondary: "#FF6150" },
  { primary: "#006666", secondary: "#FE6A49" },
  { primary: "#7A70BA", secondary: "#48A3D7" },
  { primary: "#6271EB", secondary: "#FF8575" },
  { primary: "#3949ab", secondary: "#4fc3f7" },
];

export const DarkColorData = [
  { primary: "#4466f2", secondary: "#1ea6ec" },
  { primary: "#33BFBF", secondary: "#FF6150" },
  { primary: "#006666", secondary: "#FE6A49" },
  { primary: "#7A70BA", secondary: "#48A3D7" },
  { primary: "#6271EB", secondary: "#FF8575" },
  { primary: "#3949ab", secondary: "#4fc3f7" },
];