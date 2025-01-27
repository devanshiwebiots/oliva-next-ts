import ConfigDB from "@/Config/ThemeConfig";
import { useAppDispatch } from "@/Redux/Hooks";
import { setLayout } from "@/Redux/Reducers/ThemeCustomizerSlice";
import CommonUL from "./CommonUL";

const Horizontal = () => {
  const dispatch = useAppDispatch();
  const handleLayout = (layoutName: string) => {
    dispatch(setLayout(layoutName));
    ConfigDB.settings.layout_class = layoutName;
  };
  return (
    <li className={`border-0 ${ConfigDB.settings.layout_class === "compact-wrapper" ? "active" : ""}`} onClick={() => handleLayout("compact-wrapper")}>
      <div className="header bg-light">
        <CommonUL />
      </div>
      <div className="body">
        <ul>
          <li className="bg-dark sidebar compact"></li>
          <li className="bg-light body"></li>
        </ul>
      </div>
    </li>
  );
};

export default Horizontal;
