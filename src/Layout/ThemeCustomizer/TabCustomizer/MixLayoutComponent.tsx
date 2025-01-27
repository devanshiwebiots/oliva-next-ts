import { Mix_Layout } from "@/Constant/constant";
import BgDark from "./BgDark";
import { useAppDispatch } from "@/Redux/Hooks";
import ConfigDB from "@/Config/ThemeConfig";
import { setDarkMode, setMixBackgroundLayout } from "@/Redux/Reducers/ThemeCustomizerSlice";
import BgSidebar from "./BgSidebar";

const MixLayoutComponent = () => {
  const dispatch = useAppDispatch();
  const mixLayout = ConfigDB.color.mix_background_layout;

  const addMixBackgroundLayout = (mix_background_layout: string) => {
    ConfigDB.color.mix_background_layout = mix_background_layout;
    dispatch(setMixBackgroundLayout(mix_background_layout));
  };

  const handleCustomizerMix_Background = (value: string) => {
    addMixBackgroundLayout(value);
    if (value === "dark-sidebar") {
      document.body.classList.add("dark-sidebar");
      document.body.classList.remove("dark-only");
      dispatch(setDarkMode(false))
    } else if (value === "dark-only") {
      document.body.classList.remove("dark-sidebar");
      document.body.classList.add("dark-only");
      dispatch(setDarkMode(true))
    }
  };
  return (
    <>
      <h6>{Mix_Layout}</h6>
      <ul className="layout-grid customizer-mix">
        <BgSidebar mixLayout={mixLayout} handleCustomizerMix_Background={handleCustomizerMix_Background} />
        <BgDark mixLayout={mixLayout} handleCustomizerMix_Background={handleCustomizerMix_Background} />
      </ul>
    </>
  );
};

export default MixLayoutComponent;
