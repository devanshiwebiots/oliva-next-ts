import { configureStore } from "@reduxjs/toolkit";
import HeaderBookmarkSlice from "./Reducers/HeaderBookmarkSlice";
import LayoutSlice from "./Reducers/LayoutSlice";
import ProjectSlice from "./Reducers/ProjectSlice";
import FileManagerSlice from "./Reducers/FileManagerSlice";
import LetterBoxSlice from "./Reducers/LetterBoxSlice";
import ChatSlice from "./Reducers/ChatSlice";
import BookmarkTabSlice from "./Reducers/BookmarkTabSlice";
import ContactSlice from "./Reducers/ContactSlice";
import TaskSlice from "./Reducers/TaskSlice";
import ToDoSlice from "./Reducers/ToDoSlice";
import FormWizardTwoSlice from "./Reducers/FormLayout/FormWizardTwoSlice";
import NumberingWizardSlice from "./Reducers/FormLayout/NumberingWizardSlice";
import TwoFactorSlice from "./Reducers/FormLayout/TwoFactorSlice";
import StudentWizardSlice from "./Reducers/FormLayout/StudentWizardSlice";
import VerticalWizardSlice from "./Reducers/FormLayout/VerticalWizardSlice";
import FilterReducer from "./Reducers/EcommerceReducer/FilterReducer";
import ProductReducer from "./Reducers/EcommerceReducer/ProductReducer";
import ThemeCustomizerSlice from "./Reducers/ThemeCustomizerSlice";

const Store = configureStore({
  reducer: {
    headerBookMark: HeaderBookmarkSlice,
    layout: LayoutSlice,
    project: ProjectSlice,
    fileManager:FileManagerSlice,
    email: LetterBoxSlice,
    chat:ChatSlice,
    bookmarkTab:BookmarkTabSlice,
    contact: ContactSlice,
    task: TaskSlice,
    todo:ToDoSlice,
    formWizardTwo: FormWizardTwoSlice,
    numberingWizard: NumberingWizardSlice,
    twoFactor: TwoFactorSlice,
    studentWizard: StudentWizardSlice,
    verticalWizard: VerticalWizardSlice,
    filter: FilterReducer,
    product: ProductReducer,
    themeCustomizer: ThemeCustomizerSlice,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
